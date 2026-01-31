0) Cel i zasady (nie negocjować)

Cel: zbudować kompletną stronę restauracji „Krakoski” (Kazimierz, Kraków) jako produkcyjny projekt, gotowy do hostingu, z:

nowoczesnym minimalistycznym UI (digital twin wnętrza),

pełnym SEO i AI-SEO (AI Overviews / cytowalność),

pełnymi schemami Schema.org,

kompletem assetów (favicons, OG images, manifest),

perf (CWV, Lighthouse),

spójnym contentem i aktualnymi danymi z internetu 2026.

Zakazy:

Nie zostawiaj placeholderów (picsum, lorem) w wersji finalnej.

Nie wymyślaj danych (ceny, godziny, email, rezerwacje) bez źródła.

Nie rób “ciężkiego” UI ani zbędnego JS.

1) Etap 1 — Audyt wejściowy i plan migracji
1.1 Sprawdź co jest teraz

To jest projekt Vite/React, a wymagamy pełnego projektu Next.js z routingiem, metadata API, SEO plikami i strukturą pod podstrony.

Zrób listę istniejących komponentów/sekcji i które można przenieść:

Header, Hero, Quick Actions, Menu, Delivery, Gallery, Contact/Footer

Zrób listę braków względem wymagań (to, co już ustaliliśmy):

brak Next, brak tailwind build, brak schema JSON-LD, brak robots/sitemap/llms, brak OG, brak favicons/manifest, brak prawdziwych zdjęć, brak /menu /dostawa /kontakt.

1.2 Plan migracji

Przygotuj migrację do Next:

zachowaj UI/sekcje jako komponenty,

przenieś treści do centralnego źródła (content/config),

przenieś style do systemu tokenów (CSS vars + Tailwind).

Deliverable tego etapu: krótka checklist “co przenoszę, co robię od zera”.

2) Etap 2 — Research i “Single Source of Truth” danych (2026)
2.1 Pobierz najnowsze dane z internetu (2026)

Zanim ustawisz SEO i schemy, zweryfikuj:

Nazwa (brzmienie oficjalne)

Adres (format NAP)

Telefon

Email (czy istnieje i jest oficjalny)

Godziny otwarcia (czy są stałe i takie same wszędzie)

Google Maps link

Facebook/Instagram

Dostawy: Pyszne / Wolt / Uber Eats / Glovo

Too Good To Go (czy aktywne)

Źródła priorytetowe: Google Maps + oficjalne social + platformy dostaw.

2.2 Rozstrzyganie sprzeczności

Jeśli godziny/telefon różnią się między źródłami:

wybierz najbardziej wiarygodne i udokumentuj,

dodaj notatkę w repo: “Źródło prawdy na dzień YYYY-MM-DD”.

2.3 Utwórz centralny “data model”

Zrób jedno miejsce, gdzie trzymasz:

NAP + godziny + geo + linki (social/dostawa/maps)

Menu (lista sekcji i dań — bez cen, jeśli brak źródeł)

FAQ

Gallery assets

Cel: żadnych danych “rozsianych” po komponentach.

Deliverable: “DATA.md” lub “sources.md” z linkami źródeł (dla klienta i SEO).

3) Etap 3 — Fundament projektu: struktura stron i routing (SEO-ready)

Zbuduj IA jako:

Home (one-page sekcje + scroll)

Dedykowane podstrony/URL:

/menu

/dostawa

/kontakt

/polityka-prywatnosci

/regulamin

plus standardowe: 404, 500 (lub odpowiedniki)

Ważne SEO:

Sekcje na Home mogą mieć anchor, ale nie mogą generować duplikacji canonicali.

Każda podstrona ma mieć własne meta title/description, OG i schema (gdzie ma sens).

Deliverable: mapa strony (sitemap logiczna) + lista podstron.

4) Etap 4 — Design System i UI “digital twin wnętrza”
4.1 Tokeny kolorów i zasady użycia (obowiązkowo)

Zaimplementuj paletę jako tokeny globalne i trzymaj proporcje:

85% neutral: Stone/White/Grey

15% accent: Red/Blue/Gold/Green

Cyan LED tylko jako “signature underline/glow” (<1%)

Tokeny do wdrożenia (dokładnie):

Background #F6F3EE

Alt background #EEE9E2

Surface #FFFFFF

Border soft #E2DBD2

Border strong #C9C1B6

Plaster grey #8E8A84

Ink #141312

Muted #5F5B55

Primary red #C61F2D / hover #9E1823 / soft #F6D6D9

Secondary blue #1E5BB8 / hover #143E7D / soft #D8E6FF

Gold #D6A61D / soft #FFF0C2 + brass #B8860B

Green #2C6A45 / soft #D9F0E3

LED cyan #00CED1 / soft #CFF7F7

Frame black #0F1011

Footer dark #2A1D1B

4.2 Typografia i rytm

Nagłówki: geometryczne/premium; body: maksymalna czytelność.

Ustal skalę H1/H2/H3, spacing sekcji, radius kart.

Styl “ramy”: border + minimal shadow, nie ciężkie cienie.

4.3 Efekty i mikrointerakcje (premium, bez przesady)

Header glass + sticky.

Hover linków: LED cyan underline.

Karty: minimalny “lift” 1–2px + border w akcencie.

Wstążki: tylko jako cienka linia/gradient 1–2px w hero / separatorach.

Deliverable: “UI spec” — lista komponentów + wariantów.

5) Etap 5 — Komponenty i UX (sekcja po sekcji)

Poniżej masz wymagania zachowania i funkcji — agent ma je wdrożyć.

5.1 Header (sticky)

Sticky, glass, status “otwarte dziś …”.

Desktop: linki (max 6) + CTA: Zobacz menu (secondary blue) i Zamów z dostawą (primary red).

Mobile: burger → pełnoekranowy overlay:

duże linki,

na dole: tel, maps, “zamów”.

5.2 Hero (Twoja treść + styl wnętrza)

Lewa: H1/H2 + opis + 2 CTA (Menu / Dostawa).

Prawa: minimalistyczna kompozycja (tynk + cienkie wstążki + subtelny cyan glow).

Dodaj “Szybkie fakty” (AI-SEO fact box) tuż pod CTA lub obok:

adres, godziny, tel, dostawa, dzielnica.

5.3 Quick Actions (3 kafle)

Menu / Dostawa / Jak dojechać — każda jako karta “ramka”.

5.4 Menu Explorer (najważniejsze UX)

Dedykowane UX na Home (skrót) + pełna wersja na /menu.

Kategorie jako tabs (sticky w obrębie sekcji).

Opcjonalnie wyszukiwarka po nazwie.

Karty dań: nazwa, krótki opis, tagi (np. “klasyk”, “popularne” jeśli potwierdzone).

Klik dania:

desktop: modal,

mobile: bottom sheet.

W szczegółach:

opis,

CTA: “Zamów z dostawą” + “Zadzwoń”.

Uwaga o cenach:

Ceny pokazuj tylko, jeśli masz wiarygodne źródło (platformy).

Jeśli nie: ukryj ceny albo pokaż “sprawdź w dostawie”.

5.5 O nas

2 kolumny: tekst + zdjęcie wnętrza w stylu “ramy”.

3 micro-value props: samoobsługa, domowe klasyki, Kazimierz.

5.6 Dostawa (/dostawa i sekcja na Home)

Duże przyciski/karty do platform (Pyszne/Uber/Wolt/Glovo).

Osobny blok TooGoodToGo (green).

5.7 Galeria

Masonry grid + lightbox.

Tylko realne zdjęcia (Twoje); żadnych placeholderów.

Priorytety: wnętrze (stroje, wstążki, bar, rośliny) + dania.

5.8 Lokalizacja i kontakt (/kontakt)

Mapa + “Jak dojechać” + CTA do Google Maps.

Kontakt: klikany telefon, mail (jeśli potwierdzony), social.

Godziny: spójne z NAP i schema.

5.9 Footer

Ciemny mahogany #2A1D1B, tekst off-white.

Linki, kontakt, godziny.

NAP powtórzony (Local SEO).

6) Etap 6 — Full SEO (2026) + AI-SEO (AI Overviews)
6.1 Meta i ogólna strategia

Każda strona ma mieć:

unikalny title i description,

canonical,

OG/Twitter cards,

dane o języku i locale (jeśli PL/EN),

poprawną hierarchię nagłówków (1x H1).

6.2 AI-SEO (obowiązkowe elementy)

Fact box “Szybkie fakty” (adres/godziny/tel/dostawa).

Sekcja FAQ (3–6 pytań) oparta o intencje:

czy jest samoobsługa,

czy jest dowóz,

jakie są godziny,

czy są pierogi,

czy na wynos itd.

Krótkie, cytowalne akapity, zero lania wody.

6.3 Pliki SEO (obowiązkowe)

W projekcie muszą istnieć i działać:

sitemap.xml (dynamicznie generowany lub build-time)

robots.txt (wskazuje sitemap, blokuje śmieci)

llms.txt (AI-friendly opis firmy + linki + NAP + menu)

Strony błędów: 404, 500

6.4 Image SEO

Prawidłowe alt-texty: opis + kontekst (“wnętrze restauracji Krakoski na Kazimierzu” itp.)

Rozsądne nazwy plików, kompresja, formaty nowoczesne.

OG images przygotowane (Home/Menu/Dostawa).

Deliverable: lista słów kluczowych i finalna struktura meta.

7) Etap 7 — Schema.org (JSON-LD) kompletnie

Wdroż na odpowiednich stronach:

Restaurant (LocalBusiness/Restaurant)

name, address, geo, telephone, openingHoursSpecification, servesCuisine, priceRange (jeśli znane), sameAs (FB/IG), url, hasMenu (/menu)

Jeśli brak rezerwacji: nie deklaruj acceptsReservations.

WebSite + SearchAction

dla wyszukiwarki menu (jeśli jest search)

BreadcrumbList

na podstronach

FAQPage

tam, gdzie FAQ

ImageObject

dla kluczowych zdjęć (opcjonalnie, jeśli sens)

Menu schema (Menu/MenuSection/MenuItem)

tylko jeśli lista stabilna i nie wprowadza w błąd (bez fejk cen).

Warunek: schema musi być spójna z treścią na stronie.

Deliverable: lista schema typów + na jakich URL.

8) Etap 8 — Favicons, PWA manifest, OG images (obowiązkowe)
8.1 Favicons

Dostarcz pełny zestaw:

favicon.ico

16/32 png

apple-touch-icon

android icons

8.2 Web manifest

name/short_name

theme_color dopasowany do palety (np. Stone albo Red)

icons

background_color

8.3 OG images

Home OG

Menu OG

Dostawa OG
Minimalistyczne, w stylu: ramy + tynk + cienka wstążka.

9) Etap 9 — Performance, dostępność, jakość
9.1 Performance / CWV

Minimal JS, tylko to co potrzebne.

Obrazy: optymalizacja, lazyload, priorytetyzacja hero tylko jeśli konieczna.

Cel: Lighthouse mobile 90+ (perf/seo/a11y), dąż do 95+.

9.2 Dostępność

Focus states, klawiatura, ARIA gdzie trzeba.

Kontrast tekstu.

9.3 UX states

Loading: skeleton dla menu i galerii.

Empty: “brak wyników wyszukiwania” + reset filtrów.

Error: miękkie komunikaty.

10) Etap 10 — Testy, QA, akceptacja
10.1 QA funkcjonalne

Wszystkie linki do platform dostaw działają.

Tel/mail klikają się poprawnie.

Mapa otwiera się poprawnie.

Scroll do sekcji działa.

Modal/bottom sheet menu działa na mobile.

10.2 QA SEO

Metadata per route unikalne.

OG działa.

robots/sitemap/llms istnieją i są dostępne.

Schema JSON-LD waliduje się.

10.3 QA content

Treści oczyszczone z “,,,”, literówek i podwójnych przecinków.

Dane (NAP/godziny) spójne wszędzie.

11) Finalne Deliverables (agent musi oddać)

Kompletny projekt w Next.js (App Router), gotowy do build/deploy.

Wdrożony design system + UI zgodny z wnętrzem (digital twin).

Podstrony: /, /menu, /dostawa, /kontakt, polityka/regulamin.

SEO komplet: meta, OG, canonical, robots, sitemap, llms, 404/500.

Schema komplet: Restaurant, WebSite+SearchAction, Breadcrumb, FAQPage (gdzie dotyczy).

Favicons + manifest + OG images.

Realne zdjęcia w galerii (bez placeholderów).

Raport źródeł 2026 (linki i data weryfikacji).

Wyniki audytu (Lighthouse/CWV) + krótkie notatki optymalizacji.

12) Kryterium “czy spełnia dokładnie to, o co prosiliśmy?”

Projekt uznajemy za zgodny dopiero gdy:

Nie jest to Vite landing, tylko pełny Next projekt z routingiem i SEO plikami.

Ma prawdziwe zdjęcia i finalne treści.

Ma schema, llms, sitemap/robots, OG, favicons/manifest.

Ma minimalistyczny UI zgodny z paletą i klimatem wnętrza.

Jest szybki i czytelny na mobile.

Dane firmy są aktualne (2026) i udokumentowane źródłami.