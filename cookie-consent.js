/*
  Cookie Consent (vivenna)
  - Shows a small circular cookie icon bottom-left
  - Clicking opens a stylish banner with Accept/Reject
  - Choice stored in localStorage ('vivenna_cookie_consent')
  - Icon always stays to reopen/manage
  - Exposes window.CookieConsent API and emits 'cookieconsent:change' events
*/
(function () {
  const BRAND = {
    primary: '#237fc1',
    primaryDark: '#1f6ea9',
    text: '#111',
    border: '#e6e6e6',
    bg: '#ffffff',
  };

  const LS_KEY = 'vivenna_cookie_consent';
  // Consent validity: 30 days
  const CONSENT_TTL_DAYS = 30;
  const CONSENT_TTL_MS = CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;
  const GA_MEASUREMENT_ID = 'G-J9BD3BZ4LJ'; // Set your GA4 Measurement ID here

  // Optional global disable flag respected by GA (works for GA4 as well)
  // Will be toggled based on consent
  try { window[`ga-disable-${GA_MEASUREMENT_ID}`] = true; } catch (_) {}

  // Early exit if already injected
  if (document.documentElement.dataset.ccReady === '1') return;
  document.documentElement.dataset.ccReady = '1';

  // Helpers
  function getConsent() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return null;
      // Try new format { value, expiresAt }
      try {
        const data = JSON.parse(raw);
        if (!data || !data.value) return null;
        if (data.expiresAt && Date.now() > data.expiresAt) {
          localStorage.removeItem(LS_KEY);
          return null;
        }
        return data.value;
      } catch (_) {
        // Legacy plain string -> migrate to new format with TTL
        const legacy = (raw === 'accepted' || raw === 'rejected') ? raw : null;
        if (!legacy) return null;
        const migrated = { value: legacy, expiresAt: Date.now() + CONSENT_TTL_MS };
        try { localStorage.setItem(LS_KEY, JSON.stringify(migrated)); } catch (_) {}
        return legacy;
      }
    } catch (_) { return null; }
  }
  function setConsent(value) {
    try {
      const payload = { value, expiresAt: Date.now() + CONSENT_TTL_MS };
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
    } catch (_) {}
    const evt = new CustomEvent('cookieconsent:change', { detail: { value } });
    window.dispatchEvent(evt);
  }

  function injectStyles() {
    const css = `
      .cc-fab { position: fixed; left: 18px; bottom: 18px; width: 56px; height: 56px; border-radius: 50%;
        background: ${BRAND.primary}; color: #fff; display: grid; place-items: center; padding: 0; line-height: 1;
        box-shadow: 0 10px 24px rgba(0,0,0,0.18); cursor: pointer; z-index: 2000; border: none; outline: none;
        transition: transform .15s ease, box-shadow .15s ease, background-color .15s ease, opacity .2s ease; }
      .cc-fab:hover { transform: scale(0.96); background: ${BRAND.primaryDark}; box-shadow: 0 8px 18px rgba(0,0,0,0.15); }
      .cc-fab:focus-visible { box-shadow: 0 0 0 3px rgba(35,127,193,0.35), 0 10px 24px rgba(0,0,0,0.18); }
  .cc-fab svg { width: 26px; height: 26px; display: block; pointer-events: none; }
  .cc-fab .cc-fab-icon { width: 26px; height: 26px; display: grid; place-items: center; transition: opacity .14s ease, transform .14s ease; }
  .cc-fab .cc-icon-cookie { transform: translate(-1.5px, -1.5px); }
  .cc-fab .cc-icon-reject { transform: translateY(-2px); }

      /* Feedback states for quick visual confirmation */
  .cc-fab.feedback { pointer-events: none; }
      .cc-fab.feedback-accept { background: #22c55e; }
      .cc-fab.feedback-accept:hover { background: #16a34a; transform: none; box-shadow: 0 8px 18px rgba(0,0,0,0.15); }
      .cc-fab.feedback-reject { background: #ef4444; }
      .cc-fab.feedback-reject:hover { background: #dc2626; transform: none; box-shadow: 0 8px 18px rgba(0,0,0,0.15); }
  .cc-fab.cc-hide { opacity: 0; transform: scale(0.92); box-shadow: none; transition: opacity .18s ease, transform .18s ease; }

      .cc-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.25); opacity: 0; pointer-events: none; z-index: 1999; transition: opacity .2s ease; }
      .cc-overlay.cc-open { opacity: 1; pointer-events: auto; }

      .cc-panel { position: fixed; left: 18px; bottom: 88px; width: 420px; max-width: calc(100vw - 32px);
        background: ${BRAND.bg}; color: ${BRAND.text}; border-radius: 12px; box-shadow: 0 16px 40px rgba(0,0,0,0.2);
        z-index: 2001; padding: 18px 12px 10px; transform-origin: 0% 100%; transform: translateY(8px) scale(0.98);
        opacity: 0; pointer-events: none; transition: opacity .2s ease, transform .2s ease; }
      .cc-panel.cc-open { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
      .cc-top { display: flex; align-items: flex-start; gap: 8px; }
      .cc-top__text { flex: 1 1 auto; font-size: 0.80rem; line-height: 1.35; color: #222; margin: 0; }
      .cc-top__text a { color: ${BRAND.primary}; text-underline-offset: 3px; }
  .cc-panel__close { margin-left: 8px; margin-top: -13px; background: transparent; border: none; color: #666; cursor: pointer; border-radius: 8px; width: 24px; height: 24px; display: grid; place-items: center; font-size: 12px; }
  .cc-panel__close .cc-close-icon { display: inline-block;}
      .cc-panel__close:hover { background: #f3f4f6; }
  .cc-actions { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 12px 0 0; }
      .cc-btn { appearance: none; -webkit-appearance: none; box-sizing: border-box; display: inline-flex; align-items: center; justify-content: center;
        border-radius: 14px; padding: 5px 10px; font-weight: 500; cursor: pointer; border: 2px solid transparent;
        width: auto; height: auto; min-height: 30px; min-width: 100px; font-size: 12.75px; line-height: 1.1; white-space: nowrap; }
      .cc-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(35,127,193,0.25); }
      .cc-accept { background: ${BRAND.primary}; color: #fff; border-color: ${BRAND.primary}; }
      .cc-accept:hover { background: ${BRAND.primaryDark}; border-color: ${BRAND.primaryDark}; }
      .cc-reject { background: transparent; color: #333; border-color: ${BRAND.border}; }
      .cc-reject:hover { border-color: #cfcfcf; background: #fafafa; }

      @media (max-width: 768px) {
        .cc-fab { left: calc(18px + env(safe-area-inset-left)); bottom: calc(18px + env(safe-area-inset-bottom)); width: 52px; height: 52px; }
          .cc-panel { left: calc(20px + env(safe-area-inset-left)); bottom: calc(92px + env(safe-area-inset-bottom)); width: min(calc(100vw - (40px + env(safe-area-inset-left) + env(safe-area-inset-right))), 340px); padding: 16px 10px 10px; }
        .cc-actions { flex-direction: row; align-items: center; justify-content: center; gap: 8px; }
        .cc-actions .cc-btn { flex: 1 1 0; min-width: 0; width: auto; min-height: 34px; font-size: 13.5px; border-radius: 16px; }
        /* Ensure cookie UI is always on top on mobile */
        .cc-overlay { z-index: 30000 !important; }
        .cc-panel { z-index: 30001 !important; }
        .cc-fab { z-index: 30002 !important; }
      }
    `;
    const style = document.createElement('style');
    style.id = 'cc-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function createElements() {
    // Floating button (cookie icon)
    const fab = document.createElement('button');
    fab.className = 'cc-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Cookie-Einstellungen öffnen');
    fab.setAttribute('aria-expanded', 'false');
    fab.innerHTML = `
      <span class="cc-fab-icon">
        <svg class="cc-icon-cookie" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
          <path d="M19.5 10.5a3 3 0 0 1-3-3 3 3 0 0 1-3-3 9 9 0 1 0 9 9 3 3 0 0 1-3-3ZM8.25 12.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.875 4.875a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM13.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
        </svg>
      </span>
    `;

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'cc-overlay';

    // Panel (banner)
    const panel = document.createElement('div');
  panel.className = 'cc-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Cookie-Einstellungen');

    panel.innerHTML = `
      <div class="cc-top">
        <div class="cc-top__text">Wir verwenden notwendige Cookies und – nur mit Ihrer Zustimmung – optionale Cookies. Details finden Sie in unserer <a href="/datenschutzerklärung" target="_self" rel="noopener">Datenschutzerklärung</a>.</div>
  <button class="cc-panel__close" type="button" aria-label="Schließen"><span class="cc-close-icon">✕</span></button>
      </div>
      <div class="cc-actions">
        <button class="cc-btn cc-reject" type="button">Nur notwendige</button>
        <button class="cc-btn cc-accept" type="button">Alle akzeptieren</button>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(overlay);
    document.body.appendChild(panel);

    return { fab, overlay, panel };
  }

  function focusTrap(container, onClose) {
    function handleKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); return; }
      if (e.key !== 'Tab') return;
      const focusables = container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    return handleKey;
  }

  function init() {
    injectStyles();
    const { fab, overlay, panel } = createElements();
    const btnClose = panel.querySelector('.cc-panel__close');
    const btnAccept = panel.querySelector('.cc-accept');
    const btnReject = panel.querySelector('.cc-reject');

    let lastFocus = null;
    const trapHandler = focusTrap(panel, closePanel);

    function openPanel() {
      lastFocus = document.activeElement;
      panel.classList.add('cc-open');
      overlay.classList.add('cc-open');
      fab.setAttribute('aria-expanded', 'true');
      // Focus primary action for accessibility
      setTimeout(() => btnAccept && btnAccept.focus(), 0);
      document.addEventListener('keydown', trapHandler);
    }
    function closePanel() {
      panel.classList.remove('cc-open');
      overlay.classList.remove('cc-open');
      fab.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', trapHandler);
      if (lastFocus && typeof lastFocus.focus === 'function') setTimeout(() => lastFocus.focus(), 0);
    }

    // --- Analytics helpers ---
    function enableAnalytics() {
      if (!GA_MEASUREMENT_ID) return;
      if (window._vivennaGAEnabled) return;
      // Re-enable if previously disabled
      try { window[`ga-disable-${GA_MEASUREMENT_ID}`] = false; } catch (_) {}
      // Define dataLayer/gtag queue before loading script
      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      window.gtag = window.gtag || gtag;
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);

      // Inject GA script once
      if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
        const s = document.createElement('script');
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(s);
      }
      window._vivennaGAEnabled = true;
    }

    function disableAnalytics() {
      if (!GA_MEASUREMENT_ID) return;
      try { window[`ga-disable-${GA_MEASUREMENT_ID}`] = true; } catch (_) {}
      if (typeof window.gtag === 'function') {
        try { window.gtag('consent', 'update', { analytics_storage: 'denied' }); } catch (_) {}
      }
      window._vivennaGAEnabled = false;
    }

    // Public API
    window.CookieConsent = {
      get: getConsent,
      set: (v) => setConsent(v),
      isAccepted: () => getConsent() === 'accepted',
      isRejected: () => getConsent() === 'rejected',
      open: openPanel,
      close: closePanel,
      enableAnalytics,
      disableAnalytics,
    };

    // Helper to show quick feedback on the FAB (check/cross) then remove it
  function showFabFeedback(type) {
      if (!fab) return;
      // icons (fixed 26x26 for stable layout)
      const iconAccept = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>';
      const iconReject = '<svg class="cc-icon-reject" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7l1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z"/></svg>';
      fab.classList.add('feedback');
      const iconWrap = fab.querySelector('.cc-fab-icon');
      if (!iconWrap) return;
      // fade out current icon
      iconWrap.style.opacity = '0';
      iconWrap.style.transform = 'scale(0.92)';
      setTimeout(() => {
        if (type === 'accept') {
          fab.classList.add('feedback-accept');
          iconWrap.innerHTML = iconAccept;
        } else {
          fab.classList.add('feedback-reject');
          iconWrap.innerHTML = iconReject;
        }
        // fade in new icon
        requestAnimationFrame(() => {
          iconWrap.style.transform = 'scale(1)';
          iconWrap.style.opacity = '1';
        });
      }, 120);
      // close panel if still open
      if (panel.classList.contains('cc-open')) closePanel();
      // after short delay fade out and remove (quick and clean)
      setTimeout(() => {
        fab.classList.add('cc-hide');
        setTimeout(() => { fab.remove(); }, 200);
      }, 480);
    }

    // Wire up interactions
    fab.addEventListener('click', () => {
      if (panel.classList.contains('cc-open')) closePanel(); else openPanel();
    });
    overlay.addEventListener('click', closePanel);
    btnClose && btnClose.addEventListener('click', closePanel);

    btnAccept && btnAccept.addEventListener('click', () => {
      setConsent('accepted');
      enableAnalytics();
      showFabFeedback('accept');
    });
    btnReject && btnReject.addEventListener('click', () => {
      setConsent('rejected');
      disableAnalytics();
      showFabFeedback('reject');
    });

    // First visit: do NOT auto-open (per request) – just show the icon.
    // If you want to auto-open when no decision exists, uncomment:
    // if (!getConsent()) openPanel();

    // If user has already accepted on a previous visit, enable GA immediately
    const existing = getConsent();
    if (existing === 'accepted') {
      enableAnalytics();
      // Hide FAB on subsequent visits if a decision exists
      fab.classList.add('cc-hide');
      setTimeout(() => { try { fab.remove(); } catch(_) {} }, 220);
    } else if (existing === 'rejected') {
      disableAnalytics();
      fab.classList.add('cc-hide');
      setTimeout(() => { try { fab.remove(); } catch(_) {} }, 220);
    } else {
      // Ensure disabled if not accepted
      disableAnalytics();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
