/* Projekte-Seite: Animationen der Demo-Nachbildungen.
   Ausgelagert aus projekte/index.html (SEO: kein Inline-JS im Dokument). */

(function(){
    const container = document.querySelector('#bazara-demo-section .dynamic-h1-line');
    const sectionEl = document.querySelector('#bazara-demo-section');
    if (!container || !sectionEl) return;
    const phrases = ['Gesund bleiben.', 'Leben genießen.', 'Alltag meistern.', 'Kraft tanken.', 'Freude empfinden.', 'Ruhe finden.'];
    let idx = 0; const animationTime = 1000; const displayTime = 3000; const firstSwitchDelay = 1500; let started = false;
    function showNext(){ const current = container.querySelector('.dynamic-phrase.visible'); if (current){ current.classList.remove('visible'); current.classList.add('exiting'); setTimeout(()=> current.remove(), animationTime); } const span = document.createElement('span'); span.className = 'dynamic-phrase entering'; span.textContent = phrases[idx]; container.appendChild(span); setTimeout(()=>{ span.classList.remove('entering'); span.classList.add('visible'); }, 20); idx = (idx + 1) % phrases.length; }
    function cycle(){ showNext(); setTimeout(cycle, displayTime + animationTime); }
    function startCycleOnce(){ if (started) return; started = true; showNext(); setTimeout(cycle, firstSwitchDelay + animationTime); }
    const observer = new IntersectionObserver((entries)=>{ for (const entry of entries){ if (entry.isIntersecting){ startCycleOnce(); observer.disconnect(); break; } } }, { threshold: 0.5 });
    observer.observe(sectionEl);
})();

(function(){
    const sectionEl = document.querySelector('#bazara-demo-section');
    const heroBackground = document.querySelector('#bazara-demo-section .hero-background');
    if (!sectionEl || !heroBackground) return;
    let isMobile = window.innerWidth < 769;
    function recalcSectionStart(){ isMobile = window.innerWidth < 769; }
    function handleHeroZoom(){
        // Fortschritt aus der aktuellen Lage der Sektion ableiten statt aus einem
        // beim Laden gemerkten Dokument-Offset: der konnte veralten, und der
        // Sonderfall davor sprang hart auf scale(1) zurueck. Ohne Zweig und ohne
        // Zwischenspeicher gibt es keinen zweiten Zustand, auf den das Bild
        // springen koennte.
        const progress = Math.max(0, -sectionEl.getBoundingClientRect().top);
        const zoomDivisor = isMobile ? 3500 : 7000;
        const scaleValue = 1 + progress / zoomDivisor;
        // translateZ(0) wie auf der Live-Website: haelt die Ebene in WebKit stabil
        heroBackground.style.transform = isMobile ? `translate3d(0,-170px,0) scale(${scaleValue})` : `translateZ(0) scale(${scaleValue})`;
    }
    let ticking = false; function schedule(fn){ if (!ticking){ ticking = true; window.requestAnimationFrame(()=>{ fn(); ticking = false; }); } }
    function onScroll(){ schedule(handleHeroZoom); } function onResize(){ recalcSectionStart(); handleHeroZoom(); }
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onResize); recalcSectionStart(); handleHeroZoom();
})();

(function() {
    const section = document.getElementById('nahla-demo-section'); if (!section) return;
    const header = section.querySelector('.header'); const navContainer = section.querySelector('.nav-container'); const hamburger = section.querySelector('.hamburger'); const mobileMenu = section.querySelector('#mobileMenu');
    let placeholder = section.querySelector('.nav-placeholder'); if (!placeholder) { placeholder = document.createElement('div'); placeholder.className = 'nav-placeholder'; if (navContainer && navContainer.parentNode) { navContainer.parentNode.insertBefore(placeholder, navContainer); } }
    function setBodyScrollLock(locked) { const root = document.documentElement; if (locked) { root.style.overflow = 'hidden'; } else { root.style.overflow = ''; } }
    // Disable mobile menu interaction: keep icon visible but do nothing on click
    function openMenu() { /* disabled */ }
    function closeMenu() { /* disabled */ }
    function toggleMenu() { /* disabled */ }
    if (hamburger) { hamburger.addEventListener('click', (e) => { e.preventDefault(); /* no-op */ }); }
    if (mobileMenu) { mobileMenu.addEventListener('click', (e) => { const target = e.target; if (target === mobileMenu) { closeMenu(); } }); mobileMenu.querySelectorAll('span').forEach(el => { el.addEventListener('click', () => closeMenu()); }); }
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); updateSticky(); });
    function updateSticky() { if (!navContainer) return; navContainer.classList.remove('nav-fixed'); if (placeholder) placeholder.style.height = '0px'; }
    let ticking = false; window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(() => { updateSticky(); ticking = false; }); ticking = true; } }, { passive: true });
    updateSticky();
})();

/* ==================================================================
   Browser-Launch: Beim Hereinscrollen wird die jeweilige Demo-Sektion
   verkleinert dargestellt und von einer Browserleiste eingerahmt. Die
   URL tippt sich, der Ladebalken laeuft durch, danach oeffnet sich das
   Fenster randlos. Laeuft auf Desktop und Handy gleichermassen.
   ================================================================== */
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var SVG = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
        + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    var LOCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">'
        + '<rect x="4" y="10" width="16" height="11" rx="2.5" fill="currentColor"/>'
        + '<path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
    var NAV = '<span class="vchrome__nav">'
        + '<svg ' + SVG + '><path d="M15 5l-7 7 7 7"/></svg>'
        + '<svg ' + SVG + '><path d="M9 5l7 7-7 7"/></svg>'
        + '<svg ' + SVG + '><path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 3.5V9h-5.5"/></svg>'
        + '</span>';

    var items = [
        {
            el: document.getElementById('bazara-demo-section'),
            url: 'hausarztpraxis-bazara.de',
            tab: 'Hausarztpraxis Bazara', fav: '#6e370e'
        },
        {
            el: document.getElementById('nahla-demo-section'),
            url: 'augenpraxis-mitte.de',
            tab: 'Augenarztpraxis Nahla Al-Asbahi', fav: '#4b79ce', accent: '#4b79ce'
        }
    ].filter(function (i) { return !!i.el; });
    if (!items.length) return;

    items.forEach(function (it) {
        var c = document.createElement('div');
        c.className = 'vchrome';
        c.setAttribute('aria-hidden', 'true');
        if (it.accent) c.style.setProperty('--vchrome-accent', it.accent);
        c.innerHTML = '<div class="vchrome__tabs">'
            + '<div class="vchrome__tab"><span class="vchrome__fav" style="background:' + it.fav + '"></span>'
            + '<span class="vchrome__tabtitle">' + it.tab + '</span><span class="vchrome__x">&times;</span></div>'
            + '<span class="vchrome__plus">+</span></div>'
            + '<div class="vchrome__bar">' + NAV
            + '<span class="vchrome__omni">' + LOCK
            + '<span class="vchrome__url"></span><span class="vchrome__caret"></span></span>'
            + '<span class="vchrome__count">1</span>'
            + '<span class="vchrome__menu"><i></i><i></i><i></i></span></div>'
            + '<span class="vchrome__load"></span>';
        document.body.appendChild(c);
        it.chrome = c;
        it.urlEl = c.querySelector('.vchrome__url');
        it.caret = c.querySelector('.vchrome__caret');
        it.load = c.querySelector('.vchrome__load');
    });

    var MIN_SCALE, HEADER, VH;
    function readViewport() {
        var hdr = document.querySelector('.site-header');
        MIN_SCALE = window.innerWidth < 700 ? 0.86 : 0.78;
        HEADER = hdr ? hdr.offsetHeight : 68;
        VH = window.innerHeight;
        /* Rahmenhoehe aus dem Layout lesen – sie haengt am Breakpoint */
        items.forEach(function (it) { it.bar = it.chrome.offsetHeight || 78; });
    }

    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
    /* Schnell auf, dann auslaufen: die Raender sind zuegig nah am Bildrand,
       das letzte Stueck bis randlos zieht sich bewusst. */
    function easeOut(t) { return 1 - Math.pow(1 - t, 4); }
    var SMOOTH = 0.3;   /* zieht die Skalierung dem Scrollwert nach, damit
                           schnelles Scrollen keine Spruenge zeigt */

    function render() {
        /* Fuer die Choreografie die stabile Hoehe nehmen: auf Handys aendert
           sich innerHeight staendig, weil die Browserleiste beim Scrollen ein-
           und ausfaehrt – der Ablauf wuerde sonst hin und her springen.
           Fuer die Luecken-Sicherung zaehlt dagegen die tatsaechliche Hoehe. */
        var vh = VH || window.innerHeight;
        var vhReal = window.innerHeight;

        /* Erst alle Geometrien lesen, dann alle Stile schreiben – sonst
           erzwingt jeder Schreibzugriff ein erneutes Layout.
           Die Oberkante bleibt unter scale() mit transform-origin "50% 0"
           unveraendert, der gemessene Wert ist also der Layoutwert. */
        var rels = items.map(function (it) { return it.el.getBoundingClientRect().top; });
        var heights = items.map(function (it) { return it.el.offsetHeight; });
        /* Der Rahmen liegt absolut im Dokument. Seine Y-Position rechnen wir
           deshalb in Dokumentkoordinaten – die bleibt beim Scrollen konstant,
           sodass der Browser ihn zusammen mit der Sektion verschiebt statt
           hinterherzuziehen. */
        var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

        var vw = window.innerWidth;
        var moving = false;

        items.forEach(function (it, i) {
            var rel = rels[i];
            var p = clamp((vh * 1.15 - rel) / (vh * 1.10), 0, 1);

            /* Hysterese: ist das Fenster einmal offen, bleibt es unangetastet,
               bis wieder deutlich zurueckgescrollt wird. Ohne den Abstand wuerden
               Transform und Schatten direkt am Umschaltpunkt im Wechsel gesetzt
               und wieder entfernt – Safari baut die Ebene dann jedes Mal neu auf. */
            if (it.done) {
                if (p > 0.97) return;
                it.done = false;
            }

            /* Das Fenster bleibt klein, bis Adresse und Ladebalken durch
               sind – erst danach oeffnet es sich zum Vollbild. */
            var target = MIN_SCALE + (1 - MIN_SCALE) * easeOut(clamp((p - 0.68) / 0.32, 0, 1));
            if (it.s == null) it.s = target;
            it.s += (target - it.s) * SMOOTH;
            /* Sicherung: das Fenster darf nie kuerzer als der Viewport werden,
               sonst blitzt unter ihm der Hintergrund durch.
               Nur sinnvoll, solange die Sektion den Viewport ueberhaupt fuellen
               KANN. Ist sie von Haus aus kuerzer (die Nahla-Demo ist rund 660px
               hoch), erreicht sie die Viewporthoehe auch bei voller Groesse nie –
               die Sicherung wuerde dann nur viel zu frueh auf 1 hochziehen. Auf
               einem 27-Zoll-Monitor sprang das Fenster dadurch bei halbem
               Ladebalken schlagartig auf, statt sich zu oeffnen. Unter der
               Sektion liegt ohnehin der Schreibtisch (.legacy-demos), es blitzt
               dort also nichts durch. */
            if (heights[i] >= vhReal - 2) it.s = Math.max(it.s, Math.min(1, (vhReal - rel) / heights[i]));
            var s = it.s;
            var settled = Math.abs(target - s) < 0.0015;
            if (!settled) moving = true;

            if (p >= 1 && settled) {
                it.done = true;
                it.s = 1;
                it.el.style.transform = '';
                it.el.style.boxShadow = '';
                it.el.style.willChange = '';
                it.chrome.style.opacity = '0';
                it.chrome.style.boxShadow = '';
                return;
            }
            it.done = false;

            var inv = 1 - (s - MIN_SCALE) / (1 - MIN_SCALE);

            it.el.style.transform = 'scale(' + s.toFixed(4) + ')';
            it.el.style.willChange = 'transform';
            it.el.style.boxShadow = '0 ' + (34 * inv).toFixed(0) + 'px ' + (80 * inv).toFixed(0)
                + 'px -30px rgba(11,15,19,' + (0.4 * inv).toFixed(3) + ')';

            /* Rahmen sitzt buendig auf der Oberkante des Fensters und ist genauso
               breit. Er blendet aus, bevor er den Seitenkopf erreicht – nach
               tatsaechlichem Abstand, nicht nach Scrollfortschritt, damit es bei
               jeder Fensterhoehe passt. */
            var w = Math.round(vw * s);
            var barTop = rel - it.bar;
            var fadeIn = clamp((p - 0.06) / 0.10, 0, 1);
            var fadeOut = clamp((barTop - (HEADER + 8)) / 110, 0, 1);
            it.chrome.style.width = w + 'px';
            it.chrome.style.opacity = (fadeIn * fadeOut).toFixed(3);
            it.chrome.style.transform = 'translate3d(' + Math.round((vw - w) / 2) + 'px,'
                + (barTop + scrollY).toFixed(1) + 'px,0)';
            it.chrome.style.boxShadow = '0 -' + (8 * inv).toFixed(0) + 'px ' + (46 * inv).toFixed(0)
                + 'px -20px rgba(11,15,19,' + (0.38 * inv).toFixed(3) + ')';

            /* Getippt und geladen wird, solange der Rahmen gut im Bild steht */
            var typed = Math.round(it.url.length * clamp((p - 0.26) / 0.24, 0, 1));
            if (typed !== it.typed) {
                it.typed = typed;
                it.urlEl.textContent = it.url.slice(0, typed);
                /* Cursor verschwindet, sobald die Adresse steht – wie nach dem Enter */
                it.caret.style.display = typed >= it.url.length ? 'none' : '';
            }
            it.load.style.width = (clamp((p - 0.54) / 0.14, 0, 1) * 100).toFixed(1) + '%';
        });

        return moving;
    }

    /* Ein einziger Frame-Takt: laeuft weiter, solange die Skalierung noch
       nachzieht, und schlaeft ein, sobald alles steht. */
    var raf = null, pending = false;
    function schedule() { if (raf === null) raf = requestAnimationFrame(frame); }
    function frame() {
        raf = null;
        var moving = render();
        if (moving || pending) { pending = false; schedule(); }
    }
    function onScroll() { pending = true; schedule(); }
    var lastW = 0;
    function onResize() {
        var w = window.innerWidth, h = window.innerHeight;
        /* Nur bei echten Layoutwechseln neu vermessen. Das reine Ein- und
           Ausfahren der Handy-Browserleiste aendert nur die Hoehe und ein
           wenig – das ignorieren wir bewusst. */
        if (w !== lastW || !VH || Math.abs(h - VH) > VH * 0.25) {
            lastW = w;
            readViewport();
        }
        onScroll();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    window.addEventListener('load', onResize);
    onResize();
})();
