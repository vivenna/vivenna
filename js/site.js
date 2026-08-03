/* vivenna – gemeinsames Seiten-JavaScript (Navigation, Reveal, Formular) */
(function () {
    'use strict';

    /* ---------------------------------------------------------------
       Weiterleitungen: localhost vs. echte Domain
       Auf localhost (lokaler Dev-Server) funktionieren "saubere" URLs
       ohne Endung nicht → "Cannot GET /leistungen". Dort hängen wir bei
       internen Seitenlinks direkt ".html" an – schon in die URL selbst,
       noch vor jeder Weiterleitung. Auf der echten Domain (z. B. GitHub
       Pages) bleiben die sauberen URLs unverändert.
       --------------------------------------------------------------- */
    function isLocalHost() {
        var h = window.location.hostname;
        return window.location.protocol === 'file:' ||
            h === 'localhost' || h === '127.0.0.1' || h === '0.0.0.0' ||
            h === '::1' || h === '[::1]' || /\.local$/i.test(h) ||
            /^10\./.test(h) || /^192\.168\./.test(h) ||
            /^172\.(1[6-9]|2\d|3[01])\./.test(h);   // private LAN-IPs (Dev)
    }
    var LOCAL = isLocalHost();

    function isExtensionless(url) {
        var p = url.pathname;
        if (!p || p.charAt(p.length - 1) === '/') return false; // "/" oder "/projekte/" → Verzeichnis-Index
        var last = p.slice(p.lastIndexOf('/') + 1);
        return last.indexOf('.') === -1;                        // keine Datei-Endung (.html, .pdf, …)
    }

    /* Wandelt eine interne, endungslose URL auf localhost in ".html" um. */
    function localizeHref(rawHref) {
        if (!LOCAL || !rawHref) return rawHref;
        var url;
        try { url = new URL(rawHref, window.location.href); }
        catch (e) { return rawHref; }
        if (url.origin !== window.location.origin) return rawHref;         // externe Domains
        if (!isExtensionless(url)) return rawHref;                         // "/", "/projekte/", *.html …
        return url.pathname + '.html' + url.search + url.hash;
    }

    /* Programmatische Weiterleitung (z. B. nach dem Formular). */
    function smartNavigate(rawHref) {
        window.location.href = localizeHref(rawHref);
    }
    window.smartNavigate = smartNavigate;

    /* Auf localhost alle internen Seitenlinks direkt auf ".html" umschreiben,
       damit auch Hover, "In neuem Tab öffnen" und Strg-Klick funktionieren. */
    if (LOCAL) {
        var rewriteLinks = function () {
            document.querySelectorAll('a[href]').forEach(function (a) {
                if (a.hasAttribute('download')) return;
                var raw = a.getAttribute('href');
                if (!raw || raw.charAt(0) === '#') return;                 // reine Anker
                if (/^(mailto:|tel:|javascript:)/i.test(raw)) return;
                var next = localizeHref(raw);
                if (next !== raw) a.setAttribute('href', next);
            });
        };
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', rewriteLinks);
        } else {
            rewriteLinks();
        }
    }

    /* ---------------------------------------------------------------
       Mobile Navigation
       --------------------------------------------------------------- */
    var burger = document.querySelector('.nav-burger');
    var mobileNav = document.getElementById('mobileNav');
    if (burger && mobileNav) {
        burger.addEventListener('click', function () {
            var open = mobileNav.classList.toggle('open');
            burger.setAttribute('aria-expanded', String(open));
            document.body.classList.toggle('nav-open', open);
        });
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            });
        });
    }

    /* ---------------------------------------------------------------
       Aktiven Menüpunkt markieren
       --------------------------------------------------------------- */
    function normalizePath(path) {
        if (path.endsWith('.html')) path = path.slice(0, -5);
        if (path === '/index') return '/';
        if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
        return path;
    }
    var current = normalizePath(window.location.pathname);
    document.querySelectorAll('.main-menu a, .mobile-nav a').forEach(function (a) {
        var href = a.getAttribute('href');
        if (!href || href.indexOf('#') === 0) return;
        if (normalizePath(href) === current) a.setAttribute('aria-current', 'page');
    });

    /* ---------------------------------------------------------------
       Scroll-Reveal
       --------------------------------------------------------------- */
    var revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { obs.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------------------------------------------------------------
       Mobile Sticky-CTA (erscheint nach dem Hero)
       --------------------------------------------------------------- */
    var sticky = document.querySelector('.sticky-cta');
    if (sticky) {
        var threshold = window.innerHeight * 0.9;
        var stickyStop = document.querySelector('[data-sticky-stop]');
        function updateSticky() {
            var pastHero = window.scrollY > threshold;
            var beforeStop = true;
            if (stickyStop) {
                var r = stickyStop.getBoundingClientRect();
                beforeStop = r.top > window.innerHeight;
            }
            sticky.classList.toggle('visible', pastHero && beforeStop);
        }
        window.addEventListener('scroll', updateSticky, { passive: true });
        updateSticky();
    }

    /* ---------------------------------------------------------------
       Rubber-Band-Hintergrund: unten dunkel (wie Footer), oben weiß
       --------------------------------------------------------------- */
    var hasFooter = !!document.querySelector('.site-footer');
    function updateOverscrollBg() {
        if (!hasFooter) return;
        var doc = document.documentElement;
        var isScrollable = doc.scrollHeight > window.innerHeight + 1;
        var atBottom = isScrollable && window.scrollY + window.innerHeight >= doc.scrollHeight - 1;
        doc.classList.toggle('is-at-bottom', atBottom);
        document.body.classList.toggle('is-at-bottom', atBottom);
    }
    window.addEventListener('scroll', updateOverscrollBg, { passive: true });
    window.addEventListener('resize', updateOverscrollBg);
    updateOverscrollBg();

    /* ---------------------------------------------------------------
       Lead-Formular → Google Apps Script
       Feldnamen bleiben identisch zum bisherigen Backend:
       praxisname, ansprechperson, email, telefon, website, grund, ergebnis, agb
       --------------------------------------------------------------- */
    var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzb-0j0_gcGnwcfxoM4YmldnH1AgcBWmOxiV1wZ8PaTMUH7TiLbtcfPHrXzk5JoV49N/exec';

    function getLoadingOverlay() {
        var overlay = document.querySelector('.form-loading-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'form-loading-overlay';
            overlay.innerHTML = '<span class="form-loading-bar"><span class="form-loading-fill"></span></span>';
            document.body.appendChild(overlay);
        }
        return overlay;
    }

    document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
        var submitBtn = form.querySelector('button[type="submit"]');
        var statusBox = form.querySelector('.form-status');
        var submitting = false;

        function setError(field, message) {
            field.classList.add('error');
            var wrap = field.closest('.form-field');
            var msg = wrap && wrap.querySelector('.error-message');
            if (msg) { msg.textContent = message; msg.style.display = 'block'; }
        }
        function clearError(field) {
            field.classList.remove('error');
            var wrap = field.closest('.form-field');
            var msg = wrap && wrap.querySelector('.error-message');
            if (msg) { msg.textContent = ''; msg.style.display = 'none'; }
        }

        form.querySelectorAll('input, textarea').forEach(function (field) {
            field.addEventListener('input', function () { clearError(field); });
            field.addEventListener('change', function () { clearError(field); });
        });

        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            if (submitting) return;

            var valid = true;
            form.querySelectorAll('[required]').forEach(function (field) {
                clearError(field);
                if (field.type === 'checkbox') {
                    if (!field.checked) { setError(field, 'Bitte bestätigen Sie dieses Feld.'); valid = false; }
                } else if (field.type === 'email') {
                    var v = field.value.trim();
                    if (!v) { setError(field, 'Bitte geben Sie Ihre E-Mail-Adresse an.'); valid = false; }
                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { setError(field, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'); valid = false; }
                } else if (field.type === 'tel') {
                    var t = field.value.trim();
                    if (!t) { setError(field, 'Bitte geben Sie Ihre Telefonnummer an.'); valid = false; }
                    else if (!/^\+?[0-9\s\-\/()]{6,}$/.test(t)) { setError(field, 'Bitte geben Sie eine gültige Telefonnummer ein.'); valid = false; }
                } else if (!field.value.trim()) {
                    setError(field, 'Dieses Feld ist erforderlich.'); valid = false;
                }
            });
            if (!valid) {
                var firstError = form.querySelector('.error');
                if (firstError) firstError.focus();
                return;
            }

            submitting = true;
            var originalLabel = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Wird gesendet …'; }
            if (statusBox) { statusBox.className = 'form-status'; statusBox.textContent = ''; }
            getLoadingOverlay().classList.add('is-visible');

            var data = new FormData(form);
            /* Backend erwartet alle Felder befüllt */
            ['website', 'grund'].forEach(function (name) {
                if (!String(data.get(name) || '').trim()) data.set(name, '-');
            });
            if (!String(data.get('ergebnis') || '').trim()) {
                data.set('ergebnis', 'Kostenloses Website-Design + 30-Minuten-Gespräch angefragt');
            }
            data.set('ergebnis', data.get('ergebnis') + ' | Seite: ' + window.location.pathname);

            fetch(ENDPOINT, { method: 'POST', body: data })
                .then(function (response) {
                    return response.text().then(function (text) {
                        if (!response.ok || /^\s*Fehler\s*:/i.test(text)) {
                            throw new Error(text || 'Unbekannter Serverfehler.');
                        }
                        return text;
                    });
                })
                .then(function () {
                    smartNavigate('/bestätigung');
                })
                .catch(function () {
                    submitting = false;
                    getLoadingOverlay().classList.remove('is-visible');
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
                    if (statusBox) {
                        statusBox.className = 'form-status error';
                        statusBox.textContent = 'Beim Absenden ist leider ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an kontakt@vivenna-it.de.';
                    }
                });
        });
    });

    /* ---------------------------------------------------------------
       Jahr im Footer
       --------------------------------------------------------------- */
    document.querySelectorAll('[data-year]').forEach(function (el) {
        el.textContent = String(new Date().getFullYear());
    });
})();
