/* vivenna – gemeinsames Seiten-JavaScript (Navigation, Reveal, Formular) */
(function () {
    'use strict';

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
       Lead-Formular → Google Apps Script
       Feldnamen bleiben identisch zum bisherigen Backend:
       praxisname, ansprechperson, email, telefon, website, grund, ergebnis, agb
       --------------------------------------------------------------- */
    var ENDPOINT = 'https://script.google.com/macros/s/AKfycbyKrOJfjzVH9FIqGKp-9fgx4QNcv61Hq0VESaEEKX8YXm2DXh7VPH67fHqC08yiKL2a/exec';

    document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
        var submitBtn = form.querySelector('button[type="submit"]');
        var statusBox = form.querySelector('.form-status');
        var submitting = false;

        function setError(field, message) {
            field.classList.add('error');
            var wrap = field.closest('.form-field, .form-consent');
            var msg = wrap && wrap.querySelector('.error-message');
            if (msg) { msg.textContent = message; msg.style.display = 'block'; }
        }
        function clearError(field) {
            field.classList.remove('error');
            var wrap = field.closest('.form-field, .form-consent');
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
                    window.location.href = '/bestätigung';
                })
                .catch(function () {
                    submitting = false;
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
