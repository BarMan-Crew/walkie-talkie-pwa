# Narzędzia: filmy, gry, 3D i cyberbezpieczeństwo

Stan na 2 października 2026 · wersja przefiltrowana

Zostały tylko systemy, którymi Claude może sterować sam — w chmurze [K] albo przez serwer MCP na Twoim PC [MCP-PC] — oraz darmowe i najlepsze płatne. Usunięto wtyczki wnętrza edytorów, aplikacje mobilne, rozszerzenia Chrome, programy bez MCP, platformy do nauki, CTF, certyfikaty i narzędzia wymagające GPU.

Oznaczenia: **Darmowe** / **Freemium** / **Płatne**. [K] przetestowane w chmurze, [MCP-PC] przez MCP na Twoim komputerze, [serwer] wymaga działającej instancji.

---

# 1. Filmy i edity

## Edycja w chmurze (obsługuję sam)

FFmpeg zastępuje większość pojedynczych wtyczek do editów. Wszystko darmowe.

| Narzędzie | Do czego | Cena |
|---|---|---|
| FFmpeg | cięcie, sklejanie, konwersja; filtry: `minterpolate` (slow-mo), `vidstab` (stabilizacja), `lut3d` (kolor z LUT), `rgbashift` (glitch), `chromakey` (green screen), `drawtext` i `subtitles` (napisy) | **Darmowe** [K] |
| Blender (VSE i render przez bpy) | montaż, kompozycja, efekty 3D, render | **Darmowe** [K] |
| ImageMagick | miniatury, grafiki, klatki | **Darmowe** [K] |
| auto-editor | automatyczne wycinanie ciszy | **Darmowe**, do doinstalowania [K] |
| Whisper | automatyczne napisy i transkrypcja | **Darmowe**, do doinstalowania [K] |
| Demucs | oddzielanie wokalu od muzyki | **Darmowe**, do doinstalowania [K] |
| Higgsfield AI (MCP) | generowanie wideo i audio, upscale, reframe, dubbing, shorty | **Freemium**, kredyty. Podłączony teraz, zostały 3 |

## Programy, którymi steruję przez MCP na Twoim PC

Wymagają Claude Desktop albo Claude Code na Twoim komputerze z uruchomionym programem.

| Program | Do czego | Cena |
|---|---|---|
| [DaVinci Resolve](https://github.com/samuelgursky/davinci-resolve-mcp) | pełny montaż, kolor, Fusion; najlepszy darmowy NLE | **Darmowe.** MCP: Studio lub skrypt-mostek [MCP-PC] |
| [Kdenlive](https://glama.ai/mcp/servers/Va1bhav512/kdenlive-mcp-server) | montaż, 124 narzędzia MCP; działa też headless | **Darmowe** [MCP-PC] |
| [Shotcut](https://glama.ai/mcp/servers/matrodrigs/shotcut-mcp) | montaż i eksport bez otwierania okna | **Darmowe** [MCP-PC] |
| [Remotion](https://github.com/mcp-use/remotion-mcp-app) | wideo z kodu React, render w chmurze | **Darmowe** dla osób prywatnych [K/MCP-PC] |
| [OBS](https://pypi.org/project/obs-mcp/) | nagrywanie, sceny, filtry, stream; 148 narzędzi | **Darmowe** [MCP-PC] |
| [CapCut](https://github.com/Atx-Guy/capcut-mcp-server) | budowanie projektów (draft) | **Freemium** [MCP-PC] |
| [After Effects / Premiere](https://github.com/Aodaruma/adobe-mcp-rs) | motion graphics i montaż; najlepsze płatne | **Płatne**, Adobe. MCP eksperymentalny [MCP-PC] |
| [Fish Audio](https://docs.fish.audio/overview/mcp.md) | lektor, klonowanie głosu, transkrypcja | **Freemium**, 8000 kredytów/mies. niekomercyjnie [MCP-PC] |

## Zestaw startowy (0 zł)

- Montaż: DaVinci Resolve na PC albo FFmpeg i Blender w chmurze.
- Napisy: Whisper. Cisza: auto-editor. Muzyka: Demucs.
- Generowanie: Higgsfield (kredyty).
- Stream i nagrania: OBS.

Pliki gotowe wysyłam do czatu albo na Twój Google Drive.

---

# 2. Gry i programowanie

## Silniki, którymi steruję

| Silnik | Do czego | Cena | Jak steruję |
|---|---|---|---|
| [Godot 4.7](https://github.com/godotengine/godot/tags) | 2D/3D, mobile, web; GDScript, C#. Najlepszy darmowy | **Darmowe**, MIT | headless w chmurze [K] oraz [godot-mcp](https://github.com/Coding-Solo/godot-mcp) |
| [Unreal Engine 5.8](https://www.unrealengine.com/en-US/license) | 3D AAA; najlepszy do wysokiej grafiki | **Darmowe** do 1 mln USD, potem 5% | [Unreal_mcp](https://github.com/ChiR24/Unreal_mcp) [MCP-PC] |
| [Unity 6.3](https://unity.com/products/pricing-updates) | 2D/3D, mobile, XR; C# | **Freemium**, 0 USD do 200 tys. USD | [unity-mcp](https://github.com/CoplayDev/unity-mcp) [MCP-PC] |
| [Defold 1.13](https://github.com/defold/defold/tags) | 2D i lekkie 3D; Lua | **Darmowe** | [defold-mcp](https://github.com/Fulviuus/defold-mcp), headless |
| [Roblox Studio](https://create.roblox.com) | 3D UGC; Luau | **Darmowe** | wbudowany MCP [MCP-PC] |
| [Bevy 0.19](https://bevy.org/news/bevy-0-19/) | 2D/3D w Rust, ECS; piszę kod | **Darmowe** | kod w chmurze + [bevy_brp](https://github.com/natepiano/bevy_brp) |
| [GameMaker](https://gamemaker.io/get) | 2D; GML | **Freemium**, 99,99 USD jednorazowo | [gamemaker-mcp](https://github.com/yearningss/gamemaker-mcp): analiza i edycja plików |

## Darmowe assety, które pobiorę

| Źródło | Do czego | Cena |
|---|---|---|
| [Kenney](https://kenney.nl) | tysiące assetów 2D/3D | **Darmowe**, CC0 |
| [Poly Haven](https://polyhaven.com) | modele, tekstury, HDRI; API bez klucza | **Darmowe**, CC0 |
| [ambientCG](https://ambientcg.com) | materiały PBR i HDRI | **Darmowe**, CC0 |
| [OpenGameArt](https://opengameart.org) | grafika i dźwięk | **Darmowe**, licencje mieszane |

## Języki — piszę kod we wszystkich

| Język | Gdzie | Cena |
|---|---|---|
| C# | Unity, Godot .NET, MonoGame, Stride | **Darmowe** |
| GDScript | Godot; najlepszy na start | **Darmowe** |
| C++ | Unreal, raylib, SDL3, SFML | **Darmowe** |
| Lua | LÖVE, Defold, Roblox | **Darmowe** |
| Python | pygame-ce, Arcade, Ursina | **Darmowe** |
| JS/TS | Phaser, three.js, Babylon.js, PixiJS | **Darmowe** |
| Rust | Bevy, Fyrox, Macroquad | **Darmowe** |

## Frameworki, w których buduję (wszystkie darmowe)

| Framework | Do czego | Uwaga |
|---|---|---|
| [raylib 6.0](https://github.com/raysan5/raylib) | 2D/3D w C, nauka | buduję w chmurze [K] |
| [pygame-ce](https://github.com/pygame-community/pygame-ce) | 2D w Pythonie | działa w chmurze [K] |
| [Phaser 4](https://github.com/phaserjs/phaser) | 2D w przeglądarce | build headless |
| [three.js](https://github.com/mrdoob/three.js), [Babylon.js](https://github.com/BabylonJS/Babylon.js) | 3D w przeglądarce | build headless |
| [MonoGame 3.8.5](https://github.com/MonoGame/MonoGame) | 2D/3D w C# | build headless |
| [LÖVE](https://github.com/love2d/love) | 2D w Lua | build headless |
| [Bevy](https://github.com/bevyengine/bevy), [Macroquad](https://macroquad.rs/) | 2D/3D w Rust | build headless |

## Biblioteki (darmowe, używam w kodzie)

| Biblioteka | Do czego |
|---|---|
| [Jolt](https://github.com/jrouwe/JoltPhysics), [Box2D](https://github.com/erincatto/box2d), [Rapier](https://github.com/dimforge/rapier) | fizyka 3D i 2D |
| [Colyseus](https://www.colyseus.io/), [Nakama](https://heroiclabs.com/) | multiplayer, własny serwer za darmo |
| [EnTT](https://github.com/skypjack/entt), [flecs](https://github.com/SanderMertens/flecs) | ECS |
| [Dear ImGui](https://github.com/ocornut/imgui) | UI narzędzi |

## Zestaw startowy (0 zł)

- Silnik: Godot 4.7 (steruję w chmurze i przez MCP).
- Kod: GDScript w Godocie albo Python z pygame-ce.
- Assety: Kenney, Poly Haven, ambientCG.
- Multiplayer: Colyseus albo Nakama na własnym serwerze.
- Wersjonowanie: Git.

---

# 3. Modelowanie 3D

Usunięto programy i dodatki bez MCP (ZBrush, Substance, Marmoset, dodatki do Blendera) oraz modele AI wymagające GPU, którego nie ma w chmurze (Hunyuan3D, TRELLIS.2).

## Programy, którymi steruję

| Program | Do czego | Cena | Jak steruję |
|---|---|---|---|
| [Blender 5.2 LTS](https://www.blender.org/releases/5-2/) | modelowanie, rzeźbienie, animacja, render; najlepszy darmowy | **Darmowe** | bpy w chmurze (render Cycles, eksport GLB) [K] oraz [mcp-for-blender](https://github.com/ahujasid/mcp-for-blender) [MCP-PC] |
| [FreeCAD 1.1](https://blog.freecad.org/2026/03/25/freecad-version-1-1-released/) | CAD parametryczny, druk 3D | **Darmowe** | FreeCADCmd w chmurze + [freecad-mcp](https://github.com/neka-nat/freecad-mcp) |
| [Houdini](https://superrendersfarm.com/article/how-much-does-houdini-cost) | procedural, VFX; najlepszy płatny do efektów | **Freemium.** Apprentice darmowy niekomercyjnie, Indie 299 USD/rok | [houdini-mcp](https://github.com/capoomgit/houdini-mcp), też headless [MCP-PC] |
| [Autodesk Maya](https://toolradar.com/tools/maya/pricing) | animacja, standard studiów | **Płatne**, Indie ok. 305 USD/rok | [MayaMCP](https://github.com/PatrickPalmer/MayaMCP) [MCP-PC] |
| [Autodesk 3ds Max](https://superrendersfarm.com/article/3ds-max-licensing-2026) | modelowanie, wizualizacje | **Płatne**, ok. 2010 USD/rok | [3dsmax-mcp](https://github.com/cl0nazepamm/3dsmax-mcp) [MCP-PC] |
| [Cinema 4D](https://subger.com/en/service/cinema-4d) | motion design | **Płatne**, ok. 94 USD/mies. | [cinema4d-mcp](https://github.com/ttiimmaacc/cinema4d-mcp) [MCP-PC] |
| [Rhino 8](https://www.renderahouse.com/blog/rhino-pricing) | NURBS, design | **Płatne**, 995 USD wieczyście | [rhinomcp](https://github.com/jingcheng-chen/rhinomcp) [MCP-PC] |
| [Fusion](https://www.autodesk.com/products/fusion-360) | CAD, druk 3D | **Freemium** niekomercyjnie | [fusion360-mcp-server](https://github.com/faust-machines/fusion360-mcp-server) [MCP-PC] |

## Darmowe assety 3D

| Źródło | Do czego | Cena |
|---|---|---|
| [Poly Haven](https://polyhaven.com) | modele, tekstury PBR, HDRI; API bez klucza | **Darmowe**, CC0 |
| [ambientCG](https://ambientcg.com) | materiały PBR, HDRI | **Darmowe**, CC0 |
| [Kenney](https://kenney.nl) | modele low-poly do gier | **Darmowe**, CC0 |
| [Sketchfab](https://github.com/gregkop/sketchfab-mcp-server) | wyszukiwanie i pobieranie modeli | **Freemium**, przez MCP z kluczem API |

## AI 3D

| Narzędzie | Do czego | Cena |
|---|---|---|
| Higgsfield (MCP, podłączony) | obraz na model GLB, sceny w Blenderze | **Freemium**, kredyty [K] |
| [Meshy](https://docs.meshy.ai/en/webapp/pricing) | tekst lub obraz na 3D; najlepszy płatny | **Płatne**, Pro 20 USD/mies. (API) |
| [Tripo AI](https://costbench.com/software/ai-3d-generation/tripo-ai/) | obraz na 3D, auto-rig | **Płatne**, Pro 19,90 USD/mies. (API) |
| [Rodin Gen-2](https://hyper3d.ai/pricing) | wysokiej jakości 3D | **Płatne**, Creator 24 USD/mies. (API) |

Render robię w Blenderze: Cycles na CPU działa w chmurze [K], EEVEE wymaga GPU.

## Zestaw startowy (0 zł)

- Program: Blender 5.2 LTS (steruję przez bpy i MCP).
- CAD i druk: FreeCAD 1.1.
- Tekstury: Poly Haven, ambientCG. Render: Cycles.
- AI: Higgsfield (kredyty) albo płatne API Meshy/Tripo.

---

# 4. Cyberbezpieczeństwo

Zostały narzędzia defensywne i analityczne, które sam uruchomię, oraz najlepsze płatne. Usunięto platformy do nauki, CTF, certyfikaty, bug bounty, frameworki C2 i łamacze haseł na GPU.

## Uwaga prawna

Narzędzia ofensywne (skanery, frameworki do exploitacji, C2, łamacze haseł) wolno uruchamiać tylko na systemach własnych albo na podstawie pisemnego zlecenia z zakresem, terminami i kontaktem. W Polsce nieuprawniony dostęp do informacji penalizuje art. 267 k.k. ([lexlege](https://lexlege.pl/kk/rozdzial-xxxiii-przestepstwa-przeciwko-ochronie-informacji/211/)). Art. 269c daje tylko wąskie wyłączenie karalności: działanie wyłącznie w celu zabezpieczenia systemu, niezwłoczne powiadomienie operatora i brak szkody ([lexlege, art. 269c](https://lexlege.pl/kk/art-269c/)). Ten przepis nie pozwala ćwiczyć na cudzych systemach. Treść przepisów pochodzi ze snippetów, dokładne brzmienie sprawdź w ISAP.

## Ostrzeżenie: atak na Trivy

19.03.2026 atakujący użyli skradzionych poświadczeń i wypchnęli złośliwy kod do 75 z 76 tagów `aquasecurity/trivy-action`. Przejęli też `setup-trivy` i binarkę Trivy v0.69.4 (CVE-2026-33634). Okno ekspozycji trwało ok. 12 godzin. Złośliwy kod kradł sekrety CI/CD ([Snyk](https://snyk.io/de/articles/trivy-github-actions-supply-chain-compromise/), [Endor Labs](https://www.endorlabs.com/vulnerability/cve-2026-33634), [Barracuda](https://trust.barracuda.com/security/information/trivy-supply-chain-compromise)).

- **Wersje zainfekowane:** Trivy 0.69.4, obrazy 0.69.4–0.69.6, trivy-action 0.0.1–0.34.2, setup-trivy 0.2.0–0.2.6.
- **Wersje bezpieczne:** Trivy 0.69.2 i 0.69.3, trivy-action 0.35.0. Wersja 0.75.0 użyta w kontenerze Claude jest późniejsza niż incydent [K].
- **Sprzeczność:** jedno źródło podaje setup-trivy 0.2.6 jako zainfekowany i jako bezpieczny.
- **Co zrobić:** przypinaj GitHub Actions do pełnego SHA commita, nie do tagu. Jeśli w oknie ataku używałeś zainfekowanej wersji, zmień wszystkie sekrety CI.

## Uruchamiam w chmurze (na plikach, defensywnie)

Te narzędzia działają na kodzie i binarkach, które mi dasz. Wszystkie darmowe.

| Narzędzie | Do czego | Status |
|---|---|---|
| [Semgrep CE](https://semgrep.dev) | skan kodu (SAST), też serwer `semgrep mcp` | działa [K] |
| Trivy 0.75 | podatności, sekrety, SBOM | działa [K], patrz ostrzeżenie wyżej |
| Bandit | SAST dla Pythona | działa [K] |
| Syft | generowanie SBOM | działa [K] |
| [Ghidra 12.1](https://ghidra-sre.org) | dekompilacja i analiza binarek | tryb headless [K] |
| radare2 / Cutter | RE w terminalu | działa w chmurze |
| YARA / YARA-X | reguły wykrywania malware | działa w chmurze |
| [ZAP by Checkmarx](https://www.zaproxy.org) | skan aplikacji web, tryb daemon/CI | działa headless |
| Grype | podatności obrazów | instaluje się, baza zablokowana w tej sesji |

nuclei, sqlmap, Nmap i podobne też uruchomię, ale **wyłącznie na Twoich własnych systemach albo z pisemną autoryzacją** — nigdy przeciwko cudzym celom.

## Najlepsze płatne, przez MCP na Twoim PC

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Burp Suite Professional](https://portswigger.net/burp) | standard do testów web; ma oficjalny serwer MCP | **Płatne**, 499 USD/rok [MCP-PC] |
| [Caido](https://caido.io) | nowoczesna alternatywa dla Burpa, ma MCP | **Freemium.** Individual 20 USD/mies. [MCP-PC] |
| [IDA Pro](https://hex-rays.com/pricing) | standard RE; [ida-pro-mcp](https://github.com/mrexodia/ida-pro-mcp) | **Płatne**, od 1099 USD/rok [MCP-PC] |
| [Binary Ninja 6.0](https://binary.ninja) | RE z asystentem AI, API headless | **Freemium.** Personal 199 USD wieczyście |

## Blue team i SIEM przez MCP (wymaga serwera)

| Narzędzie | Do czego | Cena |
|---|---|---|
| [Wazuh 5.0](https://wazuh.com) + [MCP](https://github.com/gensecaihq/Wazuh-MCP-Server) | SIEM/XDR, triage alertów | **Darmowe** [serwer] |
| [Elastic Security](https://github.com/elastic/mcp-server-elasticsearch) | SIEM, oficjalny MCP od 9.2 | **Freemium** [serwer] |
| [Splunk](https://splunkbase.splunk.com/app/7931) | SIEM, oficjalna aplikacja MCP | **Freemium** [serwer] |
| [VirusTotal MCP](https://github.com/w0h1v/mcp-virustotal) | reputacja plików, URL-i, IP | **Freemium**, klucz API |

## AI do bezpieczeństwa (uruchamiam)

| Narzędzie | Do czego | Cena |
|---|---|---|
| Semgrep MCP, [Snyk MCP](https://github.com/snyk/studio-mcp) | skan kodu z poziomu agenta | **Freemium** |
| [Garak, PyRIT, Promptfoo](https://obot.ai/blog/top-5-open-source-ai-security-tools-in-2026/) | testy bezpieczeństwa modeli LLM | **Darmowe** |

## Zestaw startowy (0 zł)

- Lab: własne VM lub Docker, OWASP Juice Shop i DVWA tylko lokalnie.
- Kod: Semgrep CE, Trivy (wersja przypięta do SHA), Bandit, Syft.
- Analiza: Ghidra headless, radare2, YARA.
- Web: ZAP.
- Obrona: Wazuh na własnym serwerze.

Platformy do nauki (TryHackMe, Hack The Box, PortSwigger Academy) i certyfikaty wypadły z tej listy, bo to narzędzia dla Ciebie, nie dla mnie.

---

# 5. Claude i MCP — co obsługuję

## Co działa w chmurze (przetestowane 2.10.2026)

Środowisko: Ubuntu 24.04, 4 CPU, 15 GB RAM, bez GPU i bez wyświetlacza.

| Narzędzie | Co działa | Ograniczenia |
|---|---|---|
| Godot 4.7.2 headless | uruchamianie skryptów, eksport gry na web | bez edytora |
| Blender jako moduł Pythona (bpy 5.0.1) | render Cycles na CPU, eksport GLB | EEVEE nie działa |
| Ghidra 12.1.4 headless | analiza binarek | bez GUI |
| Semgrep 1.179.0 z `semgrep mcp` | skan kodu, serwer MCP | wymaga lokalnej kopii reguł |
| Trivy 0.75.0 | skan podatności | wersja późniejsza niż incydent |
| Bandit, Syft | SAST Pythona, SBOM | — |
| trimesh, gltf-transform | obróbka siatek i plików glTF | — |
| pygame, raylib | gry 2D | z wirtualnym wyświetlaczem |
| FFmpeg, ImageMagick | filmy, grafiki | — |
| Higgsfield AI (MCP) | obraz na GLB, sceny w Blenderze, strony z grami web, wideo, audio | plan darmowy, 3 kredyty |
| GitHub, Google Drive (MCP) | kod i pliki | — |

Dostępne z chmury: GitHub (git clone), PyPI, npm, conda-forge, Docker Hub, ghcr.io. Zablokowane: GitHub Releases, blender.org, godotengine.org, huggingface.co, fish.audio.

## Edytory z oknem — wymagają Twojego PC

Unity, Unreal, Roblox Studio, Maya, 3ds Max, Cinema 4D, Rhino, Blender z GUI, Burp, IDA Pro, DaVinci Resolve współpracują ze mną tylko przez wtyczkę MCP, przy uruchomionym programie na Twoim komputerze z Claude Desktop albo Claude Code. Pełne tabele serwerów MCP są w zakładkach wyżej.

## Konektory claude.ai

Na claude.com/connectors jest 887 konektorów, ale wśród widocznych nie ma do silników gier, 3D ani skanowania kodu. Narzędzia z tych dziedzin podłącza się jako lokalne serwery MCP albo uruchamia w chmurze jako CLI.

## Wnioski

Darmowe narzędzia startowe pokrywają się z tym, co Claude zautomatyzuje sam: Godot, Blender przez bpy, Ghidra headless i Semgrep z MCP. Jeśli AI ma zrobić jak najwięcej bez konfiguracji Twojego PC, wybieraj programy tekstowe i skryptowalne. Największym ryzykiem w 2026 nie jest cena, tylko licencje i łańcuch dostaw: licencja Hunyuan3D wyklucza UE, darmowe plany generatorów AI nie dają praw komercyjnych, a Trivy został przejęty na 12 godzin. Przypinaj wersje i aktualizuj narzędzia. Ceny traktuj jako orientacyjne na październik 2026.
