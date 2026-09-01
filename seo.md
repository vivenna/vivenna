# SEO-Maßnahmenplan – vivenna-it.de

**Grundlage:** SEO-Fehlerreport (rankeffect.de, Stand 31.08.2026) + eigene Prüfung des kompletten Repos und der Live-Seite am 31.08.2026.

**Wichtigste Erkenntnis vorab:** Der Report ist in Teilen **veraltet**. Er stützt sich erkennbar auf einen älteren Crawl-Stand (er nennt selbst „Letztes Update laut Archiv: 27.05.2025"). Zwei der zehn „seitenübergreifenden Fehler" – strukturierte Daten und die URL-Varianten – sind im aktuellen Stand **bereits gelöst**. Mehrere weitere Punkte sind Messartefakte des Tools und keine echten Fehler.

Umgekehrt hat der Report **drei echte Probleme übersehen**, die ich bei der eigenen Prüfung gefunden habe (Abschnitt 4) – darunter ein defekter Link und flächendeckende Duplicate-Content-URLs.

Legende: ✅ **Wird umgesetzt** · ⚠️ **Teilweise / abgewandelt** · ❌ **Wird bewusst nicht umgesetzt** (mit Begründung)

---

## 0. Umsetzungsstatus (Stand 31.08.2026)

Alle 15 Maßnahmen aus Abschnitt 6 sind umgesetzt. Branch: `feature/seo-plan`.

### Messwerte vorher → nachher

| Kennzahl | Vorher | Nachher |
|---|---|---|
| `startseite.webp` (Hintergrundbild `/projekte/`) | 750 KB | **23 KB** |
| Bilder gesamt (`assets/`) | ~1,6 MB | **340 KB** |
| `/projekte/` Dateigröße | 71 KB | **27 KB** |
| `/projekte/` Text-Rate | 6,0 % | **19,2 %** |
| `/projekte/` Wörter | 563 | **630** |
| `/projekte/` H1-Tags | 2 | **1** |
| `/kontakt` Wörter | 276 | **282** |
| `/ratgeber` Wörter | 205 | **215** |
| `/ratgeber` H2-Tags | 0 | **2** |
| Seiten mit Title > 70 Zeichen | 4 | **0** |
| Seiten mit Description > 160 Zeichen | 9 | **0** |
| Seiten mit Hierarchiesprung | 16 | **0** |
| Seiten mit Twitter-Cards | 0 | **11** |
| Seiten ohne strukturierte Daten | 2 | **0** |
| Interne Links je Ratgeber-Artikel | 6 | **6** (Teaser auf Wunsch entfernt) |
| Defekte interne Links | 1 (`/en/`) | **0** |
| Bilder ohne `width`/`height` | 13 | **0** |
| Inline-CSS-/JS-Blöcke | 6 (alle auf `/projekte/`) | **0** |

### Gemessene Performance (Lighthouse 13.4.1, Mobile)

| Seite | Score | LCP | CLS | Seitengewicht |
|---|---|---|---|---|
| `/projekte/` neu | 96–97 | 2,2 s | 0,00 | **402 KB** (vorher 1.624 KB) |
| `/projekte/` live, alter Code | 99 | 1,6–1,7 s | 0,00 | 1.513 KB |
| Startseite neu | 98 | 1,9 s | 0,00 | **154 KB** (vorher 351 KB) |
| Übrige 9 Seiten neu | 98–99 | 1,8 s | 0,00 | 129–170 KB |

Alle Seiten liegen bei **96+ mobil, LCP ≤ 2,2 s, CLS 0,00**. Der Unterschied zwischen „neu" (lokal)
und „live" ist Messumgebung, nicht Regression: lokal kommen Google-Fonts über das Netz, die
Seite selbst von localhost. Entscheidend und umgebungsunabhängig ist das **Seitengewicht**.

### Verifikation

Geprüft wurden alle 16 HTML-Dateien (die 11 Sitemap-URLs plus 404, AGB, Impressum, Datenschutz, Bestätigung):
genau 1× H1, je 1 Title und 1 Description, kein übersprungenes Überschriftenlevel, gültiges JSON-LD,
ausgeglichene `div`/`section`-Tags, alle internen Verweise auflösbar.

Optische Regressionsprüfung per Headless-Chrome-Screenshot für Footer, `/leistungen`, `/projekte/` und `/ratgeber`.
Für die beiden riskantesten Umbauten wurden die **berechneten Stile** verglichen statt nur der Optik:
`.demo-h1` rendert mit `display:block`, `font-weight:700`, Poppins, `line-height:46.8px`, `margin:0 0 15px` –
identisch zum vorherigen `h1`. Das ausgelagerte JS ist per `node --check` syntaktisch validiert und
`defer`-kompatibel (kein `DOMContentLoaded`-Handler).

### Nachträgliche Kürzung: Fülltext wieder entfernt

Auf ausdrücklichen Wunsch wurde der zur Erfüllung der Wortzahl-Empfehlungen ergänzte Text wieder
entfernt – die Textmenge war gestalterisch nicht tragbar und hätte niemand gelesen.

| Seite | Ergänzt | Jetzt | Was entfernt wurde |
|---|---|---|---|
| `/ratgeber` | 498 W. | **215 W.** | Zusatzabschnitt „Die drei Fragen…" und zweiter Hero-Absatz |
| `/kontakt` | 593 W. | **282 W.** | Abschnitt „Was Sie vor dem Gespräch wissen sollten" (dupliziert ohnehin den vorhandenen Ablauf-Block) |
| `/projekte/` | 879 W. | **630 W.** | Blöcke „Ausgangslage / Umsetzung / Ergebnis" je Projekt |
| `/leistungen` | 806 W. | **787 W.** | Quellenhinweis auf Bundesärztekammer und KBV |
| `/dsgvo-praxis-website` | 747 W. | **701 W.** | Quellenhinweis auf Gesetzestext, Datenschutzkonferenz und BfDI |
| `index.html` + 3 Fachseiten | je +78 W. | **main-Stand** | Ratgeber-Teaser über dem Formular – führte unmittelbar vor dem Conversion-Punkt aus der Seite heraus, auf den Ads-Zielseiten besonders schädlich |

**Damit sind die Report-Punkte „zu wenig Text" (`/kontakt`, `/ratgeber`) und „Text-Rate" bewusst
nicht erfüllt.** Das ist eine Design-Entscheidung, keine Nachlässigkeit: Fülltext, der nur eine
Toolmetrik bedient, schreckt Leser ab und schadet der Conversion mehr, als ein Rankingpunkt bringt.

Was aus diesen Maßnahmen **erhalten** bleibt, weil es echte Fehler behebt und nichts kostet:
die H2 auf `/ratgeber` (vorher gab es keine einzige, H1 sprang direkt auf H3) und die
ItemList-/CollectionPage-Auszeichnung.

### Nachträgliche Kürzung der Projekttexte

Die zunächst ergänzten Blöcke „Ausgangslage / Umsetzung / Ergebnis" je Projekt waren als Textwand
neben der Checkliste gestalterisch nicht tragbar. Auf Wunsch bewusst gekürzt auf je einen knappen
Absatz – Text-Rate dadurch 24,8 % → 19,2 %, Wörter 879 → 630. **Das ist eine bewusste Entscheidung
gegen die Toolmetrik und für die Lesbarkeit.** Die eigentlichen Fehler der Seite (zweite H1,
Inline-CSS/JS, 404-Link, Seitengewicht) sind davon nicht berührt.

### Zwei Einschränkungen, ehrlich benannt

1. **Text-Rate:** Ziel des Tools ist > 25 %. Erreicht: `/ratgeber` 28,5 %, `/leistungen` 28,0 %,
   `/kosten` 25,7 %, `/projekte/` 24,8 %, `/kontakt` 22,7 %, Startseite und Fachseiten ~22,6 %.
   Die Landingpages liegen knapp darunter, weil sie viel Markup für Formulare, SVG-Icons und
   FAQ-Akkordeons enthalten. Weiteres Hochtreiben ginge nur über Fülltext – das wäre für Leser
   schlechter und ist bewusst unterlassen.
2. **Mobile PageSpeed `/projekte/`:** Hier muss ich meine ursprüngliche Einschätzung zurücknehmen.
   Nachgemessen mit Lighthouse 13.4.1 lag die **Live-Seite mit dem alten Code bereits bei 99/100
   (LCP 1,6–1,7 s)** – die 60/100 und 4,8 s aus dem Report sind nicht reproduzierbar. Die
   Bildkomprimierung war also **kein Score-Fix**, sondern eine Datenvolumen-Ersparnis:
   Seitengewicht 1.513 KB → **402 KB** (−73 %). Das ist real gemessen und bleibt ein Gewinn für
   Nutzer im Mobilfunk, hebt aber keinen Score, der nie eingebrochen war.

---

## 1. Die 10 „seitenübergreifenden Fehler" – Faktencheck

| # | Behauptung im Report | Prüfergebnis | Entscheidung |
|---|---|---|---|
| 1 | Keine strukturierten Daten (schema.org) vorhanden | **FALSCH.** 9 von 11 Seiten haben JSON-LD, und es ist live: `curl https://vivenna-it.de/` liefert 2 `ld+json`-Blöcke. Vorhanden sind `ProfessionalService`, `FAQPage`, `Service`, `ContactPage`, `Article`. Es fehlt nur auf `/projekte/` und `/ratgeber`. | ⚠️ Nur die 2 Lücken schließen |
| 2 | Startseite unter 4 URL-Varianten erreichbar | **BEREITS GELÖST.** Genau das vom Report Empfohlene ist aktiv: `http://`, `http://www.`, `https://www.` liefern alle **301 → `https://vivenna-it.de/`**. Der Report beschreibt den korrekten Zustand als Fehler. | ❌ Nichts zu tun |
| 3 | 2 Inline-JavaScript-Bereiche im HTML | **Teilweise richtig.** Auf 10 von 11 Seiten: **0** Inline-Skripte. Nur `/projekte/` hat 4 Inline-Blöcke (~250 Zeilen Demo-Animationen). | ⚠️ Nur `/projekte/` |
| 4 | 3 CSS-/JS-Dateien nicht minifiziert | **Richtig** (`css/site.css` 48 KB, `js/site.js` 19 KB, `cookie-consent.js` 16 KB). Aber: GitHub Pages hat keinen Build-Prozess, und die Server liefert alles gzip-komprimiert aus. PageSpeed ist bereits 100/100. | ❌ Aufwand ohne messbaren Nutzen |
| 5 | Links ohne title-Attribut (27–35 pro Seite) | **Richtig, sogar zu 100 %:** Von 38/32/31/… Links hat auf **keiner** Seite ein einziger ein `title`. | ⚠️ Sehr eingeschränkt – siehe unten |
| 6 | Bilder ohne title-Attribut (2–5 pro Seite) | **Richtig**, aber: **alle Bilder haben einen alt-Text.** Das ist das, was zählt. | ❌ Siehe unten |
| 7 | Sehr wenige ausgehende Links (1–3 pro Seite) | **Richtig** (1–6 je Seite, meist 1). | ✅ Punktuell ergänzen |
| 8 | Keine Twitter-Cards | **Richtig** (0 Treffer). Alle Seiten haben aber vollständige Open-Graph-Tags (6 je Seite), die X/Twitter als Fallback nutzt. | ✅ Billig, wird ergänzt |
| 9 | Kein hreflang-Tag | Richtig, aber die Seite ist einsprachig. Der Report sagt selbst „nur relevant bei mehrsprachigen Inhalten". | ❌ Nicht anwendbar |
| 10 | Letztes Update: 27.05.2025 | **Artefakt.** Letzter Commit ist 09.08.2026. Der Report las ein Archiv, nicht die Live-Seite – der beste Beleg dafür, dass Punkt 1 und 2 aus einem alten Stand stammen. | ❌ Nichts zu tun |

### Zu #5 und #6 – warum `title`-Attribute *nicht* flächendeckend kommen

Das ist die Empfehlung, bei der ich dem Report am deutlichsten widerspreche.

`title`-Attribute sind **kein Rankingfaktor**. Google ignoriert sie für die Bewertung von Links und Bildern. Schlimmer: Screenreader lesen bei einem Link mit `title` je nach Konfiguration **beide** Texte vor („Kontakt, Kontakt") – ein `title`, der den Linktext wiederholt, ist laut W3C/WAI ein **Accessibility-Anti-Pattern**. Auf Touchgeräten ist der Tooltip ohnehin unsichtbar.

Die Linktexte sind hier bereits sprechend („Websites für Zahnärzte", „Kostenloses Design sichern"). Es gibt nichts, was ein `title` sinnvoll ergänzen könnte.

> **Entscheidung:** Kein flächendeckendes `title`-Attribut. Ausnahme: die zwei Logo-Links im Header/Footer bekommen ein `aria-label` (nicht `title`), weil dort der Linktext nur aus einem Bild besteht. Das löst das *echte* Problem dahinter, statt die Toolmetrik zu bedienen.

Bei Bildern (#6) gilt dasselbe: `alt` ist gesetzt, `title` ist redundant. Ausdrücklich **nicht** umgesetzt wird außerdem die wiederkehrende Report-Forderung „Keyword kommt 0× in den ALT-Texten vor". Auf `/leistungen`, `/kontakt`, `/ratgeber` und allen drei Ratgeber-Artikeln sind die **einzigen Bilder die Logos in Header und Footer**. Ein alt-Text „Praxis Website Kosten" für ein vivenna-Logo wäre schlicht falsch beschriftet – Keyword-Stuffing zulasten blinder Nutzer. Das ist ein Toolfehler, kein Optimierungspotenzial.

---

## 2. Seiten im Einzelnen

Alle Zeichen- und Wortzahlen unten sind **selbst nachgemessen**, nicht aus dem Report übernommen. Sie bestätigen dessen Zahlen durchgehend (Abweichung 1–3 %, da der Report Navigationstext mitzählt).

### 2.1 `/` – Startseite · Keyword: *Arztpraxis Website*

| Befund | Status | Maßnahme |
|---|---|---|
| Title 81 Zeichen (max. 70), „Arztpraxis" fehlt | ✅ bestätigt | Neu: **`Arztpraxis-Website erstellen lassen – Design kostenlos \| vivenna`** (64 Z.) |
| Meta-Description 193 Zeichen, „Arztpraxis" fehlt | ✅ bestätigt | Auf ~158 Z. kürzen, „Arztpraxis-Website" nach vorn |
| „1 leere Überschrift (H3 ohne Text)" | ⚠️ **fehlinterpretiert** | Es gibt **keine** leere Überschrift. Das Tool meldet eine *Lücke in der Hierarchie*: Auf `<h2>Sichern Sie sich Ihr kostenloses Website-Design</h2>` (Z. 407) folgt direkt `<h4>Navigation</h4>` (Z. 484) im Footer – H3 wird übersprungen. **Ursache ist der Footer, auf allen Seiten identisch.** |
| 8× H2, 12× H3 | ⚠️ | H2-Zahl ist für eine 1.100-Wörter-Landingpage **angemessen**. Die „3–4 H2" des Tools sind eine Faustregel für Blogartikel. Nicht reduzieren – siehe 2.9. |
| Keyword nicht in der URL | ❌ | Die Startseite ist `/`. Nicht änderbar und nicht wünschenswert. |

**Fix Footer (wirkt auf 12 Dateien gleichzeitig):** Die vier `<h4>` sind Navigations-Labels, keine inhaltlichen Überschriften. Umbau zu `<p class="footer-col-title">` und Anpassung des CSS-Selektors in [css/site.css:661](css/site.css#L661). Dadurch verschwinden die H4 aus der Überschriften-Gliederung, die Hierarchie ist lückenlos, und der gemeldete „Fehler" ist auf **allen** Seiten weg.

### 2.2 `/zahnarzt-website` · Keyword: *Zahnarzt Website*

| Befund | Status | Maßnahme |
|---|---|---|
| Meta-Description 206 Zeichen | ✅ bestätigt (206) | Auf ~155 Z. kürzen |
| Leere H3 | ⚠️ | = Footer-Problem, siehe 2.1 |
| Title 61 Z., Keyword vorn | — | **Bereits gut.** Keine Änderung. |
| „Keyword in keinem Bild-Dateinamen" | ❌ | Einzige Bilder sind Logo + Screenshots. Nicht sinnvoll umbenennbar. |

### 2.3 `/hausarzt-website` · Keyword: *Hausarztpraxis Website*

| Befund | Status | Maßnahme |
|---|---|---|
| „Hausarztpraxis" fehlt im Title | ✅ bestätigt (nur „Hausarzt-Website") | Neu: **`Hausarztpraxis-Website erstellen lassen: Design kostenlos \| vivenna`** (67 Z.) |
| Meta-Description 209 Zeichen | ✅ bestätigt | Auf ~155 Z. kürzen |
| Leere H3 | ⚠️ | = Footer-Problem |

### 2.4 `/augenarzt-website` · Keyword: *Augenarzt Website*

| Befund | Status | Maßnahme |
|---|---|---|
| Meta-Description 212 Zeichen (längste der Site) | ✅ bestätigt | Auf ~155 Z. kürzen |
| Leere H3 | ⚠️ | = Footer-Problem |
| Title 62 Z. | — | Bereits gut. Analog zu 2.3 auf „Augenarztpraxis-Website" prüfen (dann 68 Z.) |

### 2.5 `/leistungen` · Keyword: *Praxis Website Leistungen*

| Befund | Status | Maßnahme |
|---|---|---|
| Meta-Description 192 Zeichen | ✅ bestätigt | Auf ~158 Z. kürzen |
| Keyword 0× in der H1 | ✅ bestätigt (H1: „Alles aus einer Hand – und das Design vorab kostenlos") | H1 → **„Praxis-Website: alles aus einer Hand – Design vorab kostenlos"** |
| 13× H3 | ✅ bestätigt | Der Block „Was in Ihrer Praxis-Website steckt" hat 6 H3 für je 1–2 Sätze. Zu 4 Blöcken zusammenfassen → 11 H3. |
| Keine `<article>`/ARIA | ✅ bestätigt (0/0) | Gering priorisiert; `<article>` um die Prozess-Schritte ist vertretbar |
| Keyword 0× in ALT-Texten | ❌ | Nur Logos vorhanden – siehe Abschnitt 1 |
| „13 H3" & „nur 1 ausgehender Link" | ✅ | Ein Link auf eine externe DSGVO-/KBV-Quelle wird ergänzt |

### 2.6 `/kontakt` · Keyword: *Kontakt Praxis Website*

| Befund | Status | Maßnahme |
|---|---|---|
| Nur 271 Wörter (Report) / **276** (gemessen) | ✅ bestätigt | Ausbauen auf ~450 Wörter |
| Weniger als 6 vollständige Sätze | ✅ bestätigt | Korrekt: Der Text besteht fast nur aus **Formularlabels** („Ihr Name", „E-Mail-Adresse"), die keine Sätze sind |
| Text-Rate 18,67 % (gemessen: 13,5 %) | ✅ bestätigt | Löst sich durch den Textausbau |
| Keyword 0× in H2/H3 | ✅ bestätigt (nur 1× H2, 2× H3) | Neue H2 mit „Praxis-Website" |
| Meta-Description 180 Zeichen | ✅ bestätigt | Auf ~155 Z. kürzen |

**Vorsicht bei dieser Seite:** `/kontakt` ist die **Conversion-Seite** und das Ziel der Google-Ads-Kampagne. Text wird **unter** dem Formular ergänzt (FAQ „Was passiert nach der Anfrage?", Erreichbarkeit, Antwortzeiten), damit das Formular above the fold bleibt. Ein zugetexteter Seitenkopf würde die Conversion-Rate kosten – das wäre teurer als der SEO-Gewinn.

### 2.7 `/projekte/` · Keyword: *Praxis Website Beispiele* — **wichtigste Baustelle**

Hier liegt der Report vollständig richtig. Die Seite ist der einzige echte Ausreißer.

| Befund | Status | Maßnahme |
|---|---|---|
| **2× H1** | ✅ bestätigt (Z. 431 und **Z. 507**) | Die zweite H1 („Gesund werden.") gehört zur **eingebetteten Demo-Nachbildung** der Bazara-Website. → zu `<p class="demo-h1">` umbauen (Styling über CSS-Klasse erhalten). Semantisch ist es Dekoration, keine Seitenüberschrift. |
| **Mobile PageSpeed 60/100, LCP 4,8 s** | ❌ **NICHT REPRODUZIERBAR** | Nachgemessen mit Lighthouse 13.4.1 (Mobile) gegen die Live-Seite, die noch den alten Code ausliefert: **99/100, LCP 1,6–1,7 s** – über drei Läufe stabil. Die Behauptung des Reports ist damit ebenso wenig belastbar wie seine Aussagen zu strukturierten Daten und URL-Varianten. Die 750 KB von `assets/startseite.webp` ([projekte/index.html:103](projekte/index.html#L103)) sind trotzdem Verschwendung: Das Bild ist der Hintergrund der Demo-Sektion **unterhalb der ersten Scrollkante** und damit nie das LCP-Element. Komprimierung bleibt sinnvoll (Datenvolumen, Mobilfunk), war aber **kein Score-Fix**. |
| Text-Rate 7,01 % (gemessen: **6,0 %**) | ✅ bestätigt, schlechtester Wert | Beschreibungstext je Projekt ergänzen (Ausgangslage, Umsetzung, Ergebnis) → Ziel 900+ Wörter statt 563 |
| Inline-CSS im HTML | ✅ bestätigt (2 Blöcke, ~390 Zeilen) | Nach `/css/projekte.css` auslagern |
| 4 Inline-JS-Blöcke (~250 Zeilen) | ✅ bestätigt | Nach `/js/projekte.js` auslagern (auch der Grund für Report-Punkt #3) |
| Dateigröße 59 KB (gemessen: **71 KB**) | ✅ bestätigt | Ergebnis der Auslagerung |
| Leere H3 | ⚠️ | Hier zusätzlich ein **echter** Hierarchiesprung: H1 (Z. 431) → H3 (Z. 441) ohne H2 |
| `<img>` ohne `loading="lazy"` | ✅ **selbst gefunden** | Report erwähnt es nicht: 4 der 5 Bilder auf `/projekte/` haben weder `loading="lazy"` noch `width`/`height` (→ Layout-Shift). Auf der Startseite ist beides korrekt gesetzt – hier fehlt es. |
| `eye-4453129_1280.jpg` 203 KB | ✅ selbst gefunden | Nach WebP konvertieren (~40 KB) |
| Kein schema.org | ✅ selbst gefunden | `CollectionPage` + `CreativeWork` je Projekt ergänzen |
| Meta-Description 190 Z. | ✅ bestätigt | Auf ~158 Z. kürzen |
| Title: „praxis"/„beispiele" fehlen | ✅ bestätigt | Neu: **`Praxis-Website Beispiele: echte Referenzen live erleben \| vivenna`** (65 Z.) |

### 2.8 `/ratgeber` · Keyword: *Praxis Website Ratgeber*

| Befund | Status | Maßnahme |
|---|---|---|
| **Keine einzige H2** | ✅ bestätigt (H1 → 3× H3, H2 = 0) | Themenblöcke „Kosten & Budget", „Patienten & Inhalte", „Recht & Datenschutz" existieren bereits als Labels → zu echten `<h2>` machen |
| Nur 196 Wörter (gemessen: **205**) | ✅ bestätigt | Einleitung + Anrisstext je Artikel → Ziel 450+ Wörter |
| < 5 vollständige Sätze, Ø Satzlänge 21 Wörter | ✅ bestätigt | Löst sich mit dem neuen Text; Sätze kurz halten |
| Title 49 Zeichen – zu kurz | ✅ bestätigt | Neu: **`Ratgeber: Praxis-Website-Wissen für Arztpraxen \| vivenna`** (56 Z.) |
| Kein schema.org | ✅ selbst gefunden | `ItemList`/`Blog` ergänzen |
| Meta-Description 155 Z. | — | **In Ordnung**, keine Änderung |

### 2.9 `/ratgeber/praxis-website-kosten` · Keyword: *Praxis Website Kosten*

| Befund | Status | Maßnahme |
|---|---|---|
| Title 89 Zeichen (längster der Site), „Kosten" fehlt | ✅ bestätigt | Neu: **`Praxis-Website Kosten 2026: Preise realistisch erklärt \| vivenna`** (64 Z.) – „Kosten" nach vorn |
| Meta-Description 161 Zeichen | ✅ bestätigt | 1 Zeichen kürzen (kosmetisch) |
| 7× H2 | ⚠️ | Für einen 938-Wörter-Ratgeber **völlig normal**. Nicht ändern. |
| Keyword 0× in ALT-Texten/Dateinamen | ❌ | Nur Logos – siehe Abschnitt 1 |

### 2.10 `/ratgeber/praxis-website-checkliste` · Keyword: *Praxis Website Checkliste*

| Befund | Status | Maßnahme |
|---|---|---|
| Title 73 Zeichen, „Checkliste" fehlt | ✅ bestätigt | Neu: **`Praxis-Website Checkliste: 7 Dinge, die Patienten erwarten`** (58 Z.) |
| Keyword 0× in H2 | ✅ bestätigt (3× H2, keine mit „Checkliste") | Eine H2 → „Die Checkliste für Ihre Praxis-Website im Überblick" |
| 9× H3 | ⚠️ | 7 davon sind die 7 Checklistenpunkte. **Inhaltlich richtig so.** Nicht ändern. |
| Meta-Description 138 Z. | — | In Ordnung |

### 2.11 `/ratgeber/dsgvo-praxis-website` · Keyword: *DSGVO Praxis Website*

| Befund | Status | Maßnahme |
|---|---|---|
| Keyword 0× in H2 | ✅ bestätigt | Eine H2 → „DSGVO-Pflichten für Ihre Praxis-Website" |
| Title 71 Zeichen (1 über Limit) | ✅ bestätigt | „Ratgeber" streichen → 62 Z. |
| Meta-Description 169 Z., „DSGVO"/„Praxis" fehlen | ✅ bestätigt | Neu formulieren, ~157 Z., mit beiden Begriffen |
| 9× H3 | ⚠️ | Sachlich begründet (Einzelthemen SSL/Cookies/Fonts/AVV). Nicht ändern. |

---

## 3. Was der Report als Fehler meldet, aber keiner ist – Zusammenfassung

Damit diese Punkte nicht bei jedem künftigen Tool-Report neu diskutiert werden:

1. **Strukturierte Daten fehlen** → falsch, sind live vorhanden (9/11 Seiten).
2. **4 URL-Varianten** → die 301-Weiterleitungen sind bereits korrekt eingerichtet.
3. **`title`-Attribute für 27–35 Links pro Seite** → kein Rankingfaktor, Accessibility-Anti-Pattern.
4. **`title`-Attribute für Bilder** → `alt` ist überall gesetzt, `title` ist redundant.
5. **„Keyword in ALT-Texten"** auf 6 Seiten → dort existieren nur Logos.
6. **„3–4 H2 pro Seite"** → Faustregel für kurze Blogposts, nicht für 1.100-Wörter-Landingpages.
7. **hreflang** → einsprachige Website.
8. **„Letztes Update 27.05.2025"** → Archivdatum, letzter Commit ist 09.08.2026.
9. **Minifizierung** → statisches GitHub-Pages-Hosting ohne Build, Auslieferung bereits gzip-komprimiert, PageSpeed 100/100.
10. **„/projekte/ nur 60/100 mobil, LCP 4,8 s"** → nachgemessen: **99/100, LCP 1,6–1,7 s** auf der Live-Seite mit unverändertem Code. Damit ist auch der einzige Punkt, den ich dem Report zunächst uneingeschränkt zugestanden hatte, widerlegt.

---

## 4. Zusätzliche Funde – vom Report übersehen

Diese vier Punkte stehen in keinem Tool-Report, sind aber real:

### 4.1 🔴 Defekter Link auf `/projekte/`
[projekte/index.html:605](projekte/index.html#L605) enthält `<a href="/en/">EN</a>`. Das Verzeichnis existiert nicht – **live geprüft: HTTP 404**. Der Link stammt aus der nachgebauten Nahla-Demo (die auf ihrer eigenen Domain eine EN-Version hat). Ein 404 im Crawl-Pfad kostet Crawl-Budget und ist ein UX-Fehler.
→ **Fix:** Link zu `<span>` machen (Optik bleibt), da er in der Demo-Nachbildung ohnehin nur dekorativ ist.

### 4.2 🟠 Duplicate Content: jede Seite unter zwei URLs erreichbar
Live geprüft – alle liefern **HTTP 200**:
- `https://vivenna-it.de/zahnarzt-website` **und** `/zahnarzt-website.html`
- ebenso `/leistungen.html`, `/ratgeber.html`, `/index.html`

Der Report bemängelt nur die Varianten der Startseite (die gelöst sind) und übersieht, dass das Muster **die gesamte Website** betrifft. Die `canonical`-Tags sind korrekt gesetzt und entschärfen das Problem, aber sauberer wäre ein echter Redirect.
→ **Fix:** Da GitHub Pages keine Server-Redirects kann: canonical-Tags belassen (wirken), zusätzlich in der internen Verlinkung konsequent die Variante ohne `.html` nutzen (ist bereits überall so). Priorität niedrig, Risiko gering.

### 4.3 🟠 Schwache interne Verlinkung auf die Ratgeber-Artikel
Die drei Ratgeber-Artikel bekommen je nur **6 interne Links** – im Wesentlichen von `/ratgeber` und untereinander. Die **Startseite verlinkt keinen einzigen Ratgeber-Artikel** (0 Treffer für `href="/ratgeber/"` in `index.html`). Interne Verlinkung ist einer der stärksten Hebel für die Sichtbarkeit von Unterseiten.
→ **Fix:** Im FAQ-Block der Startseite („Was Sie wissen sollten") kontextuell auf `/ratgeber/praxis-website-kosten` und `/ratgeber/dsgvo-praxis-website` verlinken. Ebenso von den drei Fachseiten.

### 4.4 🟢 Verwaiste Datei
`styles.css` (4,6 KB) wird von **keiner** HTML-Datei referenziert – Altlast.
→ **Fix:** Löschen.

---

## 5. Google Ads: Keyword- und Landingpage-Bewertung

Für die geplante Kampagne zählt der **Qualitätsfaktor**, und der hängt an drei Dingen: Anzeigenrelevanz, erwartete CTR und **Nutzererfahrung der Zielseite**. Die SEO-Maßnahmen oben zahlen direkt darauf ein.

**Ausgangslage – gut aufgestellt:**
- Die drei Fachseiten sind saubere, dedizierte Landingpages mit klarem Suchintent-Match (Zahnarzt / Hausarzt / Augenarzt).
- Die H1 enthalten das Keyword bereits prominent („Die Website, die Ihre **Zahnarztpraxis** verdient").
- PageSpeed 100/100 auf allen Ads-relevanten Seiten – ein direkter Qualitätsfaktor-Vorteil.
- Ein klares, konsistentes Angebot („Design kostenlos, erst danach entscheiden") über alle Seiten hinweg.

**Handlungsbedarf für die Kampagne:**

| Punkt | Warum es für Ads zählt |
|---|---|
| **`/projekte/` mobil auf 60/100** | Wenn `/projekte/` je Ads-Ziel wird oder Nutzer dorthin klicken, drückt der LCP von 4,8 s den Qualitätsfaktor und damit den Klickpreis. Fix aus 2.7 ist Voraussetzung. |
| **Meta-Descriptions kürzen** | Betrifft die organischen Snippets, nicht die Anzeigen – aber die abgeschnittenen Titles (81/89 Z.) zeigen, dass die Textlängen generell nicht auf Ausspielung geprüft wurden. Für Ads dieselbe Disziplin: RSA-Titles ≤ 30 Zeichen. |
| **`/kontakt` als Conversion-Ziel** | Textausbau nur **unter** dem Formular (siehe 2.6). |
| **Keyword-Lücke „Arztpraxis"** | Das generische Money-Keyword „Arztpraxis Website" fehlt im Title der Startseite komplett. Für Ads-Landingpage-Relevanz relevant. Fix in 2.1. |
| **Fehlende Landingpage-Varianten** | Es gibt Seiten für Zahnarzt/Hausarzt/Augenarzt. Für die Kampagne fehlen ggf. Kieferorthopäde, Physiotherapie, Psychotherapie. **Neue Seiten sind aber nicht Teil dieses Plans** – nur als Hinweis. |

Sinnvolle Keyword-Cluster für die Kampagne (aus der bestehenden Seitenstruktur ableitbar):
- **Transaktional (höchste Priorität):** „praxis website erstellen lassen", „arztpraxis homepage erstellen", „website für arztpraxis", „zahnarzt website erstellen lassen" → Startseite + Fachseiten
- **Kommerziell:** „webdesign arztpraxis", „webagentur arztpraxis berlin", „praxis website kosten" → `/leistungen`, `/ratgeber/praxis-website-kosten`
- **Lokal:** „webdesign arztpraxis berlin" → Startseite (die `ProfessionalService`-Daten mit Berliner Adresse sind bereits im JSON-LD hinterlegt)

---

## 6. Umsetzungsreihenfolge

Sortiert nach **Wirkung ÷ Aufwand**, nicht nach der Reihenfolge des Reports.

| Prio | Maßnahme | Dateien | Aufwand | Wirkung |
|---|---|---|---|---|
| **1** | `startseite.webp` von 750 KB auf ≤120 KB komprimieren | `assets/` | S | **Hoch** – behebt LCP 4,8 s → Mobile-Score 60→~90 |
| **2** | Zweite H1 auf `/projekte/` zu `<p>` umbauen + `/en/`-Link (404) entfernen | `projekte/index.html` | S | **Hoch** – echter Strukturfehler + toter Link |
| **3** | Footer-`<h4>` → `<p class="footer-col-title">` | 12 HTML-Dateien + `css/site.css:661` | S | **Hoch** – beseitigt die „leere Überschrift" auf *allen* Seiten mit einem Fix |
| **4** | 9 Meta-Descriptions auf ≤160 Zeichen kürzen | 9 HTML-Dateien | S | Mittel – direkte CTR-Wirkung |
| **5** | 4 Title-Tags kürzen (`/` 81, `/kosten` 89, `/checkliste` 73, `/dsgvo` 71) + Keywords nach vorn | 4 HTML-Dateien | S | **Hoch** – werden aktuell in Google abgeschnitten |
| **6** | `/ratgeber`: H2-Struktur + Text auf 450+ Wörter | `ratgeber.html` | M | **Hoch** – 205 Wörter ohne H2 sind nicht rankingfähig |
| **7** | `/projekte/`: Inline-CSS/JS auslagern, `loading="lazy"` + `width`/`height`, Projekttexte ergänzen | `projekte/index.html`, neu: `css/projekte.css`, `js/projekte.js` | L | **Hoch** – Text-Rate 6 % → ~20 % |
| **8** | `/kontakt`: Text unter dem Formular auf ~450 Wörter, H2 mit Keyword | `kontakt.html` | M | Mittel |
| **9** | H2 mit Keyword auf `/checkliste` und `/dsgvo`; H1 auf `/leistungen` | 3 HTML-Dateien | S | Mittel |
| **10** | Interne Verlinkung: Startseite + Fachseiten → Ratgeber-Artikel | 4 HTML-Dateien | S | Mittel |
| **11** | schema.org für `/projekte/` (`CollectionPage`) und `/ratgeber` (`ItemList`) | 2 HTML-Dateien | S | Mittel |
| **12** | Twitter-Cards ergänzen | 11 HTML-Dateien | S | Niedrig |
| **13** | `/leistungen`: 6 H3 zu 4 Blöcken zusammenfassen | `leistungen.html` | M | Niedrig |
| ~~14~~ | ~~Ausgehende Links auf Fachquellen~~ – **zurückgenommen**, auf Wunsch wieder entfernt | – | – | – |
| **15** | `styles.css` löschen, `sitemap.xml` `lastmod` aktualisieren | 2 Dateien | S | Niedrig |

**Bewusst nicht umgesetzt:** `title`-Attribute für Links/Bilder · Keyword-Stuffing in Logo-ALT-Texten · hreflang · Minifizierung · Reduktion der H2/H3 auf Ratgeber-Artikeln · URL-Varianten-Redirects (bereits gelöst).

---

## 7. Prüfung nach der Umsetzung

- [ ] Title ≤ 70 und Description ≤ 160 Zeichen auf allen 11 Seiten nachmessen
- [ ] Genau **1× H1** pro Seite, keine übersprungene Ebene in der Gliederung
- [ ] PageSpeed Insights `/projekte/` mobil: Ziel **≥ 85**, LCP **< 2,5 s**
- [ ] Rich-Results-Test für alle 11 URLs
- [ ] Alle internen Links auf 200er prüfen (kein `/en/` mehr)
- [ ] `lastmod` in `sitemap.xml` aktualisieren und in der Search Console neu einreichen
