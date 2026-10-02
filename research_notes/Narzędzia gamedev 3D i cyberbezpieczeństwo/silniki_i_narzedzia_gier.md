# Silniki i narzędzia do tworzenia gier (stan: 2 października 2026)

Jak czytać źródła: większość domen (unity.com, construct.net, gdevelop.io, defold.com, wikipedia, itsfoss, roblox.com, wnhub.io itd.) była zablokowana dla WebFetch przez proxy, więc większość faktów pochodzi WYŁĄCZNIE ZE SNIPPETÓW WYSZUKIWARKI — oznaczone **[S]**. Fakty sprawdzone bezpośrednio w źródle pierwotnym przez git (tagi wydań na GitHubie, LICENSE w repozytorium, repozytoria stron godot-website i bevy-website) mają oznaczenie **[P]**. Daty tagów to daty commitów otagowanych w git (≈ data wydania). Agregatory cen (toolradar, subger, zoftwarehub, capterra, costbench, cinevva, strayspark, tech-insider) są oznaczone **[A]** = mniej wiarygodne. Limit wyszukiwań w sesji (200) wyczerpał się w trakcie researchu, więc część pytań trafiła do sekcji „Gaps”.

## 1. Najważniejsze silniki: ceny, licencje i zmiany 2025–2026

### Takeaway
Na październik 2026: Unity jest za darmo do 200 tys. USD przychodu i finansowania (Personal), Pro kosztuje 2310 USD rocznie od 12.01.2026, a Runtime Fee jest anulowany. Unreal dalej pobiera 5% tantiem od przychodu brutto powyżej 1 mln USD w całym okresie sprzedaży, a przy jednoczesnej premierze w Epic Games Store tylko 3,5%. UE 5.8 (czerwiec 2026) to ostatnie duże wydanie UE5. Godot (MIT, darmowy) doszedł do wersji 4.7.2, a 4.8 jest w feature freeze. Kilka silników przeszło na pełne open source albo udostępniło kod źródłowy: Cocos 4 (MIT), kod s&box (MIT), runtime GMRT w GameMakerze (source-available). Większość silników niszowych (Bevy, Stride, O3DE, Fyrox, Defold) jest darmowa i bez tantiem.

### Cited Findings

**Unity (2D/3D/mobile/web/XR; własnościowy)**
- Unity 2026: od 12.01.2026 ceny Pro i Enterprise rosną o 5%. Pro w planie rocznym kosztuje 2310 USD za stanowisko (wcześniej 2200 USD), w miesięcznym 210 USD (wcześniej 200 USD). Nowa cena obowiązuje od pierwszego odnowienia po tej dacie. [S] — [Unity pricing updates](https://unity.com/products/pricing-updates); [80.lv](https://80.lv/articles/unity-announces-its-upcoming-2026-price-changes)
- Od Unity 6.3 Havok Physics nie wchodzi już w skład planów Pro, Enterprise ani Industry. Nadal działa w 2022 LTS i 6.0 LTS. [S] — [Unity pricing updates](https://unity.com/products/pricing-updates)
- Unity Version Control: w I kw. 2026 zniknęły opłaty za stanowiska przy hostingu w chmurze publicznej. Darmowy limit funkcji chmurowych pay-as-you-go wzrósł z 5 GB do 25 GB. [S] — [Unity pricing updates](https://unity.com/products/pricing-updates)
- Unity Personal pozostaje darmowy. Limit przychodów i finansowania podniesiono z 100 tys. do 200 tys. USD. W projektach na Unity 6 splash screen jest opcjonalny. Zmiany weszły w życie 1.01.2025. [S] — [MCV/UK](https://www.mcvuk.com/unity-raises-plus-revenue-cap-and-makes-splash-screen-optional/); [Unity Personal](https://unity.com/products/unity-personal)
- Historia Runtime Fee: strona unity.com/runtime-fee przekierowuje dziś na stronę „Changes to Unity subscription plans and pricing”. [S] — [unity.com/runtime-fee](https://unity.com/runtime-fee). Szczegółowe daty są w sekcji Gaps.
- Unity 6.3 LTS ukazało się 4.12.2025. To pierwsze LTS od 6.0. Ma 2 lata wsparcia, a dla Enterprise i Industry 3 lata. Dodaje Android XR (face tracking, object trackables) i wsparcie Nintendo Switch 2 od premiery konsoli. [S] — [Unity blog: 6.3 LTS](https://unity.com/blog/unity-6-3-lts-is-now-available)
- Unity AI: zestaw wprowadzony w Unity 6.2 (sierpień 2025) zastąpił Muse i Sentis. Składa się z Assistant (agent, który może np. masowo zmieniać nazwy albo rozmieszczać obiekty) i Generators (sprite'y, tekstury, animacje, dźwięk). Inference Engine jest darmowy. [S] — [CG Channel](https://www.cgchannel.com/?p=169508); [GameFromScratch](https://gamefromscratch.com/unity-6-2-beta-released/); [Digital Production](https://digitalproduction.com/2025/08/22/unity-6-2-welcomes-ai-but-pace-caution-user-liability-on-copyright/). Ceny są w sekcji 5.

**Unreal Engine 5 / UEFN (3D AAA, także mobile i VR; source-available, własnościowy EULA)**
- Gry płacą 5% tantiem od przychodu brutto produktu powyżej 1 mln USD w całym okresie sprzedaży. Pierwszy 1 mln USD jest zwolniony. Przychód z Epic Games Store nie wlicza się do podstawy. Studenci, nauczyciele, hobbyści i firmy z rocznym przychodem poniżej 1 mln USD używają silnika za darmo. [S] — [Unreal license](https://www.unrealengine.com/en-US/license)
- Zastosowania niegrowe w firmach z przychodem powyżej 1 mln USD rocznie: 1850 USD rocznie za stanowisko. Model obowiązuje od kwietnia 2024. [S] — [Epic blog](https://www.unrealengine.com/en-US/blog/we-are-updating-unreal-engine-twinmotion-and-realitycapture-pricing-in-late-april)
- „Launch Everywhere with Epic” (od 1.01.2025): tantiemy spadają z 5% do 3,5%, jeśli gra wychodzi w EGS wcześniej lub równocześnie z innymi sklepami na danej platformie (PC, Mac, Android). Obniżka obejmuje wszystkie platformy, łącznie z konsolami. Na iOS wymóg chwilowo zawieszono z powodu Core Technology Fee Apple. [S] — [GameFromScratch](https://gamefromscratch.com/unreal-engine-launch-everywhere-with-epic/); [Shacknews](https://shacknews.com/article/141630/epic-games-ue5-launch-everywhere)
- UE 5.7: Nanite Foliage, PCG i Substrate gotowe do produkcji, MetaHuman, asystent AI w edytorze. [S] — [CGPress](https://cgpress.org/archives/unreal-engine-5-7-released.html); [Guru3D](https://www.guru3d.com/story/unreal-engine-57-released-with-new-procedural-content-generation-and-more-features/). KONFLIKT dat: jeden snippet podaje premierę 5.7 na 19.05.2026, co jest mało prawdopodobne. Z mojej wiedzy 5.7 wyszło w listopadzie 2025, ale nie zweryfikowałem tego.
- UE 5.8: premiera ogłoszona na State of Unreal 2026 w Chicago, ok. 17–19.06.2026. Ma być ostatnim planowanym dużym wydaniem UE5, Epic przyspiesza prace nad UE6. [S] — [CGWorld.jp](https://cgworld.jp/flashnews/03-2606-ue5.8.html); [WN Hub](https://wnhub.io/news/engines/item-51157). Inny snippet podawał 29.07.2026, czyli wynik jest sprzeczny.
- UEFN/Fortnite: wypłaty dla twórców przekroczyły 1 mld USD. Próg padł w styczniu 2026, ogłoszono to na Unreal Fest w czerwcu 2026. Pula Engagement Payouts to ok. 40% przychodu netto Item Shopu. Od stycznia 2026 działają transakcje wewnątrz wysp (in-island transactions). Wyspy twórców mają podobno 47% czasu gry w Fortnite. [S][A] — [PocketGamer.biz](https://www.pocketgamer.biz/unreal-engine-for-fortnite-creator-payouts-surpass-1bn/); [tech-insider](https://tech-insider.org/ca/fortnite-creator-economy-1-billion-2026/)

**Godot (2D/3D/mobile/web/XR; MIT, w 100% darmowy)**
- Licencja MIT (tekst Expat, „Copyright (c) 2014-present Godot Engine contributors”). [P] — [godot LICENSE](https://github.com/godotengine/godot/blob/HEAD/LICENSE.txt)
- Daty wydań [P] wg źródeł strony godotengine.org: 4.5 (15.09.2025: stencil buffer, czytniki ekranu przez AccessKit, Shader Baker, WASM SIMD), 4.6 (26.01.2026, „All about your flow”: Jolt jako domyślna fizyka 3D, nowy motyw, swobodne dokowanie paneli, przepisane SSR, LibGodot), 4.7 (18.06.2026, „Lights, Camera, Action!”), 4.7.2 (18.08.2026). Seria 4.8 dev 1–7 trwa od 6.07.2026, a dev 7 z 29.09.2026 oznacza feature freeze. — [Godot 4.5](https://godotengine.org/article/godot-4-5-making-dreams-accessible/); [Godot 4.6](https://godotengine.org/article/godot-4-6-all-about-your-flow/); [Godot 4.7](https://godotengine.org/article/godot-4-7-lights-camera-action/); [4.8 dev 7](https://godotengine.org/article/dev-snapshot-godot-4-8-dev-7/); funkcje 4.5/4.6 [S]: [Phoronix](https://www.phoronix.com/news/Godot-4.5-Released), [Cinevva](https://app.cinevva.com/news/2026-01-10-godot-4-6-preview)
- Nowości 4.7: HDR (Windows, macOS, iOS, visionOS, Wayland), węzeł AreaLight3D, wirtualne joysticki, przygotowania pod raytracing w Vulkanie. [S] — [gamedev.net 4.7 beta](https://gamedev.net/news/2978-godot-47-beta-released/). Uwaga: snippet podawał datę 24.06; źródło pierwotne mówi 18.06.2026.
- Najnowszy tag stabilny to 4.7.2-stable. [P] — [godot tags](https://github.com/godotengine/godot/tags)
- Wpis „Godot usage and engine growth” (6.05.2026): każde wydanie ma ok. 2 mln pobrań ze strony, społeczność podwoiła się w ostatnich latach, udział Godota w Global Game Jam i GMTK Jam stale rośnie. [P] — [Godot growth stats 2026](https://godotengine.org/article/godot-growth-stats-2026/)

**GameMaker (2D, PC/mobile/web/konsole; własnościowy, Opera)**
- Darmowy do użytku niekomercyjnego. Professional kosztuje jednorazowo 99,99 USD (komercyjne wydawanie poza konsolami). Enterprise do eksportu na konsole: ok. 80 USD miesięcznie albo 800 USD rocznie. Model obowiązuje od listopada 2023. [S] — [GameMaker get](https://gamemaker.io/get); [FAQ zmian z XI 2023](https://gamemaker.io/en/help/articles/november-2023-pricing-terms-change-faq); [TechRaptor](https://techraptor.net/gaming/news/gamemaker-free-non-commercial-use)
- GMRT (nowy runtime) wystartował 30.04.2026. Ma narzędzia CLI, przepływy AI oparte na Claude i lepsze 3D. Kod runtime'u na desktop, mobile i web ma być publicznie dostępny (source-available). Zapowiedziano obsługę JS, TS i C#. LTS 2026 ruszył w maju 2026, a jego cykl obejmuje 5 wydań do I kw. 2028. Runtime GMS2 jest uznany za kompletny funkcjonalnie i dostaje tylko poprawki. [S] — [GameMaker Spring 2026](https://gamemaker.io/blog/update-spring-2026); [LTS 2026](https://gamemaker.io/blog/lts-2026-release); [Opera press](https://press.opera.com/?p=3924); [GamingOnLinux](https://gamingonlinux.com/2026/04/gamemaker-is-launching-gmrt-a-new-modern-runtime-with-source-access)

**Defold (2D/lekkie 3D, mobile/web/konsole; darmowy, „Defold License 1.0”, licencja źródłowa oparta na Apache)**
- Licencja: „Defold License Version 1.0, May 2020”. [P] — [defold LICENSE](https://github.com/defold/defold/blob/HEAD/LICENSE.txt)
- 2026: seria 1.12.x (late_update(), throttling silnika, kształtowanie tekstu). 1.13.0 przyniosło Box2D API, morph targets i Vulkan jako domyślne API na Androidzie. 1.13.1 dodało komponent Light i instancjonowane modele, a ciepłe buildy są do 19% szybsze. [S] — [Defold H1 2026](https://defold.com/2026/06/30/Defold-H1-2026/); [gamedev.net Defold](https://gamedev.net/news/topic/defold/)
- Najnowszy stabilny tag to 1.13.2 (commit z 30.09.2026), w testach jest 1.14.0-beta. [P] — [defold tags](https://github.com/defold/defold/tags)

**Cocos Creator / COCOS 4 (2D/3D, mobile, mini-gry web/WeChat; MIT)**
- Cocos Creator 3.8 LTS dodał wsparcie HarmonyOS/OpenHarmony 4. 3.8.6 przyniosło m.in. Spine, Box2D i HarmonyOS Next. [S] — [HuaweiCentral](https://huaweicentral.com/cocos-creator-3-8-lts-brings-open-source-harmonyos-4-platform-support); [Cocos 3.8.6](https://www.cocos.com/en/post/f539c7888e620701228458d6b89b80c7)
- W listopadzie 2025 Cocos przejęła chińska firma SUD za 72 mln USD. Ok. dwa miesiące później (styczeń 2026) SUD wydał COCOS 4 na licencji MIT, bez ograniczeń komercyjnych. Silnik i edytor rozdzielono: „COCOS” oznacza teraz sam silnik. [S] — [It's FOSS](https://itsfoss.com/news/cocos-4-game-engine/); [TV Tokyo PR](https://www.tv-tokyo.co.jp/plus/external-pr/entry/48249.html)
- Repozytorium cocos-engine ma licencję MIT. [P] — [cocos-engine LICENSE](https://github.com/cocos/cocos-engine/blob/HEAD/LICENSE.md)

**O3DE (3D AAA/symulacje/robotyka; Apache-2.0 lub MIT; Linux Foundation)**
- „The default license for Open 3D Engine is the Apache License, Version 2.0” (z opcją MIT). [P] — [o3de LICENSE](https://github.com/o3de/o3de/blob/HEAD/LICENSE.txt)
- 25.05 (maj 2025): robotyka, stabilność. 25.10 (15.10.2025): instalatory mniejsze o 26% (Windows) i 40% (Linux), C++20, ponad 100 poprawek. [S] — [Linux Foundation](https://www.linuxfoundation.org/blog/open-3d-foundation-launches-o3de-25.05.0-release); [Digital Production](https://digitalproduction.com/2025/10/22/open-source-engine-o3de-hits-version-25-10/)
- Tag 2605.0 (commit z 27.05.2026), czyli O3DE 26.05 jest wydane. [P] — [o3de tags](https://github.com/o3de/o3de/tags)

**Stride (3D, C#/.NET; MIT; .NET Foundation)**
- Licencja MIT. [P] — [stride LICENSE](https://github.com/stride3d/stride/blob/HEAD/LICENSE.md)
- Stride 4.3 ukazał się 14.11.2025 (tag z 16.11.2025 [P]): .NET 10, C# 14, fizyka Bepu, compute shadery w Vulkanie. 4.4.0 jest w fazie beta (tag beta8 [P]). [S] — [Announcing Stride 4.3](https://stride3d.net/blog/announcing-stride-4-3-in-dotnet-10/); [P] [stride tags](https://github.com/stride3d/stride/tags)

**Bevy (2D/3D, Rust, ECS, bez edytora; darmowy open source)**
- Daty [P] z repozytorium bevy-website: 0.17 (30.09.2025), 0.18 (13.01.2026: atmosfera, kontrolery kamery, widgety Feathers), 0.19 (19.06.2026: „Next Generation Scenes”, Solari, kontaktowe cienie, AreaLights, Text Input). 0.20 ma już wpis z datą 17.09.2026, ale ze statusem „hidden”, a tagi kończą się na v0.20.0-rc.2. Najnowsza wersja stabilna to więc v0.19.1. — [Bevy 0.19](https://bevy.org/news/bevy-0-19/); [Bevy 0.18](https://bevy.org/news/bevy-0-18/); [bevy tags](https://github.com/bevyengine/bevy/tags)
- Na bevy.org: „It's free and open source forever!”. [P] — [bevy.org news](https://bevy.org/news/)
- Uwaga: snippet strayspark [A] twierdził, że w 0.18 pojawił się podgląd edytora. Nagłówki ogłoszenia 0.18 tego nie potwierdzają, więc twierdzenie jest niezweryfikowane.

**Flax Engine (3D, C#/C++; source-available EULA, tantiemy)**
- Licencję reguluje „Flax Engine End User License Agreement”. [P] — [Flax LICENSE](https://github.com/FlaxEngine/FlaxEngine/blob/HEAD/LICENSE.md)
- Tantiemy 4% od przychodu brutto powyżej 250 tys. USD na kwartał kalendarzowy. Można negocjować licencje bez tantiem: opłatę ryczałtową albo per seat. [S] — [Flax custom licensing](https://flaxengine.com/custom-licensing); [GameFromScratch](https://gamefromscratch.com/?p=28188)
- Wersja 1.12 (tag 1.12.6912 z 13.05.2026). [P] — [Flax tags](https://github.com/FlaxEngine/FlaxEngine/tags)

**CryEngine (3D AAA; source-available, tantiemy)**
- 5% tantiem od rocznego przychodu powyżej 5000 USD na projekt. Model obowiązuje od CryEngine 5.5 (2018). Jest też tier enterprise z wykupem tantiem. [S] — [CGPress 5.5](https://cgpress.org/archives/cryengine-5-5-released-with-a-new-royalty-based-licensing-system.html); [PocketGamer.biz](https://www.pocketgamer.biz/crytek-adopts-unreal-engine-like-royalty-based-business-model-for-cryengine)
- Publiczna wersja stoi na 5.7.1 LTS od maja 2022, bez dużych aktualizacji w latach 2025–2026. [S][A] — [tech-insider](https://tech-insider.org/it/?p=459)

**Source 2 / s&box (3D, C#; kod s&box na MIT, Source 2 własnościowy; Facepunch)**
- Repozytorium sbox-public ma licencję MIT („Copyright (c) 2025 Facepunch Studios Ltd”). [P] — [sbox-public LICENSE](https://github.com/Facepunch/sbox-public/blob/HEAD/LICENSE.md)
- Premiera 28.04.2026. W marcu 2026 Facepunch podpisał umowę z Valve, która pozwala eksportować projekty jako samodzielne gry na Steam bez tantiem. Kod źródłowy na MIT od listopada 2025. Beta natywnego klienta Linux od końca sierpnia/września 2026. [S] — [Wikipedia s&box](https://en.wikipedia.org/wiki/S%26box); [Igor's Lab](https://www.igorslab.de/en/sandbox-launches-on-steam-facepunch-is-turning-garrys-mod-into-an-open-gaming-platform-rather-than-a-sequel/); [GamingOnLinux](https://www.gamingonlinux.com/2026/09/s-box-from-facepunch-now-has-native-linux-support-on-steam/)

**Roblox Studio (3D UGC; darmowe narzędzie, zarabianie przez DevEx)**
- Od 8.06.2026 kurs DevEx za wydatki graczy z USA w wieku 18+ w kwalifikujących się grach (game passy, subskrypcje Robux, wybrane przedmioty, prywatne serwery; wymagane awatary R15) wzrósł o 42%: do 0,0054 USD za Robux zamiast standardowych 0,0038 USD. Efektywny udział twórcy rośnie z 26,6% do 37,8%. [S] (domena pierwotna roblox.com) — [Roblox Newsroom](https://about.roblox.com/newsroom/2026/04/roblox-fuels-high-fidelity-games-over-18-players-increases-qualifying-devex-rate-42); [Nasdaq](https://www.nasdaq.com/articles/roblox-raises-creator-payouts-will-margins-face-pressure-2026)

**Construct 3 (2D bez kodu, przeglądarka; własnościowy, subskrypcja)**
- Od lipca 2023 w USA: Personal 129,99 USD rocznie lub 18,99 USD miesięcznie, Startup Business 169 USD rocznie za stanowisko, Business 469 USD rocznie za stanowisko. Abonenci zachowują cenę, po której kupili. [S] — [Construct blog: price changes](https://Www.Construct.net/en/blogs/construct-official-blog-1/upcoming-price-changes-new-1718); [Construct pricing changes](https://www.construct.net/en/pricing-changes). Agregatory [A] podają sprzeczne kwoty (41,99, 99 i 178,99 USD), więc są niewiarygodne. Darmowa edycja ma ograniczenia.

**GDevelop (2D/3D bez kodu, web/mobile/desktop; MIT)**
- Rdzeń, silnik GDJS, IDE i rozszerzenia są na MIT. Nazwa i logo są chronione. [P] — [GDevelop LICENSE](https://github.com/4ian/GDevelop/blob/HEAD/LICENSE.md)
- Plany: Free, Silver 5,49 USD/mies., Gold 10,99 USD/mies. (publikacja na iOS, 300 kredytów AI), Pro 32,99 USD/mies. (praca zespołowa). Od stycznia 2026 ceny dla nowych subskrybentów wzrosły o 20%. Pro jest podobno wymagany przy przychodzie powyżej 50 tys. USD. [S][A] — [toolradar](https://toolradar.com/tools/gdevelop/pricing); [Capterra](https://www.capterra.com/p/158592/GDevelop/pricing/); [GDevelop business](https://gdevelop.io/pricing/business)
- Najnowszy tag v5.6.283 (29.09.2026). [P] — [GDevelop tags](https://github.com/4ian/GDevelop/tags)

**RPG Maker (2D JRPG; własnościowy, jednorazowy zakup)**
- RPG Maker UNITE (wtyczka do Unity) kosztuje regularnie 10 300 JPY. W listopadzie 2025 była promocja −80% (2060 JPY), w styczniu 2025 −70%. Na RPG Maker Festival 2026 MZ był przeceniony o 60% i można go było wypróbować za darmo przez weekend. [S] — [Famitsu](https://www.famitsu.com/article/202501/30712); [Inside Games](https://www.inside-games.jp/release/prtimes/20251113/258789.html); [Dengeki Online](https://dengekionline.com/article/202602/65681); [RPG Maker store](https://store.rpgmakerofficial.com)

**Ren'Py (visual novels; darmowy open source)**
- 8.4 (lipiec 2025), 8.5 (listopad 2025), 8.5.3 (15.05.2026). [S] — [Wikipedia Ren'Py](https://en.wikipedia.org/wiki/Ren%27Py). Tagi 8.5.3.2605xxxx potwierdzają kompilację z maja 2026. [P] — [renpy tags](https://github.com/renpy/renpy/tags)

**PICO-8 / Picotron (fantasy console; własnościowe, płatne)**
- PICO-8 kosztuje ok. 15 USD (lexaloffle.com lub itch.io). Alfa Picotron wyszła 14.03.2024. Posiadacze PICO-8 dokupią Picotron za 11,99 USD. [S] — [Wikipedia PICO-8](https://en.wikipedia.org/wiki/PICO-8); [Korben](https://korben.info/en/pico-8-fantasy-console-revolutionized-indie-gaming.html)

**Alternatywy dla Unity, silniki web i frameworki**
- Fyrox (Rust, z edytorem; MIT): 1.0.0 (tag z 24.03.2026), obecnie v1.0.1. [P] — [Fyrox tags](https://github.com/FyroxEngine/Fyrox/tags); [Fyrox LICENSE](https://github.com/FyroxEngine/Fyrox/blob/HEAD/LICENSE.md)
- Phaser (2D web): v4.0.0 (10.04.2026), najnowszy v4.2.1. [P] — [phaser tags](https://github.com/phaserjs/phaser/tags)
- Babylon.js (3D web; Apache 2.0, zespół Microsoftu [S]): 9.0.0 (26.03.2026), najnowszy 9.29.0. [P] — [Babylon tags](https://github.com/BabylonJS/Babylon.js/tags); [S] [Cinevva](https://app.cinevva.com/guides/web-game-engines-comparison)
- three.js: r186. [P] — [three.js tags](https://github.com/mrdoob/three.js/tags)
- PlayCanvas (3D web; silnik na MIT [P]): edytor ma plan Free (publiczne projekty, 1 GB) i Personal za 15 USD/mies. (prywatne projekty, 10 GB). Obsługuje WebGL2 i WebGPU. [S][A] — [toolradar](https://toolradar.com/tools/playcanvas/pricing); [P] [PlayCanvas LICENSE](https://github.com/playcanvas/engine/blob/HEAD/LICENSE)
- MonoGame (C#; Ms-PL): v3.8.5 (15.07.2026). [P] — [MonoGame LICENSE](https://github.com/MonoGame/MonoGame/blob/HEAD/LICENSE.txt); [tags](https://github.com/MonoGame/MonoGame/tags)
- raylib 6.0 (23.04.2026). [P] — [raylib tags](https://github.com/raysan5/raylib/tags)
- LÖVE: najnowszy stabilny tag 11.5, wersja 12 jeszcze nie wyszła. [P] — [love tags](https://github.com/love2d/love/tags)
- libGDX: 1.14.2. [P] — [libgdx tags](https://github.com/libgdx/libgdx/tags)

### Inferences
- Trend 2025–2026 to otwieranie silników: Cocos 4 na MIT, kod s&box na MIT, source-available GMRT w GameMakerze. Do tego dochodzi stabilizacja Godota (Jolt, Asset Store, cykl wydań co ok. 5 miesięcy). Unity po Runtime Fee wycofało się na „przewidywalne” podwyżki per seat (+8% w 2025 wg mojej wiedzy, +5% w 2026) i rozdziela płatne dodatki (Havok, AI).
- Rozpiętość tantiem w 2026: 0% (Godot, Bevy, Stride, O3DE, Defold, Fyrox, Cocos, s&box), 3,5–5% powyżej 1 mln USD (Unreal), 4% powyżej 250 tys. USD na kwartał (Flax), 5% powyżej 5 tys. USD rocznie (CryEngine), a Unity, GameMaker i Construct liczą opłaty per seat lub za licencję.
- Platformy UGC (Roblox, UEFN, s&box) konkurują dziś warunkami dla twórców: DevEx 0,0054 USD, wypłaty UEFN powyżej 1 mld USD, eksport na Steam bez tantiem.

### Gaps
- Unity Runtime Fee: z wiedzy ogólnej (niezweryfikowane w tej sesji, bo limit wyszukiwań się wyczerpał) ogłoszono go 12.09.2023 jako opłatę per instalacja i anulowano 12.09.2024. Unity 6 zadebiutowało 17.10.2024, a cena Pro wzrosła o 8% do 2200 USD od 1.01.2025. Nie sprawdziłem też statusu Unity 6.4/6.5 ani zapowiedzi Unity 7 w 2026.
- Ceny planów Unity Enterprise/Industry i dokładne kwoty dla 2026 (strona unity.com zablokowana).
- UE 5.7: dokładna data premiery (konflikt źródeł). Termin UE6 („ogłoszono datę premiery UE6”) widziałem tylko w tytule wnhub, bez treści.
- Zasady podziału przychodu z in-island transactions w UEFN (procenty i okres promocyjny) nie zostały zweryfikowane.
- Standardowy kurs DevEx 0,0038 USD: nie sprawdziłem daty jego podniesienia (z wiedzy ogólnej: z 0,0035 we wrześniu 2025).
- Ceny RPG Maker MZ w USD (z wiedzy ogólnej ok. 79,99 USD) i ewentualne nowe RPG Makery w 2026.
- Licencja Ren'Py (z wiedzy ogólnej MIT) i Bevy (MIT/Apache-2.0) nie zostały potwierdzone plikiem LICENSE w tej sesji. Ceny Unigine, Solar2D i Armory3D nie były badane.
- Dokładne ceny Construct 3 w 2025–2026: oficjalna strona zablokowana, ostatnia potwierdzona zmiana cen jest z lipca 2023.

## 2. Sklepy z assetami i darmowe źródła assetów

### Takeaway
Fab (Epic) od października 2024 łączy Unreal Marketplace, Quixel Bridge/Megascans, sklep Sketchfab i ArtStation Marketplace. Sprzedawcy dostają 88% przychodu, a Megascans od 2025 są płatne. Godot ma od maja 2026 oficjalny, stabilny Asset Store (na razie tylko darmowe assety, sprzedaż jest w planach). Darmowe źródła CC0 bez atrybucji to Kenney i Poly Haven. Mixamo daje darmowe animacje do użytku komercyjnego. Sketchfab i OpenGameArt mają licencje mieszane, więc każdy asset trzeba sprawdzić osobno.

### Cited Findings
- Fab: następca Unreal Marketplace i sklepu Sketchfab, nowy dom biblioteki Quixel Megascans. Wystartował w październiku 2024 i zastąpił Unreal Marketplace, Quixel Bridge, komercyjną część Sketchfab i resztki ArtStation Marketplace. [S] — [Unreal Engine blog](https://www.unrealengine.com/blog/fab-content-marketplace-launches-in-october-publishing-portal-opens-today?lang=en); [3DVF](https://3dvf.com/en/epic-games-begins-deploying-fab-one-marketplace-to-unite-them-all/)
- Fab dzieli przychód 88/12 na korzyść sprzedawcy, tak samo jak Epic Games Store. [S] — [ETCentric](https://www.etcentric.org/?p=188458); [GameFromScratch](https://gamefromscratch.com/epic-games-make-massive-fab-announcements/)
- Quixel Megascans były darmowe do końca 2024, a assety pobrane wcześniej pozostają dostępne. Od 2025 są płatne, ceny pojedynczych assetów zaczynają się od 0,99 USD. [S][A] — [3D Artist substack](https://3dartist.substack.com/p/what-the-hell-is-a-fab); [strayspark](https://www.strayspark.studio/blog/fab-marketplace-12-month-retrospective-seller-2026)
- Godot Asset Store: beta ruszyła w czerwcu 2025 z ok. 50 darmowymi assetami. [S] — [Game World Observer](https://gameworldobserver.com/2025/06/26/the-beta-version-of-the-asset-store-for-the-godot-engine-has-been-released). 22.05.2026 Fundacja ogłosiła stabilny sklep store.godotengine.org z pełną integracją w Godot 4.7. Ma recenzje, analitykę dla wydawców, wiele wersji pobrań, changelogi i tagi. Kupno i sprzedaż assetów są „na roadmapie”. Stara Asset Library jest przestarzała i ma przejść w tryb tylko do odczytu. Fundacja zwraca uwagę, że inne sklepy sprzedawały płatne kopie darmowych assetów (np. Kenney). [P] — [Introducing the Godot Asset Store](https://godotengine.org/article/introducing-the-godot-asset-store/)
- Kenney: dziesiątki tysięcy assetów, wszystkie CC0 (bez atrybucji, dozwolone użycie komercyjne). Poly Haven: ponad 2000 fotorealistycznych modeli, tekstur i HDRI na CC0, z API niewymagającym klucza. Sketchfab: największy wybór, licencje mieszane. OpenGameArt: CC0 lub różne licencje. Mixamo: darmowe animacje postaci do użytku komercyjnego. [S][A] — [Cinevva: free game assets 2026](https://app.cinevva.com/guides/game-assets-guide); [Cinevva: Sketchfab vs Poly Haven vs Kenney](https://app.cinevva.com/guides/sketchfab-polyhaven-kenney)
- Godot Asset Store wprost wymienia Phantom Camera, Dialogue Manager i GodotSteam jako popularne darmowe wtyczki. [P] — [Godot Asset Store](https://godotengine.org/article/introducing-the-godot-asset-store/)
- Bevy Assets (bevy.org/assets) to katalog wtyczek, gier i materiałów do nauki od społeczności. [P] — [Bevy 0.19](https://bevy.org/news/bevy-0-19/)

### Inferences
- Model rynku 2026: Fab (88/12) jest dla sprzedawców hojniejszy niż Unity Asset Store (z wiedzy ogólnej 70/30, niezweryfikowane). Godot nie ma jeszcze płatnego sklepu fundacji, dlatego płatne assety do Godota sprzedaje się głównie na itch.io i w sklepach zewnętrznych.
- Do prototypów i gier indie najbezpieczniejsze prawnie są CC0 (Kenney, Poly Haven). Sketchfab i OpenGameArt wymagają kontroli licencji przy każdym asecie.

### Gaps
- Unity Asset Store: podział przychodu (z wiedzy ogólnej 70/30) i zmiany w 2025–2026 nie zostały zweryfikowane.
- itch.io jako sklep z assetami (podział domyślnie 90/10, szczegóły w sekcji 4), cennik Sketchfab po migracji do Fab, „darmowe assety miesiąca” w Fab, status Mixamo w 2026 (wymaga konta Adobe; niezweryfikowane).

## 3. Najpopularniejsze wtyczki i dodatki do silników

### Takeaway
Unity: kanon płatnych narzędzi z Asset Store to Odin Inspector, DOTween (Pro), Amplify Shader Editor i Final IK. Cinemachine jest darmowym pakietem Unity. Godot: kanon darmowych wtyczek na MIT to Dialogic 2, Dialogue Manager, Phantom Camera, Terrain3D, Beehave, LimboAI i GodotSteam. Unreal: rynek wtyczek przeszedł na Fab. Nie udało się znaleźć wiarygodnego rankingu wtyczek z Fab na 2026.

### Cited Findings
- Odin Inspector and Serializer: dziś 55 USD (cena edukacyjna 27,50 USD, czyli −50%), historycznie 45 USD. Daje ponad 80 atrybutów inspektora i serializację „czegokolwiek”. DOTween Pro kosztuje 15 USD, Amplify Shader Editor 60 USD (Unity Awards 2017). Ceny pochodzą częściowo ze źródeł z 2018 roku. [S] — [Unity Asset Store: education](https://assetstore.unity.com/education-discount/tools); [DOTween Pro](https://assetstore.unity.com/packages/tools/visual-scripting/dotween-pro-32416/reviews); [Xsolla: best Unity plugins](https://accelerator.xsolla.com/blog/best-unity-plugins)
- Godot 4 w 2026: LimboAI (behavior trees i state machines), Dialogic 2 (dialogi), Phantom Camera (kamery), Terrain3D (duże tereny 3D, malowanie, roślinność), Beehave (lżejsze behavior trees). Wszystkie są darmowe, na MIT i aktywnie rozwijane. [S][A] — [Ziva: best Godot plugins 2026](https://ziva.sh/blogs/best-godot-plugins-2026); [GamineAI: 16 free Godot 4 plugins](https://gamineai.com/blog/16-free-godot-4-plugins-worth-installing-before-your-first-vertical-slice-2026)
- Fundacja Godota chce ułatwić wspieranie finansowe popularnych darmowych wtyczek (Phantom Camera, Dialogue Manager, GodotSteam) i publikować w Asset Store oficjalne rozszerzenia spoza rdzenia. [P] — [Godot Asset Store](https://godotengine.org/article/introducing-the-godot-asset-store/)

### Inferences
- Godot ma ekosystem prawie całkowicie darmowy i open source, ale (do czasu płatnego Asset Store) słabiej zmonetyzowany i przez to mniej stabilny w utrzymaniu. Unity ma największy płatny ekosystem, a nowy Fab ułatwia sprzedaż wtyczek do Unreal.

### Gaps
- Final IK (RootMotion): brak ceny i statusu na 2026. Brak danych 2026 o Cinemachine 3.x, Feel (More Mountains), A* Pathfinding Project i Rewired.
- Unreal/Fab: brak wiarygodnej listy najpopularniejszych wtyczek 2026 (np. Ultra Dynamic Sky, Easy Multi Save, Ninja Character, GAS Companion). Nie zostało to wyszukane, bo skończył się limit.
- GDQuest (kursy i narzędzia do Godota) oraz awesome-godot nie zostały sprawdzone.

## 4. Narzędzia wspierające: level design, pixel art, audio, kontrola wersji, dokumentacja, publikacja

### Takeaway
Level design: Tiled 1.12 (GPL), TrenchBroom 2026.2 (GPLv3) i LDtk (MIT, ostatnie wydanie ze stycznia 2024) są darmowe. Pixel art: Aseprite jest płatny (ok. 15–20 USD, EULA, kod źródłowy publiczny), a LibreSprite (GPLv2) i Pixelorama (MIT) są darmowe. Audio middleware: FMOD jest darmowy dla indie przy przychodzie poniżej 200 tys. USD, Wwise przy budżecie poniżej 250 tys. USD. Kontrola wersji: Perforce za darmo dla 5 użytkowników i 20 workspace'ów, Unity Version Control bez opłat za stanowiska od I kw. 2026. Publikacja: Steam Direct 100 USD (zwracane po 1000 USD przychodu), itch.io domyślnie 10%.

### Cited Findings
**Level design i pixel art**
- Tiled: v1.12.0 (12.03.2026), najnowszy v1.12.2. Plik COPYING mówi o wielu licencjach komponentów. [P] — [tiled tags](https://github.com/mapeditor/tiled/tags); [COPYING](https://github.com/mapeditor/tiled/blob/HEAD/COPYING)
- TrenchBroom (edytor map w stylu Quake/brush): v2026.2 (19.08.2026), GPLv3. [P] — [TrenchBroom tags](https://github.com/TrenchBroom/TrenchBroom/tags); [LICENSE](https://github.com/TrenchBroom/TrenchBroom/blob/HEAD/LICENSE.txt)
- LDtk (Deepnight): MIT, najnowszy tag v1.5.3 z 15.01.2024. Brak nowych wydań od ok. 2,5 roku. [P] — [ldtk tags](https://github.com/deepnight/ldtk/tags); [LICENSE](https://github.com/deepnight/ldtk/blob/HEAD/LICENSE)
- Aseprite: własnościowy EULA (Igara Studio), kod publiczny na GitHubie. Wydanie v1.3.18.6 z 22.09.2026 [P]. Cena jest sporna w źródłach: 14,99 USD albo 19,99 USD [S]. — [Aseprite EULA](https://github.com/aseprite/aseprite/blob/HEAD/EULA.txt); [S] [Guideflow](https://www.guideflow.com/blog/pixel-art-software); [Aseprite community](https://community.aseprite.org/t/too-expensive-for-such-an-application/21125)
- LibreSprite (fork Aseprite sprzed zmiany licencji): GPLv2, darmowy. Pixelorama (napisany w Godocie): MIT, darmowy, najnowszy tag v1.2.3. [P] — [LibreSprite LICENSE](https://github.com/LibreSprite/LibreSprite/blob/HEAD/LICENSE.txt); [Pixelorama LICENSE](https://github.com/Orama-Interactive/Pixelorama/blob/HEAD/LICENSE)

**Audio middleware**
- FMOD Studio: Indie za darmo przy przychodzie firmy poniżej 200 tys. USD rocznie, w przeciwnym razie 2000 USD za tytuł (budżet poniżej 600 tys. USD). Basic 6000 USD za tytuł (budżet poniżej 1,8 mln USD), Premium 18 000 USD za tytuł (budżet powyżej 1,8 mln USD). [S] — [FMOD licensing](https://fmod.com/licensing); [GameFromScratch](https://gamefromscratch.com/?p=24152). Starsze progi (budżet poniżej 500 tys. USD za darmo, 5 tys. USD, 15 tys. USD) są nieaktualne. [S] — [Gamasutra](https://www.gamasutra.com/audio/small-developers-and-creators-can-now-use-fmod-studio-for-free)
- Wwise (Audiokinetic): Indie za darmo przy budżecie produkcji poniżej 250 tys. USD (wszystkie platformy, bez limitu dźwięków). Pro przy budżecie 250 tys.–2 mln USD: 7000 USD za pierwszą platformę i 3500 USD za każdą kolejną. Premium przy budżecie powyżej 2 mln USD: 22 000 USD za pierwszą i 15 000 USD za kolejne. Platinum od 45 000 USD. Dostępne są też licencja GaaS (opłata miesięczna zależna od przychodu) i licencja tantiemowa: 1% sprzedaży brutto. [S] — [Audiokinetic pricing for games](https://audiokinetic.com/pricing/for-games); [Wwise licensing philosophy](https://blog.audiokinetic.com/en/wwise-licensing-and-pricing-philosophy/)

**Kontrola wersji**
- Perforce Helix Core (od 2025 marka „P4”, niezweryfikowane): darmowy dla 5 użytkowników i 20 workspace'ów bez limitu czasu i bez ograniczeń funkcji. Helix Swarm jest darmowy od 3 stanowisk. Helix Core Cloud to hosting zarządzany przez Perforce dla zespołów poniżej 50 osób. Jedna strona Perforce podaje „$39/User/Month”. [S] — [Perforce free version control](https://perforce.com/products/helix-core/free-version-control); [Perforce $39](https://www.perforce.com/node/1187214)
- Unity Version Control (dawniej Plastic SCM): od I kw. 2026 bez opłat za stanowiska w chmurze publicznej, darmowe 25 GB. [S] — [Unity pricing updates](https://unity.com/products/pricing-updates)

**Publikacja**
- Steam Direct: 100 USD za grę, zwracane po osiągnięciu 1000 USD przychodu. itch.io: publikacja za darmo, domyślnie 10% dla itch (podział 90/10), twórca może sam ustawić udział. [S][A] — [Fungies: Steam guide 2026](https://fungies.io/how-to-sell-a-game-on-steam); [Fungies: Steam revenue share](https://fungies.io/steam-revenue-share-explained/)
- Epic Games Store: 88/12, a przychód z EGS nie wlicza się do tantiem Unreal. [S] — [ETCentric](https://www.etcentric.org/?p=188458); [Unreal license](https://www.unrealengine.com/en-US/license)

### Inferences
- Ścieżka „za 0 zł” dla małego studia w 2026: Godot lub Defold, Tiled lub TrenchBroom, LibreSprite lub Pixelorama, FMOD lub Wwise w darmowym tierze, Perforce (5 użytkowników) lub Unity VCS (25 GB), itch.io. Pierwszym nieuniknionym kosztem jest zwykle Steam Direct (100 USD, zwracane) i ewentualnie Aseprite.
- FMOD liczy próg po przychodzie firmy, a Wwise po budżecie projektu. Ma to znaczenie dla studiów z wydawcą, które mają duży budżet przy małym przychodzie.

### Gaps
- Nie wyszukano (wyczerpany limit): podziału przychodu na Steam (z wiedzy ogólnej 70/30, 75/25 powyżej 10 mln USD, 80/20 powyżej 50 mln USD), cenników Git LFS na GitHubie i GitLabie, Anchorpoint, Diversion, Bfxr, jsfxr, ChipTone, Audacity (wersje 2025–2026), narzędzi do dokumentacji gry (Notion, Milanote, Nuclino, Miro, Arcweave, articy:draft X, Twine, Yarn Spinner, Ink) ani kontrowersji z 2025 wokół itch.io i Steam (usuwanie treści NSFW pod presją operatorów płatności).
- Nie potwierdzono rebrandingu Perforce na P4.

## 5. Narzędzia AI w gamedevie 2025–2026

### Takeaway
AI jest wbudowane w same silniki: Unity AI (od 6.2, płatne kredytami; Personal 10 USD/mies.), asystent AI w UE 5.7, przepływy z Claude w GameMaker GMRT, kredyty AI w planach GDevelop. Narzędzia zewnętrzne to w większości subskrypcje z kredytami w przedziale 10–75 USD/mies.: Scenario, Ludo.ai, Meshy, Tripo. Konkurencją jest open-weights Hunyuan3D, darmowy komercyjnie poniżej 1 mln MAU. Rynek AI NPC się konsoliduje: Inworld przeszło w infrastrukturę B2B, a Convai pozostaje narzędziem dla deweloperów.

### Cited Findings
- Unity AI: Unity Points lub AI Credits. Koszt akcji widać przed jej wykonaniem, punkty są wspólne dla organizacji, a Inference Engine jest darmowy. Muse kosztowało 30 USD/mies. Użytkownicy Personal płacą 10 USD/mies. za 1000 kredytów, a trial daje jednorazowo 1000 kredytów na 14 dni. W Pro, Enterprise i Industry agentowy Assistant wchodzi w subskrypcję. W becie punkty były darmowe i nielimitowane. [S] — [Issoh (JP)](https://www.issoh.co.jp/tech/details/8536/); [Unity AI Credits terms](https://unity.com/legal/unity-ai-credits-terms); [CG Channel](https://www.cgchannel.com/?p=169508). Uwaga prawna: Digital Production zwraca uwagę, że odpowiedzialność za prawa autorskie spoczywa na użytkowniku. [S] — [Digital Production](https://digitalproduction.com/2025/08/22/unity-6-2-welcomes-ai-but-pace-caution-user-liability-on-copyright/)
- UE 5.7 dodaje asystenta AI w edytorze. [S] — [Guru3D](https://www.guru3d.com/story/unreal-engine-57-released-with-new-procedural-content-generation-and-more-features/). GameMaker GMRT ma „Claude-powered AI workflows”. [S] — [GameMaker Spring 2026](https://gamemaker.io/blog/update-spring-2026). Plany GDevelop zawierają 100–300 kredytów AI miesięcznie. [S][A] — [toolradar](https://toolradar.com/tools/gdevelop/pricing)
- Inworld AI: Creator 25 USD/mies., Builder 100 USD, Developer 250 USD, Growth 1500 USD, do tego On-Demand i Enterprise. Rozliczenie kredytami, TTS za ok. 5–25 USD za 1 mln znaków. Firma odeszła od roli „studia NPC” na rzecz infrastruktury AI B2B. [S][A] — [eesel.ai](https://www.eesel.ai/blog/inworld-ai-pricing); [PricingSaaS](https://pricingsaas.com/companies/inworld); [Cinevva: AI NPCs 2026](https://app.cinevva.com/guides/ai-npcs-dialogue)
- Convai: dialog, głos w czasie rzeczywistym, pamięć i percepcja multimodalna. Ma wtyczki do Unity, Unreal i three.js. Ceny są sprzeczne: darmowy tier plus Indie za 29 USD/mies. albo Indie/Pro za 499 USD/mies. i Scale/Studio za 1199 USD/mies. [S][A] — [toolradar](https://toolradar.com/tools/convai/pricing); [aitoolsatlas](https://aitoolsatlas.ai/tools/convai/pricing); [Cinevva](https://app.cinevva.com/guides/ai-npcs-dialogue)
- Ludo.ai (ideacja i assety): Indie 15 USD/mies. przy płatności rocznej (3000 kredytów rocznie), Pro 35 USD/mies. (12 000 kredytów, API i MCP), Studio 300 USD/mies. (120 000 kredytów, 10 stanowisk). Dodatkowe kredyty od 20 USD za 250. [S][A] — [App Pricing Lab](https://saas.apppricinglab.com/product/ludo-ai/); [Capterra](https://www.capterra.com/p/228190/Ludo/)
- Scenario (assety 2D i 3D): Free (50 kredytów dziennie), Starter 15 USD/mies. (1500 kredytów, ponad 65 modeli), Pro 45 USD (5000 kredytów, trenowanie własnych modeli), Max 75 USD (10 000 kredytów). [S] — [Scenario pricing](https://www.scenario.com/pricing); [Scenario help](https://help.scenario.com/en/articles/pricing-plans/)
- Generatory 3D: Meshy Free (200 kredytów/mies.), Pro 10 USD (1000 kredytów), Studio 30 USD (4000 kredytów); text-to-3D kosztuje 10 kredytów, image-to-3D 20–30. Tripo od 11,94 USD/mies. (topologia quad, auto-rigging, model v3.0 do 2 mln polygonów). Rodin Gen-2 (Hyper3D) ma 10 mld parametrów i T/A-pose. Hunyuan3D (Tencent) ma otwarte wagi (Shape 3,3B i Paint PBR 2B) i jest darmowy komercyjnie poniżej 1 mln MAU. [S][A] — [Sloyd: price comparison](https://sloyd.ai/blog/3d-ai-price-comparison); [Krea: best AI 3D 2026](https://www.krea.ai/blog/best-ai-3d-model-generators-2026); [3D AI Studio](https://www.3daistudio.com/blog/best-3d-model-generation-apis-2026)

### Inferences
- Wzorzec cenowy 2026: kredyty zamiast nielimitowanych subskrypcji, a w wyższych tierach dostęp przez API i MCP (Ludo Pro). Pod tym względem AI do gamedevu przypomina dziś rynek narzędzi dla agentów.
- Ryzyko prawne (odpowiedzialność użytkownika w Unity AI) i ujawnianie użycia AI na Steamie (niezweryfikowane w tej sesji) to ważne zastrzeżenia do raportu.

### Gaps
- Nie wyszukano (wyczerpany limit): Roblox Cube 3D i Roblox Assistant, NVIDIA ACE, Layer.ai, PixelLab, Retro Diffusion, Rosebud AI, ElevenLabs Sound Effects, Suno i Udio do muzyki, wtyczek AI do Godota i Unity (np. Coplay, Bezi) ani polityki Steama wobec treści generowanych przez AI.
- Ceny Convai i Inworld pochodzą z agregatorów i są wewnętrznie sprzeczne. Oficjalne strony są niezweryfikowane.
