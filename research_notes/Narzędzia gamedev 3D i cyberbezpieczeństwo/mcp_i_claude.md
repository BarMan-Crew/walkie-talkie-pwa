# Serwery MCP dla silników gier, oprogramowania 3D i defensywnej analizy bezpieczeństwa kodu oraz możliwości kontenera Claude (stan na 2026-10-02)

Metoda: WebSearch był niedostępny (wyczerpany limit). Gwiazdki z GitHub Search API (przez GitHub MCP, 2026-10-02). „Ostatni commit” to data HEAD domyślnej gałęzi z `git clone --depth 1` (2026-10-02). Licencje sprawdzono w pliku LICENSE w repo, a gdy go brak, w README lub package.json. Wymagania GUI wzięto z README (grep). Wersje paczek z `npm view` / `pip index versions`. Strony docs Roblox i Unity są zablokowane przez proxy (EGRESS_BLOCKED), więc tych twierdzeń nie zweryfikowano. Pominięto wszystkie repozytoria z narzędziami ofensywnymi (zakres).

## 1. Silniki gier: które serwery MCP istnieją i czy wymagają edytora z GUI na PC użytkownika?

### Takeaway
Unity, Unreal, Roblox, Godot (pluginy edytora), GameMaker i Defold mają aktywne serwery MCP. Prawie wszystkie (Unity, Unreal, Roblox, większość Godot) działają jako plugin w uruchomionym edytorze z GUI, więc pasują do PC użytkownika. Wyjątki zdolne do pracy bez edytora to Coding-Solo/godot-mcp (uruchamia binarkę Godota), Fulviuus/defold-mcp („headless”) i yearningss/gamemaker-mcp (operuje na plikach .yyp). Oficjalny serwer Roblox przeniesiono do samego Roblox Studio.

### Cited Findings
| Serwer | Steruje | ★ | Ostatni commit | Licencja | GUI na PC? | Źródło |
|---|---|---|---|---|---|---|
| CoplayDev/unity-mcp („MCP for Unity”) | Unity Editor: assety, sceny, skrypty, automatyzacja; v10.0.0 z 2026-06-30; sponsor/maintainer: Aura | 14 644 | 2026-09-30 | MIT | TAK: most do uruchomionego Unity Editor | [repo](https://github.com/CoplayDev/unity-mcp) |
| IvanMurzak/Unity-MCP | Unity Editor + runtime (badge „Unity Runtime supported”), CLI `unity-mcp-cli install-plugin/open`, obraz Docker `aigamedeveloper/mcp-server`; dowolna metoda C# jako tool | 4 373 | 2026-09-28 | Apache-2.0 | TAK dla narzędzi edytora (CLI otwiera projekt w Unity); serwer MCP może stać w Dockerze | [repo](https://github.com/IvanMurzak/Unity-MCP) |
| CoderGamester/mcp-unity | plugin Unity Editor | 1 919 | 2026-09-03 | MIT | TAK | [repo](https://github.com/CoderGamester/mcp-unity) |
| Unity-Technologies/industry-ai-workflows (OFICJALNE Unity, eksperymentalne) | marketplace pluginów Claude Code: `uam-mcp` (Unity Asset Manager), `uat-mcp` (import/optymalizacja/render CAD przez Asset Transformer pxz SDK), `upa-mcp` (Pipeline Automation); utworzone 2026-08-12 | 3 | ~2026-10 | nie sprawdzono | chmurowe usługi Unity, nie edytor gier | [repo](https://github.com/Unity-Technologies/industry-ai-workflows) |
| chongdashu/unreal-mcp | Unreal Engine 5.5+ (aktorzy, Blueprinty); status „EXPERIMENTAL” | 2 088 | 2025-04-22 (porzucone?) | MIT wg badge w README, brak pliku LICENSE | TAK: plugin w edytorze UE | [repo](https://github.com/chongdashu/unreal-mcp) |
| ChiR24/Unreal_mcp | UE 5.0–5.8 przez natywny C++ „Automation Bridge” plugin; ok. 400 możliwości (levele, Blueprinty, UI, materiały); HTTP lub stdio, sekcja Docker | 902 | 2026-10-01 | MIT | TAK: plugin edytora | [repo](https://github.com/ChiR24/Unreal_mcp) |
| flopperam/unreal-engine-mcp | UE; projekt przejęty przez Aura (tryaura.dev) | 1 088 | 2026-06-26 | MIT wg README, brak pliku LICENSE | TAK | [repo](https://github.com/flopperam/unreal-engine-mcp) |
| Coding-Solo/godot-mcp | uruchamia edytor Godot, odpala projekty, zbiera debug output, eksport MeshLibrary, UID (Godot 4.4+); `npx @coding-solo/godot-mcp` + `GODOT_PATH` | 5 908 | 2026-04-16 | MIT | NIE wymaga otwartego edytora, sam wywołuje binarkę Godota (szczegóły niżej) | [repo](https://github.com/Coding-Solo/godot-mcp) |
| hi-godot/godot-ai | plugin edytora Godot, 46 narzędzi / 120+ operacji; od twórców MCP for Unity | 2 739 | 2026-10-01 | MIT | TAK: plugin edytora | [repo](https://github.com/hi-godot/godot-ai) |
| ee0pdt/Godot-MCP | plugin edytora Godot | 616 | 2025-03-19 (nieaktywne) | MIT | TAK | [repo](https://github.com/ee0pdt/Godot-MCP) |
| tugcantopaloglu/godot-mcp | 157 narzędzi, GDScript i C#, „Tested with Godot 4.7” (z opisu repo) | 473 | nie sprawdzono | nie sprawdzono | nie sprawdzono | [repo](https://github.com/tugcantopaloglu/godot-mcp) |
| Roblox/studio-rust-mcp-server (OFICJALNE, ZARCHIWIZOWANE) | Roblox Studio; README: „no longer being actively developed”, inwestycja przeniesiona do wbudowanego MCP Server w Roblox Studio (create.roblox.com/docs/studio/mcp) | 493 | 2026-04-03 | MIT | TAK: Roblox Studio (instalatory tylko Windows/macOS) | [repo](https://github.com/Roblox/studio-rust-mcp-server) |
| boshyxd/robloxstudio-mcp (zarchiwizowane 2026-06-06) | Roblox Studio; autor poleca aktywny fork Chrrxs/robloxstudio-mcp (268★, debug runtime, playtest, screenshoty) | 490 | 2026-06-06 | MIT | TAK | [repo](https://github.com/boshyxd/robloxstudio-mcp), [fork](https://github.com/Chrrxs/robloxstudio-mcp) |
| yearningss/gamemaker-mcp | GameMaker Studio: 225 narzędzi, statyczna analiza GML, edycja projektu .yyp, buildy przez Igor; stdio, bez portu sieciowego | 20 | 2026-09-09 | MIT | IDE niepotrzebne do analizy i edycji plików; buildy wymagają Igor/runtime GameMakera | [repo](https://github.com/yearningss/gamemaker-mcp) |
| Fulviuus/defold-mcp | Defold: build/bundle przez bob.jar, uruchamianie gry, hot-reload, profiler, nagrywanie; README: „Everything works headlessly — no Defold editor required” | 9 | 2026-06-30 | MIT | NIE | [repo](https://github.com/Fulviuus/defold-mcp) |
| natepiano/bevy_brp (crate `bevy_brp_mcp`) | uruchomiona aplikacja Bevy przez Bevy Remote Protocol | 72 | 2026-09-30 | MIT/Apache (badge w README) | aplikacja Bevy musi działać z BRP; GUI zależy od samej aplikacji | [repo](https://github.com/natepiano/bevy_brp) |

- Wersja na npm: `@coding-solo/godot-mcp` 0.1.1, ostatnia modyfikacja 2026-02-03. To może nie być główny kanał wydań, bo repo jest nowsze. — [npm](https://www.npmjs.com/package/@coding-solo/godot-mcp)
- `robloxstudio-mcp` na npm: v2.6.0, ostatnia modyfikacja 2026-04-17. — [npm](https://www.npmjs.com/package/robloxstudio-mcp)
- scenario-labs/skills (826★, utworzone 2026-08-12): skille + Scenario MCP, które według opisu sterują Blenderem, Mayą, ZBrushem, Unreal i Unity. Repo jest płatną usługą generatywną, nie mostem do edytora. — [repo](https://github.com/scenario-labs/skills)

### Inferences
- Coding-Solo/godot-mcp potrzebuje tylko ścieżki do binarki Godota (`GODOT_PATH`). W kontenerze Godot 4.7.2 headless działa (zweryfikowane w kontenerze 2026-10-02), więc ten MCP prawdopodobnie da się tam uruchomić dla operacji na scenach i skryptach. NIE testowano. `launch_editor` bez wyświetlacza nie ma sensu.
- Unity, Unreal i Roblox Studio wymagają edytora z GUI (Windows/macOS, a Unreal/Unity także Linux z GPU). W kontenerze bez GPU i wyświetlacza ich nie uruchomisz, więc to scenariusz „PC użytkownika”.
- Dla polskiego hobbysty najprostsze wybory z darmową licencją i aktywnym rozwojem: Unity → CoplayDev/unity-mcp, Godot → hi-godot/godot-ai (praca w edytorze) albo Coding-Solo/godot-mcp (bez edytora), Unreal → ChiR24/Unreal_mcp, Roblox → wbudowany MCP w Studio.

### Gaps
- Oficjalny MCP w Unity AI Assistant: docs.unity3d.com jest zablokowane, więc nie potwierdzono, czy Unity AI Assistant wystawia MCP dla zewnętrznych agentów (NIEZWERYFIKOWANE).
- Oficjalny MCP od Epic Games dla Unreal: nie znaleziono publicznego repo (NIEZWERYFIKOWANE, że istnieje).
- Szczegóły wbudowanego MCP Roblox Studio (lista narzędzi, wersje): create.roblox.com jest zablokowane. Znana jest tylko informacja z README archiwalnego repo Roblox.
- Brak oficjalnych MCP od YoYo Games (GameMaker), Defold Foundation i Bevy. Istniejące są małe i społecznościowe (9–72★).

## 2. Oprogramowanie 3D: które serwery MCP istnieją i czy wymagają aplikacji z GUI?

### Takeaway
Blender ma zdecydowanie najpopularniejszy most MCP (ok. 29,8 tys. ★). Projekt przemianowano z `blender-mcp` na `mcp-for-blender`. Maya, 3ds Max, Houdini, Cinema 4D, Rhino, FreeCAD i Fusion mają społecznościowe mosty, które działają jako plugin lub socket w uruchomionej aplikacji, czyli na PC użytkownika. Sketchfab MCP działa przez API bez GUI. Spline MCP jest de facto martwy, bo Spline nie ma publicznego REST API.

### Cited Findings
| Serwer | Steruje | ★ | Ostatni commit | Licencja | GUI na PC? | Źródło |
|---|---|---|---|---|---|---|
| ahujasid/mcp-for-blender (dawniej blender-mcp) | Blender: modelowanie, sceny, materiały; PyPI `mcp-for-blender` 2.1.3; `uvx blender-mcp` nadal działa; „third-party integration and not made by Blender” | 29 839 | 2026-09-30 | MIT | TAK: addon w Blenderze (socket) | [repo](https://github.com/ahujasid/mcp-for-blender), [PyPI](https://pypi.org/project/mcp-for-blender/) |
| PatrickPalmer/MayaMCP | Autodesk Maya przez command port; nic nie trzeba instalować w Mayi; testowane na Maya 2023 i 2025 | 105 | 2025-05-12 | MIT | TAK: uruchomiona Maya | [repo](https://github.com/PatrickPalmer/MayaMCP) |
| cl0nazepamm/3dsmax-mcp | 3ds Max: 160 narzędzi (modelowanie, materiały, modyfikatory, viewport capture) | 279 | 2026-10-01 | MIT | TAK: Windows + 3ds Max 2023–2027 | [repo](https://github.com/cl0nazepamm/3dsmax-mcp) |
| capoomgit/houdini-mcp | Houdini przez plugin nasłuchujący na localhost:9876 | 300 | 2026-06-11 | MIT | TAK | [repo](https://github.com/capoomgit/houdini-mcp) |
| healkeiser/fxhoudinimcp | Houdini 20.5+ (testowane 20.5/21.0/22.0) przez `hwebserver`; potrafi sam uruchomić Houdini „headless or GUI” | 272 | 2026-10-01 | MIT | NIE zawsze: tryb headless (wymaga licencji Houdini) | [repo](https://github.com/healkeiser/fxhoudinimcp) |
| ttiimmaacc/cinema4d-mcp | Cinema 4D (R2024+) przez plugin z socket serverem | 129 | 2026-03-08 | MIT | TAK | [repo](https://github.com/ttiimmaacc/cinema4d-mcp) |
| jingcheng-chen/rhinomcp | Rhino 8 + Grasshopper (skrypty, komponenty, slidery) | 1 118 | 2026-09-13 | MIT | TAK | [repo](https://github.com/jingcheng-chen/rhinomcp) |
| neka-nat/freecad-mcp | FreeCAD: addon „MCP Addon” workbench wewnątrz FreeCAD + serwer MCP | 2 606 | 2026-09-25 | MIT | TAK: addon w uruchomionym FreeCAD | [repo](https://github.com/neka-nat/freecad-mcp) |
| faust-machines/fusion360-mcp-server | Fusion 360 przez add-in (TCP :9876, wywołania na main thread) | 110 | 2026-09-16 | MIT | TAK | [repo](https://github.com/faust-machines/fusion360-mcp-server) |
| AuraFriday/Fusion-360-MCP-Server | add-in Fusion łączący się z serwerem Aura Friday MCP-Link; jest w Autodesk App Store | 128 | 2026-01-28 | Proprietary (SPDX w LICENSE) | TAK | [repo](https://github.com/AuraFriday/Fusion-360-MCP-Server) |
| gregkop/sketchfab-mcp-server | wyszukiwanie, szczegóły i pobieranie modeli Sketchfab (gltf/glb/usdz/source); wymaga klucza API | 40 | 2025-03-09 | ISC (package.json) | NIE (tylko API) | [repo](https://github.com/gregkop/sketchfab-mcp-server) |
| aydinfer/spline-mcp-server | Spline.design. README: „This project is archived. Spline.design does not provide a public REST API”, ok. 130 narzędzi nie działa | 84 | 2026-03-09 | MIT | nie dotyczy, niedziałające | [repo](https://github.com/aydinfer/spline-mcp-server) |

- Inne mosty: spkane/freecad-addon-robust-mcp-server (242★), bonninr/freecad_mcp (229★), always-tinkering/rhinoMcpServer (55★), loonghao/dcc-mcp (uniwersalny launcher dla Maya/Houdini/3ds Max/Nuke, 26★). — [GitHub search](https://github.com/spkane/freecad-addon-robust-mcp-server), [dcc-mcp](https://github.com/loonghao/dcc-mcp)
- W tej sesji połączony jest Higgsfield AI MCP: `generate_3d` (obraz → GLB) oraz `scene_builder_3d` z hostowanym Blenderem (`run_python`, `get_blend`, `get_glb`), a także website builder zdolny hostować gry webowe. Plan darmowy, 3 kredyty. (zweryfikowane w kontenerze 2026-10-02; źródło: lista narzędzi sesji, brak URL)

### Inferences
- W chmurze nie trzeba mostu MCP do Blendera: bpy 5.0.1 jako moduł Pythona renderuje Cycles CPU i eksportuje GLB (zweryfikowane w kontenerze 2026-10-02). Addon mcp-for-blender jest potrzebny tylko do sterowania Blenderem z GUI na PC.
- FreeCAD jest dostępny na conda-forge (conda-forge osiągalny z kontenera), więc skryptowy FreeCAD (FreeCADCmd) w kontenerze jest prawdopodobny. Sam freecad-mcp wymaga jednak addonu w GUI. NIETESTOWANE.
- Maya, 3ds Max, C4D, Rhino i Fusion to płatne aplikacje na Windows/macOS. Dla hobbysty realne są tylko na własnym PC i przy posiadanej licencji.

### Gaps
- Nie znaleziono oficjalnych MCP od Autodesk (Maya/3ds Max/Fusion), Maxon, McNeel, SideFX, Sketchfab ani Spline. Wyszukiwanie WWW było niedostępne, więc oficjalne ogłoszenia mogły zostać pominięte (NIEZWERYFIKOWANE).
- Nie sprawdzono, czy sketchfab.com/api jest osiągalne z kontenera (zakaz testów sieciowych w tym zadaniu).

## 3. Defensywna analiza bezpieczeństwa kodu i malware: które serwery MCP istnieją i czy działają headless?

### Takeaway
Semgrep i Snyk mają MCP wbudowane w swoje CLI (`semgrep mcp`, `snyk mcp`). Semgrep MCP działa headless w kontenerze (zweryfikowane). GhidraMCP (LaurieWired) wymaga GUI Ghidry i nie ma commitów od czerwca 2025. Fork bethington/ghidra-mcp ma tryb headless i Docker. Oficjalne MCP Elastic i Splunk przeszły do produktów (Elastic Agent Builder 9.2+, Splunkbase app 7931). Dla Wazuh i VirusTotal istnieją społecznościowe serwery z licencją MIT.

### Cited Findings
| Serwer | Do czego | ★ | Ostatni commit | Licencja | GUI / wymagania | Źródło |
|---|---|---|---|---|---|---|
| Semgrep MCP (wbudowany w CLI `semgrep mcp`) | skan SAST kodu; osobne repo semgrep/mcp zarchiwizowane, MCP przeniesiony do `semgrep/semgrep` (`cli/src/semgrep/mcp`); semgrep na PyPI 1.179.0 | 687 (stare repo) | stare repo 2025-10-28 | stare repo MIT; Semgrep CE: LGPL-2.1 (wiedza, niezweryfikowane tutaj) | NIE; działa headless | [repo](https://github.com/semgrep/mcp), [PyPI](https://pypi.org/project/semgrep/) |
| Snyk MCP (`snyk mcp` w Snyk CLI, „Snyk Studio”) | skany kodu, zależności i konfiguracji z poziomu agenta; snyk CLI na npm 1.1307.4 (2026-10-01) | 55 (snyk/studio-mcp) | 2026-09-30 | Apache-2.0 (studio-mcp) | NIE; wymaga konta Snyk / uwierzytelnienia | [repo](https://github.com/snyk/studio-mcp), [docs](https://docs.snyk.io/integrations/snyk-studio-agentic-integrations/quickstart-guides-for-snyk-studio) |
| snyk/agent-scan | skaner bezpieczeństwa agentów AI, serwerów MCP i skilli (defensywny) | 3 108 | nie sprawdzono | nie sprawdzono | CLI | [repo](https://github.com/snyk/agent-scan) |
| LaurieWired/GhidraMCP | RE / analiza malware: plugin Ghidry (HTTP :8080) + most Python `bridge_mcp_ghidra.py` (stdio lub SSE); plugin włącza się w File → Configure → Developer; instalacja z GitHub Releases | 10 242 | 2025-06-22 (ponad rok bez commitów) | Apache-2.0 | TAK: plugin w GUI Ghidry | [repo](https://github.com/LaurieWired/GhidraMCP) |
| bethington/ghidra-mcp | ponad 200 narzędzi RE; „Headless and GUI modes… Docker-ready for CI/CD” | 4 090 | 2026-09-29 | Apache-2.0 | NIE (tryb headless) | [repo](https://github.com/bethington/ghidra-mcp) |
| cyberkaida/reverse-engineering-assistant (ReVa) | MCP do RE w Ghidrze | 841 | nie sprawdzono | nie sprawdzono | nie sprawdzono | [repo](https://github.com/cyberkaida/reverse-engineering-assistant) |
| w0h1v/mcp-virustotal (`npx @burtthecoder/mcp-virustotal`) | raporty VT dla URL, plików, IP i domen; wymaga `VIRUSTOTAL_API_KEY`; npm 1.0.28 (2026-09-08) | 149 | 2026-09-08 | MIT | NIE | [repo](https://github.com/w0h1v/mcp-virustotal), [npm](https://www.npmjs.com/package/@burtthecoder/mcp-virustotal) |
| gensecaihq/Wazuh-MCP-Server | Wazuh SIEM 4.8.0–4.14.7: 55 narzędzi (triage alertów, podatności, compliance); Docker Compose, obraz w ghcr.io; wymaga użytkownika API Wazuh Managera | 246 | 2026-09-30 | MIT | NIE, ale wymaga działającego Wazuha | [repo](https://github.com/gensecaihq/Wazuh-MCP-Server) |
| gbrigandi/mcp-server-wazuh | Wazuh SIEM (Rust) | 237 | 2025-12-08 | MIT | NIE | [repo](https://github.com/gbrigandi/mcp-server-wazuh) |
| elastic/mcp-server-elasticsearch (OFICJALNE, DEPRECATED) | zapytania do Elasticsearch; README: „deprecated… superseded by the Elastic Agent Builder MCP endpoint (Elastic 9.2.0+ and Serverless)” | 718 | 2026-06-23 | Apache-2.0 | NIE | [repo](https://github.com/elastic/mcp-server-elasticsearch) |
| Splunk: oficjalny „Splunk MCP Server”, Splunkbase App 7931 (Splunk LLC) | wyszukiwania SPL itd.; społecznościowy livehybrid/splunk-mcp zarchiwizowany i odsyła do app 7931 | 106 (livehybrid) | 2026-06-20 | Apache-2.0 (livehybrid) | NIE, wymaga instancji Splunk | [livehybrid README](https://github.com/livehybrid/splunk-mcp), [Splunkbase](https://splunkbase.splunk.com/app/7931) |
| splunk/splunk-mcp-server2 | opis repo mówi „Unofficial”; Python/TS, guardrails SPL | 36 | 2025-06-16 | brak pliku LICENSE | NIE | [repo](https://github.com/splunk/splunk-mcp-server2) |

- mukul975/cve-mcp-server (1 607★): 27 narzędzi threat-intel (CVE, EPSS, CISA KEV, MITRE ATT&CK, VirusTotal). Opis pochodzi tylko z metadanych repo. — [repo](https://github.com/mukul975/cve-mcp-server)
- Uwaga dot. prywatności VirusTotal: przesłane pliki stają się dostępne dla innych użytkowników VT (wiedza ogólna, NIEZWERYFIKOWANE w tej sesji). Dla prywatnego kodu lepiej wysyłać tylko hashe.

### Inferences
- W kontenerze realny stos defensywny bez GUI to: `semgrep mcp` (zweryfikowany) + Trivy + Bandit + Syft (CLI, zweryfikowane) + Ghidra headless (zweryfikowana). Najbliższy MCP do Ghidry headless to bethington/ghidra-mcp (NIETESTOWANY w kontenerze). LaurieWired/GhidraMCP wymaga GUI i GitHub Releases, które w kontenerze są zablokowane, więc trzeba by go budować ze źródeł.
- Wazuh, Elastic i Splunk wymagają działającej instancji SIEM. Hobbysta postawi ją raczej na domowym PC/serwerze niż w kontenerze, gdzie daemon Dockera nie działa.
- Snyk i VirusTotal MCP działają headless, ale wymagają kont i kluczy API oraz dostępu do ich hostów z kontenera (NIESPRAWDZONE).

### Gaps
- Nie sprawdzono licencji Semgrep CE ani Snyk CLI w tej sesji. Nie sprawdzono też, czy api.snyk.io i virustotal.com są osiągalne z kontenera (zakaz testów sieciowych).
- Nie znaleziono oficjalnego MCP od Wazuh Inc. ani od VirusTotal/Google. Bez WebSearch nie da się tego wykluczyć (NIEZWERYFIKOWANE).

## 4. Katalog konektorów Claude (claude.com/connectors): czy są konektory do gier, 3D lub bezpieczeństwa kodu?

### Takeaway
Strona katalogu podaje 887 konektorów, ale renderuje tylko 32 wyróżnione. Wśród widocznych nie ma żadnego dla silników gier, 3D ani skanowania bezpieczeństwa kodu. Najbliżej są Figma, Adobe i Canva (projektowanie 2D) oraz Vanta (compliance/trust). Pełnej listy nie udało się przeszukać.

### Cited Findings
- Strona pokazuje „887 total connectors”, z czego 32 są widoczne, m.in. Atlassian, Google Drive, Gmail, Calendar, Canva, M365, Notion, Slack, Figma, HubSpot, Asana, Linear, monday.com, Adobe, Supabase, Box, Miro, Zoom, Vercel, Vanta. — [claude.com/connectors](https://claude.com/connectors)
- Wśród widocznych wpisów: „Game Engines/Development: None identified”, „3D Software: Figma is listed but described for diagrams and better code”, „Code Security/SIEM: None identified”. — [claude.com/connectors](https://claude.com/connectors)
- Parametr `?search=security` nie filtruje (zwraca te same wpisy), a sitemap.xml nie zawiera URL-i `/connectors/`. — [claude.com/connectors?search=security](https://claude.com/connectors?search=security), [sitemap](https://claude.com/sitemap.xml)
- Higgsfield AI jest połączony w tej sesji jako zdalny MCP (3D: `generate_3d`, `scene_builder_3d`). Nie potwierdzono, czy figuruje w publicznym katalogu. (zweryfikowane w kontenerze 2026-10-02)

### Inferences
- Narzędzia gamedev, 3D i security podłącza się dziś do Claude głównie jako lokalne serwery MCP (Claude Desktop / Claude Code na PC) albo CLI w kontenerze, a nie jako konektory z katalogu.

### Gaps
- Pełna lista 887 konektorów nie jest dostępna przez WebFetch (renderowanie JS lub paginacja). Mogą istnieć konektory np. Sentry, Snyk, Semgrep, Unity lub Sketchfab, których nie widać (NIEZWERYFIKOWANE).

## 5. Co Claude może uruchomić headless w kontenerze chmurowym, a co wymaga PC użytkownika?

### Takeaway
Kontener (Ubuntu 24.04, 4 CPU, 15 GB RAM, bez GPU i wyświetlacza) obsłuży headless: Godota, Blendera (bpy, tylko Cycles CPU), Ghidrę, Semgrep MCP, Trivy, Bandit i Syft. Wszystko, co jest pluginem w edytorze z GUI (Unity, Unreal, Roblox Studio, Maya, 3ds Max, C4D, Rhino, Fusion, FreeCAD-MCP, Blender-MCP, GhidraMCP LaurieWired), wymaga PC użytkownika z uruchomioną aplikacją.

### Cited Findings (zweryfikowane w kontenerze 2026-10-02, źródło: testy w tej sesji, brak URL)
- Środowisko: Ubuntu 24.04, 4 CPU, 15 GB RAM, no GPU, no display.
- Osiągalne: git clone z GitHub, PyPI, npm, Go module proxy, conda-forge, Docker Hub, MCR, ghcr.io.
- Zablokowane: GitHub release downloads, blender.org, godotengine.org, huggingface.co, Semgrep rules registry, host bazy Grype, pobieranie Playwright. W tej sesji zablokowane były też create.roblox.com i docs.unity3d.com (EGRESS_BLOCKED przy WebFetch).
- Docker zainstalowany, ale daemon nie działa (obrazy rozpakowywane narzędziem crane).
- Działało: Godot 4.7.2 headless z obrazu Docker Hub (uruchomienie skryptu + eksport web); Blender jako moduł Pythona bpy 5.0.1 (render Cycles CPU + eksport GLB; EEVEE nie działa, brak libEGL); Ghidra 12.1.4 headless analysis (z obrazu Docker Hub, 26 s na małej binarce); Semgrep 1.179.0 łącznie z wbudowanym `semgrep mcp` (wymaga lokalnie sklonowanego semgrep-rules); Trivy z pobraniem bazy; Grype instaluje się, ale nie pobiera bazy; Bandit, Syft, trimesh, pygame (dummy display), raylib (virtual display), gltf-transform.
- MCP połączone w tej sesji: Higgsfield AI (generate_3d obraz→GLB, scene_builder_3d z Blender run_python/get_blend/get_glb, website builder zdolny hostować gry webowe; plan darmowy, 3 kredyty), GitHub, Google Drive, Gmail, Google Calendar.

### Inferences
- Klasyfikacja dla hobbysty:
  - (b) headless w kontenerze, potwierdzone: Godot CLI, bpy, Ghidra headless, `semgrep mcp`, Trivy, Bandit, Syft, gltf-transform, pygame/raylib.
  - (b) headless w kontenerze, prawdopodobne, ale nietestowane: Coding-Solo/godot-mcp (z `GODOT_PATH` do binarki headless), bethington/ghidra-mcp (headless), Fulviuus/defold-mcp (headless; bob.jar może jednak wymagać pobrania z blokowanego hosta), yearningss/gamemaker-mcp (tylko analiza i edycja plików), sketchfab/VirusTotal/Snyk MCP (zależnie od dostępu do ich API).
  - (a) MCP na PC użytkownika z GUI: Unity (CoplayDev, IvanMurzak, CoderGamester), Unreal (ChiR24, chongdashu, flopperam), Roblox Studio (wbudowany MCP), Godot w edytorze (hi-godot, ee0pdt), mcp-for-blender, Maya, 3ds Max, Houdini (capoomgit; fxhoudinimcp ma też tryb headless), C4D, Rhino, FreeCAD, Fusion, GhidraMCP (LaurieWired).
- Instalacje z GitHub Releases (np. GhidraMCP zip, instalator Roblox MCP) są w kontenerze zablokowane. Obejściem jest build ze źródeł (git clone działa) albo obraz z Docker Hub lub ghcr.io.

### Gaps
- W tej sesji nie uruchomiono żadnego z wymienionych serwerów MCP, poza `semgrep mcp` zweryfikowanym wcześniej.
- Dokumentacja środowiska (read_documentation: session.resources) nie podała limitów zasobów sesji, tylko wskazówki o zwalnianiu miejsca.
