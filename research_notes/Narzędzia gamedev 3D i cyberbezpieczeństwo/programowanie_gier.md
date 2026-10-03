# Programowanie gier: języki, frameworki, biblioteki i nauka (stan na październik 2026)

> **Metodologia i zastrzeżenia (do odczytu przed użyciem notatek)**
> - Stan na 2026-10-02. Gwiazdki, licencje (SPDX) i daty ostatniego pusha na GitHubie pobrano **2026-10-02** przez GitHub Search API (oznaczenie **[GH 2026-10-02]**). To dane pewne, wprost z GitHuba.
> - WebFetch jest zablokowany przez proxy (np. www.gamedev.tv zwrócił `EGRESS_BLOCKED`). **Wszystkie pozostałe fakty pochodzą wyłącznie z fragmentów (snippetów) wyników wyszukiwania**, nie z pełnej treści stron. Ryzyko: snippety mogą wyrywać zdania z kontekstu, a część pochodzi z agregatorów (np. app.cinevva.com, crux.supercraft.host, gtstu.com), a nie ze źródeł pierwotnych.
> - W trakcie pracy wyczerpał się limit wyszukiwań sesji (200/200). Kilku zaplanowanych weryfikacji nie wykonano; wymieniam je w sekcjach „Gaps”.
> - Licencja „NOASSERTION/None” w danych GitHuba oznacza licencję niestandardową lub wielolicencyjność, której API nie rozpoznało. To nie znaczy, że projekt nie ma licencji. Prawdopodobne licencje z wiedzy bazowej modelu podaję w „Gaps” z etykietą **[WB, niezweryfikowane]**.
> - Skala przystępności dla początkujących (moja ocena, sekcje „Inferences”): ★☆☆☆☆ (trudne) … ★★★★★ (bardzo łatwe).

---

## 1. Języki programowania gier i ich ekosystemy (C++, C#, GDScript, Lua, Rust, Python, JS/TS, Java/Kotlin, Zig, Odin, Haxe)

### Takeaway
Rynek profesjonalny w 2026 to nadal C++ (Unreal, silniki własne) i C# (Unity, Godot .NET, MonoGame). W badaniu GDC 2026 Unreal po raz pierwszy wyprzedził Unity jako główny silnik (42% vs 30%). Wśród indie i hobbystów rosną GDScript/Godot, Lua (LÖVE, Defold), Rust (Bevy, Fyrox 1.0) i JS/TS w przeglądarce (Phaser 4). Zig i Odin pozostają niszą, głównie w połączeniu z raylib lub SDL.

### Cited Findings
**Kontekst rynkowy**
- GDC 2026 State of the Game Industry (ponad 2300 respondentów): Unreal Engine 42%, Unity 30%, silniki własne 19%. Według podsumowań Unreal pierwszy raz jest głównym silnikiem respondentów. Unity dominuje w F2P i małych zespołach, Unreal w B2P/AA/AAA — [GameDevReports: GDC State of the Game Industry 2026](https://gamedevreports.substack.com/p/gdc-the-state-of-the-game-industry-fcf); [BusinessWire, 29.01.2026](https://www.businesswire.com/news/home/20260129438528/en/2026-State-of-the-Game-Industry-Report-Reveals-Widening-Effect-of-Layoffs-Broader-Perspectives-on-Generative-AI-Unionization-Tariffs-and-More). Uwaga: liczby pochodzą ze snippetów agregatorów, nie z PDF raportu.
- GDC 2026: 36% deweloperów używa generatywnej AI, 28% celuje w Steam Deck, 8% w Linuksa (wg tytułu artykułu) — [GamingOnLinux, 01.2026](https://www.gamingonlinux.com/2026/01/gdc-2026-report-36pct-of-devs-use-genai-28pct-target-steam-deck-and-8pct-target-linux/comment_id=289300)
- Stack Overflow Developer Survey 2025: GDScript ma ok. 3,1% użycia i 70,8% „admired”. Ankieta nie ma osobnej kategorii gamedev. Ogólnie: JavaScript 39,3%, Python 35,6% (Python +7 pp r/r) — [Stack Overflow Survey 2025, Technology](https://survey.stackoverflow.co/2025/technology/) (tylko snippet; konkretne liczby dla GDScript niepotwierdzone na stronie źródłowej)

**Parowanie język → silnik/framework (z potwierdzonymi źródłami)**
- **GDScript + C# → Godot.** Godot 4.6 (26.01.2026): oba języki są gotowe do produkcji. Eksport C# na web nadal eksperymentalny. GDScript polecany początkującym, solistom i projektom webowym, C# osobom migrującym z Unity i korzystającym z NuGet — [gtstu.com: Godot 4 in 2026](https://gtstu.com/?p=4758); [StraySpark: GDScript vs C# 2026](https://www.strayspark.studio/blog/gdscript-vs-csharp-godot-2026-choosing-scripting-language); [NuGet GodotSharp 4.6.0](https://feed.nuget.org/packages/GodotSharp/4.6.0)
- **C# → MonoGame / FNA** (frameworki w duchu XNA) — [GameFromScratch: MonoGame 3.8.5](https://gamefromscratch.com/monogame-3-8-5-released/)
- **C# → Unity (Mirror/FishNet/NGO do sieci)** — [Unity Discussions](https://discussions.unity.com/t/so-what-is-the-difference-between-netcode-for-gameobjects-mirror-and-fishnet-which-one-is-better-for-fast-co-op/1678432)
- **Lua → LÖVE** (CS50 2D uczy Lua + LÖVE) — [CS50 2D](https://cs50.harvard.edu/2d); **Lua → Defold** (skrypty w całym silniku) — [Wikipedia: Defold](https://en.wikipedia.org/wiki/Defold)
- **C/C++ → raylib, SDL3, SFML 3 (C++17), Dear ImGui, Box2D/Box3D (C), Jolt (C++)** — [raylib 6.0 devlog](https://raysan5.itch.io/raylib/devlog/1497342/raylib-60-released); [SFML 3](https://gamefromscratch.com/sfml-3-released/); [Box3D](https://gamedev.net/news/4308-box2d-enters-the-3rd-dimension-box3d-released/)
- **Rust → Bevy (ECS), Fyrox (z edytorem FyroxEd, „jak Unity, ale w Ruście”), Macroquad, Rapier (fizyka)** — [Fyrox 1.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/); [macroquad.rs](https://macroquad.rs/); [rapier.rs](https://rapier.rs/docs/)
- **Python → pygame-ce, Arcade, Ursina, Panda3D** — [PyPI pygame-ce](https://pypi.python.org/pypi/pygame-ce); [Panda3D](https://www.panda3d.org/blog/sdk-1-10-10-release/); repozytoria [GH 2026-10-02] (sekcja 2)
- **JavaScript/TypeScript → Phaser, PixiJS, Three.js, Babylon.js, PlayCanvas, Kaplay, Excalibur** — [Phaser vs Kaplay vs Excalibur, 04.2026](https://phaser.io/news/2026/04/phaser-vs-kaplay-vs-excalibur-2d-web-game-framework); [Cinevva: PlayCanvas vs Three.js 2026](https://app.cinevva.com/guides/playcanvas-vs-threejs)
- **Java/Kotlin → libGDX (+ KTX, rozszerzenia Kotlin utrzymywane teraz przez Quillraven)** — [libgdx.com](https://libgdx.com/); [KTX](https://gittrend.io/repo/libktx/ktx)
- **Haxe → HaxeFlixel (na bazie OpenFL, wersja 6.2.0 na Haxelib), Heaps, OpenFL (kierunek: konsole)** — [Haxelib tag openfl](https://lib.haxe.org/t/openfl); [Le Bottin: HaxeFlixel](https://lebottinlinux.vps.a-lec.org/Bottin_D-J_files/HaxeFlixel-14081.html)
- **Odin → raylib (bindingi w standardzie), SDL.** Odin opisywany jako „niskopoziomowy z wysokopoziomowym odczuciem”. CAT & ONION to według odin-lang.org pierwsza gra na Steamie w Odinie (premiera 12 marca; rok nieustalony w snippecie, prawdopodobnie 2025) — [odin-lang.org/games](https://odin-lang.org/games); [Karl Zylinski](https://minifeed.net/blogs/OzmE5l)
- **Zig → raylib (np. Zig 0.14 + raylib 5.5, styczeń 2025), aktywne dyskusje na ziggit.dev** — [Medium: Zig + raylib](https://medium.com/@denismarshalltumakov/make-games-using-zig-and-raylib-46c786adca8f); [ziggit.dev/tag/raylib](https://ziggit.dev/tag/raylib)

**Repozytoria języków [GH 2026-10-02]**
- Odin: 12 035★, Zlib, ostatni push 2026-10-01 — [github.com/odin-lang/Odin](https://github.com/odin-lang/Odin)
- Zig: 43 308★, MIT, **ostatni push na GitHubie 2025-11-27** — [github.com/ziglang/zig](https://github.com/ziglang/zig)
- Haxe: 6 938★, push 2026-10-01 — [github.com/HaxeFoundation/haxe](https://github.com/HaxeFoundation/haxe)

### Inferences
- Rekomendacje „język startowy”: Python (pygame-ce) lub Lua (LÖVE) do nauki pętli gry, GDScript dla najszybszej ścieżki do gotowej gry, C# do pracy w branży (Unity/Godot/MonoGame), C++ do pracy AAA i silników.
- Przystępność języków: Python ★★★★★, Lua ★★★★★, GDScript ★★★★★, JS/TS ★★★★☆, C# ★★★★☆, Java/Kotlin ★★★☆☆, Haxe ★★★☆☆, Odin ★★★☆☆, Rust ★★☆☆☆, Zig ★★☆☆☆, C++ ★★☆☆☆.
- Zastój pushy Ziga na GitHubie od 27.11.2025 przy aktywnym rozwoju języka wskazuje na migrację repozytorium poza GitHub (zob. Gaps).

### Gaps
- Nie zweryfikowano oficjalnego PDF GDC 2026 ani pełnej strony Stack Overflow 2025 (tylko snippety). Brak danych z SO 2026 (ankieta mogła się już ukazać; limit wyszukiwań wyczerpany).
- **[WB, niezweryfikowane]** Zig przeniósł główne repozytorium z GitHuba na Codeberg pod koniec 2025. Pasuje to do daty ostatniego pusha, ale nie zostało potwierdzone w tej sesji.
- **[WB, niezweryfikowane]** Lua/Luau → Roblox (Luau to dialekt Lua). Lua jest też standardem osadzania skryptów w silnikach C/C++ (bindingi sol2, LuaJIT). C++ → Unreal Engine (plus Blueprints). C# → Stride (otwarty silnik .NET). Java → jMonkeyEngine.
- Brak twardych danych o udziale Rusta, Zig i Odin w wydanych grach (np. statystyk ze Steam).

---

## 2. Frameworki i biblioteki „code-first”: status 2026

### Takeaway
2026 był rokiem dużych wydań: Phaser 4.0 (kwiecień), raylib 6.0 (kwiecień), MonoGame 3.8.5 (lipiec, backendy Vulkan/D3D12), Fyrox 1.0, Bevy 0.19, Defold 1.13, Babylon.js 9.0. LÖVE 12.0 ma status „prawie gotowe”: nightly buildy są używane komercyjnie, ale potwierdzenia stabilnego wydania brak. Wszystkie wymienione projekty są aktywne (push na GitHubie w sierpniu–październiku 2026). Większość ma licencję MIT, Zlib lub Apache-2.0 i jest darmowa.

### Cited Findings
**Tabela GitHub [GH 2026-10-02]** (gwiazdki / SPDX / ostatni push). Źródło: GitHub Search API, linki `https://github.com/<repo>`

| Projekt | Język | ★ | Licencja (SPDX z API) | Ostatni push |
|---|---|---|---|---|
| [three.js](https://github.com/mrdoob/three.js) | JS | 116 149 | MIT | 2026-10-02 |
| [Bevy](https://github.com/bevyengine/bevy) | Rust | 48 539 | Apache-2.0 (+MIT) | 2026-10-02 |
| [PixiJS](https://github.com/pixijs/pixijs) | JS/TS | 48 257 | MIT | 2026-10-01 |
| [Phaser](https://github.com/phaserjs/phaser) | JS/TS | 40 398 | MIT | 2026-08-21 |
| [raylib](https://github.com/raysan5/raylib) | C | 34 929 | Zlib | 2026-10-01 |
| [Babylon.js](https://github.com/BabylonJS/Babylon.js) | TS | 26 126 | Apache-2.0 | 2026-10-01 |
| [libGDX](https://github.com/libgdx/libgdx) | Java | 25 423 | Apache-2.0 | 2026-09-24 |
| [PlayCanvas engine](https://github.com/playcanvas/engine) | JS | 16 965 | MIT | 2026-10-02 |
| [SDL](https://github.com/libsdl-org/SDL) | C | 16 710 | Zlib | 2026-10-02 |
| [MonoGame](https://github.com/MonoGame/MonoGame) | C# | 14 477 | NOASSERTION | 2026-10-02 |
| [SFML](https://github.com/SFML/SFML) | C++ | 12 048 | Zlib | 2026-09-14 |
| [Fyrox](https://github.com/FyroxEngine/Fyrox) | Rust | 9 573 | MIT | 2026-10-01 |
| [LÖVE](https://github.com/love2d/love) | C++/Lua | 8 789 | NOASSERTION | 2026-09-20 |
| [Defold](https://github.com/defold/defold) | C++/Lua | 6 342 | NOASSERTION | 2026-10-01 |
| [Panda3D](https://github.com/panda3d/panda3d) | C++/Python | 5 235 | NOASSERTION | 2026-07-28 |
| [Macroquad](https://github.com/not-fl3/macroquad) | Rust | 4 644 | Apache-2.0 | 2026-08-18 |
| [Heaps](https://github.com/HeapsIO/heaps) | Haxe | 3 506 | MIT | 2026-10-01 |
| [FNA](https://github.com/FNA-XNA/FNA) | C# | 3 049 | (brak w API) | 2026-10-01 |
| [Ursina](https://github.com/pokepetter/ursina) | Python | 2 589 | MIT | 2026-09-27 |
| [Excalibur](https://github.com/excaliburjs/Excalibur) | TS | 2 347 | BSD-2-Clause | 2026-10-02 |
| [HaxeFlixel](https://github.com/HaxeFlixel/flixel) | Haxe | 2 213 | MIT | 2026-08-23 |
| [OpenFL](https://github.com/openfl/openfl) | Haxe | 2 158 | MIT | 2026-10-01 |
| [Arcade](https://github.com/pythonarcade/arcade) | Python | 2 085 | NOASSERTION | 2026-10-01 |
| [Kaplay](https://github.com/kaplayjs/kaplay) | JS/TS | 1 805 | MIT | 2026-10-01 |
| [pygame-ce](https://github.com/pygame-community/pygame-ce) | Python/C | 1 673 | (brak w API) | 2026-09-26 |
| [pygame (oryginał)](https://github.com/pygame/pygame) | Python/C | 8 952 | (brak w API) | **2025-11-01** |
| [Godot](https://github.com/godotengine/godot) (dla porównania) | C++ | 118 069 | MIT | 2026-10-01 |

**Wydania i status (snippety)**
- **Phaser 4.0.0 „Caladan”** wyszedł 10.04.2026, opisany jako największe wydanie w historii frameworka. Nowy renderer WebGL, filtry, oświetlenie, obiekty liczone na GPU. Kolejne wersje: 4.1.0 „Salusa” (30.04.2026) i 4.2.1 „Giedi” (lipiec 2026) — [phaser.io/download/stable](https://phaser.io/download/stable); [GameDev.net: Phaser 4 released](https://gamedev.net/news/2759-phaser-4-released/); [GameDev.net: v4.2.1](https://gamedev.net/news/4825-phaser-v421-released/)
- **raylib 6.0** wyszedł 23.04.2026 („największe wydanie”). Nowości: ok. 600 funkcji API (ponad 20 nowych), ponad 70 nowych przykładów, programowy renderer rlsw (działa bez GPU), backendy Memory, Win32 i Emscripten (eksperymentalne), nowe API systemu plików, przebudowane animacje szkieletowe. Finansowanie z NLnet / NGI Zero — [raylib 6.0 devlog (itch.io)](https://raysan5.itch.io/raylib/devlog/1497342/raylib-60-released)
- **SDL 3.2** to pierwsze stabilne wydanie serii 3.x. Wprowadza nowe GPU API (SDL_GPU: nowoczesny 3D i compute, wieloplatformowo), przepisaną dokumentację, spójne nazewnictwo i opcjonalne „main callbacks” — [Linuxiac: SDL 3 released](https://linuxiac.com/sdl-simple-directmedia-layer-3-released/); [Debian manpages SDL_GPUDevice](https://manpages.debian.org/unstable/libsdl3-doc/SDL_GPUDevice.3type.en.html)
- **SFML 3.0** wymaga C++17 (ponad 3 lata pracy, ponad 1100 commitów). OpenAL zastąpiono biblioteką miniaudio, doszło nowe API zdarzeń oraz scissor/stencil. Wersja 3.0.1 ukazała się w kwietniu 2025 — [GameFromScratch: SFML 3](https://gamefromscratch.com/sfml-3-released/); [SFML changelog](https://sfml-dev.org/changelog.php)
- **MonoGame 3.8.5** wyszedł 15.07.2026 (pierwsze wydanie 2026). Dodaje warstwę natywną C/C++ z backendami Vulkan i Direct3D 12 na desktop, pakiety ARM64 (np. Raspberry Pi 4/5) i oznacza „ogromną restrukturyzację”. Wersja 3.8.5.1 (14.08.2026) to poprawki DX12, Vulkan i audio — [GameFromScratch](https://gamefromscratch.com/monogame-3-8-5-released/); [GameDev.net 3.8.5.1](https://gamedev.net/news/5114-3851-release/)
- **LÖVE 12.0 „Bestest Friend”**: według wpisu dewelopera z kwietnia 2025 wydanie miało nastąpić „w tym roku”, a zostały głównie polerowanie i dokumentacja. Nowości: wbudowane SSL/HTTPS, `love.event.restart()`. Wydano już komercyjne gry na Steamie oparte na buildach 12, nightly buildy są dostępne przez GitHub Actions — [love2d.org wiki 12.0](https://www.love2d.org/wiki/12.0); [Wikipedia: LÖVE](https://en.wikipedia.org/wiki/L%C3%B6ve_(game_framework))
- **Defold**: 1.11.0 (8.09.2025), 1.11.2 (3.11.2025), seria 1.12 (`late_update()`, throttling, text shaping), **1.13.0 (29.06.2026)** z nowym Lua API do Box2D, morph targets i Vulkanem domyślnie na Androidzie — [Defold blog](https://defold.com/blog?tag=blog); [GitLab defold-docker tags](https://gitlab.com/mattpwest/defold-docker/-/tags)
- **pygame-ce**: seria 2.5.x (2.5.0 z 12.06.2024, wydania do 2.5.8), m.in. `pygame.image.load_animation` (GIF/WEBP). Plan: pygame-ce 3.0 na SDL3. Oryginalny pygame jest mniej aktywny (push 2025-11-01, zob. tabela) — [safetycli changelog](https://data.safetycli.com/changelogs/pygame-ce); [newreleases 2.5.8](https://newreleases.io/project/pypi/pygame-ce/release/2.5.8); [r/pygame](https://redlib.hackliberty.org/r/pygame/comments/1l5fjci/pygamece_255_and_254_released)
- **Panda3D**: gałąź 1.10.x (1.10.10 to wydanie dokumentowane na blogu; 1.10.0 ze stycznia 2019 dodało Pythona 3) — [Panda3D blog](https://www.panda3d.org/blog/sdk-1-10-10-release/)
- **Bevy 0.17** (30.09.2025; 278 kontrybutorów, 1311 PR): eksperymentalny raytracing Solari, DLSS, hot-reload kodu Rust (subsecond), widgety Feathers, tilemapy, zmiana nazwy „buffered events” na Messages. **Bevy 0.19** i patch **0.19.1** są już wydane — [GameFromScratch: Bevy 0.17](https://gamefromscratch.com/bevy-0-17-released/); [GameDev.net: Bevy 0.19](https://gamedev.net/news/4045-bevy-019-released/); [GameDev.net: 0.19.1](https://gamedev.net/news/5064-bevy-engine-v0191-released/); [docs.rs bevy_a11y 0.19.0](https://docs.rs/crate/bevy_a11y/0.19.0)
- **Fyrox 1.0** pojawił się po ponad 7 latach (dawniej rg3d). Ma edytor FyroxEd i export-cli (PC, WASM, Android). Na docs.rs najnowszy jest fyrox 1.0.1 — [fyrox.rs blog](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/); [GameFromScratch](https://gamefromscratch.com/after-7-years-of-development-fyrox-1-0-is-here/); [docs.rs fyrox](https://docs.rs/crate/fyrox/latest)
- **Macroquad**: „prosta i łatwa w użyciu biblioteka gier dla Rusta” — [macroquad.rs](https://macroquad.rs/)
- **libGDX**: 1.14.0 (20.10.2025), potem 1.14.1 i 1.14.2. KTX kompatybilny z 1.14.2. gdx-liftoff to v1.14.2.2 — [libgdx.com](https://libgdx.com/); [newreleases gdx-liftoff](https://newreleases.io/project/github/libgdx/gdx-liftoff/release/v1.14.2.2)
- **Babylon.js 9.0**: clustered lighting (setki dynamicznych świateł), oświetlenie wolumetryczne, teksturowane area lights, węzłowy edytor cząsteczek, Frame Graph v1 (ponad 40% mniej pamięci GPU), „Babylon Lite” tylko na WebGPU (19x mniej gzip JS). Działa na WebGPU i WebGL2 — [Cinevva: browser rendering best month (27.03.2026)](https://app.cinevva.com/signals/2026-03-27-browser-rendering-best-month) (agregator)
- **Three.js**: produkcyjny WebGPURenderer od ok. r171 (09.2025) z automatycznym fallbackiem do WebGL2 i językiem shaderów TSL. **PlayCanvas** v2.0 (08.2024) porzucił WebGL1 i ma ścieżkę WebGPU compute dla 3D Gaussian splats — [Cinevva: PlayCanvas vs Three.js 2026](https://app.cinevva.com/guides/playcanvas-vs-threejs) (agregator)
- **Kaplay vs Excalibur vs Phaser** (blog Phasera, 04.2026; perspektywa Phasera, możliwy bias): Kaplay najłatwiejszy (dobry dla początkujących i na jamy), ale ma limity wydajności przy większych projektach. Excalibur jest najbliższy Phaserowi i ma świetny debugger jako rozszerzenie przeglądarki — [phaser.io news 04/2026](https://phaser.io/news/2026/04/phaser-vs-kaplay-vs-excalibur-2d-web-game-framework)
- **PixiJS** to renderer WebGL/WebGPU, a nie silnik gry: nie ma scen, fizyki ani abstrakcji wejścia — [Cortance: Phaser vs PixiJS](https://cortance.com/answers/phaser-js/phaser-js-vs-pixijs-which-is-better-for-2d-web-games)
- **HaxeFlixel 6.2.0** (Haxelib), oparty na OpenFL. OpenFL rozwija się w stronę konsol — [lib.haxe.org](https://lib.haxe.org/t/openfl); [linuxfr: OpenFL](https://linuxfr.org/news/openfl-4-0)

### Inferences
**Katalog (cena / licencja / przystępność).** Wszystkie poniższe są darmowe do użytku komercyjnego, bez tantiem (licencje wg tabeli GH; dla NOASSERTION zob. Gaps).

| Framework | Do czego | Cena | Przystępność |
|---|---|---|---|
| pygame-ce | 2D, nauka, prototypy (Python) | free | ★★★★★ |
| Arcade | 2D Python, nowocześniejsze API (OpenGL) | free | ★★★★★ |
| Ursina | 3D Python na Panda3D, szybkie prototypy | free | ★★★★☆ |
| Panda3D | 3D Python/C++ (pełny silnik bez edytora) | free | ★★★☆☆ |
| LÖVE | 2D Lua (CS50 2D) | free | ★★★★★ |
| Defold | 2D/3D Lua z edytorem, mały runtime, web/mobile/konsole | free | ★★★★☆ |
| raylib | 2D/3D C, ponad 70 bindingów, edukacja | free | ★★★★☆ |
| SDL3 | warstwa platformy (okno, input, audio, GPU API) | free | ★★★☆☆ |
| SFML 3 | 2D C++17, obiektowe API | free | ★★★☆☆ |
| MonoGame / FNA | 2D/3D C# (XNA). FNA to wierny port XNA, MonoGame ma więcej platform | free | ★★★☆☆ |
| libGDX (+KTX) | 2D/3D Java/Kotlin, desktop/Android/web | free | ★★★☆☆ |
| Phaser 4 | 2D web JS/TS, najpełniejszy ekosystem | free (Phaser Editor płatny, zob. Gaps) | ★★★★☆ |
| Kaplay | 2D web, jamy, nauka | free | ★★★★★ |
| Excalibur | 2D web TS | free | ★★★★☆ |
| PixiJS v8 | renderer 2D (WebGL/WebGPU) | free | ★★★☆☆ |
| Three.js | 3D web, ogromny ekosystem | free | ★★★☆☆ |
| Babylon.js 9 | 3D web, „pełny silnik” (fizyka, GUI, edytory węzłów) | free | ★★★☆☆ |
| PlayCanvas | 3D web, engine MIT + edytor chmurowy freemium | engine free | ★★★☆☆ |
| HaxeFlixel / Heaps / OpenFL | 2D (Flixel), 2D/3D wydajny (Heaps; [WB] autorstwa Shiro Games), API Flash (OpenFL) | free | ★★★☆☆ / ★★☆☆☆ / ★★★☆☆ |
| Bevy | Rust ECS 2D/3D, bez stabilnego API (wersje 0.x) | free | ★★☆☆☆ |
| Macroquad | prosty 2D Rust, web/mobile | free | ★★★★☆ |
| Fyrox 1.0 | Rust 2D/3D z edytorem, stabilne 1.x | free | ★★★☆☆ |

- Bevy nadal wydaje wersje 0.x mniej więcej co 3–4 miesiące (0.17 we wrześniu 2025, 0.19 w 2026), co oznacza łamanie API przy każdej aktualizacji. Fyrox 1.0 jest dziś jedynym „stabilnym” silnikiem Rust z edytorem.
- Phaser jest dominującym frameworkiem gier 2D w przeglądarce (40k★). Three.js wygrywa popularnością w 3D web (116k★), ale to biblioteka renderująca, nie silnik.

### Gaps
- **Nie potwierdzono**, czy LÖVE 12.0 ukazał się jako stabilny przed 10.2026. Ostatnie znane stabilne to **[WB, niezweryfikowane]** 11.5 (grudzień 2023).
- Brak dokładnych dat: Bevy 0.18 i 0.19, Fyrox 1.0, Babylon.js 9.0 (snippet z marca 2026 sugeruje Q1 2026), Python Arcade 3.x, Ursina, Heaps, Excalibur, Kaplay, PixiJS 8.x (najnowsza wersja nieustalona), najnowsze SDL 3.x (3.4?), Godot 4.7.
- **[WB, niezweryfikowane]** licencje z NOASSERTION/None: MonoGame — Ms-PL + MIT; FNA — Ms-PL; LÖVE — zlib; Defold — „Defold License” (Apache 2.0 z ograniczeniem); Panda3D — zmodyfikowana BSD; Arcade — MIT; pygame/pygame-ce — LGPL-2.1.
- **[WB, niezweryfikowane]** Phaser Editor (płatny, subskrypcja), edytor PlayCanvas (plany darmowy/Personal/Organization). Aktualne ceny 2026 nieustalone.
- Brak danych o FNA w 2026 poza aktywnością na GitHubie.

---

## 3. Biblioteki rdzeniowe: fizyka, sieć, ECS, UI, audio, skrypty

### Takeaway
Fizyka 3D przeżywa przełom. Jolt jest domyślną fizyką Godota 4.6. Erin Catto wydał Box3D (C, MIT, alfa, używany w s&box). NVIDIA otworzyła w kwietniu 2025 kod GPU PhysX (BSD-3). Bullet zwalnia. W sieci: open source (ENet, GameNetworkingSockets, Mirror, FishNet, Nakama, Colyseus) kontra usługi chmurowe (Photon Fusion: darmowo do 100 CCU, potem od $125/mies.; Colyseus Cloud od $15/mies.). FMOD jest darmowy dla małych indie (do $200k przychodu rocznie).

### Cited Findings
**Fizyka**
- **Box2D v3.1**: 64-bitowe kategorie filtrów, `b2ChainSegment` (wcześniej SmoothSegment), nowe sensory, rolling resistance, eksplozje, filter joint. Repo: 10 388★, MIT, push 2026-09-24 — [Box2D 3.1.0 release notes](https://box2d.org/documentation/md_release__notes__v310.html); [GH 2026-10-02](https://github.com/erincatto/box2d)
- **Box3D** (Erin Catto, z udziałem dewelopera Valve): darmowy, open source, w C. Obsługuje kolizje z siatkami trójkątów i heightfield oraz baked compounds. Powstał z problemów z fizyką Unreala w projekcie The Legend of California. Używają go s&box, The Legend of California, Esoterica i „gra kosmiczna na 1000 graczy”. Autor uznaje go za **wersję alfa**. Repo: 6 505★, MIT, push 2026-10-02 — [GameDev.net](https://gamedev.net/news/4308-box2d-enters-the-3rd-dimension-box3d-released/); [Phoronix](https://phoronix.com/news/Box3D-Open-Source-3D-Physics); [80.lv](https://80.lv/articles/box3d-new-open-source-3d-physics-engine); [GH](https://github.com/erincatto/box3d)
- **Jolt Physics 5.6.0**: interfejs compute shaderów (DX12/Vulkan/Metal), symulacja włosów na GPU, tańszy model tarcia, do 40% szybsza symulacja i do 70% mniej pamięci w niektórych scenach. Repo: 11 640★, MIT, push 2026-09-29 — [GameDev.net Jolt 5.6](https://gamedev.net/news/4751-jolt-physics-v560-released/); [GH](https://github.com/jrouwe/JoltPhysics)
- **Godot 4.6** (26.01.2026) ustawił Jolt jako domyślną fizykę nowych projektów (wcześniej eksperymentalną) — [gtstu.com](https://gtstu.com/?p=4758)
- **PhysX**: w kwietniu 2025 NVIDIA otworzyła cały kod GPU (ponad 500 kerneli CUDA) i Flow na licencji BSD-3. Repo: 4 780★, BSD-3-Clause, push 2026-09-18 — [Phoronix](https://www.phoronix.com/news/NVIDIA-OSS-PhysX-Flow-GPU); [GamingOnLinux](https://www.gamingonlinux.com/2025/04/nvidia-open-sourced-physx-and-flow-gpu-code/); [GH](https://github.com/NVIDIA-Omniverse/PhysX)
- **Bullet3**: 14 760★, ostatni push **2025-10-22** (spowolnienie) — [GH](https://github.com/bulletphysics/bullet3)
- **Rapier** (Rust, Dimforge; 2D/3D, bindingi JS i Python): Apache-2.0, rapier3d 0.35.1, 5 801★, push 2026-09-27 — [docs.rs rapier3d 0.35.1](https://docs.rs/crate/rapier3d/0.35.1); [GH](https://github.com/dimforge/rapier). Porównanie wydajności Rapier/Box2D/Jolt/Box3D: [godot.rapier.rs v0.35.0](https://godot.rapier.rs/blog/v0-35-0)

**Sieć / multiplayer**
- **Photon Fusion** (dane z bloga zewnętrznego hostingu, nie z photonengine.com): Development 20 CCU $0 (60 GB/mies.); Launch 100 CCU $0 (0,3 TB, 1 aplikacja); 500 CCU $125/mies. (1,5 TB); 1000 CCU $250 (3 TB); 2000 CCU $500 (6 TB). Premium Cloud do 50k CCU rozliczany za użycie, minimum 2000 CCU. Ceny nie obejmują serwerów dla autorytatywnego builda — [Supercraft: Photon Fusion Pricing 2026](https://crux.supercraft.host/blog/photon-fusion-pricing-2026/); oficjalnie: [photonengine.com/pricing](https://www.photonengine.com/pricing) (niepobrane)
- **Colyseus** (Node.js/TS, MIT, 7 328★): open source do self-hostingu za darmo. **Colyseus Cloud od $15/mies.**, bez limitów CCU/DAU/MAU, nielimitowany transfer — [colyseus.io/pricing](https://www.colyseus.io/pricing); [GH](https://github.com/colyseus/colyseus)
- **Nakama** (Heroic Labs, Go, Apache-2.0, 13 465★): darmowy self-host. **Heroic Cloud** rozliczany za CPU (Nakama + baza), bez limitów DAU/CCU. AWS Marketplace: Nakama CPU $13,33/dzień, DB CPU $6,67/dzień. Satori (LiveOps) od $600 do $6000/mies. — [heroiclabs.com/pricing](https://heroiclabs.com/pricing); [toolradar](https://toolradar.com/tools/nakama/pricing); [GH](https://github.com/heroiclabs/nakama)
- **Mirror** (MIT, 6 349★) jest dojrzały i prosty. **FishNet** (2 060★) to alternatywa nastawiona na wydajność, z predykcją fizyki po stronie klienta, rozwijana przez jednego dewelopera. **Netcode for GameObjects** (Unity, darmowy, 2 325★) ma natywną integrację z UGS (Relay, Lobby) — [Unity Discussions](https://discussions.unity.com/t/so-what-is-the-difference-between-netcode-for-gameobjects-mirror-and-fishnet-which-one-is-better-for-fast-co-op/1678432); [Unity docs: NGO vs Mirror](https://docs.unity.com/en-us/relay/ngo-vs-mirror-for-relay); [GH Mirror](https://github.com/MirrorNetworking/Mirror); [GH FishNet](https://github.com/FirstGearGames/FishNet); [GH NGO](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects)
- **ENet** (C, niezawodny UDP): MIT, 3 275★, push 2026-06-23 — [GH](https://github.com/lsalzman/enet). **Valve GameNetworkingSockets**: BSD-3-Clause, 9 948★ — [GH](https://github.com/ValveSoftware/GameNetworkingSockets)
- **Steam / Steamworks**: opłata Steam Direct to $100 za aplikację, zwracana po osiągnięciu $1000 skorygowanego przychodu brutto. Nie można jej opłacić środkami z portfela Steam — [Steamworks docs: App Fee](https://partner.steamgames.com/doc/gettingstarted/appfee)

**ECS / UI / audio**
- **EnTT** (C++ ECS, MIT): 13 159★, push 2026-10-01 — [GH](https://github.com/skypjack/entt). **flecs** (C/C++ ECS): 8 715★, push 2026-09-25 — [GH](https://github.com/SanderMertens/flecs)
- **Dear ImGui** (C++, MIT, 76 458★): najnowsza wersja v1.92.9 (wydanie „maintenance-heavy”) — [GameDev.net v1.92.9](https://gamedev.net/news/4747-dear-imgui-v1929-released/); [GH](https://github.com/ocornut/imgui). **raygui** (Zlib, 5 187★) — [GH](https://github.com/raysan5/raygui)
- **FMOD**: licencja Indie jest darmowa przy przychodzie poniżej $200k/rok i finansowaniu poniżej $500k (jedna gra rocznie, każda kolejna $2000). Basic (budżet $600k–$1,8M) kosztuje $6000 za grę, Premium (ponad $1,8M) $18 000 za grę. Wsparcie: L1 $6000, L2 $18 000/rok — [fmod.com/licensing](https://fmod.com/licensing); [FitGap](https://us.fitgap.com/products/fmod) (snippet z FitGap podaje alternatywnie „darmowa lub $2000 przy budżecie poniżej $600k”; progi warto zweryfikować na fmod.com)
- **miniaudio** (C, single-file): 7 313★, push 2026-08-19. SFML 3 przeszedł na miniaudio — [GH](https://github.com/mackron/miniaudio); [SFML 3](https://gamefromscratch.com/sfml-3-released/). **OpenAL Soft**: 2 756★, push 2026-10-01 — [GH](https://github.com/kcat/openal-soft)

### Inferences
- Dla nowego projektu 3D w C/C++ w 2026 Jolt jest najbezpieczniejszym wyborem (dojrzały, MIT, domyślny w Godot 4.6). Box3D jest obiecujący, ale to alfa. PhysX ma sens przy GPU/NVIDIA. Bullet traci znaczenie.
- Dla 2D: Box2D v3 (C) lub Rapier (Rust/JS).
- Multiplayer dla początkującego: Colyseus (JS/TS) lub Nakama (self-host za darmo). Photon to najszybszy start w Unity (darmowe 100 CCU). FishNet lub Mirror, jeśli serwer ma być własny.
- Przystępność: Dear ImGui ★★★★☆, miniaudio ★★★★☆, ENet ★★★☆☆, EnTT ★★★☆☆, flecs ★★★☆☆, Jolt ★★☆☆☆, PhysX ★★☆☆☆, FMOD Studio ★★★★☆ (narzędzie GUI dla dźwiękowców).

### Gaps
- Daty premiery Box3D i Jolt 5.6 nieustalone (snippet mówi, że Jolt 5.6 wyszedł „tydzień po Box3D”).
- Ceny Photon PUN 2 / Realtime / Quantum w 2026 niepotwierdzone. **[WB, niezweryfikowane]** historycznie PUN: 20 CCU free, 100 CCU za $95 jednorazowo na 12 mies.
- **[WB, niezweryfikowane]** licencje: Tracy — BSD-3; flecs — MIT; miniaudio — public domain lub MIT-0; OpenAL Soft — LGPL; Bullet — zlib; NGO — Unity Companion License; FishNet — licencja własna. **Wwise** (Audiokinetic) nie był badany.
- Embedowanie skryptów (Lua/LuaJIT, sol2, Wren, AngelScript, QuickJS, Squirrel) nie zostało zbadane w tej sesji. **[WB, niezweryfikowane]** Lua + sol2 to de facto standard w C++. LuaJIT jest stabilny, ale rzadko wydawany.
- Steamworks SDK: zmiany w 2026 nieustalone. **[WB]** SDK jest darmowe dla partnerów Steamworks.

---

## 4. Narzędzia: IDE, debuggery/profilery, shadery, asystenci AI

### Takeaway
Darmowy zestaw na 2026: VS Code lub Visual Studio Community, JetBrains Rider (od października 2024 darmowy do celów niekomercyjnych), RenderDoc (MIT) do debugowania grafiki, Tracy (wbudowany w Godot 4.6) do profilowania. SHADERed jest porzucony (ostatni push 2023). Asystenci AI w gamedevie działają w 2026 głównie przez MCP: Unity AI Assistant (beta), Unity-MCP, Godot AI. Godot jest uważany za najbardziej „AI-friendly”, bo wszystkie jego pliki są tekstowe.

### Cited Findings
- **JetBrains Rider**: darmowy do użytku niekomercyjnego (nauka, open source, tworzenie treści, hobby) od października 2024. Licencja roczna odnawia się automatycznie i daje pełne funkcje, w tym lokalne AI do uzupełniania kodu. Ograniczenia: nie można wyłączyć anonimowej telemetrii, brak prywatnego wsparcia, a projekt komercyjny wymaga płatnej licencji — [InfoQ, 10.2024](https://www.infoq.com/news/2024/10/jetbrains-rider-free/); [SD Times](https://sdtimes.com/jetbrains-makes-webstorm-and-rider-free-for-non-commercial-use/); porównanie z VS Community: [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2024/10/28/compare-new-non-commercial-jetbrains-rider-with-visual-studio-community-edition.aspx)
- **Tracy profiler** (C++, frame profiler): wersje 0.13.0 i 0.13.1. Godot 4.6 ma natywną integrację z tracing profilerami (Tracy, Perfetto, Instruments). Repo: 16 852★, push 2026-10-01 — [Godot docs 4.6: Tracy](https://docs.godotengine.org/en/4.6/engine_details/development/profiling/tracy.html); [gtstu.com](https://gtstu.com/?p=4758); [GH](https://github.com/wolfpld/tracy)
- **RenderDoc** (debugger klatek dla Vulkan/D3D/OpenGL): MIT, 11 132★, push 2026-10-01 — [GH](https://github.com/baldurk/renderdoc)
- **SHADERed** (IDE do shaderów): MIT, 4 801★, **ostatni push 2023-09-22**, czyli de facto nierozwijany — [GH](https://github.com/dfranx/SHADERed)
- **Unity AI Assistant**: panel czatu w edytorze, trenowany na dokumentacji Unity, znający kontekst projektu. W 2026 w otwartej becie — [buildfastwithai: Unity AI open beta 2026](https://buildfastwithai.com/blogs/unity-ai-open-beta-guide-2026); [Sorceress: best AI for Unity 2026](https://sorceress.games/blog/compare-the-best-ai-for-unity-coding-honest-2026-pick)
- **Unity-MCP (IvanMurzak)**: open source, darmowy most MCP między Unity a Claude Code, Gemini, Copilot i Cursor. Dowolna metoda C# może stać się narzędziem — [Enterprise DNA](https://enterprisedna.co/directories/mcp/ivanmurzak-unity-mcp); [DEV Community](https://dev.to/pneumetron/unity-mcp-bridging-ai-assistants-with-unity-for-automated-game-development-297l)
- **Godot AI** (Asset Library) łączy asystentów MCP (Claude Code, Codex, Cursor, Antigravity) z działającym edytorem: sceny, skrypty, UI, animacje, testy. Inna wtyczka to **beckett-godot-mcp** — [Godot Asset Library: Godot AI](https://godotengine.org/asset-library/asset/5050); [Enterprise DNA: beckett-godot-mcp](https://enterprisedna.co/directories/mcp/beckettlab-beckett-godot-mcp)
- Opinia: tekstowa architektura Godota (sceny, skrypty i konfiguracja jako czytelny tekst) czyni go silnikiem najłatwiejszym do zrozumienia dla agenta AI — [Ziva: Unity vs Godot 2026 AI](https://ziva.sh/blogs/unity-vs-godot-2026-ai) (blog dostawcy narzędzia AI, możliwy bias)
- GDC 2026: 36% deweloperów używa genAI — [GamingOnLinux](https://www.gamingonlinux.com/2026/01/gdc-2026-report-36pct-of-devs-use-genai-28pct-target-steam-deck-and-8pct-target-linux/comment_id=289300)

### Inferences
- Zestaw startowy za $0: VS Code (wszystkie języki) albo Visual Studio Community (C++/C# na Windows) albo Rider (C#/Unity/Godot, niekomercyjnie), do tego RenderDoc i Tracy. Do shaderów zamiast porzuconego SHADERed: Shadertoy w przeglądarce oraz edytory węzłowe w silnikach.
- AI w gamedevie w 2026 to przede wszystkim integracje MCP z edytorami. Silniki z formatami tekstowymi (Godot, frameworki code-first) lepiej współpracują z agentami niż edytory z binarnymi assetami.

### Gaps
- Nie zweryfikowano w tej sesji (limit wyszukiwań): **[WB, niezweryfikowane]** Visual Studio Community jest darmowe dla osób indywidualnych, open source, edukacji i małych organizacji (do 5 użytkowników w firmach poniżej 250 PC i poniżej $1M przychodu). VS Code: darmowy (MIT dla kodu źródłowego). PIX (Microsoft, D3D12) i NVIDIA Nsight Graphics/Systems są darmowe. Shadertoy jest darmowy (WebGL). Rider komercyjnie kosztuje ok. $149/rok indywidualnie (cena 2026 niepotwierdzona).
- Brak aktualnych danych o wersji RenderDoc 2026 (1.4x?) i o GitHub Copilot, Cursor czy Claude Code w kontekście cen 2026 (poza zakresem lub niezweryfikowane).

---

## 5. Nauka: kursy, ścieżki, książki, game jamy, społeczności

### Takeaway
Najlepsza darmowa ścieżka w 2026: CS50x → CS50 2D (Lua/LÖVE, Harvard OCW) → Godot (GDQuest „Learn GDScript From Zero” za darmo, Brackeys na YouTube) → jamy (GMTK, Ludum Dare). Do grafiki: Learn OpenGL i Catlike Coding. Do architektury: Game Programming Patterns. Płatne: GDQuest ($84–216 za pakiety), GameDev.tv (lifetime), Udemy (cena katalogowa $50–120, w promocji ok. $10), Coursera Plus ($59/mies. lub $399/rok).

### Cited Findings
**Kursy darmowe**
- **CS50 2D** (Harvard) kontynuuje CS50x. Gry: Pong, Flappy Bird, Breakout, Match 3, Mario, Zelda, Angry Birds, Pokémon. Język **Lua + LÖVE**. Darmowy przez OpenCourseWare i edX (płatny jest tylko certyfikat edX). Wymaga CS50x lub doświadczenia w programowaniu — [cs50.harvard.edu/2d](https://cs50.harvard.edu/2d); [Genbeta](https://www.genbeta.com/actualidad/este-curso-gratuito-harvard-te-ensena-a-desarrollar-videojuegos-clases-innovadoras-durante-12-semanas). Starsza wersja: **CS50's Introduction to Game Development** (CS50G; Lua/LÖVE + Unity) — [cs50.harvard.edu/games](https://cs50.harvard.edu/games); [Harvard DCE](https://coursebrowser.dce.harvard.edu/?p=14414)
- **GDQuest „Learn GDScript From Zero”**: darmowa aplikacja open source (itch.io, GitHub 2 790★, push 2026-10-01) — [gdquest.itch.io](https://gdquest.itch.io/learn-godot-gdscript); [GH](https://github.com/GDQuest/learn-gdscript)
- **Brackeys** wrócił w 2024 z tutorialami do Godota (mega-tutorial „pierwsza gra w Godot”, analiza GDScript). Wcześniej opublikował ponad 400 tutoriali do Unity, które zostają jako archiwum — [80.lv](https://80.lv/articles/unity-creator-brackeys-is-back-with-godot-tutorials); [Godot Forum](https://forum.godotengine.org/t/brackeys-will-be-making-godot-tutorials/56806); [Gamineai: 40 free tutorials 2026](https://gamineai.com/resources/40-free-game-development-tutorials-updated-october-2026)
- **Learn OpenGL** (Joey de Vries): repo z kodem ma 12 640★, ostatni push 2024-08-06 — [GH](https://github.com/JoeyDeVries/LearnOpenGL)
- **Game Programming Patterns** (Robert Nystrom): repo książki ma 4 554★, ostatni push 2024-07-21 — [GH](https://github.com/munificent/game-programming-patterns)

**Kursy płatne i platformy**
- **GDQuest**: pakiety od ok. $84 (Starter Kit, Godot 2D/3D) do ok. $216 („From Zero to Pro”). Kursy „Learn 2D/3D GameDev with Godot 4” na school.gdquest.com — [Cinevva: guide](https://app.cinevva.com/es/guides/game-dev-courses) (agregator); [GameDev Academy: GDQuest review](https://gamedevacademy.org/gdquest-review/)
- **GameDev.tv**: Lifetime Membership daje dożywotni dostęp do ponad 80 kursów (ponad 850 godzin), za jednorazową opłatą. **Cena nieustalona** (strona zablokowana przez proxy) — [gamedev.tv/p/lifetime-membership](https://www.gamedev.tv/p/lifetime-membership) (snippet)
- **Udemy**: kursy kosztują zwykle $50–120 w cenie katalogowej i ok. $9,90 w promocji (np. maj 2026). Personal Plan to $240/rok (promocja $168/rok). W Indiach Rs 399–609 — [Medium: Udemy May 2026](https://medium.com/@barnwalsaurabh/udemy-may-2026-sale-should-you-buy-individual-courses-or-the-udemy-personal-plan-37fbeac69f93); [Zoutons: Udemy prices Sept 2026](https://zoutons.com/news/udemy-course-price-band-september-2026)
- **Coursera Plus**: ok. $59/mies. (7 dni triala) lub ok. $399/rok, często z rabatem 40–50% (ok. $200). Pojedyncze kursy $49–99, certyfikaty zawodowe $49/mies. Dostępny m.in. kurs Packt „Learning GDScript by developing a game with Godot 4” — [SkillScouter 2026](https://skillscouter.com/is-coursera-plus-worth-it/); [MyEngineeringBuddy](https://www.myengineeringbuddy.com/blog/coursera-reviews-alternatives-pricing-offerings/); [Coursera: Packt GDScript](https://www.coursera.org/fr-FR/learn/packt-learning-gdscript-by-developing-a-game-with-godot-4)

**Game jamy i społeczności**
- **GMTK Game Jam**: 48 h, latem, typowo ponad 7000 zgłoszeń. Ponad 100 premier na Steamie wywodzi się z prototypów z GMTK. Data edycji 2026 nieustalona w snippecie. Strona itch: [itch.io/jam/gmtk-jam-2026](https://itch.io/jam/gmtk-jam-2026) — [Cinevva: Game Jams Guide](https://app.cinevva.com/guides/game-jams-hackathons.html) (agregator)
- **Ludum Dare**: kwiecień i październik (w przybliżeniu). Compo solo 48 h, Jam zespołowy 72 h. Jeden z najstarszych jamów — [Cinevva: Game Jams Guide](https://app.cinevva.com/guides/game-jams-hackathons.html)
- **Społeczności, newslettery i newsy**: GameDev.net (subskrypcja $3/mies.), GameFromScratch, Phaser World, Web Game Dev Newsletter, Defold Newsletter, forum LÖVE, ziggit.dev — [GameDev.net subscriptions](https://www.gamedev.net/subscriptions/); [Phaser World](https://phaserworld.beehiiv.com/p/phaser-world-issue-236); [Web Game Dev Newsletter](https://buttondown.com/webgamedev/archive/issue-031/); [Defold blog](https://defold.com/blog?tag=blog)

### Inferences
**Proponowane ścieżki nauki (synteza):**
1. **Absolutny początkujący, bez kodu**: CS50x (darmowy) → CS50 2D (Lua/LÖVE) → pierwszy jam (GMTK lub Ludum Dare).
2. **Najszybciej do wydanej gry indie**: Learn GDScript From Zero (free) → Brackeys Godot / GDQuest (płatnie $84–216) → Godot 4.6 → itch.io → Steam ($100 Steam Direct).
3. **Kariera w studiu (C#)**: C# → Unity Learn (free) lub GameDev.tv/Udemy → Rider (niekomercyjnie free) → Mirror/NGO.
4. **Kariera w AAA i silnikach (C++)**: C++ → raylib lub SDL3 → Learn OpenGL → Game Programming Patterns → Handmade Hero (dla dociekliwych) → RenderDoc i Tracy → Jolt/Box2D → Unreal.
5. **Web**: JS/TS → Kaplay (jamy) → Phaser 4 → Three.js lub Babylon.js.
6. **Rust**: Macroquad → Bevy (ECS) lub Fyrox 1.0 (edytor).
- Pod względem kosztu na godzinę treści najtańsze są Udemy w promocji (ok. $10 za kurs) i GameDev.tv Lifetime. Najlepsza jakość darmowa to CS50 i GDQuest Learn GDScript.

### Gaps
- Nie zweryfikowano (limit wyszukiwań lub blokada proxy): aktualna cena GameDev.tv Lifetime i ewentualnej subskrypcji; daty i liczby zgłoszeń GMTK 2026, Ludum Dare 59/60 i Global Game Jam 2026 (temat, liczba uczestników); przyszłość Ludum Dare (bez potwierdzonych informacji).
- **[WB, niezweryfikowane]** **Unity Learn** jest darmowy (Unity Essentials, Junior Programmer). **Epic Developer Community** (Unreal) ma darmowe kursy. **Catlike Coding** (Jasper Flick) oferuje darmowe, bardzo szczegółowe tutoriale Unity (Patreon dobrowolny). **Handmade Hero** (Casey Muratori) to ok. 650+ odcinków C/C++ od zera, archiwum darmowe na YouTube, kod źródłowy po zakupie (ok. $15); projekt jest od kilku lat w zawieszeniu. **Learn OpenGL** jest darmowe online (learnopengl.com), jest też wersja drukowana. **Game Programming Patterns** jest darmowa w wersji web (gameprogrammingpatterns.com), płatna w druku i e-booku. **freeCodeCamp** publikuje darmowe wielogodzinne kursy (Godot, Unity, pygame, raylib) na YouTube. **Global Game Jam** odbywa się co roku pod koniec stycznia (48 h, lokalizacje fizyczne i online). **itch.io jams** to setki jamów miesięcznie (np. Brackeys Game Jam, GameDev.js Jam, js13kGames, 7DRL).
- Ceny Unity Learn Premium (włączone do darmowego Unity Learn od 2021, **[WB]**) oraz kursów Unreal (Unreal Fellowship itp.) w 2026 niezweryfikowane.
