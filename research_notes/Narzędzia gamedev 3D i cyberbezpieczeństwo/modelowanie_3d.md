# Modelowanie, rzeźbienie, teksturowanie i AI-3D: katalog narzędzi (stan na październik 2026)

Metodologia i zastrzeżenia: WebFetch był zablokowany przez proxy dla większości domen dostawców (superhivemarket.com, sidefx.com, armorpaint.org, cgchannel.com, blender.org, docs.blender.org). Prawie wszystkie fakty poniżej pochodzą więc **wyłącznie ze snippetów WebSearch**. Wyjątki pobrane w całości przez WebFetch (GitHub) oznaczam jako **[fetch]**. Część cen pochodzi z agregatorów (costbench.com, toolradar.com, superrendersfarm.com, subger.com, myarchitectai.com), a nie od dostawców. Oznaczam je jako **[agregator]** i należy je traktować jako orientacyjne. Daty bez dopisku odnoszą się do 2025–2026. Starsze informacje mają podaną datę. Budżet wyszukiwań (200) wyczerpał się pod koniec pracy, więc kilka punktów trafiło do sekcji Gaps.

---

## 1. Główne programy DCC: Blender, Maya, 3ds Max, Cinema 4D, Houdini, Modo, ZBrush, Nomad Sculpt

### Takeaway
Blender (darmowy) jest w serii 5.x: 5.0 wyszedł w listopadzie 2025, 5.1 w marcu 2026, a 5.2 LTS w lipcu 2026 (wsparcie do lipca 2028). Komercyjne DCC działają wyłącznie w subskrypcji. Wyjątkiem jest Houdini, który ma jeszcze licencje wieczyste Core i FX. Licencje indie kosztują około 300–330 USD rocznie (Maya/3ds Max Indie, Houdini Indie, ZBrush 399 USD rocznie). Modo zostało wycofane: ostatnia wersja to 17.1 (2024), a pobieranie wyłączono w listopadzie 2025.

### Cited Findings
**Blender**
- Blender 5.0 wydano 18.11.2025. Nowości: przebudowane zarządzanie kolorem z HDR i szerokim gamutem (ACES 1.3/2.0, Rec.2100 PQ/HLG, AgX HDR), duża odświeżona wersja Video Sequencera, nowy modyfikator Array oparty na Geometry Nodes, obsługa „massive buffers” w .blend (gęstsza geometria), pass Render Time w Cycles, lepszy denoising OptiX, symulacje dymu i ognia na NanoVDB oraz szybsza kompilacja materiałów — [GIGAZINE](https://wbgsv0a.gigazine.net/gsc_news/en/20251119-blender-5-0); [AlternativeTo](https://alternativeto.net/news/2025/11/blender-5-0-launches-with-aces-color-enhanced-rendering-and-tighter-vfx-integration/); [OSArch](https://osarch.org/2025/11/18/blender-5-0-released/)
- Blender 5.1 wydano 17.03.2026 — [80.lv: Blender in 2026](https://80.lv/articles/blender-in-2026-planned-features-projects) (snippet)
- Blender 5.2 LTS wydano 14.07.2026, ze wsparciem do lipca 2028. Nowości: eksperymentalny system fizyki w Geometry Nodes (proceduralne włosy i tkaniny), bundles i lists w GN, węzeł Bevel, próbkowanie audio, GN na obiektach Empty, zdalne biblioteki assetów pobierane na żądanie (m.in. „Blender Online Essentials”) oraz texture cache w Cycles — [Blender 5.2 LTS](https://www.blender.org/releases/5-2/); [OSArch](https://osarch.org/2026/07/15/blender-5-2-lts-released/); [GameDev.net](https://gamedev.net/news/blender-52-lts-release-r4468/)

**Autodesk Maya / 3ds Max**
- Maya Indie kosztuje 305 USD rocznie dla freelancerów z przychodem poniżej 100 tys. USD — [toolradar](https://toolradar.com/tools/maya/pricing) [agregator]. Inne źródło podaje **330 USD rocznie** — [vagon.io](https://vagon.io/blog/how-much-does-maya-cost) [agregator]. **Źródła są sprzeczne**: przy starcie programu w 2019 cena wynosiła 250 USD rocznie — [ryanschultz.com 2019](https://ryanschultz.com/2019/08/02/autodesk-feeling-pressure-from-blender-offers-indie-versions-of-maya-and-3ds-max-software/)
- Warunkiem Indie jest roczny przychód poniżej 100 000 USD. Pełna Maya kosztuje 255 USD miesięcznie, 2 010 USD rocznie lub 6 025 USD za 3 lata. Pełny 3ds Max kosztuje 2 010 USD rocznie — [superrendersfarm: 3ds Max licensing 2026](https://superrendersfarm.com/article/3ds-max-licensing-2026) [agregator]
- 3ds Max Indie ma tę samą konstrukcję co Maya Indie (próg 100 tys. USD). Konkretnej ceny 3ds Max Indie na 2026 nie znalazłem w snippetach — [CGPress](https://cgpress.org/archives/3ds-max-and-maya-indie-licensing-announced.html)

**Maxon Cinema 4D**
- Cinema 4D: około 94 USD miesięcznie, rocznie około 943 USD. Maxon One: 149 USD miesięcznie, a według innego źródła około 1 665 USD rocznie (zawiera C4D, Redshift, ZBrush, Red Giant, Universe) — [subger](https://subger.com/en/service/cinema-4d) [agregator]. Superrendersfarm podaje Maxon One za **1 449 USD rocznie**, czyli **rozbieżność** — [superrendersfarm](https://superrendersfarm.com/blog/news/best-3d-rendering-software/) [agregator]
- Na 40-lecie Maxon w dniach 22–28.06.2026 obowiązywał rabat 40% na nowe roczne subskrypcje (Maxon One, C4D, Redshift, ZBrush, Red Giant, Universe). Rabat nie obejmował odnowień ani licencji edukacyjnych — [Digital Production](https://digitalproduction.com/2026/06/24/maxon-turns-40-subs-get-lighter/)

**SideFX Houdini**
- Ceny według [superrendersfarm, „wrzesień 2026”](https://superrendersfarm.com/article/how-much-does-houdini-cost) [agregator]:
  - Apprentice: za darmo, tylko niekomercyjnie, 1 licencja Karma.
  - Indie: 299 USD rocznie, 2 licencje Karma.
  - Core: 1 475 USD rocznie albo 1 995 USD wieczyście, 5 licencji Karma.
  - FX: 3 505 USD rocznie albo 4 495 USD wieczyście, 5 licencji Karma.
  - Strona sidefx.com była zablokowana i nie dało się tego zweryfikować.

**Foundry Modo (wycofane)**
- 7.11.2024 Foundry ogłosiło wygaszenie Modo. Wersja 17.1 jest ostatnia, bez dalszych patchy. Forum zamknięto w grudniu 2024, a pobieranie i dokumentację usunięto w listopadzie 2025. Aktywni klienci mogą dostać przedłużoną 10-letnią licencję. Foundry zaleca migrację „as soon as possible” — [Foundry](https://foundry.com/news-and-awards/foundry-winds-down-modo-development); [CG Channel](https://www.cgchannel.com/2024/11/foundry-discontinues-modo); [80.lv](https://80.lv/articles/foundry-announced-the-end-of-modo-development)

**Maxon ZBrush / ZBrush for iPad**
- Subskrypcja ZBrush kosztuje 49 USD miesięcznie lub 399 USD rocznie. Obejmuje ZBrush for iPad oraz Redshift CPU, czyli trzy aplikacje w jednej subskrypcji. ZBrush for iPad: aplikacja bazowa jest darmowa, a pełne funkcje kosztują 9,99 USD miesięcznie lub 89,99 USD rocznie. Wersje 2026.0 (wrzesień 2025) i 2026.1 (grudzień 2025) — [CG Channel: ZBrush 2026.1](https://www.cgchannel.com/2025/12/maxon-releases-zbrush-2026-1-and-zbrush-for-ipad-2026-1/); [CG Channel: ZBrush 2026.0](https://www.cgchannel.com/2025/09/maxon-releases-zbrush-2026-0-and-zbrush-for-ipad-2026-0/) (snippet)

**Nomad Sculpt**
- Wersja desktopowa (Windows/macOS) kosztuje około 35 USD za licencję. Wersje mobilne mają różne ceny w sklepach — [SoftwareFinder](https://softwarefinder.com/design-software/nomad-sculpt) (snippet, słaba jakość źródła)

### Inferences
- Dla indie i hobbystów w 2026 najtańsza ścieżka to Blender (0 zł) plus ewentualnie ZBrush (399 USD rocznie, razem z iPadem i Redshift CPU) albo Houdini Indie (około 300 USD rocznie, jeśli potrzebne VFX lub proceduralność).
- Blender 5.2 LTS (wsparcie do 2028) to rozsądny cel produkcyjny, bo add-ony najpewniej celują w LTS.
- Użytkownicy Modo powinni migrować (Blender, Plasticity, Maya), bo Modo nie będzie aktualizowane pod nowe systemy.

### Gaps
- Brak potwierdzenia u dostawcy cen Maya Indie (305 czy 330 USD), 3ds Max Indie i Houdini 2026 (strony autodesk.com i sidefx.com zablokowane lub nieprzeszukane).
- Nie znalazłem źródła na plan wydań Blendera po 5.2 (np. 5.3 lub 6.0 jesienią 2026).
- Licencja Blendera (GPL) to wiedza ogólna, w tej sesji niezweryfikowana źródłem.
- Brak aktualnych cen Nomad Sculpt na iOS/Android.
- Brak potwierdzenia, czy Cinema 4D lub Maxon zmieniły ceny bazowe w 2026, poza promocją z okazji 40-lecia.

---

## 2. Teksturowanie, UV, retopologia, tkaniny, voxel i low-poly: Substance, ArmorPaint, Marmoset, RizomUV, Marvelous Designer, Quad Remesher, Instant Meshes, Wings3D, Dust3D, MagicaVoxel, Blockbench

### Takeaway
Substance 3D ma dwa modele: subskrypcję Adobe (Texturing 24,99 USD miesięcznie) albo licencję wieczystą na Steam (Painter 2026 za 199,99 USD z aktualizacjami do marca 2027). Marmoset Toolbag 5 i RizomUV Indie nadal sprzedają licencje wieczyste. Marvelous Designer jest dostępny tylko w subskrypcji. Darmowe narzędzia niszowe (Instant Meshes, Dust3D, Wings3D) są w praktyce niemal porzucone lub utrzymywane minimalnie. MagicaVoxel i Blockbench są darmowe także do użytku komercyjnego.

### Cited Findings
**Adobe Substance 3D**
- Plan Texturing (Painter, Designer, Sampler, 100 GB chmury, 25 kredytów generatywnych) kosztuje 24,99 USD miesięcznie lub 249,99 USD rocznie. Collection (dodatkowo Modeler i Stager, 100 kredytów) kosztuje 59,99 USD miesięcznie lub 599,99 USD rocznie. Ceny obowiązują od 25.03.2025 — [Adobe Blog 02/2025](https://blog.adobe.com/en/publish/2025/02/20/substance-3d-innovations-pricing-updates); [photutorial](https://photutorial.com/adobe-substance3d-price)
- Na Steam Substance 3D Painter 2026 kosztuje 199,99 USD (CA$ 259,99, ¥22 000). Licencja wieczysta daje darmowe aktualizacje do marca 2027, potem zostaje kupiona wersja — [Deku Deals](https://www.dekudeals.com/items/substance-3d-painter-2026); [design-offset 03/2026](https://design-offset.com/20260318-adobe-substance-3d-on-steam/); [Adobe Community](https://community.adobe.com/t5/substance-3d-painter-discussions/how-do-steam-perpetual-licenses-work-exactly/td-p/15536613)
- Na forum Adobe pojawiło się pytanie, czy wersja 2027 też będzie wieczysta na Steam. Brak potwierdzenia — [Adobe Community](https://community.adobe.com/questions-59/will-the-2027-version-of-substance-painter-have-a-perpetual-license-on-steam-1630212)

**ArmorPaint**
- **[fetch]** Kod źródłowy jest otwarty na GitHub (armory3d/armortools). „Distributed binaries are paid to help with the project funding”, a gotowe buildy są na armorpaint.org/download — [GitHub armortools](https://github.com/armory3d/armortools)

**Marmoset Toolbag 5**
- Licencja Individual wieczysta kosztuje 395 USD (wszystkie aktualizacje 5.x gratis). Subskrypcja Individual od 18,99 USD miesięcznie, niezależna od wersji, z dostępem do Toolbag Library — [Marmoset shop](https://marmoset.co/shop); [Marmoset sub Individual](https://marmoset.co/?p=59629)

**RizomUV 2025**
- Edycja VS (gry i VFX) w wersji Indie (przychód poniżej 100 tys. EUR): 149,90 EUR wieczyście albo rent-to-own 14,90 EUR miesięcznie.
- Edycja RS (product design) w wersji Indie: 299,90 EUR wieczyście albo 29,90 EUR miesięcznie.
- Wersje Pro tylko w wynajmie: VS 34,90 EUR i RS 59,90 EUR miesięcznie.
- W wersji 2025 doszło pakowanie na GPU (tylko Windows + CUDA). Ceny bez zmian od 2024 — [CG Channel 09/2025](https://www.cgchannel.com/?p=170142); [Digital Production](https://digitalproduction.com/2025/09/15/rizomuv-2025-faster-packing-but-only-if-youre-on-windows-with-cuda/)

**Marvelous Designer**
- Personal kosztuje 39 USD miesięcznie lub 280 USD rocznie. Licencja studencka to jednorazowe 99 USD. Wersja 2025.2 (listopad 2025) działa tylko w wynajmie na Windows 10+, Linux i macOS 12+ — [CG Channel 11/2025](https://www.cgchannel.com/2025/11/clo-virtual-fashion-releases-marvelous-designer-2025-2/)

**Quad Remesher (Exoside, autoretopo)**
- Perpetual Pro (komercyjna): 109,90 USD. Perpetual Indie (NIEkomercyjna): 59,90 USD. Subskrypcja: 15,99 USD za 3 miesiące.
- Wersja na wszystkie programy (Blender, Maya, 3ds Max, Modo, Houdini…): 139,90 USD albo 22,99 USD za 3 miesiące. Ceny bez VAT — [Exoside](https://exoside.com/quadremesher/quadremesher-buy/)

**Instant Meshes**
- **[fetch]** Darmowy, „interactive field-aligned mesh generator” do autoretopologii (SIGGRAPH Asia 2015), działa na Windows, macOS i Linux. Algorytm wbudowano m.in. w Modo 10.2 — [GitHub wjakob/instant-meshes](https://github.com/wjakob/instant-meshes)
- „No updates since 2019”, oznaczony jako discontinued — [AlternativeTo](https://alternativeto.net/software/instant-meshes/about) (snippet)

**Wings3D**
- Darmowy, open source modeler subdivision na Linux, macOS i Windows, utrzymywany przez społeczność — [Ubunlog](https://en.ubunlog.com/wings-3d-modeling-application-open-source/)
- **[fetch]** Repozytorium dgud/wings na GitHubie nie ma opublikowanych wydań (wydania są dystrybuowane poza GitHubem) — [GitHub](https://github.com/dgud/wings/releases)

**Dust3D**
- **[fetch]** Ostatnie wydanie to 1.1.6 z 8.06.2022 — [GitHub dust3d](https://github.com/huxingyi/dust3d/releases). Intel DevMesh określa projekt jako „Published/In Market” — [Intel DevMesh](https://DevMesh.intel.com/projects/dust3d). **Sprzeczność**: według GitHuba projekt jest de facto nieaktywny od 2022.

**MagicaVoxel**
- Darmowy edytor voxeli z path-tracingiem. Wersja 0.99.7 (najnowsza według snippetu z 7.04.2025) jest darmowa do użytku osobistego i komercyjnego — [FileHorse](https://filehorse.com/download-magicavoxel-64)

**Blockbench**
- Darmowy modeler low-poly i box-modeling, standard dla Minecraft Marketplace, „free to use for any type of project, forever” — [AlternativeTo game dev list](https://alternativeto.net/lists/31790/game-dev) (snippet)

### Inferences
- Dla budżetowego pipeline'u gry: Blender + Substance Painter ze Steam (jednorazowo około 200 USD) + RizomUV VS Indie (150 EUR) albo darmowe UV w Blenderze + Quad Remesher (110 USD). To wychodzi taniej niż subskrypcja Adobe już po około 8 miesiącach.
- Instant Meshes i Dust3D nadal działają, ale nie warto planować na nich długoterminowo.

### Gaps
- Brak ceny binariów ArmorPaint (armorpaint.org zablokowane; historycznie około 16–20 EUR, niezweryfikowane).
- Brak cen Substance Designer i Sampler na Steam w wersji 2026 (najpewniej podobnie, niezweryfikowane).
- Brak licencji Blockbench i MagicaVoxel (open source czy freeware) potwierdzonej źródłem pierwotnym.
- Brak informacji o subskrypcji Marmoset w wersji rocznej i Studio.

---

## 3. CAD i hard-surface NURBS: Fusion, FreeCAD, Rhino, SketchUp, Shapr3D, Plasticity

### Takeaway
Darmowo do celów niekomercyjnych można używać Fusion Personal (z ostrymi limitami) i FreeCAD (open source, wersja 1.1 z marca 2026). Rhino 8 nadal sprzedaje się wieczyście (995 USD). Plasticity to tani CAD dla artystów (Indie 149 USD, z mostem do Blendera). SketchUp i Shapr3D działają w subskrypcji.

### Cited Findings
- **Autodesk Fusion – Personal Use**: tylko do użytku indywidualnego, domowego i niekomercyjnego. Limity: 10 aktywnych edytowalnych dokumentów, ograniczony eksport (STL dostępny, a według snippetu DWG, DXF, PDF, STEP, SAT i IGES niedostępne), rysunki 2D na jednym arkuszu, renderowanie tylko lokalne, bez Generative Design, Simulation i Extensions, udostępnianie tylko jako link do podglądu — [Autodesk blog](https://www.autodesk.com/products/fusion-360/blog/?p=90315); [Autodesk forum](https://forums.autodesk.com/t5/fusion-design-validate-document/specific-limitations-of-fusion-free-version/m-p/13204463); szczegóły eksportu pochodzą ze [Stanford Widescope](https://widescope.stanford.edu/is-fusion-360-free) (snippet, niepewne)
- **FreeCAD 1.1** wydano 24–25.03.2026. Zmiany: przezroczyste podglądy w Part Design, interaktywne uchwyty dla Fillet i Chamfer, oświetlenie 3-punktowe, ulepszony Assembly i FEM, nowa biblioteka narzędzi CAM, lepsza obsługa Wayland, geometria konstrukcyjna dostępna w każdym workbenchu — [FreeCAD blog](https://blog.freecad.org/2026/03/25/freecad-version-1-1-released/); [Phoronix](https://www.phoronix.com/news/FreeCAD-1.1-Released)
- **Rhino 8**: licencja komercyjna 995 USD wieczyście (cena bez zmian od lat), upgrade 595 USD, licencja studencka i edukacyjna 195 USD — [renderahouse](https://www.renderahouse.com/blog/rhino-pricing) [agregator]
- **SketchUp**: Go 129 USD rocznie, Pro 399 USD rocznie, Studio 819 USD rocznie (tylko Studio ma fotorealistyczny renderer). Plany miesięczne: Go 19,99 USD, Pro 99,99 USD — [visualizee.ai](https://visualizee.ai/blog/sketchup-pricing) [agregator]
- **Shapr3D**: Free; Solo 20,83 USD miesięcznie; Studio 37,5 USD miesięcznie; Enterprise według wyceny. Inne źródło wspomina tier „Pro 299 USD rocznie”, więc **rozbieżność i zapewne różne okresy** — [Capterra](https://www.capterra.com/p/184498/Shapr3D/pricing/); [toolradar](https://toolradar.com/tools/shapr3d/pricing) [agregatory]
- **Plasticity**: Indie 149 USD (do 2 maszyn, 12 miesięcy aktualizacji, Blender Bridge); Studio 299 USD (4 maszyny, xNURBS, Align, Square, Rebuild Face, dostęp do bet). Odnowienie na 12 miesięcy: Indie 100 USD (normalnie 175 USD), Studio 175 USD (normalnie 300 USD). Licencja jest wieczysta, a aktualizacje płatne — [Plasticity docs](https://doc.plasticity.xyz/getting-started/license-types-and-features); [Plasticity renew](https://api.plasticity.xyz/renew)

### Inferences
- Do druku 3D i hobbystycznego CAD w 2026: FreeCAD 1.1 (bez limitów i bez ryzyka zmian licencji) albo Fusion Personal (wygodniejszy, ale limit 10 dokumentów i brak komercji).
- Do hard-surface pod gry: Plasticity Indie z eksportem do Blendera.

### Gaps
- Nie zweryfikowałem u Autodesk, czy eksport STEP w Fusion Personal jest faktycznie zablokowany w 2026 (snippety są sprzeczne co do szczegółów).
- Brak aktualnej ceny SketchUp Free (web) i jej limitów.

---

## 4. Fotogrametria i skanowanie: RealityScan/RealityCapture, Meshroom, Polycam, Luma

### Takeaway
Od czerwca 2025 RealityCapture nazywa się RealityScan 2.0 i jest darmowy bez ograniczeń funkcji dla firm z przychodem poniżej 1 mln USD. Meshroom 2025.1 to darmowa alternatywa open source z wtyczkami (m.in. Gaussian Splatting). Polycam to aplikacja mobilna w modelu freemium (Pro 19,99 USD miesięcznie).

### Cited Findings
- **RealityScan 2.0** (czerwiec 2025): to dawny RealityCapture desktop, połączony marką z mobilnym RealityScan. Nowości: maskowanie AI, lepsze wyrównywanie, narzędzia kontroli jakości, obsługa lotniczego LiDAR — [RealityScan news](https://www.realityscan.com/news/realityscan-20-new-release-brings-powerful-new-features-to-a-rebranded-realitycapture); [All3DP](https://all3dp.com/4/realitycapture-is-now-realityscan-its-free-and-has-powerful-new-ai-features/)
- Licencja RealityScan: darmowy dla studentów, edukatorów oraz osób i firm z przychodem brutto poniżej 1 mln USD w ostatnich 12 miesiącach, bez ograniczeń funkcji. Powyżej progu kosztuje 1 250 USD za stanowisko rocznie (Epic Developer Portal, 30-dniowy trial). Starsze licencje RC Enterprise sprzed 23.04.2024 obejmują wersje 1.4 i 1.5 bez dopłat — [Radiance Fields](https://radiancefields.com/realityscan-2-0-released); [Wikipedia RealityCapture](https://en.wikipedia.org/wiki/RealityCapture)
- **Meshroom 2025.1.0** (18.08.2025, AliceVision 3.3.0): nowa architektura wtyczek i pełny węzłowy toolbox. Pipeline'y obejmują fotogrametrię, camera tracking, panoramy HDR, meshing LiDAR, RAW→EXR, rekonstrukcję obiektów i turntable oraz photometric stereo. Doszedł plugin segmentacji AI, a przez MeshroomHub eksperymentalnie Gaussian Splatting, monocular depth i optical flow — [MPC](https://www.mpcvfx.com/en/news/mpc-celebrates-the-release-of-meshroom-2025-1-0/); [GitHub release](https://github.com/alicevision/Meshroom/releases/tag/v2025.1.0); [Digital Production](https://digitalproduction.com/2025/08/20/meshroom-2025-1-templates-plugins-and-photometric-stereo/)
- **Polycam** (2026): Free; Plus 6,99 USD miesięcznie lub 79,99 USD rocznie; Pro 19,99 USD miesięcznie lub 199,99 USD rocznie. Pro daje nielimitowaną fotogrametrię i Gaussian Splats, ponad 12 formatów eksportu (OBJ, STL, FBX…), do 2 000 zdjęć na skan i do 1 000 zdjęć na splat — [subger](https://subger.com/en/service/polycam) [agregator]; [TrustRadius](https://www.trustradius.com/products/polycam/reviews)
- **Luma AI**: Genie 1.0 (text-to-3D) ogłoszono razem z rundą Series B na 43 mln USD (styczeń 2024) — [Maginative](https://www.maginative.com/article/luma-ai-raises-43m-series-b-and-releases-genie-1-0/); [Radiance Fields](https://radiancefields.com/luma-ai-announces-series-b-raise-and-genie-update)

### Inferences
- Dla indie w Polsce RealityScan 2.0 to najlepszy darmowy wybór (Windows + NVIDIA). Meshroom jest dla Linux/open source.
- Polycam opłaca się, jeśli skanuje się telefonem.

### Gaps
- Nie zweryfikowałem obecnego statusu skanowania NeRF i Gaussian w Luma oraz aplikacji Luma 3D Capture. Źródła mówią głównie o Genie, a Luma w 2025–2026 skupia się na wideo AI (Dream Machine). Tego nie udało się potwierdzić.
- Licencja Meshroom (MPL-2.0) to wiedza ogólna, niezweryfikowana w tej sesji.

---

## 5. Najważniejsze add-ony do Blendera 2025–2026 i ceny na Superhive

### Takeaway
Blender Market zmienił nazwę na **Superhive** w kwietniu 2025 (ponad 66 tys. produktów). Kluczowe płatne add-ony mieszczą się w przedziale około 20–130 USD jednorazowo: HardOps i BoxCutter, Fluent, MESHmachine, DECALmachine, Geo-Scatter, Botaniq, Flip Fluids, RetopoFlow 4, Auto-Rig Pro, UVPackmaster. Darmowe narzędzia jak Sverchok są aktywne (wsparcie do Blendera 5.1). Animation Nodes w praktyce zatrzymało się na Blenderze 4.2 LTS. Od 2025 add-ony Blendera żyją na platformie Extensions, a stare repozytorium blender-addons zostało zarchiwizowane.

### Cited Findings
**Platforma**
- Blender Market zmienił nazwę na Superhive w kwietniu 2025, bo nie jest częścią Blender Foundation. Ma ponad 66 397 produktów — [Superhive: rename post](https://superhivemarket.com/posts/beyond-business-as-usual-a-new-name-for-blender-market); [Superhive about](https://superhivemarket.com/page/about). Letnia wyprzedaż 2026 dawała 25% rabatu — [Superhive Summer Sale 2026](https://superhivemarket.com/posts/superhive-summer-sale-2026-25-off-the-best-blender-add-ons-assets)
- **[fetch]** Repozytorium github.com/blender/blender-addons zarchiwizowano 9.05.2025 (read-only) — [GitHub](https://github.com/blender/blender-addons)

**Add-ony płatne**
- **HardOps / BoxCutter**: Ultimate Bundle za 38 USD. Każdy osobno około 20 USD — [Superhive bundle](https://superhivemarket.com/products/hard-ops--boxcutter-ultimate-bundle); [BlenderNation Bazaar](https://bazaar.blendernation.com/listing/hard-ops-boxcutter-ultimate-bundle/) (snippet, cena mogła się zmienić)
- **Fluent** (CG Thoughts): 20 USD. Fluent: Power Trip: 29,90 USD — [Gumroad Fluent Power Trip](https://cgthoughts.gumroad.com/l/fluent_power_trip); [Superhive CG Thoughts](https://superhivemarket.com/creators/cg-thoughts)
- **MESHmachine** (MACHIN3): 44,99–344,99 USD zależnie od licencji. **DECALmachine**: 54,99–454,99 USD — [Superhive MACHIN3](https://superhivemarket.com/creators/machin3); [machin3.io](https://machin3.io/DECALmachine)
- **Botaniq** (polygoniq, roślinność): Starter 1,99 USD (około 4% assetów), Lite 49,99 USD (około 42%), Full 129 USD, Studio od 249,99 USD. Wersja 7.1 z sierpnia 2025 jest kompatybilna z Geo-Scatter — [Digital Production](https://digitalproduction.com/2025/08/11/botaniq-7-1-plants-global-reach-in-blender/); [polygoniq docs](https://docs.polygoniq.com/botaniq/7.2.0/endnotes/release_log/)
- **Geo-Scatter 5.6**: 99 USD (1 użytkownik, komercyjnie), 299 USD (2–6 użytkowników) — [Superhive Geo-Scatter](https://superhivemarket.com/products/scatter)
- **FLIP Fluids**: 76 USD jednorazowo, z przyszłymi aktualizacjami. **Uwaga**: cena pochodzi ze starszego źródła (BlenderNation 2018) i nie została zweryfikowana na 2026 — [BlenderNation 2018](https://www.blendernation.com/2018/05/03/add-on-flip-fluids/); [Superhive Flip Fluids](https://superhivemarket.com/products/flipfluids/versions)
- **RetopoFlow 4.0** (Orange Turbine): pierwsze oficjalne wydanie 20.10.2025. Cena personal/commercial około 85,99–86 USD (snippet pokazuje też 59,99 USD na Superhive, zapewne promocja). Small Team (2–5 osób) 152 USD, Team 426 USD, Studio 1 286 USD — [CG Channel](https://www.cgchannel.com/?p=171061); [80.lv](https://80.lv/articles/retopoflow-4-for-blender-released); [Superhive](https://superhivemarket.com/products/retopoflow/versions)
- **Auto-Rig Pro**: Lite 25 USD (sam rdzeń), Full 50 USD (Smart, eksportery FBX/glTF pod Unreal i Unity, Remap do retargetingu) — [Superhive ARP FAQ](https://superhivemarket.com/products/auto-rig-pro/faq)
- **UVPackmaster 3** (GPU packer UV): licencja dożywotnia z aktualizacjami. Dawniej 39 USD za stanowisko i 119 USD (2–5 osób). Nowsze ceny to 44 USD za stanowisko i 159 USD za licencję Studio — [BlenderNation Bazaar](https://bazaar.blendernation.com/listing/uvpackmaster-3-gpu-accelerated-fully-featured-uv-engine/)
- **Quad Remesher bridge**: płatny, ceny w sekcji 2 — [Exoside](https://exoside.com/quadremesher/quadremesher-buy/)

**Darmowe**
- **Sverchok** **[fetch]**: wersja 1.4.0, wspiera Blender od 3.6 do 5.1. Strona release podaje datę 5.03.2025, ale wsparcie 5.1 (wydanego w marcu 2026) sugeruje późniejszą aktualizację, więc data jest **niepewna**. Nowości: węzły Spyrrow Nester, Straight Skeleton, DXF import/export i inne — [GitHub Sverchok releases](https://github.com/nortikin/sverchok/releases)
- **Animation Nodes** **[fetch]**: ostatnie wydanie to v2.3 „for Blender 4.2 LTS” (25 stycznia, rok nieoznaczony). Brak wydań dla Blendera 5.x — [GitHub Animation Nodes releases](https://github.com/JacquesLucke/animation_nodes/releases)
- **BlenderKit** (add-on i biblioteka): 92 565 assetów, z czego około 50% (46 152) darmowe. Full Plan daje pełną bibliotekę, 2 GiB prywatnego miejsca i dodatkowe add-ony. Wiosną 2026 była promocja -25% — [BlenderKit](https://www.blenderkit.com/); [BlenderKit Spring Sale 2026](https://www.blenderkit.com/articles/springsale2026)

### Inferences
- Startowy zestaw hard-surface to około 60–130 USD (HardOps/BoxCutter 38 USD + Fluent 20 USD albo MESHmachine 45 USD). Zestaw do środowisk to około 230 USD (Geo-Scatter 99 USD + Botaniq Full 129 USD).
- Animation Nodes należy uznać za porzucony na rzecz Geometry Nodes, które w 5.2 dostały m.in. fizykę.

### Gaps
- Nie zweryfikowałem (superhivemarket.com zablokowane) aktualnych cen z października 2026 dla Flip Fluids (wersja 1.8.x), HardOps i BoxCutter osobno ani Fluent.
- Brak źródła w tej sesji na status Rigify i Node Wrangler. Z wiedzy ogólnej: są wbudowanymi „core add-ons” w Blenderze 4.2+, darmowe na GPL, ale to niezweryfikowane.
- Brak ceny BlenderKit Full Plan.
- Brak danych o Poliigon (cena subskrypcji, add-on do Blendera).
- Brak ceny i wersji DECALmachine i MESHmachine na Blender 5.x (kompatybilność niepotwierdzona).

---

## 6. Renderery: Cycles, EEVEE, Redshift, Octane, V-Ray, Arnold, Karma, Unreal, Marmoset

### Takeaway
Cycles i EEVEE są darmowe w Blenderze. Spośród komercyjnych silników najtaniej wypada Octane: wersja Prime za darmo na 1 GPU, z obsługą Blendera, a Studio+ za około 240 EUR rocznie. Redshift kosztuje około 289 USD rocznie albo jest w Maxon One, a Redshift CPU w subskrypcji ZBrush. Arnold standalone to około 430 USD rocznie albo jest w Maya i 3ds Max. V-Ray Solo kosztuje około 540 USD rocznie. Karma jest wliczona w Houdini.

### Cited Findings
- **Cycles (Blender 5.0/5.2)**: pass Render Time, Portal Depth light pass, lepszy denoising OptiX (5.0), texture cache dla scen z dużą liczbą tekstur (5.2) — [GIGAZINE](https://wbgsv0a.gigazine.net/gsc_news/en/20251119-blender-5-0); [OSArch 5.2](https://osarch.org/2026/07/15/blender-5-2-lts-released/)
- **Redshift**: 289 USD rocznie standalone albo 49 USD miesięcznie; wliczony w Maxon One. Działa w C4D, Maya, Houdini, Blenderze i 3ds Max — [superrendersfarm](https://superrendersfarm.com/blog/news/best-3d-rendering-software/) [agregator]. Redshift CPU wchodzi w subskrypcję ZBrush — [CG Channel](https://www.cgchannel.com/2025/12/maxon-releases-zbrush-2026-1-and-zbrush-for-ipad-2026-1/)
- **Arnold**: wliczony w subskrypcje Maya i 3ds Max. Standalone kosztuje 430 USD rocznie lub 55 USD miesięcznie — [superrendersfarm](https://superrendersfarm.com/blog/news/best-3d-rendering-software/) [agregator]
- **V-Ray** (Chaos): tylko subskrypcja. Solo kosztuje około 540 USD rocznie w 2026 — [myarchitectai](https://www.myarchitectai.com/blog/vray-pricing); [renderahouse](https://www.renderahouse.com/blog/vray-pricing) [agregatory]. Superrendersfarm podaje około 38–55 USD miesięcznie zależnie od tieru (Solo, Premium, Enterprise)
- **Octane** (OTOY): darmowe edycje Prime (OctaneRender i Octane X) ograniczone do 1 GPU, z obsługą Blendera. Studio+ kosztuje 23,95 EUR miesięcznie lub 239,88 EUR rocznie. Promocje: Black Friday 2025 za 15,99 EUR miesięcznie, Studio+ 2026 za 16,65 EUR miesięcznie, z Greyscalegorilla Plus i kredytami Render Network. Studio+ obejmuje do 10 węzłów sieciowych i ponad 20 integracji DCC. Wersja OctaneRender 2025.4 wyszła w październiku 2025 — [OTOY news](https://home.otoy.com/render/octane-render/news); [CG Channel 10/2025](https://www.cgchannel.com/2025/10/otoy-releases-octanerender-2025-4/); [Render Network](https://rendernetwork.medium.com/exploring-render-network-2025-product-updates-0c3613caee01)
- **Karma (Houdini)**: Apprentice ma 1 licencję, Indie 2, Core i FX po 5 — [superrendersfarm](https://superrendersfarm.com/article/how-much-does-houdini-cost) [agregator]
- **Marmoset Toolbag 5** jako renderer i baker: ceny w sekcji 2 — [Marmoset](https://marmoset.co/shop)

### Inferences
- Dla użytkownika Blendera dodatkowy renderer zwykle się nie opłaca. Cycles i EEVEE pokrywają większość potrzeb, a Octane Prime jest darmową alternatywą GPU.

### Gaps
- Brak źródła w tej sesji o EEVEE Next. Z wiedzy ogólnej: przepisany EEVEE wszedł w Blenderze 4.2 LTS (lipiec 2024), ale to niezweryfikowane.
- Brak zweryfikowanych warunków licencyjnych Unreal Engine jako renderera (darmowy dla treści liniowych i małych firm, opłata seat dla dużych firm nie-gamedev). Wyszukiwanie przerwał limit.
- Brak oficjalnych cen V-Ray, Arnolda i Redshift ze stron dostawców.

---

## 7. Biblioteki assetów i tekstur: Poly Haven, ambientCG, Sketchfab, Fab/Megascans, BlenderKit, TurboSquid, CGTrader, Kenney, Mixamo

### Takeaway
CC0 (darmowe, także komercyjnie, bez atrybucji) to Poly Haven, ambientCG i Kenney. Darmowe Megascans skończyły się 31.12.2024. Od 2025 są płatne na Fab (od 0,99 USD za asset), z częścią darmową, a zasoby odebrane w 2024 zostają na zawsze. Sklep Sketchfab zamknięto i przeniesiono do Fab. Mixamo jest nadal darmowe, ale w trybie utrzymania i z awariami.

### Cited Findings
- **Poly Haven**: CC0, ponad 780 tekstur i ponad 980 HDRI, darmowe API. **ambientCG**: CC0, ponad 2 000 materiałów i ponad 400 HDRI, darmowe API. **Kenney**: CC0, gotowe modele i tekstury do gier — [Cinevva: free textures guide 2026](https://app.cinevva.com/guides/free-textures-hdris-materials); [Cinevva: game assets guide](https://app.cinevva.com/guides/game-assets-guide) (źródło wtórne)
- **Fab / Quixel Megascans**: Fab wystartował w październiku 2024 i łączy Quixel, Sketchfab, UE Marketplace i ArtStation Marketplace. Megascans były darmowe dla wszystkich do 31.12.2024 na licencji Fab Standard (ponad 17 000 assetów do odebrania jednym kliknięciem). Od 2025 są płatne, od 0,99 USD za pojedynczy asset, z częścią darmowej treści. To, co odebrano, „can use forever” — [Unreal Engine blog](https://www.unrealengine.com/blog/fab-content-marketplace-launches-in-october-publishing-portal-opens-today?lang=en); [CG Channel 10/2024](https://www.cgchannel.com/2024/10/epic-games-has-made-megascans-free-to-all-but-only-until-the-end-of-2024/); [Digital Production](https://digitalproduction.com/2024/09/19/quixels-megascans-no-longer-free-after-2024/)
- **Sketchfab**: sklep zamknięty, sprzedawcy migrują do Fab (modele CC-BY i Standard). Darmowe pobieranie miało działać do 2025, a „free licensing will be removed from Sketchfab later in 2025”. Muzea i naukowcy protestowali (petycja na change.org) — [Sketchfab blog](https://sketchfab.com/blogs/community/sketchfab-update-what-you-need-to-know-now-that-fabs-live/); [80.lv](https://80.lv/articles/historians-are-concerned-about-epic-games-sketchfab-to-fab-migration/); [Fabbaloo](https://www.fabbaloo.com/news/epic-games-phases-out-sketchfab-in-2025-launches-unified-fab-marketplace)
- **BlenderKit**: 92 565 assetów, około 50% darmowych, Full Plan w subskrypcji (szczegóły w sekcji 5) — [BlenderKit](https://www.blenderkit.com/)
- **TurboSquid** (Shutterstock): setki tysięcy modeli royalty-free, do 80% prowizji dla autorów w programie SquidGuild. **CGTrader**: prowizje autorów około 60–85% zależnie od poziomu — [Tripo blog](https://www.tripo3d.ai/blog/best-sites-to-sell-3d-models-in-2025) (źródło konkurencyjnej firmy, niska wiarygodność); [licenseorg](https://licenseorg.com/compare/cgtrader-vs-turbosquid)
- **Mixamo** (Adobe): we wrześniu 2026 nadal działa i jest darmowe z Adobe ID, ale jest w trybie utrzymania i bez nowych funkcji od lat. Od 16.06.2025 zgłaszano awarie logowania i pobierania, które utrzymywały się przez około 12 miesięcy. Obsługuje tylko humanoidy dwunożne — [Cinevva: Mixamo 2026](https://app.cinevva.com/guides/free-character-animations-rigging) (źródło wtórne)

### Inferences
- Do projektów komercyjnych bez ryzyka licencyjnego najlepsze są Poly Haven, ambientCG i Kenney (CC0). Megascans opłacają się tylko punktowo albo jeśli ktoś odebrał bibliotekę przed końcem 2024.
- Mixamo nie powinno być krytycznym elementem pipeline'u. Alternatywa w Blenderze to Auto-Rig Pro albo Rigify.

### Gaps
- Brak aktualnego (2026) stanu darmowych modeli na Sketchfab, czyli czy pobieranie CC zostało faktycznie wyłączone.
- Brak informacji o ewentualnej subskrypcji Fab na Megascans w 2026.
- Brak cen i licencji TurboSquid i CGTrader od kupującego (Standard vs Editorial) ze źródeł pierwotnych.

---

## 8. Generowanie 3D przez AI (2025–2026): Meshy, Tripo, Rodin, Luma Genie, CSM, Hunyuan3D, TRELLIS, Stable Fast 3D/SPAR3D, Kaedim, Spline AI

### Takeaway
Komercyjne SaaS mają darmowe tiery (zwykle bez prawa komercyjnego i z ograniczonym pobieraniem), a płatne plany zaczynają się od około 20–25 USD miesięcznie (Meshy Pro, Tripo Pro, Rodin Creator). Kaedim (z udziałem człowieka) jest drogi: od 400 USD miesięcznie. Spośród modeli otwartych najbardziej liberalny jest **TRELLIS.2** (Microsoft, 12/2025, licencja MIT, wymaga co najmniej 24 GB VRAM). **Hunyuan3D 2.x** ma otwarte wagi, ale licencja **nie obowiązuje w UE, Wielkiej Brytanii i Korei Płd.**, co jest istotne dla użytkownika z Polski. Stable Fast 3D i SPAR3D są darmowe do 1 mln USD przychodu.

### Cited Findings
- **Meshy** (sierpień 2026): plany Free, Pro 20 USD miesięcznie (16 USD przy płatności rocznej), Premium 40 USD, Studio 60 USD, Ultra 100 USD. Free daje 100 kredytów miesięcznie i 1 zadanie naraz, a modeli Meshy 6 nie można na nim pobrać (tylko Meshy 5). Pro daje 1 000 kredytów i do 10 zadań. Koszty: text- i image-to-3D 20 kredytów (Meshy 6) albo 10 (Meshy 5), AI texturing 10 kredytów — [Meshy docs: Pricing](https://docs.meshy.ai/en/webapp/pricing); [costbench](https://costbench.com/software/ai-3d-generation/meshy/) [agregator]
- **Tripo AI**: plany Free (niekomercyjny), Pro 19,90 USD miesięcznie (z prawami komercyjnymi), Max 89,90 USD, Team 109,90 USD. Według costbench najwyższy plan podrożał w maju 2026 (z 83,94 do 109,90 USD), a w sierpniu 2026 do 329,70 USD miesięcznie — [costbench Tripo](https://costbench.com/software/ai-3d-generation/tripo-ai/); [costbench changelog 08/2026](https://costbench.com/changelog/tripo-ai-price-increase-2026-08/) [agregator]
- **Rodin (Hyper3D), Gen-2**: rozliczenie w Creative Units. Plany Free (płatność za pobrany model), Education 12 USD, Creator 24 USD, Business 120 USD miesięcznie oraz Enterprise. Na platformie Layer Gen-2 kosztuje 30 CU za generację — [hyper3d.ai pricing](https://hyper3d.ai/pricing); [costbench Rodin (07/2026)](https://costbench.com/software/ai-3d-generation/rodin-hyper3d/); [Layer](https://www.layer.ai/models/hyper3d-rodin-gen-2)
- **Hunyuan3D** (Tencent):
  - Kolejne wersje: 1.0 (listopad 2024), 2.0 (21.01.2025), 2.5 (23.04.2025), 2.1 (13.06.2025, **[fetch]**: „full model weights and training code”, produkcyjny PBR), 3.0 (2025) — [GitHub Hunyuan3D-2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1); [aiwiki](https://aiwiki.ai/wiki/hunyuan_3d); [GIGAZINE](https://gigazine.net/gsc_news/en/20250122-tencent-hunyuan3d-2-3d-models)
  - Licencja **[fetch]**: Tencent Hunyuan 3D 2.1 Community License „DOES NOT APPLY IN THE EUROPEAN UNION, UNITED KINGDOM AND SOUTH KOREA”. Powyżej 1 mln MAU trzeba wystąpić o licencję do Tencent — [GitHub LICENSE](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1/blob/main/LICENSE); [HF Hunyuan3D-2 LICENSE](https://huggingface.co/tencent/Hunyuan3D-2/blob/main/LICENSE)
  - Według aiwiki wersja 3.0 obsługuje rozdzielczość geometrii 1536³ — [aiwiki](https://aiwiki.ai/wiki/hunyuan_3d). **Uwaga**: snippet KuCoin o przejściu „HunYuan 3.0” (295B MoE) na Apache 2.0 dotyczy najpewniej innego modelu (językowego lub obrazowego), a nie Hunyuan3D. Nie należy go traktować jako licencji Hunyuan3D — [KuCoin](https://www.kucoin.com/news/flash/tencent-opens-source-huanyuan-3-0-with-apache-2-0-license-halves-hallucination-rate)
- **TRELLIS.2** (Microsoft, około 18.12.2025): 4B parametrów, struktura „O-Voxel”, image-to-3D z pełnym PBR (base color, roughness, metallic, opacity). Czas generacji na H100: około 3 s (512³), około 17 s (1024³), około 60 s (1536³). **[fetch]** Licencja MIT, wymaga GPU NVIDIA z co najmniej 24 GB VRAM, eksport GLB — [GitHub TRELLIS.2](https://github.com/microsoft/TRELLIS.2); [HF TRELLIS.2-4B](https://huggingface.co/microsoft/TRELLIS.2-4B/blob/main/README.md); [ComfyUI Wiki](https://comfyui-wiki.com/en/news/2025-12-18-microsoft-trellis2-3d-generation)
- **Stable Fast 3D (SF3D)** (oparty na TripoSR, mesh z UV i teksturą) oraz **SPAR3D** (z edycją chmury punktów): oba na Stability AI Community License, czyli darmowe komercyjnie do 1 mln USD rocznego przychodu (wymagana rejestracja). Powyżej trzeba mieć licencję Enterprise — [HF stable-fast-3d](https://huggingface.co/stabilityai/stable-fast-3d); [The Decoder](https://the-decoder.com/stability-ais-new-3d-model-aims-for-real-time-generation/)
- **Kaedim**: Trial 50 USD jednorazowo (5 kredytów, 7 dni, potem automatycznie przechodzi na Indie), Indie 400 USD miesięcznie (20 kredytów), Pro 1 200 USD miesięcznie (60 kredytów), Enterprise według wyceny. W cenie retopologia, UV i tekstury — [costbench Kaedim](https://costbench.com/software/ai-3d-generation/kaedim/); [toolradar](https://toolradar.com/tools/kaedim/pricing) [agregatory]
- **CSM (Common Sense Machines, Cube)**: 0–2 000 USD miesięcznie. Na początku 2026 doszedł pipeline z topologią opartą o części — [costbench CSM vs Luma](https://costbench.com/compare/csm-vs-luma-genie/) [agregator, niska pewność]
- **Luma Genie**: Free, Plus 30 USD, Pro 100 USD miesięcznie według costbench, który twierdzi też, że Genie 3D „released August 2025”. **Sprzeczność**: Genie 1.0 wydano już w styczniu 2024 — [costbench](https://costbench.com/software/ai-3d-generation/luma-genie/) vs [Maginative](https://www.maginative.com/article/luma-ai-raises-43m-series-b-and-releases-genie-1-0/)
- **Spline** (narzędzie 3D w przeglądarce z AI): Free (z watermarkiem), Starter 15 USD, Professional 25 USD, Professional + AI 30 USD miesięcznie (2 000 kredytów AI, text-to-3D), Enterprise. Według costbench najwyższy plan podniesiono do 70 USD w sierpniu 2026, a we wrześniu 2026 dodano nowy plan. Rabat przy płatności rocznej około 17–20% — [costbench Spline AI](https://costbench.com/software/ai-3d-generation/spline-ai/); [changelog 08/2026](https://costbench.com/changelog/spline-ai-price-increase-2026-08/) [agregator]

### Inferences
- Dla użytkownika w Polsce i UE: **Hunyuan3D 2.x lokalnie jest prawnie problematyczne**, bo licencja wyłącza terytorium UE. Bezpieczniejsze są TRELLIS.2 (MIT) i SF3D/SPAR3D (Community License do 1 mln USD).
- Lokalne modele open source wymagają mocnego GPU (TRELLIS.2: co najmniej 24 GB VRAM). Dla słabszego sprzętu realną opcją jest SaaS (Meshy, Tripo lub Rodin za około 20–25 USD miesięcznie).
- Darmowe tiery SaaS zwykle nie dają praw komercyjnych (wprost potwierdzone dla Tripo Free) albo ograniczają pobieranie (Meshy 6 na Free).
- Ceny AI-3D w 2026 szybko się zmieniają (podwyżki Tripo i Spline w maju i sierpniu 2026), więc trzeba podawać datę stanu.

### Gaps
- Nie potwierdziłem, czy Hunyuan3D 2.5 i 3.0 mają otwarte wagi, czy są tylko w chmurze i API (2.1 ma otwarte wagi). Wyszukiwanie przerwał limit.
- Brak licencji TRELLIS v1 (z wiedzy ogólnej MIT, niezweryfikowane).
- Brak oficjalnych (nie agregatorowych) cen Tripo, Kaedim, CSM, Spline i Luma.
- Status Luma Genie w 2026 jest niepewny (możliwy brak rozwoju po pivocie Luma na wideo).

---

## 9. Materiały do nauki: Blender Guru, CG Cookie, Blender Studio, Grant Abbitt, YouTube

### Takeaway
Darmowy standard to „Donut” Blender Guru, odświeżony dla Blendera 5.0 w listopadzie 2025. Płatne platformy: CG Cookie (27,99 USD miesięcznie lub 399 USD rocznie, w promocjach 199 USD rocznie, z kursem CORE dla 5.2 LTS) i Blender Studio (od 11,50 EUR miesięcznie lub 119,88 EUR rocznie, wspiera Blender Foundation).

### Cited Findings
- **Blender Guru (Andrew Price)**: „Blender 5.0 Beginner Donut Tutorial” z 26.11.2025. Darmowy na YouTube i blenderguru.com, obejmuje modelowanie, teksturowanie, oświetlenie i render. Części wychodziły co drugi dzień, a później powstała wersja długa — [Blender Guru](https://www.blenderguru.com/posts/blender-donut-v5-tutorial); [80.lv](https://80.lv/articles/blender-guru-launches-updated-donut-tutorial-for-blender-5-0)
- **CG Cookie**: 399 USD rocznie albo 27,99 USD miesięcznie. Roczne członkostwo zawiera kurs CORE 5.2 LTS (osobno 199,99 USD). Letnia wyprzedaż 2026 (22–30.06) obniżyła roczne członkostwo do 199 USD — [CG Cookie pricing guide](https://support.cgcookie.com/article/74-pricing-guide); [Summer Sale 2026](https://support.cgcookie.com/article/347-summer-annual-membership-sale-2026)
- **Blender Studio** (blender.org/studio, oficjalna platforma Blender Foundation): od 11,50 EUR miesięcznie lub 119,88 EUR rocznie — [subger](https://subger.com/en/service/blender-studio) [agregator]
- CG Cookie publikuje też darmowe artykuły i przeglądy nowości (np. Blender 5.0) — [CG Cookie](https://cgcookie.com/posts/blender-5-0-release-what-do-we-know-and-what-to-look-forward-to)
- Kursy kanałów skupionych na HardOps i BoxCutter (Blender Bros) są sprzedawane osobno od samych add-onów — [Blender Bros](https://www.blenderbros.com/the-ultimate-guide-to-hard-ops-boxcutter-2-0)

### Inferences
- Ścieżka 0 zł: Donut 5.0, potem darmowe kanały YouTube, potem Blender Manual. Płatną platformę najtaniej kupić w promocji (CG Cookie około 199 USD rocznie w czerwcu).

### Gaps
- Brak danych z tej sesji o Grancie Abbitcie (YouTube, kursy na Udemy i GameDev.tv, ceny) oraz o innych kanałach (np. Ryan King Art, Josh Gambrell, Polygon Runway, CG Boost, Default Cube). Wyszukiwanie przerwał limit. Nazwy kanałów pochodzą z wiedzy ogólnej i są niezweryfikowane.
- Brak typowych przedziałów cen kursów Udemy, GameDev.tv i Gumroad w 2026.
