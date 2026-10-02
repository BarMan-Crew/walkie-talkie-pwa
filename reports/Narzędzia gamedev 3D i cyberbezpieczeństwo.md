# Darmowe narzędzia pokrywają gamedev, 3D i cyberbezpieczeństwo

Stan na październik 2026: każdy z czterech obszarów da się zacząć za 0 zł. Podstawą są darmowe, otwarte narzędzia: Godot 4.7, Blender 5.2 LTS, Ghidra 12.1, Wazuh 5.0, ZAP i kilkadziesiąt frameworków na MIT. Za narzędzia płaci się zwykle dopiero przy większej skali albo w wąskiej niszy. **Unity Pro kosztuje 2310 USD rocznie**, **Unreal pobiera 5% od przychodu powyżej 1 mln USD**, **Burp Suite Pro kosztuje 499 USD rocznie**, a **IDA Pro od 1099 USD rocznie**. Narzędzia AI (Unity AI, Scenario, Meshy, Tripo) rozliczają się kredytami. Ich darmowe plany zwykle nie dają praw do użytku komercyjnego. Claude w tym kontenerze chmurowym uruchomił sam, bez interfejsu graficznego: Godota, Blendera (bpy), Ghidrę, Semgrep z wbudowanym serwerem MCP, Trivy, Bandit i Syft. Edytory z interfejsem graficznym (Unity, Unreal, Roblox Studio, Maya, 3ds Max, Blender z dodatkiem MCP) muszą działać na komputerze użytkownika, z wtyczką MCP. Są dwa ważne ostrzeżenia. **W marcu 2026 Trivy padł ofiarą ataku na łańcuch dostaw** (CVE-2026-33634). **Licencja Hunyuan3D nie obowiązuje w UE**, więc w Polsce nie daje żadnych praw. Zastrzeżenie do danych: proxy blokowało strony większości dostawców, a limit wyszukiwań się wyczerpał. Większość cen pochodzi więc ze snippetów wyszukiwarki i z agregatorów. Przed zakupem sprawdź cenę u dostawcy.

## Jak czytać ceny i oznaczenia

Klasa ceny:

- **Darmowe**: 0 zł przy typowym użyciu hobbystycznym i indie, także komercyjnym. Próg przychodu, jeśli jest, podaję w tabeli.
- **Freemium**: darmowy plan ma limity (funkcje, kredyty, zakaz użytku komercyjnego). Pełna wersja jest płatna.
- **Płatne**: brak użytecznej darmowej wersji.
- **Niepewne**: źródła podają sprzeczne lub nieustalone ceny albo licencje.

Wiarygodność faktu:

- **[P]**: potwierdzone w źródle pierwotnym (repozytorium, tag wydania, plik LICENSE, pobrana strona).
- **[S]**: tylko snippet wyszukiwarki.
- **[A]**: agregator cen, mniej wiarygodny.
- **[N]**: wiedza bazowa z notatek, w tej sesji niezweryfikowana.
- **[!]**: źródła są sprzeczne.
- **[K]**: przetestowane w kontenerze Claude 2 października 2026.

Kwoty podaję w USD, chyba że zaznaczono inaczej. Do przeliczeń przyjmij ok. 3,6–4,0 PLN za 1 USD (kurs niezweryfikowany). Przy części zakupów dochodzi VAT.

## 1. Silniki gier: Godot i Unreal za 0 zł, Unity płatne powyżej 200 tys. USD

W latach 2025–2026 silniki się otwierają. **Cocos 4 przeszedł na MIT**, **kod s&box jest na MIT**, a GameMaker udostępnia kod nowego runtime'u GMRT. W ankiecie GDC 2026 Unreal pierwszy raz wyprzedził Unity jako główny silnik: **42% wobec 30%**, silniki własne miały 19% ([GameDevReports](https://gamedevreports.substack.com/p/gdc-the-state-of-the-game-industry-fcf)) [S]. Tantiemy wahają się od 0% (Godot, Bevy, Defold, O3DE, Stride, Cocos) do 5% (Unreal, CryEngine).

### Silniki i ich koszt

| Silnik | Do czego | Cena |
|---|---|---|
| [Unity 6.3 LTS](https://unity.com/products/pricing-updates) | 2D/3D, mobile, web, XR; C# | **Freemium.** Personal: 0 USD do 200 tys. USD przychodu i finansowania. Pro: 2310 USD/rok lub 210 USD/mies. za stanowisko od 12.01.2026. Runtime Fee anulowane. Od 6.3 Havok nie wchodzi w żaden plan [S] |
| [Unreal Engine 5.8](https://www.unrealengine.com/en-US/license) | 3D AAA, mobile, VR; C++ i Blueprints | **Darmowe** do 1 mln USD przychodu brutto produktu. Powyżej: 5% tantiem, a 3,5% przy premierze w Epic Games Store ([GameFromScratch](https://gamefromscratch.com/unreal-engine-launch-everywhere-with-epic/)). Firmy spoza branży gier z przychodem powyżej 1 mln USD: 1850 USD/rok za stanowisko [S]. Wersja 5.8 (VI 2026) ma być ostatnią dużą wersją UE5 [S][!] daty |
| [UEFN](https://www.pocketgamer.biz/unreal-engine-for-fortnite-creator-payouts-surpass-1bn/) | wyspy UGC w Fortnite | **Darmowe.** Wypłaty dla twórców przekroczyły 1 mld USD [S] |
| [Godot 4.7.2](https://github.com/godotengine/godot/tags) | 2D/3D, mobile, web, XR; GDScript, C# | **Darmowe**, MIT [P]. Wersja 4.8 w feature freeze od 29.09.2026 [P] |
| [GameMaker](https://gamemaker.io/get) | 2D na PC, mobile, web, konsole; GML | **Freemium.** Darmowy do użytku niekomercyjnego. Professional: 99,99 USD jednorazowo. Eksport na konsole: ok. 800 USD/rok. Runtime GMRT (IV 2026) ma przepływy AI oparte na Claude [S] |
| [Defold 1.13.2](https://github.com/defold/defold/tags) | 2D i lekkie 3D, mobile, web, konsole; Lua | **Darmowe**, Defold License [P] |
| [Cocos / COCOS 4](https://itsfoss.com/news/cocos-4-game-engine/) | 2D/3D mobile, mini-gry web | **Darmowe**, MIT od I 2026 [P] |
| [O3DE 26.05](https://github.com/o3de/o3de/tags) | 3D AAA, symulacje, robotyka | **Darmowe**, Apache-2.0 lub MIT [P] |
| [Stride 4.3](https://stride3d.net/blog/announcing-stride-4-3-in-dotnet-10/) | 3D w C#/.NET 10 | **Darmowe**, MIT [P] |
| [Bevy 0.19.1](https://bevy.org/news/bevy-0-19/) | 2D/3D w Rust, ECS, bez edytora | **Darmowe** [P]. Każde wydanie łamie API |
| [Fyrox 1.0.1](https://github.com/FyroxEngine/Fyrox/tags) | 2D/3D w Rust z edytorem | **Darmowe**, MIT [P] |
| [Flax 1.12](https://flaxengine.com/custom-licensing) | 3D, C#/C++ | **Darmowe** do progu: 4% tantiem od przychodu powyżej 250 tys. USD na kwartał [S] |
| [CryEngine 5.7.1](https://cgpress.org/archives/cryengine-5-5-released-with-a-new-royalty-based-licensing-system.html) | 3D AAA | **Płatne** w tantiemach: 5% od przychodu powyżej 5000 USD rocznie na projekt. Bez dużych aktualizacji od 2022 [S][A] |
| [s&box (Source 2)](https://github.com/Facepunch/sbox-public/blob/HEAD/LICENSE.md) | 3D w C#, UGC | **Darmowe.** Kod na MIT [P]. Eksport na Steam bez tantiem dzięki umowie z Valve z III 2026 ([Igor's Lab](https://www.igorslab.de/en/sandbox-launches-on-steam-facepunch-is-turning-garrys-mod-into-an-open-gaming-platform-rather-than-a-sequel/)) [S] |
| [Roblox Studio](https://about.roblox.com/newsroom/2026/04/roblox-fuels-high-fidelity-games-over-18-players-increases-qualifying-devex-rate-42) | 3D UGC; Luau | **Darmowe.** Zarobek przez DevEx: 0,0038 USD/Robux. Od 8.06.2026 0,0054 USD za kwalifikujące się wydatki graczy 18+ z USA [S] |
| [Construct 3](https://www.construct.net/en/pricing-changes) | 2D bez kodu, w przeglądarce | **Freemium.** Darmowa edycja ma limity. Personal: 129,99 USD/rok (cennik z 2023) [S][!] |
| [GDevelop](https://toolradar.com/tools/gdevelop/pricing) | 2D/3D bez kodu | **Freemium.** Silnik na MIT [P]. Silver 5,49, Gold 10,99, Pro 32,99 USD/mies. [S][A] |
| [RPG Maker MZ / UNITE](https://store.rpgmakerofficial.com) | 2D JRPG | **Płatne.** UNITE: 10 300 JPY, w promocjach do −80% ([Inside Games](https://www.inside-games.jp/release/prtimes/20251113/258789.html)) [S] |
| [Ren'Py 8.5.3](https://github.com/renpy/renpy/tags) | powieści wizualne (visual novel) | **Darmowe**, open source [S]. Licencja MIT [N] |
| [PICO-8 / Picotron](https://en.wikipedia.org/wiki/PICO-8) | fantasy console, gry retro | **Płatne.** PICO-8 ok. 15 USD. Picotron 11,99 USD dla posiadaczy PICO-8 [S] |

Frameworki „code-first” (Phaser, three.js, raylib, MonoGame, LÖVE) są w sekcji 2.

### Assety: CC0 jest najbezpieczniejsze, Megascans są już płatne

| Źródło | Do czego | Cena |
|---|---|---|
| [Kenney](https://app.cinevva.com/guides/game-assets-guide) | dziesiątki tysięcy assetów 2D/3D do gier | **Darmowe**, CC0, bez atrybucji [S][A] |
| [Poly Haven](https://app.cinevva.com/guides/sketchfab-polyhaven-kenney) | modele, tekstury, HDRI; API bez klucza | **Darmowe**, CC0 [S][A] |
| [ambientCG](https://app.cinevva.com/guides/free-textures-hdris-materials) | ponad 2000 materiałów PBR, ponad 400 HDRI | **Darmowe**, CC0 [S][A] |
| [OpenGameArt](https://app.cinevva.com/guides/game-assets-guide) | grafika i dźwięk do gier | **Darmowe**, ale licencje są mieszane. Sprawdzaj każdy asset [S][A] |
| [Fab (Epic)](https://www.unrealengine.com/blog/fab-content-marketplace-launches-in-october-publishing-portal-opens-today?lang=en) | sklep łączący UE Marketplace, Megascans, sklep Sketchfab i ArtStation | **Freemium.** Część treści darmowa. Megascans są płatne od 2025, od 0,99 USD za asset. Sprzedawca dostaje 88% ([ETCentric](https://www.etcentric.org/?p=188458)) [S] |
| [Godot Asset Store](https://godotengine.org/article/introducing-the-godot-asset-store/) | oficjalny sklep Godota, stabilny od 22.05.2026 | **Darmowe.** Na razie tylko darmowe assety, sprzedaż jest w planach [P] |
| [Sketchfab](https://sketchfab.com/blogs/community/sketchfab-update-what-you-need-to-know-now-that-fabs-live/) | modele 3D | **Niepewne.** Sklep przeszedł do Fab. Darmowe licencje miały zniknąć w 2025. Stan w 2026 nieznany [S] |
| [Mixamo](https://app.cinevva.com/guides/free-character-animations-rigging) | animacje i auto-rigging humanoidów | **Darmowe** z Adobe ID. Tryb utrzymania, awarie od VI 2025 [S][A] |
| Unity Asset Store | wtyczki i assety do Unity | **Freemium.** Podział przychodu niezweryfikowany [N] |
| [itch.io](https://fungies.io/how-to-sell-a-game-on-steam) | assety i gry indie | **Darmowe** dla twórcy, domyślnie 10% prowizji [S][A] |

### Wtyczki: do Godota darmowe na MIT, do Unity płatne w Asset Store

| Wtyczka | Silnik | Do czego | Cena |
|---|---|---|---|
| [Odin Inspector](https://assetstore.unity.com/education-discount/tools) | Unity | rozbudowany inspektor, serializacja | **Płatne**, 55 USD (dla edukacji 27,50 USD) [S] |
| [DOTween Pro](https://assetstore.unity.com/packages/tools/visual-scripting/dotween-pro-32416/reviews) | Unity | animacje typu tween | **Płatne**, 15 USD [S]. Część cen pochodzi ze źródeł z 2018 |
| [Amplify Shader Editor](https://accelerator.xsolla.com/blog/best-unity-plugins) | Unity | węzłowy edytor shaderów | **Płatne**, 60 USD [S] (stara cena) |
| Final IK | Unity | inverse kinematics | **Niepewne**, brak ceny na 2026 |
| Cinemachine | Unity | system kamer | **Darmowe**, pakiet Unity [N] |
| [Dialogic 2, Phantom Camera, Terrain3D, Beehave, LimboAI](https://ziva.sh/blogs/best-godot-plugins-2026) | Godot | dialogi, kamery, duże tereny 3D, behavior trees i maszyny stanów | **Darmowe**, MIT [S][A] |
| [Dialogue Manager, GodotSteam](https://godotengine.org/article/introducing-the-godot-asset-store/) | Godot | dialogi, integracja ze Steam | **Darmowe** [P] |
| Wtyczki do Unreala | Unreal | — | Sprzedaż przeszła na Fab. Brak wiarygodnego rankingu na 2026 |

### Narzędzia pomocnicze: poziomy, pixel art, audio, wersjonowanie, publikacja

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Tiled 1.12.2](https://github.com/mapeditor/tiled/tags) | edytor map 2D z kafelków | **Darmowe** [P] |
| [TrenchBroom 2026.2](https://github.com/TrenchBroom/TrenchBroom/tags) | edytor map brush w stylu Quake | **Darmowe**, GPLv3 [P] |
| [LDtk 1.5.3](https://github.com/deepnight/ldtk/tags) | edytor poziomów 2D | **Darmowe**, MIT [P]. Brak wydań od I 2024 |
| [Aseprite](https://github.com/aseprite/aseprite/blob/HEAD/EULA.txt) | pixel art i animacja | **Płatne**, ok. 15–20 USD [S][!]. Kod jest publiczny, licencja EULA [P] |
| [LibreSprite](https://github.com/LibreSprite/LibreSprite/blob/HEAD/LICENSE.txt) | fork Aseprite | **Darmowe**, GPLv2 [P] |
| [Pixelorama](https://github.com/Orama-Interactive/Pixelorama/blob/HEAD/LICENSE) | pixel art | **Darmowe**, MIT [P] |
| [FMOD Studio](https://fmod.com/licensing) | audio middleware | **Freemium.** Indie za darmo przy przychodzie poniżej 200 tys. USD/rok. Wyżej: 2000 USD za tytuł, Basic 6000, Premium 18 000 USD [S][!] progi |
| [Wwise](https://audiokinetic.com/pricing/for-games) | audio middleware | **Freemium.** Darmowy przy budżecie poniżej 250 tys. USD. Pro: 7000 USD za pierwszą platformę [S] |
| [Perforce Helix Core](https://perforce.com/products/helix-core/free-version-control) | wersjonowanie dużych assetów | **Freemium.** Darmowy do 5 użytkowników i 20 workspace'ów [S]. Zmiana marki na P4 [N] |
| [Unity Version Control](https://unity.com/products/pricing-updates) | wersjonowanie (dawny Plastic SCM) | **Freemium.** Od I kw. 2026 bez opłat za stanowiska w chmurze publicznej, 25 GB gratis [S] |
| [Steam Direct](https://partner.steamgames.com/doc/gettingstarted/appfee) | publikacja na Steam | **Płatne**, 100 USD za grę. Zwrot po 1000 USD przychodu [S] |
| [itch.io](https://fungies.io/how-to-sell-a-game-on-steam) | publikacja indie | **Darmowe**, domyślnie 10% prowizji [S][A] |
| [Epic Games Store](https://www.etcentric.org/?p=188458) | publikacja | podział 88/12 [S] |

### AI w silnikach rozlicza się kredytami

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Unity AI](https://unity.com/legal/unity-ai-credits-terms) (Assistant i Generators) | agent w edytorze; generuje sprite'y, tekstury, animacje, dźwięk | **Freemium.** Personal: 10 USD/mies. za 1000 kredytów. W Pro wliczone w subskrypcję. Inference Engine darmowy [S]. Za prawa autorskie odpowiada użytkownik ([Digital Production](https://digitalproduction.com/2025/08/22/unity-6-2-welcomes-ai-but-pace-caution-user-liability-on-copyright/)) |
| [Asystent AI w UE 5.7](https://www.guru3d.com/story/unreal-engine-57-released-with-new-procedural-content-generation-and-more-features/) | pomoc w edytorze Unreala | w cenie silnika [S] |
| [Scenario](https://www.scenario.com/pricing) | assety 2D/3D z AI | **Freemium.** Free: 50 kredytów dziennie. Starter 15, Pro 45, Max 75 USD/mies. [S] |
| [Ludo.ai](https://saas.apppricinglab.com/product/ludo-ai/) | pomysły na gry i assety | **Płatne.** Indie: 15 USD/mies. przy płatności rocznej. Pro (35 USD/mies.) daje API i MCP [S][A] |
| [Inworld AI](https://www.eesel.ai/blog/inworld-ai-pricing) | NPC z AI, infrastruktura głosu | **Płatne**, od 25 USD/mies. [S][A] |
| [Convai](https://toolradar.com/tools/convai/pricing) | NPC z AI; wtyczki do Unity, Unreala, three.js | **Niepewne.** Jest darmowy plan, płatne od 29 do 1199 USD/mies. [A][!] |

Generatory 3D z AI (Meshy, Tripo, TRELLIS.2) są w sekcji 3.

## 2. Programowanie gier: w branży C++ i C#, na start GDScript i Lua

W pracy zawodowej nadal liczą się C++ (Unreal, własne silniki) i C# (Unity, Godot .NET). Wśród indie i hobbystów rosną GDScript, Lua, Rust i JS/TS. Według GDC 2026 **36% deweloperów używa generatywnej AI** ([GamingOnLinux](https://www.gamingonlinux.com/2026/01/gdc-2026-report-36pct-of-devs-use-genai-28pct-target-steam-deck-and-8pct-target-linux/comment_id=289300)) [S]. Wszystkie języki i frameworki z tej sekcji są darmowe.

### Języki

| Język | Gdzie się go używa | Łatwość startu* |
|---|---|---|
| C++ | Unreal, własne silniki, raylib, SDL3, SFML 3 | 2/5 |
| C# | Unity, Godot .NET, MonoGame/FNA, Stride | 4/5 |
| GDScript | Godot. Według [StraySpark](https://www.strayspark.studio/blog/gdscript-vs-csharp-godot-2026-choosing-scripting-language) polecany początkującym; eksport C# na web wciąż eksperymentalny [S] | 5/5 |
| Lua | LÖVE, Defold. Luau w Robloksie [N] | 5/5 |
| Python | pygame-ce, Arcade, Ursina, Panda3D | 5/5 |
| JavaScript/TypeScript | Phaser, PixiJS, three.js, Babylon.js, PlayCanvas, Kaplay, Excalibur | 4/5 |
| Rust | Bevy, Fyrox, Macroquad, Rapier | 2/5 |
| Java/Kotlin | libGDX z KTX | 3/5 |
| Haxe | HaxeFlixel, Heaps, OpenFL | 3/5 |
| Odin | raylib, SDL. [CAT & ONION](https://odin-lang.org/games) to pierwsza gra na Steamie napisana w Odinie | 3/5 |
| Zig | raylib. Repo na GitHubie bez pushy od 27.11.2025 [P]. Przeniesienie na Codeberg [N] | 2/5 |

*Subiektywna ocena autorów notatek.

### Frameworki code-first: wszystkie darmowe

Status i licencje pochodzą z GitHub API z 2 października 2026 [P], chyba że zaznaczono inaczej.

| Framework | Do czego | Status X 2026 / licencja |
|---|---|---|
| [pygame-ce](https://github.com/pygame-community/pygame-ce) | 2D w Pythonie, nauka | seria 2.5.x, w planach 3.0 na SDL3 [S]. LGPL [N] |
| [Arcade](https://github.com/pythonarcade/arcade) | 2D w Pythonie, nowsze API | aktywny. MIT [N] |
| [Ursina](https://github.com/pokepetter/ursina) | 3D w Pythonie, prototypy | MIT |
| [Panda3D](https://github.com/panda3d/panda3d) | 3D w Pythonie i C++ | gałąź 1.10.x. Zmodyfikowana BSD [N] |
| [LÖVE](https://github.com/love2d/love/tags) | 2D w Lua (kurs CS50 2D) | stabilna wersja 11.5. Wersja 12.0 jeszcze nie wyszła [P]. zlib [N] |
| [raylib 6.0](https://raysan5.itch.io/raylib/devlog/1497342/raylib-60-released) | 2D/3D w C, nauka, ponad 70 bindingów | 23.04.2026 [P]. Zlib |
| [SDL3](https://github.com/libsdl-org/SDL) | warstwa platformy: okno, wejście, audio, GPU API | 3.2 to pierwsze stabilne 3.x [S]. Zlib |
| [SFML 3](https://github.com/SFML/SFML) | 2D w C++17 | 3.0.1. Zlib |
| [MonoGame 3.8.5](https://gamefromscratch.com/monogame-3-8-5-released/) | 2D/3D w C# (w stylu XNA), Vulkan i DX12 | 15.07.2026 [P]. Ms-PL [P] |
| [FNA](https://github.com/FNA-XNA/FNA) | wierny port XNA | aktywny. Ms-PL [N] |
| [libGDX 1.14.2](https://libgdx.com/) | Java/Kotlin: desktop, Android, web | Apache-2.0 |
| [Phaser 4.2.1](https://phaser.io/download/stable) | 2D w przeglądarce, JS/TS | 4.0 z 10.04.2026 [P]. MIT. Phaser Editor płatny [N] |
| [Kaplay](https://github.com/kaplayjs/kaplay) | 2D w przeglądarce, game jamy | MIT |
| [Excalibur](https://github.com/excaliburjs/Excalibur) | 2D w przeglądarce, TS | BSD-2 |
| [PixiJS v8](https://github.com/pixijs/pixijs) | renderer 2D WebGL/WebGPU, to nie silnik | MIT |
| [three.js r186](https://github.com/mrdoob/three.js) | 3D w przeglądarce, 116 tys. gwiazdek | MIT |
| [Babylon.js 9.29](https://github.com/BabylonJS/Babylon.js/tags) | pełny silnik 3D w przeglądarce, WebGPU | Apache-2.0 |
| [PlayCanvas](https://toolradar.com/tools/playcanvas/pricing) | 3D w przeglądarce, edytor w chmurze | **Freemium.** Silnik na MIT [P]. Edytor: Free albo Personal za 15 USD/mies. [S][A] |
| [HaxeFlixel 6.2](https://github.com/HaxeFlixel/flixel) / [Heaps](https://github.com/HeapsIO/heaps) / [OpenFL](https://github.com/openfl/openfl) | 2D i 3D w Haxe | MIT |
| [Bevy 0.19.1](https://github.com/bevyengine/bevy) | Rust, ECS | Apache-2.0 + MIT |
| [Macroquad](https://macroquad.rs/) | prosty 2D w Rust | Apache-2.0 |
| [Fyrox 1.0.1](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/) | Rust z edytorem, stabilna seria 1.x | MIT |

### Biblioteki: Jolt najlepszy do fizyki 3D, sieć od 0 do 125 USD miesięcznie

| Biblioteka | Do czego | Cena / licencja |
|---|---|---|
| [Jolt Physics 5.6](https://github.com/jrouwe/JoltPhysics) | fizyka 3D, compute shadery; domyślna fizyka 3D w Godot 4.6 | **Darmowe**, MIT [P] |
| [Box2D v3.1](https://github.com/erincatto/box2d) | fizyka 2D w C | **Darmowe**, MIT [P] |
| [Box3D](https://github.com/erincatto/box3d) | fizyka 3D w C, używana w s&box. Według autora to alfa ([GameDev.net](https://gamedev.net/news/4308-box2d-enters-the-3rd-dimension-box3d-released/)) | **Darmowe**, MIT [P] |
| [PhysX](https://github.com/NVIDIA-Omniverse/PhysX) | fizyka 3D; kod GPU otwarty w IV 2025 | **Darmowe**, BSD-3 [P] |
| [Bullet3](https://github.com/bulletphysics/bullet3) | fizyka 3D; ostatni push 22.10.2025 | **Darmowe** [P]. Traci znaczenie |
| [Rapier](https://github.com/dimforge/rapier) | fizyka 2D/3D w Rust, bindingi JS i Python | **Darmowe**, Apache-2.0 [P] |
| [Photon Fusion](https://crux.supercraft.host/blog/photon-fusion-pricing-2026/) | multiplayer w chmurze (Unity) | **Freemium.** 100 CCU za darmo. 500 CCU: 125 USD/mies., 1000 CCU: 250 USD/mies. [A] |
| [Colyseus](https://www.colyseus.io/pricing) | serwer gier w Node.js/TS | **Freemium.** Własny hosting za darmo (MIT). Colyseus Cloud od 15 USD/mies. [S] |
| [Nakama](https://heroiclabs.com/pricing) | backend gier w Go | **Freemium.** Własny hosting za darmo (Apache-2.0). Heroic Cloud rozlicza CPU [S] |
| [Mirror](https://github.com/MirrorNetworking/Mirror), [FishNet](https://github.com/FirstGearGames/FishNet), [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) | sieć w Unity | **Darmowe** [P] |
| [ENet](https://github.com/lsalzman/enet), [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) | niezawodny UDP w C/C++ | **Darmowe**, MIT / BSD-3 [P] |
| [EnTT](https://github.com/skypjack/entt), [flecs](https://github.com/SanderMertens/flecs) | ECS w C++/C | **Darmowe** [P] |
| [Dear ImGui 1.92.9](https://github.com/ocornut/imgui) | UI narzędzi i debugowania | **Darmowe**, MIT [P] |
| [raygui](https://github.com/raysan5/raygui) | UI dla raylib | **Darmowe**, Zlib [P] |
| [miniaudio](https://github.com/mackron/miniaudio), [OpenAL Soft](https://github.com/kcat/openal-soft) | audio | **Darmowe** [P] |

### IDE, debugowanie i profilowanie

| Narzędzie | Do czego | Cena |
|---|---|---|
| [JetBrains Rider](https://www.infoq.com/news/2024/10/jetbrains-rider-free/) | IDE do C# (Unity, Godot) | **Freemium.** Darmowy do użytku niekomercyjnego od X 2024, telemetria obowiązkowa. Do użytku komercyjnego płatny [S] |
| VS Code | edytor do wszystkich języków | **Darmowe** [N] |
| Visual Studio Community | C++ i C# na Windows | **Darmowe** dla osób prywatnych i małych firm [N] |
| [RenderDoc](https://github.com/baldurk/renderdoc) | debugger klatek: Vulkan, D3D, OpenGL | **Darmowe**, MIT [P] |
| [Tracy](https://github.com/wolfpld/tracy) | profiler klatek; natywna integracja w Godot 4.6 ([docs](https://docs.godotengine.org/en/4.6/engine_details/development/profiling/tracy.html)) | **Darmowe** [P] |
| PIX, NVIDIA Nsight | profilery GPU | **Darmowe** [N] |
| Shadertoy | shadery w przeglądarce | **Darmowe** [N] |
| [SHADERed](https://github.com/dfranx/SHADERed) | IDE do shaderów | porzucony, ostatni push 22.09.2023 [P] |

### Kursy i społeczności: najlepsze materiały są darmowe

| Materiał | Czego uczy | Cena |
|---|---|---|
| [CS50 2D (Harvard)](https://cs50.harvard.edu/2d) | gry 2D w Lua i LÖVE, od Ponga po Pokémona | **Darmowe.** Płatny jest tylko certyfikat edX [S] |
| [GDQuest Learn GDScript From Zero](https://gdquest.itch.io/learn-godot-gdscript) | GDScript od zera, interaktywna aplikacja | **Darmowe**, open source [S] |
| [Brackeys](https://80.lv/articles/unity-creator-brackeys-is-back-with-godot-tutorials) | tutoriale do Godota i archiwum ponad 400 tutoriali do Unity | **Darmowe** [S] |
| [Learn OpenGL](https://github.com/JoeyDeVries/LearnOpenGL) | grafika 3D od podstaw | **Darmowe** online [N] |
| [Game Programming Patterns](https://github.com/munificent/game-programming-patterns) | wzorce architektury gier | **Darmowe** online, druk płatny [N] |
| Unity Learn, Epic Developer Community, Catlike Coding, freeCodeCamp | Unity, Unreal, wiele silników | **Darmowe** [N] |
| [GDQuest: kursy Godot 4](https://gamedevacademy.org/gdquest-review/) | 2D i 3D w Godocie | **Płatne**, ok. 84–216 USD [A] |
| [GameDev.tv Lifetime](https://www.gamedev.tv/p/lifetime-membership) | ponad 80 kursów | **Płatne**, jednorazowo. Cena nieustalona |
| [Udemy](https://medium.com/@barnwalsaurabh/udemy-may-2026-sale-should-you-buy-individual-courses-or-the-udemy-personal-plan-37fbeac69f93) | kursy różnych autorów | **Płatne.** Cena katalogowa 50–120 USD, w promocji ok. 10 USD. Personal Plan 240 USD/rok [S] |
| [Coursera Plus](https://skillscouter.com/is-coursera-plus-worth-it/) | m.in. GDScript (Packt) | **Płatne**, 59 USD/mies. lub 399 USD/rok [S] |
| [GMTK Game Jam](https://itch.io/jam/gmtk-jam-2026) | 48-godzinny jam, zwykle ponad 7000 zgłoszeń ([Cinevva](https://app.cinevva.com/guides/game-jams-hackathons.html)) | **Darmowe** [A] |
| [Ludum Dare](https://app.cinevva.com/guides/game-jams-hackathons.html) | jam: 48 h solo, 72 h zespołowo | **Darmowe** [A] |
| [GameDev.net](https://www.gamedev.net/subscriptions/) | newsy, forum | **Freemium**, subskrypcja 3 USD/mies. [S] |

## 3. Modelowanie 3D: Blender za darmo, konkurencja w subskrypcji od 300 USD rocznie

**Blender 5.2 LTS wyszedł 14.07.2026** i ma wsparcie do lipca 2028 ([Blender](https://www.blender.org/releases/5-2/)) [S]. Komercyjne programy DCC (do tworzenia treści cyfrowych) sprzedaje się prawie wyłącznie w subskrypcji. Licencje indie kosztują ok. 300–400 USD rocznie. **Modo nie jest już rozwijane.** Dla użytkownika z Polski ważniejsze od ceny bywają licencje modeli AI (patrz Hunyuan3D).

### Programy DCC i rzeźbienie

| Program | Do czego | Cena |
|---|---|---|
| [Blender 5.2 LTS](https://osarch.org/2026/07/15/blender-5-2-lts-released/) | modelowanie, rzeźbienie, animacja, render, Geometry Nodes (od 5.2 z fizyką) | **Darmowe** [S]. Licencja GPL [N] |
| [Autodesk Maya](https://toolradar.com/tools/maya/pricing) | animacja i modelowanie (film, gry) | **Płatne.** Indie (przychód poniżej 100 tys. USD) ok. 305–330 USD/rok [A][!]. Pełna wersja ok. 2010 USD/rok ([superrendersfarm](https://superrendersfarm.com/article/3ds-max-licensing-2026)) [A] |
| [Autodesk 3ds Max](https://superrendersfarm.com/article/3ds-max-licensing-2026) | modelowanie, wizualizacje, gry | **Płatne**, ok. 2010 USD/rok [A]. Wersja Indie istnieje ([CGPress](https://cgpress.org/archives/3ds-max-and-maya-indie-licensing-announced.html)), cena na 2026 nieznana |
| [Cinema 4D / Maxon One](https://subger.com/en/service/cinema-4d) | motion design; Maxon One zawiera C4D, Redshift, ZBrush, Red Giant | **Płatne.** C4D ok. 94 USD/mies. Maxon One 1449–1665 USD/rok [A][!] |
| [Houdini](https://superrendersfarm.com/article/how-much-does-houdini-cost) | proceduralność, VFX | **Freemium.** Apprentice za darmo, tylko niekomercyjnie. Indie 299 USD/rok. Core 1475 USD/rok. FX 3505 USD/rok [A] |
| [Modo](https://foundry.com/news-and-awards/foundry-winds-down-modo-development) | modelowanie | **Wycofane.** Ostatnia wersja to 17.1. Pobieranie wyłączono w XI 2025 [S] |
| [ZBrush](https://www.cgchannel.com/2025/12/maxon-releases-zbrush-2026-1-and-zbrush-for-ipad-2026-1/) | rzeźbienie cyfrowe | **Płatne**, 49 USD/mies. lub 399 USD/rok. W cenie ZBrush for iPad i Redshift CPU [S] |
| [ZBrush for iPad](https://www.cgchannel.com/2025/12/maxon-releases-zbrush-2026-1-and-zbrush-for-ipad-2026-1/) | rzeźbienie na tablecie | **Freemium.** Aplikacja bazowa darmowa. Pełna wersja 9,99 USD/mies. lub 89,99 USD/rok [S] |
| [Nomad Sculpt](https://softwarefinder.com/design-software/nomad-sculpt) | rzeźbienie na tablecie i desktopie | **Płatne**, desktop ok. 35 USD [S], słabe źródło |

### Tekstury, UV, retopologia, voxele

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Adobe Substance 3D](https://blog.adobe.com/en/publish/2025/02/20/substance-3d-innovations-pricing-updates) (Painter, Designer, Sampler) | teksturowanie PBR | **Płatne.** Plan Texturing 24,99 USD/mies. lub 249,99 USD/rok. [Painter 2026 na Steamie](https://www.dekudeals.com/items/substance-3d-painter-2026): 199,99 USD z licencją wieczystą, aktualizacje do III 2027 [S] |
| [ArmorPaint](https://github.com/armory3d/armortools) | malowanie tekstur | **Freemium.** Kod otwarty [P]. Gotowe binarki płatne, cena nieznana |
| [Marmoset Toolbag 5](https://marmoset.co/shop) | bake'owanie, render do portfolio | **Płatne.** 395 USD licencja wieczysta albo subskrypcja od 18,99 USD/mies. [S] |
| [RizomUV 2025](https://www.cgchannel.com/?p=170142) | rozkładanie UV | **Płatne.** VS Indie: 149,90 EUR wieczyście [S] |
| [Marvelous Designer](https://www.cgchannel.com/2025/11/clo-virtual-fashion-releases-marvelous-designer-2025-2/) | symulacja ubrań | **Płatne**, 39 USD/mies. lub 280 USD/rok [S] |
| [Quad Remesher](https://exoside.com/quadremesher/quadremesher-buy/) | automatyczna retopologia | **Płatne.** Pro 109,90 USD. Indie (niekomercyjnie) 59,90 USD [S] |
| [Instant Meshes](https://github.com/wjakob/instant-meshes) | automatyczna retopologia | **Darmowe** [P]. Bez aktualizacji od 2019 |
| [Wings3D](https://en.ubunlog.com/wings-3d-modeling-application-open-source/) | modelowanie subdivision | **Darmowe**, open source [S] |
| [Dust3D](https://github.com/huxingyi/dust3d/releases) | szybkie modelowanie | **Darmowe.** Nieaktywny od 2022 [P] |
| [MagicaVoxel](https://filehorse.com/download-magicavoxel-64) | voxel art z path tracingiem | **Darmowe**, także komercyjnie [S] |
| [Blockbench](https://alternativeto.net/lists/31790/game-dev) | low-poly, standard w Minecraft Marketplace | **Darmowe** [S] |

### CAD i fotogrametria

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Fusion Personal](https://www.autodesk.com/products/fusion-360/blog/?p=90315) | CAD, druk 3D | **Freemium.** Za darmo tylko niekomercyjnie. Limit 10 aktywnych dokumentów, ograniczony eksport [S] |
| [FreeCAD 1.1](https://blog.freecad.org/2026/03/25/freecad-version-1-1-released/) | CAD parametryczny, FEM, CAM | **Darmowe**, open source [S] |
| [Rhino 8](https://www.renderahouse.com/blog/rhino-pricing) | NURBS, design | **Płatne**, 995 USD wieczyście [A] |
| [SketchUp](https://visualizee.ai/blog/sketchup-pricing) | architektura | **Płatne.** Go 129 USD/rok, Pro 399 USD/rok [A] |
| [Shapr3D](https://www.capterra.com/p/184498/Shapr3D/pricing/) | CAD na iPadzie i desktopie | **Freemium.** Free. Solo ok. 20,83 USD/mies. [A][!] |
| [Plasticity](https://doc.plasticity.xyz/getting-started/license-types-and-features) | hard-surface NURBS dla artystów, most do Blendera | **Płatne.** Indie 149 USD, Studio 299 USD, licencja wieczysta [S] |
| [RealityScan 2.0](https://radiancefields.com/realityscan-2-0-released) (dawny RealityCapture) | fotogrametria | **Darmowe** przy przychodzie poniżej 1 mln USD. Powyżej 1250 USD za stanowisko rocznie [S] |
| [Meshroom 2025.1](https://github.com/alicevision/Meshroom/releases/tag/v2025.1.0) | fotogrametria, Gaussian Splatting (eksperymentalnie) | **Darmowe**, open source [S] |
| [Polycam](https://subger.com/en/service/polycam) | skanowanie telefonem | **Freemium.** Plus 6,99, Pro 19,99 USD/mies. [A] |

### Dodatki do Blendera kosztują 20–130 USD jednorazowo

Blender Market zmienił w kwietniu 2025 nazwę na **Superhive** ([Superhive](https://superhivemarket.com/posts/beyond-business-as-usual-a-new-name-for-blender-market)) [S]. Dodatki do Blendera rozprowadza się teraz przez platformę Extensions, a stare repozytorium dodatków zarchiwizowano 9.05.2025 ([GitHub](https://github.com/blender/blender-addons)) [P].

| Dodatek | Do czego | Cena |
|---|---|---|
| [HardOps + BoxCutter](https://superhivemarket.com/products/hard-ops--boxcutter-ultimate-bundle) | modelowanie hard-surface | **Płatne**, pakiet 38 USD [S] |
| [Fluent](https://superhivemarket.com/creators/cg-thoughts) | hard-surface | **Płatne**, 20 USD. Power Trip 29,90 USD [S] |
| [MESHmachine / DECALmachine](https://superhivemarket.com/creators/machin3) | fazowania, decale | **Płatne**, 44,99–344,99 USD / 54,99–454,99 USD [S] |
| [Geo-Scatter 5.6](https://superhivemarket.com/products/scatter) | rozrzucanie obiektów, środowiska | **Płatne**, 99 USD [S] |
| [Botaniq](https://digitalproduction.com/2025/08/11/botaniq-7-1-plants-global-reach-in-blender/) | biblioteka roślin | **Płatne**, od 1,99 do 249,99 USD (Full 129 USD) [S] |
| [FLIP Fluids](https://superhivemarket.com/products/flipfluids/versions) | symulacja cieczy | **Płatne**, ok. 76 USD (cena z 2018, niezweryfikowana na 2026) |
| [RetopoFlow 4](https://www.cgchannel.com/?p=171061) | ręczna retopologia | **Płatne**, ok. 86 USD [S] |
| [Auto-Rig Pro](https://superhivemarket.com/products/auto-rig-pro/faq) | rigging i eksport do Unity/Unreal | **Płatne.** Lite 25 USD, Full 50 USD [S] |
| [UVPackmaster 3](https://bazaar.blendernation.com/listing/uvpackmaster-3-gpu-accelerated-fully-featured-uv-engine/) | pakowanie UV na GPU | **Płatne**, 44 USD [S] |
| [Sverchok](https://github.com/nortikin/sverchok/releases) | węzły parametryczne | **Darmowe**, wspiera Blendera do 5.1 [P] |
| [Animation Nodes](https://github.com/JacquesLucke/animation_nodes/releases) | animacja węzłowa | **Darmowe**, ale porzucone na Blenderze 4.2 [P] |
| [BlenderKit](https://www.blenderkit.com/) | biblioteka assetów w Blenderze | **Freemium.** Ok. 50% z 92 565 assetów jest darmowe [S] |
| Rigify, Node Wrangler | rigging, węzły | **Darmowe**, wbudowane [N] |

### Renderery

| Renderer | Do czego | Cena |
|---|---|---|
| [Cycles i EEVEE](https://wbgsv0a.gigazine.net/gsc_news/en/20251119-blender-5-0) | render w Blenderze | **Darmowe** [S] |
| [Octane](https://home.otoy.com/render/octane-render/news) | render GPU, ponad 20 integracji | **Freemium.** Prime za darmo na 1 GPU, z obsługą Blendera. Studio+ 239,88 EUR/rok [S] |
| [Redshift](https://superrendersfarm.com/blog/news/best-3d-rendering-software/) | render GPU | **Płatne**, ok. 289 USD/rok albo w Maxon One. Redshift CPU w subskrypcji ZBrush [A] |
| [Arnold](https://superrendersfarm.com/blog/news/best-3d-rendering-software/) | render produkcyjny | **Płatne**, ok. 430 USD/rok samodzielnie. W cenie Maya i 3ds Max [A] |
| [V-Ray](https://www.myarchitectai.com/blog/vray-pricing) | render (architektura, VFX) | **Płatne**, Solo ok. 540 USD/rok [A] |
| [Karma](https://superrendersfarm.com/article/how-much-does-houdini-cost) | render w Houdinim | w cenie Houdiniego [A] |

### Biblioteki assetów 3D

Darmowe źródła CC0 (Poly Haven, ambientCG, Kenney) są w sekcji 1. **Darmowe Megascans skończyły się 31.12.2024.** Assety odebrane wcześniej można używać bezterminowo ([CG Channel](https://www.cgchannel.com/2024/10/epic-games-has-made-megascans-free-to-all-but-only-until-the-end-of-2024/)) [S].

| Źródło | Do czego | Cena |
|---|---|---|
| [TurboSquid / CGTrader](https://licenseorg.com/compare/cgtrader-vs-turbosquid) | sklepy z modelami royalty-free | **Płatne** za model. Autorzy dostają 60–85% [S], niska wiarygodność |
| [Fab / Megascans](https://digitalproduction.com/2024/09/19/quixels-megascans-no-longer-free-after-2024/) | skany fotogrametryczne | **Freemium**, od 0,99 USD za asset [S] |
| [BlenderKit](https://www.blenderkit.com/) | modele i materiały w Blenderze | **Freemium** [S] |

### AI 3D: Hunyuan3D wyklucza UE, TRELLIS.2 jest na MIT

Komercyjne usługi mają darmowe plany. Zwykle brak w nich praw komercyjnych albo pobieranie jest ograniczone. Płatne plany zaczynają się od ok. 20 USD miesięcznie. **W 2026 ceny szybko rosną**: Tripo i Spline podniosły ceny w maju i sierpniu 2026.

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Meshy](https://docs.meshy.ai/en/webapp/pricing) | tekst lub obraz na model 3D, teksturowanie AI | **Freemium.** Free: 100 kredytów/mies., bez pobierania modeli Meshy 6. Pro 20 USD/mies. [S] |
| [Tripo AI](https://costbench.com/software/ai-3d-generation/tripo-ai/) | obraz na 3D, topologia quad, auto-rig | **Freemium.** Free bez użytku komercyjnego. Pro 19,90 USD/mies. [A] |
| [Rodin Gen-2 (Hyper3D)](https://hyper3d.ai/pricing) | wysokiej jakości 3D, T-pose i A-pose | **Freemium.** Creator 24 USD/mies., Business 120 USD/mies. [S] |
| [Hunyuan3D 2.1 (Tencent)](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1/blob/main/LICENSE) | otwarte wagi, PBR | **Niepewne dla Polski.** Licencja „DOES NOT APPLY IN THE EUROPEAN UNION”, więc w UE nie daje żadnych praw [P] |
| [TRELLIS.2 (Microsoft)](https://github.com/microsoft/TRELLIS.2) | obraz na 3D z pełnym PBR, eksport GLB | **Darmowe**, MIT. Wymaga GPU NVIDIA z co najmniej 24 GB VRAM [P] |
| [Stable Fast 3D / SPAR3D](https://huggingface.co/stabilityai/stable-fast-3d) | szybkie obraz na 3D | **Darmowe** do 1 mln USD przychodu rocznie, wymagana rejestracja [S] |
| [Kaedim](https://costbench.com/software/ai-3d-generation/kaedim/) | AI z korektą przez człowieka, retopologia i UV w cenie | **Płatne**, od 400 USD/mies. [A] |
| [CSM Cube](https://costbench.com/compare/csm-vs-luma-genie/) | 3D z podziałem na części | **Niepewne**, 0–2000 USD/mies. [A] |
| [Luma Genie](https://www.maginative.com/article/luma-ai-raises-43m-series-b-and-releases-genie-1-0/) | tekst na 3D | **Niepewne.** Luma skupia się na wideo, rozwój niepewny [!] |
| [Spline](https://costbench.com/software/ai-3d-generation/spline-ai/) | 3D w przeglądarce z AI | **Freemium.** Free ze znakiem wodnym. Professional + AI 30 USD/mies. [A] |

### Nauka 3D

| Materiał | Czego uczy | Cena |
|---|---|---|
| [Blender Guru: Donut 5.0](https://www.blenderguru.com/posts/blender-donut-v5-tutorial) | pełny start w Blenderze 5.0 (XI 2025) | **Darmowe** [S] |
| [CG Cookie](https://support.cgcookie.com/article/74-pricing-guide) | kursy Blendera, w tym CORE 5.2 LTS | **Płatne.** 27,99 USD/mies. lub 399 USD/rok, w czerwcowej promocji 199 USD [S] |
| [Blender Studio](https://subger.com/en/service/blender-studio) | oficjalna platforma Blender Foundation | **Płatne**, od 11,50 EUR/mies. [A] |

## 4. Cyberbezpieczeństwo: narzędzia obronne są darmowe, ważniejsza jest legalność

> **Uwaga prawna.** Narzędzia ofensywne (skanery, frameworki do exploitacji, C2, łamacze haseł) wolno uruchamiać tylko na systemach własnych albo na podstawie pisemnego zlecenia z zakresem, terminami i kontaktem. W Polsce nieuprawniony dostęp do informacji penalizuje art. 267 k.k. ([lexlege](https://lexlege.pl/kk/rozdzial-xxxiii-przestepstwa-przeciwko-ochronie-informacji/211/)). Rozdział XXXIII obejmuje art. 267–269b. Art. 269c daje tylko wąskie wyłączenie karalności. Trzeba działać wyłącznie w celu zabezpieczenia systemu, niezwłocznie powiadomić operatora i nie wyrządzić szkody ([lexlege, art. 269c](https://lexlege.pl/kk/art-269c/)). Ten przepis nie pozwala „ćwiczyć” na cudzych systemach. Treść przepisów pochodzi ze snippetów. Dokładne brzmienie, zwłaszcza odniesienia do art. 269b, sprawdź w ISAP [S][N]. Legalne miejsca do nauki: własny lab (VM, Docker), platformy z regulaminem zezwalającym na testy, CTF, bug bounty w zakresie programu. Raport zawiera tylko katalog narzędzi, bez procedur ataku.

> **Ostrzeżenie: atak na łańcuch dostaw Trivy (marzec 2026, CVE-2026-33634).** 19.03.2026 atakujący, przypisywani grupie TeamPCP, użyli skradzionych poświadczeń. Wypchnęli złośliwy kod do 75 z 76 tagów `aquasecurity/trivy-action` i przejęli `setup-trivy` oraz binarkę Trivy v0.69.4. Okno ekspozycji trwało ok. 12 godzin. Złośliwy kod kradł sekrety CI/CD, a potem uruchamiał zwykły skan. Był to drugi incydent w niecałe 3 tygodnie ([Snyk](https://snyk.io/de/articles/trivy-github-actions-supply-chain-compromise/); [Endor Labs](https://www.endorlabs.com/vulnerability/cve-2026-33634); [Barracuda](https://trust.barracuda.com/security/information/trivy-supply-chain-compromise)) [S].
> - **Wersje zainfekowane:** Trivy 0.69.4, obrazy 0.69.4–0.69.6, trivy-action 0.0.1–0.34.2, setup-trivy 0.2.0–0.2.6.
> - **Wersje bezpieczne:** Trivy 0.69.2 i 0.69.3, trivy-action 0.35.0.
> - **Sprzeczność [!]:** to samo źródło podaje setup-trivy 0.2.6 jako zainfekowany i jako bezpieczny.
> - **Co zrobić:** przypinaj GitHub Actions do pełnego SHA commita, a nie do tagu. Jeśli w oknie ataku używałeś zainfekowanej wersji, zmień wszystkie sekrety CI. W kontenerze Claude działał Trivy 0.75.0 z conda-forge, czyli wersja wydana po incydencie [K].

### Dystrybucje i środowiska

Wszystkie są darmowe. W 2026 dystrybucje dodają integracje z AI: MetasploitMCP i shell-gpt w Kali, Onion AI i serwer MCP w Security Onion Pro.

| Dystrybucja | Do czego | Cena |
|---|---|---|
| [Kali Linux 2026.2](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates) | autoryzowane pentesty, VM, WSL, ARM, NetHunter | **Darmowe** [S] |
| [Parrot OS 7.x](https://parrotsec.org/blog/2026-02-11-parrot-7.1-release-notes/) | pentest, forensics, prywatność; Debian 13 | **Darmowe** [S] |
| BlackArch | Arch Linux z ponad 2800 narzędziami | **Darmowe** [N] |
| [REMnux v8](https://docs.remnux.org/llms-full.txt) | analiza malware w Linuksie (Ubuntu 24.04) | **Darmowe** [S] |
| [FLARE-VM](https://github.com/mandiant/flare-vm) | analiza malware w Windows (VM) | **Darmowe** [S] |
| [Security Onion 2.4.2xx](https://blog.securityonion.net/2026/03) | monitoring sieci i SOC: Suricata, Zeek, Elastic | **Freemium.** Wersja darmowa. Pro płatny: Onion AI, serwer MCP ([blog](https://blog.securityonion.net/2025/12/security-onion-24200-now-available-with.html)) [S] |
| [Tsurugi Linux](https://www.helpnetsecurity.com/2024/01/16/tsurugi-linux-open-source-dfir-analysis/) | DFIR i OSINT | **Darmowe** (dane z 2024) [S] |
| CSI Linux | OSINT i forensics | **Darmowe** [N] |

### Sieć i monitoring

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Nmap 7.98](https://nmap.org/changelog) | skanowanie portów i usług (tylko autoryzowane) | **Darmowe** [S]. Wersja 7.99 [S]. Licencja NPSL [N] |
| Masscan | bardzo szybki skaner portów | **Darmowe**, AGPL [N] |
| [Wireshark 4.6.9](https://www.wireshark.org/news/20260923.html) | analiza pakietów | **Darmowe** [S]. Aktualizuj: kolejne wydania łatają wiele podatności, które coraz częściej wykrywa AI |
| tcpdump | przechwytywanie pakietów z wiersza poleceń | **Darmowe** [N] |
| Zeek | logi protokołów (NSM) | **Darmowe** [N] |
| Suricata | IDS/IPS | **Darmowe.** Reguły ET Pro płatne [N] |
| Snort 3 | IDS/IPS (Cisco Talos) | **Darmowe.** Reguły Subscriber płatne [N] |
| [Shodan](https://account.shodan.io/billing) | wyszukiwarka urządzeń w internecie | **Płatne.** Jednorazowe członkostwo, w promocjach ok. 5 USD ([Slickdeals](https://slickdeals.net/f/15918523-shodan-io-membership-5)) [S]. API od 69 USD/mies. [S] |
| [Censys](https://docs.censys.com/docs/data-access-tiers-entitlements) | wyszukiwarka hostów i certyfikatów | **Freemium.** Free: 250 zapytań/mies. Solo: 62 USD/mies. (745 USD/rok) [S] |

### Bezpieczeństwo aplikacji webowych

| Narzędzie | Do czego | Cena |
|---|---|---|
| Burp Suite Community | proxy do testów web | **Darmowe**, okrojone [N] |
| [Burp Suite Professional](https://cipherssecurity.com/burp-suite-pricing-2026-pro-vs-dast/) | pełny zestaw do testów web | **Płatne**, 499 USD/rok od I 2026 (wcześniej 449 USD) [S][A] |
| [ZAP by Checkmarx 2.17](https://www.zaproxy.org/blog/2026-02-02-zap-updates-2025-highlights-2026-plans/) | skaner i proxy web, także w CI | **Darmowe**, Apache-2.0 [S] |
| [Caido](https://www.caido.io/blog/2025-08-21-localized-pricing/_payload.json) | nowoczesna alternatywa dla Burpa | **Freemium.** Basic za darmo. Individual 20 USD/mies. lub 200 USD/rok, ceny zależne od kraju [S] |
| nuclei, ffuf, sqlmap, Nikto | skanery szablonowe, fuzzing, wykrywanie znanych błędów (tylko w autoryzowanym zakresie) | **Darmowe**, open source [N] |

### Podatności, SAST i SCA

| Narzędzie | Do czego | Cena |
|---|---|---|
| Greenbone CE / OpenVAS | skaner podatności sieci | **Darmowe** [N] |
| Nessus Essentials | skaner podatności, do 16 IP | **Darmowe**, tylko niekomercyjnie [N] |
| [Nessus Professional / Expert](https://ifeeltech.com/blog/tenable-nessus-review) | skaner podatności | **Płatne.** Pro ok. 4390 USD/rok, Expert ok. 6390 USD/rok [A][!] |
| Trivy | podatności, błędy konfiguracji, sekrety, SBOM | **Darmowe**, Apache-2.0 [N]. Patrz ostrzeżenie wyżej. Działa w kontenerze [K] |
| Grype + Syft | podatności obrazów, SBOM | **Darmowe** [N]. Syft działa w kontenerze [K] |
| [Semgrep CE](https://thenewstack.io/opengrep-launches-as-free-fork-after-semgrep-license-shift/) | SAST, skan kodu | **Freemium.** CE na LGPL 2.1, analiza w obrębie pliku. Analiza między plikami tylko w płatnym Semgrep Code [S]. Działa w kontenerze [K] |
| [Opengrep](https://thenewstack.io/opengrep-launches-as-free-fork-after-semgrep-license-shift/) | fork Semgrepa z przywróconymi funkcjami | **Darmowe**, LGPL 2.1 [S] |
| CodeQL | SAST od GitHuba | **Freemium**, darmowy dla publicznych repozytoriów [N] |
| [Snyk](https://cipherssecurity.com/snyk-pricing-explained-2026/) | SCA, SAST, kontenery, IaC | **Freemium.** Free: 200 testów SCA, 100 SAST, 100 kontenerów, 300 IaC miesięcznie [A] |
| OWASP Dependency-Check | SCA na podstawie NVD | **Darmowe** [N] |
| Bandit | SAST dla Pythona | **Darmowe**. Działa w kontenerze [K] |

### Reverse engineering i analiza malware

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Ghidra 12.1.4](https://en.wikipedia.org/wiki/Ghidra) | dekompilacja i analiza binarek (NSA) | **Darmowe** [S]. Tryb headless działa w kontenerze [K] |
| [IDA Free / Home / Pro](https://hex-rays.com/pricing) | standard branżowy RE | **Freemium.** Free tylko niekomercyjnie. Home 365 USD/rok. Pro od 1099 do 8599 USD/rok, tylko subskrypcja [S] |
| [Binary Ninja 6.0](https://binary.ninja/2026/07/28/pricing-changes.html) | RE z asystentem AI Sidekick | **Freemium.** Free niekomercyjnie. Personal 199 USD, Commercial 1799 USD. Licencja wieczysta z rokiem aktualizacji [S] |
| radare2 / Cutter | RE w terminalu i w GUI | **Darmowe** [N] |
| x64dbg | debugger dla Windows | **Darmowe** [N] |
| YARA / YARA-X | reguły wykrywania malware | **Darmowe** [N] |
| [CAPEv2](https://capev2.readthedocs.io/en/latest/introduction/what.html) | sandbox malware (następca Cuckoo) | **Darmowe**, open source [S] |
| [ANY.RUN](https://any.run/plans) | interaktywny sandbox online | **Freemium.** Community za darmo: pliki do 16 MB, 60 s analizy. Hunter płatny, cena sporna [S][!] |
| VirusTotal | reputacja plików, URL-i, IP | **Freemium.** Publiczny serwis darmowy. Przesłane pliki widzą inni użytkownicy, więc dla prywatnego kodu wysyłaj tylko hashe [N] |

### Blue team, SIEM i DFIR

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Wazuh 5.0](https://documentation.wazuh.com/current/release-notes/) | SIEM/XDR; od 1.07.2026 reguły Sigma, CTI, asystent AI | **Darmowe** [S] |
| Elastic Security | SIEM i ochrona endpointów | **Freemium** [N] |
| [Splunk Free](https://help.splunk.com/en/splunk-enterprise/administer/admin-manual/10.2/configure-splunk-licenses/about-splunk-free) | nauka SPL, lab | **Freemium.** Do 500 MB dziennie, bez alertów i bez uwierzytelniania [S] |
| [Velociraptor 0.77.2](https://www.rapid7.com/about/press-releases/rapid7-acquires-digital-forensics-and-incident-response-open-source-project-velociraptor) | DFIR i monitoring endpointów | **Darmowe**, open source [S] |
| osquery | odpytywanie stanu systemu w SQL | **Darmowe** [N] |
| CrowdSec, fail2ban | blokowanie IP na podstawie logów | **Darmowe** (CrowdSec ma płatną konsolę) [N] |
| Sigma | uniwersalny format reguł detekcji | **Darmowe** [N] |
| MISP, OpenCTI, TheHive/Cortex | threat intel, obsługa incydentów | **Darmowe** lub **Freemium** [N] |
| Sysmon | szczegółowe logi Windows | **Darmowe** [N] |
| Autopsy / Sleuth Kit, Volatility 3 | analiza dysków i pamięci RAM | **Darmowe** [N] |
| KAPE | szybka zbiórka artefaktów Windows | **Niepewne.** Darmowy, ale z ograniczeniami w użytku komercyjnym [N] |

### Frameworki do autoryzowanych pentestów (sam katalog)

To narzędzia podwójnego zastosowania. Używaj ich tylko z pisemnym zleceniem.

| Narzędzie | Do czego | Cena / licencja |
|---|---|---|
| [Metasploit Framework](https://ethicalhacking.ai/pricing/metasploit-framework-pricing) | framework do testów penetracyjnych | **Darmowe**, BSD. Pro ok. 15 000 USD/rok [A] |
| [BloodHound CE v8](https://specterops.io/blog/2025/07/29/bloodhound-community-edition-v8-launches-with-opengraph/) | analiza ścieżek uprawnień w AD, Entra ID i (przez OpenGraph) innych systemach. Przydaje się też obrońcom | **Darmowe**. Enterprise płatny [S] |
| Impacket, NetExec | ocena bezpieczeństwa sieci Windows/AD | **Darmowe** [N] |
| Sliver, Mythic | frameworki C2 dla red teamów | **Darmowe** [N] |

### Hasła

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Hashcat 7.0](https://www.helpnetsecurity.com/?p=337962) | audyt siły haseł na GPU, m.in. Argon2 | **Darmowe** [S]. Licencja MIT [N] |
| John the Ripper | audyt haseł | **Darmowe.** Wersja Pro płatna [N] |
| KeePassXC | menedżer haseł offline | **Darmowe** [N] |
| Bitwarden | menedżer haseł w chmurze, open source | **Freemium.** Ceny na 2026 niezweryfikowane [N] |

### AI w bezpieczeństwie

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Claude Security](https://pulse2.com/anthropic-launches-claude-security-in-public-beta-for-enterprise-customers) / [Claude Code Security](https://www.thaicert.or.th/en/2026/02/25/anthropic-launches-claude-code-security-an-ai-tool-for-detecting-and-remediating-source-code-vulnerabilities/) | skan kodu i propozycje poprawek | **Płatne**, w planie Enterprise. Publiczna beta od V 2026 [S] |
| [Microsoft Security Copilot](https://trustedtechteam.com/blogs/microsoft-365/microsoft-security-copilot-pricing-e5-inclusion) | copilot dla SOC | **Płatne.** 4 USD za godzinę SCU. W M365 E5: 400 SCU/mies. na każde 1000 licencji [S] |
| [Google Big Sleep](https://techcrunch.com/2025/08/04/google-says-its-ai-based-bug-hunter-found-20-security-vulnerabilities/), [CodeMender](https://www.securityweek.com/google-deepminds-new-ai-agent-finds-and-fixes-vulnerabilities/amp/), [OpenAI Aardvark](https://openai.com/index/introducing-aardvark), XBOW | agenci szukający i łatający podatności | brak publicznych cenników |
| [Garak, PyRIT, Promptfoo, DeepTeam](https://obot.ai/blog/top-5-open-source-ai-security-tools-in-2026/) | testy bezpieczeństwa modeli LLM i agentów | **Darmowe**, open source [S] |
| [HexStrike AI](https://strobes.co/blog/open-source-agentic-pentesting-tools/), MetasploitMCP | serwery MCP sterujące narzędziami ofensywnymi | **Darmowe**, ale to narzędzia podwójnego zastosowania. Tylko w autoryzowanym zakresie [S] |

### Platformy do nauki: od zera do juniora za darmo

| Platforma | Czego uczy, poziom | Cena |
|---|---|---|
| [TryHackMe](https://hackerdna.com/blog/tryhackme-pricing) | red i blue team w przeglądarce, od podstaw | **Freemium.** Premium ok. 14 USD/mies. lub 126 USD/rok. Dla studentów ok. 100 USD/rok [A]. Plan MAX z VI 2026 niepewny [!] |
| [Hack The Box Academy](https://hackerdna.com/blog/hack-the-box-academy) | średni i zaawansowany, ścieżki pod certyfikaty | **Freemium.** Studenci 8 USD/mies. Silver Annual 490 USD/rok z voucherem CPTS [A] |
| [HTB Labs / Sherlocks](https://www.hackthebox.com/blog/sherlocks) | maszyny do ataku, scenariusze DFIR | **Freemium.** VIP+ ok. 25 USD/mies. [A], niezweryfikowane |
| [PortSwigger Web Security Academy](https://portswigger.net/web-security/certification/frequently-asked-questions) | bezpieczeństwo web, wszystkie poziomy | **Darmowe.** Egzamin BSCP 99 USD |
| [pwn.college](https://pwn.college/) | Linux, binarki, systemy | **Darmowe** |
| [Root-Me](https://digital-skills-jobs.europa.eu/en/learning-space/resources/root-me-challenge-your-hacking-skills) | zadania z wielu kategorii | **Darmowe** |
| OverTheWire, picoCTF / picoGym | wargames, CTF dla początkujących | **Darmowe** [N] |
| [PentesterLab PRO](https://pentesterlab.com/pro) | exploitacja web, code review | **Płatne**, 199,99 USD/rok [S] |
| [TCM Academy](https://academy.tcm-sec.com/p/all-access-pass) | praktyczne kursy pentestu | **Płatne**, 29,99 USD/mies. [S] |
| [LetsDefend](https://ethicalhacking.ai/pricing/letsdefend-pricing) | symulacja pracy w SOC | **Freemium**, płatne ok. 25–40 USD/mies. [A] |
| [CyberDefenders](https://cyberdefenders.org/blue-team-labs/) | laby blue team, DFIR | **Freemium**, cena Pro nieznana [S] |
| [RangeForce Community](https://techrseries.com/?p=69660) | cyber range, moduły SOC | **Darmowe**, 20 modułów [S] |
| [SANS Cyber Aces](https://cyberaces.org/about.html) | podstawy: systemy, sieci | **Darmowe** |
| [Google Cybersecurity Certificate](https://cybersteps.de/en/?p=15693) | podstawy pracy analityka SOC | **Płatne**, ok. 49 USD/mies. przez ok. 6 miesięcy [S] |
| Cisco Networking Academy | sieci i podstawy bezpieczeństwa | **Darmowe** [N] |

### CTF

| Zasób | Do czego | Uwagi |
|---|---|---|
| [CTFtime.org](https://ctftime.org/event/list/?year=2026) | kalendarz zawodów i ranking drużyn | **Darmowe.** Na start szukaj CTF-ów o wadze poniżej 25 |
| [DEF CON CTF Quals 2026](https://ctftime.org/event/3205) | eliminacje do najważniejszego CTF | odbyły się 22–24.05.2026 |
| Google CTF 2026 | duży CTF online | start 19.06.2026 [S], niska pewność |
| [Dragon Sector, p4](https://hackerdna.com/rankings/poland) | polskie drużyny ze światowej czołówki | Rating ok. 1092 i 901 [A]. Zmienia się na bieżąco |

CTF jest legalny z założenia. Atakujesz infrastrukturę, którą organizator zbudował i udostępnił do ataku. Tablica wyników i serwery organizatora są poza zakresem, chyba że regulamin mówi inaczej.

### Certyfikaty: praktyczne są tańsze niż CEH i GIAC

| Certyfikat | Co potwierdza | Cena |
|---|---|---|
| [ISC2 CC](https://www.examcert.app/blog/isc2-cc-worth-it/) | podstawy bezpieczeństwa | **Płatne**, 199 USD i 50 USD/rok opłaty utrzymaniowej. Darmowy program 1MCC zamknięto podobno 20.05.2026 [S], do sprawdzenia |
| [CompTIA Security+](https://www.examcert.app/blog/comptia-security-plus-exam-cost-2026/) | podstawy, filtr HR | **Płatne**, 425–439 USD [S][!] |
| [eJPT (INE)](https://hackerdna.com/blog/ejpt-certification) | pentest na poziomie juniora | **Płatne**, 249 USD albo 299 USD/rok z kursem [A] |
| [PNPT (TCM)](https://certifications.tcm-sec.com/pnpt/) | 5-dniowy praktyczny pentest z raportem | **Płatne**, 499 USD ze szkoleniem [S] |
| [HTB CPTS / CWES / CDSA](https://hackerdna.com/blog/hack-the-box-academy?lang=save) | praktyczne: pentest, web, SOC | **Płatne**, ok. 210 USD każdy [A] |
| [BSCP (PortSwigger)](https://portswigger.net/web-security/certification/frequently-asked-questions) | testy web | **Płatne**, 99 USD. Wymaga Burp Pro |
| [BTL1 (Security Blue Team)](https://qa.com/QACBTL1OL) | blue team, praktyczny | **Płatne**, od 399 GBP + VAT. W Polsce szkoli [Compendium CE](https://www.compendium.pl/training/12177/centri-authorized-training-blue-team-level-1-btl1) |
| [CySA+ / PenTest+](https://course.careers/certifications/comptia-price) | analityk SOC / pentest | **Płatne**, 439 USD [S] |
| [OSCP / OSCP+](https://unihackers.com/certifications/oscp) | zaawansowany pentest, egzamin trwa prawie 24 h | **Płatne**, ok. 2749 USD/rok (Learn One) [A] |
| [CISSP](https://destcert.com/resources/cissp-exam-cost/) | zarządzanie bezpieczeństwem, wymaga 5 lat doświadczenia | **Płatne**, 749 USD [S] |
| [CEH v13](https://quickstart.com/blog/how-much-ceh-exam-cost) | wiedza teoretyczna | **Płatne**, 950–1199 USD [S][!] |
| [GIAC](https://www.giac.org/certifications/pricing) | specjalizacje | **Płatne.** 979 USD za podejście. Z kursem SANS ok. 9800 USD [S] |

### Bug bounty: testuj tylko zasoby z zakresu programu

| Program | Do czego | Wypłaty |
|---|---|---|
| [HackerOne, Bugcrowd, Intigriti, YesWeHack](https://guptadeepak.com/top-5-bug-bounty-platforms-for-security-researchers-in-2026/) | platformy, na których firma definiuje zakres i zasady | dla badacza **darmowe**. Typowo 100–5000 USD, krytyczne ponad 100 tys. USD [A] |
| [Apple Security Bounty](https://betanews.com/2025/10/13/apple-doubles-its-top-bug-bounty-payout-to-2-million/) | podatności Apple | do 2 mln USD, z bonusami ponad 5 mln USD [S] |

Ochronę prawną (safe harbor) daje tylko testowanie zasobów z zakresu, według zasad programu ([Dark Reading](https://darkreading.com/application-security/safe-harbor-programs-ensuring-the-bounty-isn-t-on-white-hat-hackers-heads)). Na pierwszą pracę bug bounty nadaje się słabo, bo większość raportów początkujących to duplikaty.

### Polskie zasoby i darmowe materiały referencyjne

| Zasób | Do czego | Cena |
|---|---|---|
| [Sekurak: Websecurity Master](https://cdn.sekurak.pl/tt/websecm/ulotka.pdf) | kurs bezpieczeństwa web po polsku | **Płatne.** 1950 PLN netto za moduł, 3500 PLN za oba. Data ulotki nieznana [S] |
| [CONFidence 2026](https://infosec-conferences.com/event/confidence-2026) | konferencja w Krakowie, odbyła się 25–26.05.2026 | **Płatne** [S] |
| CERT Polska, Niebezpiecznik, Zaufana Trzecia Strona | zgłaszanie incydentów, newsy, edukacja | **Darmowe** [N] |
| [OWASP Top 10:2025](https://www.theregister.com/2025/11/11/new_owasp_top_ten_broken/) | lista głównych ryzyk web; nowe kategorie: łańcuch dostaw (A03) i obsługa wyjątków (A10) | **Darmowe** [S] |
| OWASP Juice Shop, DVWA | celowo podatne aplikacje do lokalnego labu | **Darmowe** [N]. Uruchamiaj tylko lokalnie |
| HackTricks, PayloadsAllTheThings, MITRE ATT&CK, NIST CSF 2.0 | ściągi i ramy odniesienia | **Darmowe** [N] |

## 5. Claude: w chmurze obsłuży narzędzia bez GUI, edytory wymagają PC

O tym, co Claude obsłuży sam, decyduje interfejs, a nie dziedzina. Narzędzie, które działa bez interfejsu graficznego, Claude uruchomi w kontenerze. Edytor z GUI wymaga komputera użytkownika z uruchomioną aplikacją i wtyczką MCP, połączonego z Claude Desktop albo Claude Code. Poniższe wyniki dotyczą tej konkretnej sesji. Inne środowisko może mieć inne ograniczenia sieci.

### Co działa w kontenerze (przetestowane 2 października 2026) [K]

Środowisko: Ubuntu 24.04, 4 CPU, 15 GB RAM, **bez GPU i bez wyświetlacza**. Docker jest zainstalowany, ale bez działającego demona. Obrazy rozpakowano narzędziem crane.

| Narzędzie | Co działa | Ograniczenia |
|---|---|---|
| Godot 4.7.2 headless (obraz z Docker Hub) | uruchamianie skryptów, eksport na web | bez edytora |
| Blender jako moduł Pythona bpy 5.0.1 | render Cycles na CPU, eksport GLB | EEVEE nie działa (brak libEGL) |
| Ghidra 12.1.4 headless | analiza binarek (26 s na małej binarce) | bez GUI |
| Semgrep 1.179.0 z `semgrep mcp` | skan SAST, serwer MCP | wymaga lokalnie sklonowanego repozytorium semgrep-rules (rejestr reguł zablokowany) |
| Trivy | skan po pobraniu bazy | sprawdź wersję (ostrzeżenie w sekcji 4) |
| Grype | instaluje się | nie pobiera bazy, więc w praktyce nie działa |
| Bandit, Syft | SAST Pythona, SBOM | — |
| trimesh, gltf-transform | obróbka siatek i plików glTF | — |
| pygame, raylib | gry 2D | z atrapą lub wirtualnym wyświetlaczem |
| Higgsfield AI (MCP) | `generate_3d` (obraz na GLB), `scene_builder_3d` z hostowanym Blenderem, kreator stron, który może hostować gry webowe | plan darmowy, 3 kredyty |
| GitHub, Google Drive, Gmail, Google Calendar (MCP) | połączone w tej sesji | — |

Dostępne z kontenera: `git clone` z GitHuba, PyPI, npm, proxy modułów Go, conda-forge, Docker Hub, MCR, ghcr.io. **Zablokowane**: pobieranie z GitHub Releases, blender.org, godotengine.org, huggingface.co, rejestr reguł Semgrep, baza Grype, pobieranie Playwright, create.roblox.com, docs.unity3d.com. Zamiast GitHub Releases można zbudować narzędzie ze źródeł albo użyć obrazu z Docker Hub lub ghcr.io.

**Prawdopodobnie zadziała, ale nie testowano:** [Coding-Solo/godot-mcp](https://github.com/Coding-Solo/godot-mcp) z `GODOT_PATH` wskazującym na binarkę headless, [bethington/ghidra-mcp](https://github.com/bethington/ghidra-mcp) (tryb headless, Docker), [Fulviuus/defold-mcp](https://github.com/Fulviuus/defold-mcp) (headless, ale bob.jar może wymagać zablokowanego hosta), [yearningss/gamemaker-mcp](https://github.com/yearningss/gamemaker-mcp) (tylko analiza i edycja plików), FreeCADCmd z conda-forge. Serwery MCP dla Sketchfaba, VirusTotal i Snyka działają bez GUI, ale nie sprawdzono, czy ich API są osiągalne z kontenera.

### Serwery MCP dla silników gier

Liczba gwiazdek na GitHubie według stanu z 2 października 2026 [P].

| Serwer | Steruje | Licencja | Gdzie działa |
|---|---|---|---|
| [CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp) (14 644★) | Unity Editor: assety, sceny, skrypty | MIT | PC z Unity |
| [IvanMurzak/Unity-MCP](https://github.com/IvanMurzak/Unity-MCP) (4 373★) | Unity Editor i runtime; dowolna metoda C# jako narzędzie | Apache-2.0 | PC z Unity (sam serwer może działać w Dockerze) |
| [CoderGamester/mcp-unity](https://github.com/CoderGamester/mcp-unity) | wtyczka Unity Editor | MIT | PC |
| [Unity industry-ai-workflows](https://github.com/Unity-Technologies/industry-ai-workflows) | oficjalne, eksperymentalne: Asset Manager, Asset Transformer, Pipeline Automation | nie sprawdzono | chmura Unity, nie edytor gier |
| [ChiR24/Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) (902★) | UE 5.0–5.8, ok. 400 operacji | MIT | PC z Unrealem |
| [flopperam/unreal-engine-mcp](https://github.com/flopperam/unreal-engine-mcp), [chongdashu/unreal-mcp](https://github.com/chongdashu/unreal-mcp) | Unreal; drugi bez commitów od IV 2025 | MIT według README | PC |
| [Coding-Solo/godot-mcp](https://github.com/Coding-Solo/godot-mcp) (5 908★) | uruchamia binarkę Godota, zbiera wyjście debugowania | MIT | **chmura (prawdopodobnie)** lub PC |
| [hi-godot/godot-ai](https://github.com/hi-godot/godot-ai) (2 739★) | wtyczka edytora, 46 narzędzi | MIT | PC z edytorem Godot |
| Roblox Studio, wbudowany MCP ([info w zarchiwizowanym repo](https://github.com/Roblox/studio-rust-mcp-server)) | Roblox Studio; oficjalny serwer przeniesiono do Studio | — | PC (Windows/macOS) |
| [Chrrxs/robloxstudio-mcp](https://github.com/Chrrxs/robloxstudio-mcp) | Roblox Studio (aktywny fork) | MIT | PC |
| [yearningss/gamemaker-mcp](https://github.com/yearningss/gamemaker-mcp) | projekty .yyp, analiza GML | MIT | chmura do analizy, PC do buildów |
| [Fulviuus/defold-mcp](https://github.com/Fulviuus/defold-mcp) | build, uruchamianie, profiler | MIT | **chmura** (według README nie wymaga edytora) |
| [natepiano/bevy_brp](https://github.com/natepiano/bevy_brp) | działająca aplikacja Bevy | MIT/Apache | tam, gdzie działa aplikacja |

Nie znaleziono oficjalnego MCP od Epic Games ani od YoYo Games. Nie potwierdzono, czy Unity AI Assistant udostępnia MCP zewnętrznym agentom [N].

### Serwery MCP dla 3D

| Serwer | Steruje | Licencja | Gdzie działa |
|---|---|---|---|
| [ahujasid/mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) (29 839★) | Blender: modelowanie, sceny, materiały | MIT | PC z Blenderem. W chmurze wystarcza bpy [K] |
| [PatrickPalmer/MayaMCP](https://github.com/PatrickPalmer/MayaMCP) | Maya przez command port | MIT | PC |
| [cl0nazepamm/3dsmax-mcp](https://github.com/cl0nazepamm/3dsmax-mcp) | 3ds Max 2023–2027, 160 narzędzi | MIT | PC z Windows |
| [capoomgit/houdini-mcp](https://github.com/capoomgit/houdini-mcp) | Houdini | MIT | PC |
| [healkeiser/fxhoudinimcp](https://github.com/healkeiser/fxhoudinimcp) | Houdini 20.5+, tryb headless | MIT | headless możliwy, wymaga licencji Houdini |
| [ttiimmaacc/cinema4d-mcp](https://github.com/ttiimmaacc/cinema4d-mcp) | Cinema 4D R2024+ | MIT | PC |
| [jingcheng-chen/rhinomcp](https://github.com/jingcheng-chen/rhinomcp) | Rhino 8 i Grasshopper | MIT | PC |
| [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) | FreeCAD (dodatek w GUI) | MIT | PC |
| [faust-machines/fusion360-mcp-server](https://github.com/faust-machines/fusion360-mcp-server) | Fusion 360 | MIT | PC |
| [gregkop/sketchfab-mcp-server](https://github.com/gregkop/sketchfab-mcp-server) | wyszukiwanie i pobieranie modeli, wymaga klucza API | ISC | bez GUI. Dostęp z chmury niesprawdzony |
| [aydinfer/spline-mcp-server](https://github.com/aydinfer/spline-mcp-server) | Spline | MIT | **nie działa**: Spline nie ma publicznego API |

### Serwery MCP do defensywnej analizy bezpieczeństwa

Notatki celowo pominęły serwery MCP ofensywne.

| Serwer | Do czego | Licencja | Gdzie działa |
|---|---|---|---|
| Semgrep MCP (`semgrep mcp`, [stare repo](https://github.com/semgrep/mcp)) | skan SAST z poziomu agenta | Semgrep CE: LGPL-2.1 [N] | **chmura** [K] |
| [Snyk MCP](https://github.com/snyk/studio-mcp) (`snyk mcp`) | skan kodu, zależności i konfiguracji | Apache-2.0 | bez GUI, wymaga konta Snyk |
| [snyk/agent-scan](https://github.com/snyk/agent-scan) | skan bezpieczeństwa agentów, serwerów MCP i skilli | nie sprawdzono | CLI |
| [bethington/ghidra-mcp](https://github.com/bethington/ghidra-mcp) (4 090★) | ponad 200 narzędzi RE, tryb headless i Docker | Apache-2.0 | chmura (nietestowane) |
| [LaurieWired/GhidraMCP](https://github.com/LaurieWired/GhidraMCP) (10 242★) | wtyczka do GUI Ghidry; bez commitów od VI 2025 | Apache-2.0 | PC |
| [w0h1v/mcp-virustotal](https://github.com/w0h1v/mcp-virustotal) | raporty VirusTotal, wymaga klucza API | MIT | bez GUI |
| [gensecaihq/Wazuh-MCP-Server](https://github.com/gensecaihq/Wazuh-MCP-Server) | triage alertów Wazuha, 55 narzędzi | MIT | wymaga działającego Wazuha (domowy PC lub serwer) |
| [Elastic Agent Builder MCP](https://github.com/elastic/mcp-server-elasticsearch) | oficjalny, od Elastic 9.2 | Apache-2.0 | wymaga instancji Elastic |
| [Splunk MCP Server](https://splunkbase.splunk.com/app/7931) | oficjalna aplikacja Splunkbase 7931 | — | wymaga instancji Splunk |
| [mukul975/cve-mcp-server](https://github.com/mukul975/cve-mcp-server) | threat intel: CVE, EPSS, CISA KEV, ATT&CK | nie sprawdzono | bez GUI |

### Katalog konektorów Claude

Na [claude.com/connectors](https://claude.com/connectors) jest 887 konektorów, ale strona pokazuje tylko 32 wyróżnione. Wśród widocznych **nie ma konektora do silników gier, 3D ani skanowania kodu**. Najbliższe są Figma, Adobe, Canva i Vanta. Pełnej listy nie udało się przeszukać. Narzędzia z tych dziedzin podłącza się więc do Claude jako lokalne serwery MCP albo uruchamia jako CLI w kontenerze.

## 6. Darmowe zestawy startowe dla czterech obszarów

**Tworzenie gier (0 zł):**

- Silnik: Godot 4.7 (albo Defold do gier 2D na web i mobile).
- Assety: Kenney, Poly Haven, ambientCG (CC0). Wtyczki z Godot Asset Store.
- Poziomy i grafika: Tiled lub TrenchBroom, LibreSprite lub Pixelorama.
- Dźwięk: FMOD Indie albo darmowy Wwise.
- Wersjonowanie: Git, Perforce (do 5 osób) albo Unity VCS (25 GB).
- Publikacja: itch.io. Pierwszy realny koszt to Steam Direct: 100 USD, zwracane po 1000 USD przychodu.

**Programowanie gier (0 zł):**

- Nauka pętli gry: Python z pygame-ce albo Lua z LÖVE (kurs CS50 2D).
- Pierwsza gra: GDScript w Godocie (Learn GDScript From Zero, Brackeys).
- Narzędzia: VS Code albo Rider (niekomercyjnie), RenderDoc, Tracy.
- Biblioteki: Jolt lub Box2D. Do multiplayera Colyseus albo Nakama na własnym serwerze.
- Praktyka: GMTK Game Jam, Ludum Dare.

**Modelowanie 3D (0 zł):**

- Program: Blender 5.2 LTS i tutorial Donut 5.0.
- Tekstury: Poly Haven, ambientCG. Render: Cycles (opcjonalnie Octane Prime).
- Skanowanie: RealityScan 2.0 albo Meshroom. CAD i druk 3D: FreeCAD 1.1.
- AI: TRELLIS.2 lokalnie, jeśli masz GPU z co najmniej 24 GB VRAM. Darmowe plany Meshy i Tripo nadają się tylko do testów (brak praw komercyjnych). Hunyuan3D omijaj, bo jego licencja wyklucza UE.
- Pierwszy sensowny wydatek: dodatki hard-surface za ok. 40–60 USD albo Substance Painter ze Steama za 199,99 USD.

**Cyberbezpieczeństwo, ścieżka defensywna (0 zł):**

- Lab: własne VM lub Docker, OWASP Juice Shop i DVWA uruchomione tylko lokalnie.
- Obrona: Wazuh 5.0 lub Security Onion, Wireshark, Sysmon, Velociraptor.
- Kod: Semgrep CE lub Opengrep, Trivy w bezpiecznej wersji przypiętej do SHA, Syft, Bandit.
- Analiza: Ghidra, YARA. Hasła: KeePassXC lub Bitwarden.
- Nauka: darmowe plany TryHackMe, PortSwigger Academy, pwn.college, OverTheWire i picoCTF, potem CTF-y z CTFtime. Lektura: OWASP Top 10:2025.
- Pierwsze wydatki: TryHackMe Premium (ok. 126 USD/rok), potem eJPT (249 USD), PNPT (499 USD) albo BTL1. Budżet minimalny to ok. 400–700 USD ([hackerdna](https://hackerdna.com/blog/tryhackme-pricing)) [A].

## 7. Czego nie zweryfikowano

- **Źródła.** Proxy blokowało większość stron dostawców (unity.com, sidefx.com, portswigger.net, hex-rays.com, tryhackme.com, offsec.com, isc2.org). Limit 200 wyszukiwań wyczerpał się w każdej części badania. Ceny pochodzą głównie ze snippetów i agregatorów.
- **Sprzeczne dane [!].** Daty UE 5.7 i 5.8. Cena Maya Indie (305 czy 330 USD). Maxon One. Nessus. CEH. Security+ (425 czy 439 USD). Progi FMOD. Hunter w ANY.RUN. Convai. setup-trivy 0.2.6.
- **Do potwierdzenia.** Dokładne brzmienie art. 267–269c k.k. (sprawdź w ISAP). Zamknięcie programu ISC2 1MCC 20.05.2026. Plan TryHackMe MAX. Stan darmowych modeli na Sketchfabie. Status Luma Genie. Licencje oznaczone [N].
- **Pominięte.** Podział przychodu Steam i Unity Asset Store. Ranking wtyczek Fab. Cena Final IK. Narzędzia do dokumentacji gier (Twine, Ink, Yarn Spinner). AI do muzyki i dźwięku. Polski rynek pracy w cyberbezpieczeństwie.
- **Claude.** W sesji nie uruchomiono żadnego serwera MCP poza `semgrep mcp`. Pozostałe oceny „działa w chmurze” wynikają z README.

## Wnioski

Darmowy zestaw startowy w dużej mierze pokrywa się z tym, co Claude potrafi zautomatyzować sam. Godot (pliki tekstowe, tryb headless), Blender przez bpy, Ghidra headless i Semgrep z MCP to jednocześnie najlepsze darmowe narzędzia w swoich obszarach i narzędzia działające w kontenerze bez GUI. Ktoś, kto chce, żeby AI wykonało jak najwięcej pracy bez konfigurowania własnego PC, powinien więc wybierać silniki i programy tekstowe i skryptowalne. Unity, Unreal i Roblox też współpracują z Claude, ale tylko przez wtyczkę MCP w edytorze na własnym komputerze. Popularność tych mostów (unity-mcp prawie 15 tys. gwiazdek, mcp-for-blender prawie 30 tys.) pokazuje, że rynek już tak pracuje.

Dla użytkownika z Polski największym ryzykiem w 2026 nie jest cena. Większe ryzyko niosą licencje i łańcuch dostaw. Licencja Hunyuan3D wyklucza UE. Darmowe plany generatorów AI nie dają praw komercyjnych. Unity AI przerzuca odpowiedzialność za prawa autorskie na użytkownika. Z kolei same narzędzia bezpieczeństwa stały się celem ataków. Trivy został przejęty na 12 godzin, a Wireshark łata kolejne podatności, coraz częściej wykrywane przez AI. Wersje trzeba przypinać, a narzędzia aktualizować. Ceny zmieniają się w trakcie roku: w 2026 zmieniły je Burp Suite, Binary Ninja, Tripo i Spline. Kwoty z tego raportu warto traktować jako orientacyjne na październik 2026.
