/* vivenna – Google Analytics 4 + Google Ads Conversion-Tracking (Consent Mode v2)

   Wird auf JEDER Seite synchron im <head> geladen, damit der Consent-Standard
   gesetzt ist, bevor irgendein Google-Tag laeuft, und damit die Sperre der
   Bestaetigungsseite greift, bevor dort etwas angezeigt oder gemessen wird.

   Ablauf:
   1. Consent-Standard "abgelehnt" fuer alles. Liegt aus cookie-consent.js
      bereits "accepted" vor, wird sofort auf "granted" aktualisiert.
   2. gtag.js wird geladen, GA4 und Google Ads werden konfiguriert. Ohne
      Einwilligung sendet Google nur cookielose Pings (so beschrieben in der
      Datenschutzerklaerung, Ziffer 17).
   3. Aendert der Besucher seine Wahl im Cookie-Banner, wird der Consent
      live aktualisiert.
   4. Conversion: site.js legt nach erfolgreichem Absenden des Formulars ein
      einmaliges Ticket in sessionStorage ab. Nur mit diesem Ticket wird auf
      /bestaetigung die Conversion (Ads) bzw. "generate_lead" (GA4) gesendet –
      genau einmal. Wer die Seite ohne Formular aufruft, wird weitergeleitet. */
(function () {
    'use strict';

    /* ---------------------------------------------------------------
       Konfiguration – nur hier eintragen.
       GA4:  Analytics → Verwaltung → Datenstreams → Web-Stream → "Mess-ID"
       Ads:  Ziele → Conversions → Conversion-Aktion → "Tag einrichten" →
             "Google-Tag manuell installieren": send_to = 'AW-…/LABEL'
       Leere Werte = der jeweilige Dienst wird nicht geladen.
       --------------------------------------------------------------- */
    var GA_MEASUREMENT_ID = 'G-J9BD3BZ4LJ';
    var ADS_ID = 'AW-18368346599';
    var ADS_CONVERSION_LABEL = 'AGC7CJGI55AdEOfz2rZE';   // Conversion "Kontaktformular"

    /* Muessen zu cookie-consent.js bzw. site.js passen. */
    var CONSENT_KEY = 'vivenna_cookie_consent';
    var CONVERSION_KEY = 'vivenna:conversion';
    var CONFIRMED_KEY = 'vivenna:confirmed';
    /* Ticket verfaellt nach 30 Minuten – laengeres Warten ist kein Absenden. */
    var CONVERSION_TTL_MS = 30 * 60 * 1000;

    /* Gleiche Erkennung wie in site.js: lokale Entwicklung wird nicht
       gemessen, damit Testklicks die echten Zahlen nicht verfaelschen. */
    function isLocalHost() {
        var h = window.location.hostname;
        return window.location.protocol === 'file:' ||
            h === 'localhost' || h === '127.0.0.1' || h === '0.0.0.0' ||
            h === '::1' || h === '[::1]' || /\.local$/i.test(h) ||
            /^10\./.test(h) || /^192\.168\./.test(h) ||
            /^172\.(1[6-9]|2\d|3[01])\./.test(h);
    }
    var LOCAL = isLocalHost();

    /* ---------------------------------------------------------------
       Bestaetigungsseite: Zugang nur nach abgeschicktem Formular
       --------------------------------------------------------------- */
    var isConfirmationPage = document.documentElement.hasAttribute('data-lead-confirmation');
    var conversion = null;

    if (isConfirmationPage) {
        var alreadyConfirmed = false;
        try {
            var raw = sessionStorage.getItem(CONVERSION_KEY);
            if (raw) {
                /* Einmalig: sofort verbrauchen, damit Neuladen oder Zurueck-Taste
                   keine zweite Conversion ausloest. */
                sessionStorage.removeItem(CONVERSION_KEY);
                var parsed = JSON.parse(raw);
                if (parsed && parsed.id && Date.now() - parsed.ts < CONVERSION_TTL_MS) {
                    conversion = parsed;
                }
            }
            if (conversion) sessionStorage.setItem(CONFIRMED_KEY, '1');
            /* Neuladen derselben Seite im selben Tab: Seite zeigen, aber keine
               neue Conversion – sonst flöge der Arzt beim Aktualisieren raus. */
            alreadyConfirmed = sessionStorage.getItem(CONFIRMED_KEY) === '1' ||
                window.location.hash === '#gesendet';   // Notweg aus site.js, ohne Conversion
        } catch (e) {
            /* sessionStorage gesperrt (selten, z. B. strenger Privatmodus): dann
               kann auch site.js kein Ticket ablegen. Seite zeigen statt einen
               echten Absender abzuweisen – nur ohne Conversion. */
            alreadyConfirmed = true;
        }

        if (!conversion && !alreadyConfirmed) {
            /* replace statt href: die Bestaetigung landet nicht im Verlauf. */
            window.location.replace(LOCAL ? '/kontakt.html' : '/kontakt');
            return;                 // kein Seitenaufruf, keine Messung
        }
    }

    /* ---------------------------------------------------------------
       Google-Tag + Consent Mode v2
       --------------------------------------------------------------- */
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    function storedConsent() {
        try {
            var raw = localStorage.getItem(CONSENT_KEY);
            if (!raw) return null;
            if (raw === 'accepted' || raw === 'rejected') return raw;  // Altformat
            var data = JSON.parse(raw);
            if (!data || !data.value) return null;
            if (data.expiresAt && Date.now() > data.expiresAt) return null;
            return data.value;
        } catch (e) { return null; }
    }

    function consentState(granted) {
        var v = granted ? 'granted' : 'denied';
        return {
            ad_storage: v,
            ad_user_data: v,
            ad_personalization: v,
            analytics_storage: v
        };
    }

    /* Beim Widerruf die bereits gesetzten Google-Cookies entfernen –
       der Consent Mode stoppt nur neue Zugriffe, er loescht nichts. */
    function deleteGoogleCookies() {
        var host = window.location.hostname;
        var domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
        document.cookie.split(';').forEach(function (c) {
            var name = c.split('=')[0].trim();
            if (!/^(_ga|_gid|_gat|_gcl_)/.test(name)) return;
            domains.forEach(function (d) {
                document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
            });
        });
    }

    var hasGa = !!GA_MEASUREMENT_ID;
    var hasAds = !!ADS_ID;
    var enabled = (hasGa || hasAds) && !LOCAL;

    gtag('consent', 'default', Object.assign({ wait_for_update: 500 }, consentState(false)));
    gtag('set', 'ads_data_redaction', true);    // ohne Ads-Einwilligung Klick-IDs schwärzen
    if (storedConsent() === 'accepted') gtag('consent', 'update', consentState(true));

    window.addEventListener('cookieconsent:change', function (ev) {
        var accepted = ev && ev.detail && ev.detail.value === 'accepted';
        gtag('consent', 'update', consentState(accepted));
        if (!accepted) deleteGoogleCookies();
    });

    if (enabled) {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID || ADS_ID);
        document.head.appendChild(s);
    }

    gtag('js', new Date());
    if (hasGa) gtag('config', GA_MEASUREMENT_ID);
    if (hasAds) gtag('config', ADS_ID);

    /* ---------------------------------------------------------------
       Conversion (nur mit gueltigem Ticket, siehe oben)
       --------------------------------------------------------------- */
    if (conversion) {
        /* GA4-Empfehlungsevent; in GA4 als Schluesselereignis markieren. */
        if (hasGa) {
            gtag('event', 'generate_lead', {
                send_to: GA_MEASUREMENT_ID,
                lead_source_page: conversion.page || '',
                transaction_id: conversion.id
            });
        }
        /* transaction_id: Google Ads verwirft Duplikate mit derselben ID. */
        if (hasAds && ADS_CONVERSION_LABEL) {
            gtag('event', 'conversion', {
                send_to: ADS_ID + '/' + ADS_CONVERSION_LABEL,
                transaction_id: conversion.id
            });
        }
    }

    if (LOCAL && window.console) {
        console.info('[vivenna-tracking] lokal – keine Daten an Google gesendet.',
            conversion ? 'Conversion waere gezaehlt worden: ' + conversion.id : '');
    }
})();
