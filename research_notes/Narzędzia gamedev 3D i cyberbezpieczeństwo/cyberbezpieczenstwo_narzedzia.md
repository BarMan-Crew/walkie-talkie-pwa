# Narzędzia cyberbezpieczeństwa (obrona + legalne, autoryzowane testy penetracyjne) — stan na październik 2026

> **Uwaga prawna (do umieszczenia w raporcie):** narzędzia ofensywne (skanery, frameworki exploitacji, C2, crackery haseł) wolno używać wyłącznie na systemach własnych albo takich, na których test został pisemnie zlecony (umowa/scope/RoE). W Polsce nieautoryzowany dostęp i wytwarzanie/udostępnianie narzędzi do popełnienia przestępstwa penalizują m.in. art. 267–269c k.k. (art. 269c wyłącza karalność dla autoryzowanych testów — informacja z wiedzy bazowej, niezweryfikowana w tej sesji). Notatki zawierają wyłącznie katalog (nazwa, przeznaczenie, licencja, cena, platforma); nie zawierają procedur ataku.
>
> **Metodologia / ograniczenia źródeł:** WebFetch był zablokowany przez proxy dla portswigger.net, caido.io, hex-rays.com i binary.ninja, a GitHub API (`gh api`) nie był dostępny w tej sesji. Dlatego **wszystkie ceny pochodzą ze snippetów wyszukiwarki** (często agregatorów cenowych typu cipherssecurity.com, costbench.com, ethicalhacking.ai), a nie z bezpośrednio pobranych stron cenników. Limit wyszukiwań sesji (200) został wyczerpany w trakcie pracy, więc część katalogu (licencje popularnych projektów OSS) opiera się na wiedzy bazowej modelu (stan ~VI 2026) i jest wyraźnie oznaczona w sekcjach „Gaps” jako **[niezweryfikowane]**.

---

## 1. Dystrybucje i środowiska bezpieczeństwa (Kali, Parrot, BlackArch, REMnux, Security Onion, Tsurugi, CSI Linux, FLARE-VM)

### Takeaway
Wszystkie wymienione dystrybucje są darmowe. W 2026 Kali wydał 2026.1 (marzec, 8 nowych narzędzi, w tym MetasploitMCP — integracja z agentami AI) i 2026.2 (czerwiec, 9 narzędzi, w tym shell-gpt); Parrot przeszedł na serię 7.x na Debianie 13 „Trixie”; REMnux wydał v8 na Ubuntu 24.04; Security Onion rozwija linię 2.4.2xx z asystentem „Onion AI” (część funkcji w płatnym Security Onion Pro).

### Cited Findings
- **Kali Linux 2026.1** (marzec 2026): kernel 6.18, odświeżony motyw, tryb „BackTrack” w kali-undercover (20-lecie BackTrack), 8 nowych narzędzi: AdaptixC2, Atomic-Operator, Fluxion, GEF, MetasploitMCP, SSTImap, WPProbe, XSStrike — [AlternativeTo](https://alternativeto.net/news/2026/3/kali-linux-2026-1-launches-with-linux-6-18-theme-update-backtrack-mode-and-8-new-tools); [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20261-released-with-8-new-tools-new-backtrack-mode/)
- **Kali Linux 2026.2** (czerwiec 2026): 9 nowych narzędzi — arsenal-ng, hydra-gtk, legba, oletools, penelope, shell-gpt, tailscale, tookie-osint, uro; aktualizacje NetHunter — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates); [HackMag](https://hackmag.com/news/kali-linux-2026-2)
- Kali 2026.3 — w wynikach wyszukiwania (stan 2 X 2026) brak informacji o wydaniu; najnowsze potwierdzone to 2026.2 — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates)
- **Parrot OS 7.0** wydany w grudniu 2025 — [Parrot release notes 7.0](https://parrotsec.org/blog/2025-12-24-parrot-7.0-release-notes/)
- **Parrot OS 7.1** (11 II 2026): Debian 13 „Trixie”, kernel 6.17.13, wsparcie RISC-V — [Parrot release notes 7.1](https://parrotsec.org/blog/2026-02-11-parrot-7.1-release-notes/)
- **Parrot OS 7.2**: kernel 6.19.13, Debian 13.4, KDE Plasma domyślnie, łatka na CVE-2026-31431 („Copy Fail”, lokalna eskalacja uprawnień ujawniona 29 IV 2026), nowy obraz HTB — [Linuxiac](https://linuxiac.com/parrot-os-7-2-ships-with-linux-kernel-6-19-and-copy-fail-fix/); [PBX Science](https://pbxscience.com/parrot-os-7-2-released-copy-fail-patch-15-updated-tools-and-a-new-htb-image/). Data wydania: snippet podaje 9 V 2026, ale artykuł PBX Science datowany jest 25 VIII 2026 — **rozbieżność dat, niezweryfikowana**.
- Parrot Security Edition: „ponad 800 narzędzi” do pentestów, forensics, RE — [Linuxiac / snippet](https://linuxiac.com/parrot-os-7-2-ships-with-linux-kernel-6-19-and-copy-fail-fix/)
- **REMnux**: darmowy toolkit Linux (Ubuntu) do reverse-engineeringu malware; **REMnux v8** — baza Ubuntu 24.04 LTS, nowy instalator oparty na Cast — [REMnux docs](https://docs.remnux.org/llms-full.txt); [It's FOSS](https://itsfoss.com/news/remnux-v8-release.md)
- **Security Onion**: 2.4.201 (15 I 2026, aktualizacje Suricata i Zeek), 2.4.211 (12 III 2026); 2.4.210 oparty na Oracle Linux z obsługą lokalnego modelu Onion AI — [Security Onion blog 2026/01](https://blog.securityonion.net/2026/01/); [Security Onion blog 2026/03](https://blog.securityonion.net/2026/03); [Notebookcheck](https://www.notebookcheck.org/Security-Onion-2-4-210-basado-en-Oracle-Linux-se-lanza-con-soporte-para-el-modelo-local-de-Onion-AI.1241213.0.html)
- **Security Onion Pro** (płatny): OIDC, szyfrowanie danych w spoczynku, FIPS, DoD STIG, Manager of Managers, **MCP Server**, aplikacja dla Splunk, Hypervisor, raporty, **Onion AI Assistant** — [Security Onion blog](https://blog.securityonion.net/2025/12/security-onion-24200-now-available-with.html)
- **Tsurugi Linux**: dystrybucja (Ubuntu) do DFIR, analizy malware i OSINT; live/post-mortem forensics, akwizycja dowodów (artykuł z I 2024) — [Help Net Security, 2024-01](https://www.helpnetsecurity.com/2024/01/16/tsurugi-linux-open-source-dfir-analysis/)
- **FLARE-VM**: darmowa, open-source „dystrybucja” na bazie Windows (skrypt instalacyjny na VM) dla reverserów, analityków malware, IR i pentesterów — debuggery, deasemblery, dekompilatory, narzędzia sieciowe — opis ze snippetu wyszukiwarki (strona źródłowa snippetu niejednoznaczna; oficjalne repo do weryfikacji: [mandiant/flare-vm](https://github.com/mandiant/flare-vm)); kontekst laboratorium analizy malware z REMnux + FLARE-VM — [Ethical-Hacking-Labs (GitHub)](https://github.com/Samsar4/Ethical-Hacking-Labs/blob/master/6-Malware/4-Malware-Analysis-Lab.md)

### Inferences
- Trend 2026: dystrybucje dodają integracje z LLM/agentami (MetasploitMCP i shell-gpt w Kali, MCP Server i Onion AI w Security Onion Pro).
- Do pracy ofensywnej (autoryzowanej) → Kali/Parrot/BlackArch; do analizy malware → REMnux (Linux) + FLARE-VM (Windows) w izolowanych VM; do blue team/NSM → Security Onion; do DFIR/OSINT → Tsurugi / CSI Linux.

### Gaps
- **BlackArch** [niezweryfikowane]: Arch Linux, repozytorium ~2800+ narzędzi, darmowe, można dodać repo do istniejącego Archa — https://blackarch.org
- **CSI Linux** [niezweryfikowane]: Ubuntu, OSINT/forensics/IR („Computer Security Investigations”), darmowy obraz; płatne kursy/certyfikacje — https://csilinux.com. Brak wyników o wydaniach 2026.
- **Kali** platformy [niezweryfikowane]: ISO bare-metal, VM (VMware/VirtualBox/Hyper-V), WSL (Win-KeX), kontenery Docker, ARM (Raspberry Pi), NetHunter (Android), chmura; Debian Testing; ~600 narzędzi; darmowy (OffSec).
- Licencja Security Onion 2.4 (prawdopodobnie Elastic License 2.0) — **niezweryfikowane**.
- Najnowsza wersja Tsurugi (2024/2025) — brak danych z 2026.

---

## 2. Rekonesans sieciowy i skanowanie / NSM (Nmap, Masscan, Wireshark, tcpdump, Zeek, Suricata, Snort, Shodan, Censys)

### Takeaway
Narzędzia „on-prem” (Nmap, Masscan, Wireshark, tcpdump, Zeek, Suricata, Snort 3) są darmowe/open source. Płatne są wyszukiwarki internetu: Shodan API od $69/mies. (Freelancer) do $1,099/mies. (Corporate); Censys ma plan Free (250 zapytań/mies.) i Solo $62/mies. ($745/rok).

### Cited Findings
- **Nmap 7.98** wydany 2025-08-21 (rebuild instalatora Windows z NSIS 3.11 — CVE-2025-43715, OpenSSL 3.0.17, Lua 5.4.8, Npcap 1.83, poprawki) — [Nmap Changelog](https://nmap.org/changelog)
- Istnieje już **Nmap 7.99** — patch IPFire „nmap: Update to version 7.99” z 7 IV 2026 (tylko snippet; daty wydania nie potwierdzono) — [IPFire patchwork](https://patchwork.ipfire.org/project/ipfire/patch/20260407151108.3472751-26-adolf.belka@ipfire.org)
- **Wireshark 4.6.9** (i 4.4.19) wydany 23 IX 2026; naprawia wiele podatności, co projekt wiąże z trendem raportów podatności wspomaganych AI — [wireshark.org news 2026-09-23](https://www.wireshark.org/news/20260923.html); 4.6.8 — 12 VIII 2026 — [wireshark.org](https://www.wireshark.org/news/20260812.html); 4.6.7 (11 VII 2026) naprawił 12 podatności — [OffSeq radar](https://radar.offseq.com/threat/wireshark-467-released-sat-jul-11th-0c2c6e32946b366a)
- **Shodan API**: Freelancer **$69/mies.** (1 mln wyników/mies., skan 5 120 IP/mies., monitoring 5 120 IP), Small Business **$359/mies.** (20 mln wyników, 65 536 IP, filtr `vuln`), Corporate **$1,099/mies.** (bez limitu wyników, 327 680 IP, wszystkie filtry, batch IP lookup); bez umów, limit 1 req/s — [Shodan billing](https://account.shodan.io/billing); [TrustRadius](https://www.trustradius.com/products/shodan/pricing)
- Shodan **Membership** to jednorazowa opłata „lifetime”; okresowo w promocji za ~$4–5 (Black Friday) — [Slickdeals](https://slickdeals.net/f/15918523-shodan-io-membership-5) (tylko tytuł snippetu)
- **Censys**: Free — 250 zapytań/mies., 10 stron wyników, 1 użytkownik, historia hostów 1 tydzień, dostęp API; darmowy dostęp dla studentów/badaczy (Research Access Program). **Solo** — **$62/mies. (rozliczane $745/rok)**, 500 zapytań, 25 stron, API 0.4/s. **Starter** — 3 750 zapytań, 50 stron, API 1/s, 5 użytkowników, SSO/SAML (cena nieznana) — [Censys docs – data access tiers](https://docs.censys.com/docs/data-access-tiers-entitlements); [ethicalhacking.ai](https://ethicalhacking.ai/pricing/censys-search-pricing)

### Inferences
- Do nauki wystarczy Shodan Membership (jednorazowo) + Censys Free; plany API są dla zespołów ASM/threat intel.
- Fala raportów podatności znalezionych przez AI (Wireshark 4.6.9) oznacza, że szybkie aktualizowanie narzędzi analitycznych samo w sobie staje się kwestią bezpieczeństwa (parsery pakietów to powierzchnia ataku).

### Gaps
Wpisy katalogowe z wiedzy bazowej **[niezweryfikowane w tej sesji]**:
- **Nmap** — skaner portów/usług/OS + NSE; licencja Nmap Public Source License (NPSL), darmowy (licencja OEM płatna dla redystrybucji komercyjnej); Win/Linux/macOS; GUI Zenmap — https://nmap.org
- **Masscan** — bardzo szybki skaner portów TCP (internet-scale); AGPL-3.0; Linux/Win/macOS — https://github.com/robertdavidgraham/masscan
- **Wireshark** — analizator protokołów z GUI (+ tshark CLI); GPLv2; Win/macOS/Linux — https://www.wireshark.org
- **tcpdump/libpcap** — przechwytywanie pakietów z CLI; BSD; Linux/BSD/macOS — https://www.tcpdump.org
- **Zeek** (dawniej Bro) — monitor bezpieczeństwa sieci generujący logi protokołów; BSD; Linux/BSD/macOS — https://zeek.org
- **Suricata** — IDS/IPS/NSM (OISF), wielowątkowy, kompatybilny z regułami Snort/ET; GPLv2; Linux/BSD/Win — https://suricata.io (reguły ET Open darmowe, ET Pro płatne — Proofpoint)
- **Snort 3** — IDS/IPS (Cisco Talos); GPLv2; reguły: Community (darmowe), Registered (darmowe, z opóźnieniem ~30 dni), Subscriber (płatne — cen nie zweryfikowano) — https://www.snort.org
- Regularna cena Shodan Membership (historycznie $49 jednorazowo) — niezweryfikowane.
- Cena planu Censys Starter / Enterprise — nie znaleziono.

---

## 3. Testy bezpieczeństwa aplikacji webowych (Burp Suite, ZAP, Caido, nuclei, ffuf, sqlmap, Nikto)

### Takeaway
Burp Suite Professional podrożał w styczniu 2026 do **$499/użytkownik/rok** (z $449); Community pozostaje darmowy. ZAP (od IX 2024 „ZAP by Checkmarx”) pozostaje darmowy na Apache 2.0 (wersja 2.17.0, XII 2025). Caido: darmowy Basic, Individual **$20/mies. lub $200/rok** (cena bazowa USA, lokalizowana wg PPP), Team i Enterprise.

### Cited Findings
- **Burp Suite Professional**: **$499/użytkownik/rok**, rozliczanie wyłącznie roczne; wzrost o $50 z $449 w styczniu 2026; każda osoba potrzebuje osobnego seata — [CiphersSecurity, 2026-09](https://cipherssecurity.com/burp-suite-pricing-2026-pro-vs-dast/); [Capterra](https://www.capterra.com/p/178476/PortSwigger/) (dane ze snippetów; portswigger.net zablokowany dla fetch)
- **ZAP by Checkmarx**: we wrześniu 2024 trzej główni deweloperzy (Simon Bennetts, Rick Mitchell, Ricardo Pereira) zostali pracownikami Checkmarx; projekt przemianowany na „ZAP by Checkmarx”, pozostaje osobnym, społecznościowym projektem na **Apache 2.0** — [Checkmarx blog](https://checkmarx.com/blog/expanding-checkmarx-dast-capabilities-with-zap/)
- ZAP **2.17.0** (15 XII 2025): deduplikacja alertów, optymalizacje wydajności w trybie headless/CI, lepsza obsługa ograniczeń dysku/pamięci; 2025 = pierwszy pełny rok z 3 etatowymi deweloperami; fokus na uwierzytelnianiu — [ZAP blog 2026-02-02](https://www.zaproxy.org/blog/2026-02-02-zap-updates-2025-highlights-2026-plans/)
- **Caido** plany: **Basic** (free forever: do 2 projektów, 7 workflowów, 3 pluginów, 5 presetów filtrów, HTTPQL); **Individual** (bez limitów projektów/workflowów/pluginów, nightly builds); **Team** (współdzielone instancje, centralne rozliczenie, przenoszalne licencje, priority support); **Enterprise** (wycena indywidualna) — [caido.io/pricing](https://caido.io/pricing) (snippet)
- Caido Individual: cena bazowa **$20/mies. lub $200/rok** (USA); od VIII 2025 ceny lokalizowane wg parytetu siły nabywczej (np. Brazylia ~50% taniej) — [Caido blog 2025-08-21 (payload)](https://www.caido.io/blog/2025-08-21-localized-pricing/_payload.json)
- Kali 2026.1 dodał narzędzia web: **SSTImap** (SSTI), **XSStrike** (XSS), **WPProbe** (WordPress) — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20261-released-with-8-new-tools-new-backtrack-mode/)

### Inferences
- Dla pojedynczego pentestera: Caido Individual ($200/rok) jest ~2,5× tańszy niż Burp Pro ($499/rok); ZAP i Burp Community pozostają darmowym punktem startu.

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]**:
- **Burp Suite Community** — darmowy, okrojony (bez skanera, Intruder throttled); Java/Win/macOS/Linux. **Burp Suite DAST** (dawniej Enterprise) — wycena indywidualna. Funkcje **Burp AI** (kredyty AI w Pro) — nie zweryfikowano zasad 2026.
- **nuclei** (ProjectDiscovery) — skaner oparty na szablonach YAML (community templates); MIT; Go, wieloplatformowy; płatna platforma ProjectDiscovery Cloud — https://github.com/projectdiscovery/nuclei
- **ffuf** — szybki web fuzzer (katalogi, parametry, vhosty); MIT; Go — https://github.com/ffuf/ffuf
- **sqlmap** — automatyczne wykrywanie podatności SQLi; GPLv2; Python — https://sqlmap.org
- **Nikto** — skaner serwerów WWW (znane pliki/konfiguracje); GPL; Perl — https://github.com/sullo/nikto
- Cena Caido Team — nie znaleziono (strona cennika zablokowana).

---

## 4. Zarządzanie podatnościami / SAST / SCA (OpenVAS/Greenbone, Nessus, Trivy, Grype, Semgrep, CodeQL, Snyk, OWASP Dependency-Check)

### Takeaway
Nessus Professional ~**$4,390/rok**, Nessus Expert ~**$6,390/rok** (Tenable zmienia cenniki co marzec; źródła się różnią). Snyk Free: 200 testów SCA, 100 SAST, 100 kontenerów, 300 IaC miesięcznie (repo publiczne się nie liczą). Semgrep CE (LGPL 2.1) po przeniesieniu funkcji do wersji płatnej (XII 2024) doczekał się forka **Opengrep**. Ważne: **Trivy padł ofiarą ataku supply-chain w marcu 2026** (CVE-2026-33634) — trzeba przypinać bezpieczne wersje.

### Cited Findings
- **Nessus Professional**: **$4,390/rok** (niektóre źródła podają do $4,790); **Nessus Expert**: **$6,390/rok** (jedno źródło: $8,012.20) — Expert dodaje skan aplikacji web, wykrywanie zewnętrznej powierzchni ataku, skan infrastruktury chmurowej; Expert 2 lata $12,460.50, 3 lata $18,211.50; Advanced Support +$400/rok; Tenable koryguje cenniki co marzec — [ifeeltech review 2026](https://ifeeltech.com/blog/tenable-nessus-review); [Beagle Security](https://beaglesecurity.com/blog/article/nessus-review.html); [toolradar](https://toolradar.com/tools/tenable/pricing) — **źródła sprzeczne**, wszystkie to agregatory
- **Snyk Free** (2026): 200 testów open-source (SCA)/mies., 100 testów Snyk Code (SAST)/mies., 100 testów kontenerów/mies., 300 testów IaC/mies.; skany repozytoriów publicznych nie wliczają się do limitów — [agentdeals.dev](https://agentdeals.dev/vendor/snyk); [CiphersSecurity 2026-08](https://cipherssecurity.com/snyk-pricing-explained-2026/)
- **Semgrep CE**: silnik na **LGPL 2.1**; w XII 2024 Semgrep przeniósł kluczowe funkcje za licencję komercyjną; CE analizuje pojedyncze pliki (cross-file taint tylko w płatnym Semgrep Code) — [The New Stack](https://thenewstack.io/opengrep-launches-as-free-fork-after-semgrep-license-shift/); [AppSecSanta](https://appsecsanta.com/sast-tools/opengrep-vs-semgrep)
- **Opengrep**: fork Semgrep (LGPL 2.1) założony przez m.in. Aikido Security, Arnica, Amplify, Endor Labs, Jit, Kodem, Legit Security, Mobb, Orca Security; przywraca eksport JSON/SARIF, cross-function taint w 12 językach — [The New Stack](https://thenewstack.io/opengrep-launches-as-free-fork-after-semgrep-license-shift/); [Dark Reading](https://www.darkreading.com/application-security/code-scanning-tool-s-license-at-heart-of-security-breakup)
- **Trivy — kompromitacja supply-chain (marzec 2026)**: 19 III 2026 atakujący (przypisywani grupie **TeamPCP**) użyli skradzionych poświadczeń, by force-pushować złośliwy kod do 75 z 76 tagów `aquasecurity/trivy-action`, przejąć `setup-trivy` i binarkę **Trivy v0.69.4**; okno ekspozycji ~12 h; payload kradł sekrety CI/CD, po czym uruchamiał normalny skan. Druga kompromitacja w <3 tygodnie (pierwsza ujawniona 1 III; rotacja poświadczeń nie była atomowa). Dotknięte: Trivy 0.69.4, obrazy 0.69.4–0.69.6, trivy-action 0.0.1–0.34.2, setup-trivy 0.2.0–0.2.6; bezpieczne: Trivy 0.69.2/0.69.3, trivy-action 0.35.0 — [Snyk](https://snyk.io/de/articles/trivy-github-actions-supply-chain-compromise/); [Barracuda](https://trust.barracuda.com/security/information/trivy-supply-chain-compromise); [Endor Labs CVE-2026-33634](https://www.endorlabs.com/vulnerability/cve-2026-33634); [ramimac.me](https://ramimac.me/trivy-teampcp). Uwaga: snippet wymienia setup-trivy 0.2.6 jednocześnie jako dotknięty i bezpieczny — **sprzeczność do wyjaśnienia**.

### Inferences
- Lekcja z Trivy: narzędzia bezpieczeństwa w CI/CD mają uprzywilejowany dostęp do sekretów; należy przypinać GitHub Actions do pełnych SHA commitów, nie do tagów.
- Dla małego zespołu darmowy stos: Trivy/Grype (SCA + kontenery) + Opengrep/Semgrep CE (SAST) + Dependency-Check + Greenbone CE (skan sieci); Nessus Pro/Snyk płatne przy skali.

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]**:
- **Greenbone Community Edition / OpenVAS** — open-source skaner podatności sieciowych (GPL/AGPL), Linux (kontenery Docker); płatne appliance Greenbone Enterprise — https://www.greenbone.net
- **Nessus Essentials** — darmowy, do 16 IP, tylko użytek niekomercyjny/edukacyjny — https://www.tenable.com/products/nessus/nessus-essentials
- **Trivy** — skaner podatności/misconfig/sekretów/SBOM (kontenery, FS, IaC, K8s); Apache-2.0; Aqua Security — https://github.com/aquasecurity/trivy
- **Grype** (+ Syft do SBOM) — skaner podatności obrazów/FS; Apache-2.0; Anchore — https://github.com/anchore/grype
- **CodeQL** — silnik SAST GitHub; darmowy dla repozytoriów publicznych/badań; dla prywatnych w ramach płatnego GitHub Code Security (ok. $30/committer/mies. od 2025 — niezweryfikowane) — https://codeql.github.com
- **Semgrep AppSec Platform** — darmowy dla małych zespołów (do ~10 kontrybutorów), płatne Teams — ceny niezweryfikowane.
- **Snyk Team** (~$25/dev/mies.) — niezweryfikowane.
- **OWASP Dependency-Check** — SCA oparte o NVD (Java/.NET/JS itd.); Apache-2.0; CLI/Maven/Gradle/Jenkins; wymaga klucza NVD API dla rozsądnej wydajności — https://owasp.org/www-project-dependency-check/

---

## 5. Reverse engineering i analiza malware (Ghidra, IDA, Binary Ninja, radare2/Cutter, x64dbg, YARA, Cuckoo/CAPE, ANY.RUN, VirusTotal)

### Takeaway
Ghidra (NSA, darmowa) jest w wersji **12.1.4** (18 VIII 2026). IDA przeszła na **subskrypcje** (IDA 9.0): Home $365/rok, Pro od $1,099/rok (Essential) do $8,599/rok (Ultimate). **Binary Ninja** zmienił cennik przy wersji **6.0 „Krypton” (19 VIII 2026)**: Personal $199, Commercial $1,799, Ultimate $3,499 (licencje wieczyste + 1 rok aktualizacji). ANY.RUN ma darmowy plan Community (16 MB, 60 s).

### Cited Findings
- **Ghidra**: darmowe, open-source narzędzie RE od NSA; stabilna wersja **12.1.4** (18 VIII 2026); 12.0.4 (4 III 2026); 12.1 wymaga min. JDK 21 — [Wikipedia](https://en.wikipedia.org/wiki/Ghidra); [Ghidra 12.1 What's New](https://ghidradocs.com/12.1_PUBLIC/docs/WhatsNew.html). Snippet Wikipedii wspomina też, że 12.0.4 to „ostatnie wydanie przed commitowaniem kodu generowanego przez LLM w maju 2026” — informacja tylko ze snippetu, niezweryfikowana.
- **IDA Free** — wersja darmowa do użytku niekomercyjnego; **IDA Home — $365/rok** (jedna rodzina procesorów do wyboru: PC/ARM/M68K/MIPS/PPC, 32/64-bit, IDAPython, debugger, Lumina) — [Capterra](https://www.capterra.ca/software/1015457/ida-pro); [G2](https://www.g2.com/products/ida-pro/pricing)
- **IDA Pro (subskrypcja roczna)**: Essential **$1,099/rok** (2 dekompilatory chmurowe), Expert 2 **$2,999/rok**, Expert 4 **$4,999/rok**, Expert 6 **$6,899/rok** (2/4/6 lokalnych dekompilatorów), Ultimate **$8,599/rok** — [hex-rays.com/pricing](https://hex-rays.com/pricing) (snippet; strona zablokowana dla fetch); przejście na subskrypcje z IDA 9.0 — [Hex-Rays blog](https://hex-rays.com/blog/mme-maintenon-ida9-subscriptions-more)
- **Binary Ninja – nowy cennik od 6.0 „Krypton” (19 VIII 2026)**: Free $0 (niekomercyjny, 5 architektur dekompilacji); **Personal $199** (student $49; niekomercyjny); **Commercial $1,799** (student $449); **Ultimate $3,499**; **Ultimate Floating $5,499**; Non-Commercial potaniał, Commercial podrożał, koniec „wprowadzającej” ceny Ultimate (wcześniej $2,999), Enterprise przechodzi na model add-onów, zmiana rabatu za odnowienie (premiuje auto-renewal); nadal licencja wieczysta z 1 rokiem aktualizacji; jedna licencja = Linux/macOS/Windows — [Binary Ninja blog 2026-07-28](https://binary.ninja/2026/07/28/pricing-changes.html); [binary.ninja/purchase](https://binary.ninja/purchase/); [Binary Ninja FAQ](https://faq.binary.ninja/)
- Binary Ninja rozwija **Sidekick** (analiza wspomagana AI), WARP (dopasowywanie funkcji), debugger z time-travel — [Binary Ninja blog 2026-07-28](https://binary.ninja/2026/07/28/pricing-changes.html)
- **CAPE (CAPEv2)**: open-source sandbox malware wywodzący się z Cuckoo; automatyzuje ekstrakcję payloadów i konfiguracji malware — [CAPE docs](https://capev2.readthedocs.io/en/latest/introduction/what.html)
- **ANY.RUN** (interaktywny sandbox online): **Community — darmowy** (plik do 16 MB, timeout VM 60 s); **Hunter** — plik 100 MB, timeout 660 s (cena: jedno źródło „od $299/mies.”, TrustRadius „od $109/mies.” — **sprzeczność**); **Enterprise Suite** — wycena indywidualna, 1 200 s, 1 500+ zadań API/mies. — [any.run/plans](https://any.run/plans); [ethicalhacking.ai](https://ethicalhacking.ai/pricing/any-run-pricing); [TrustRadius](https://www.trustradius.com/products/any-run/reviews)
- Kali 2026.1 dodał **GEF** (rozszerzenie GDB do RE/exploit dev), a 2026.2 **oletools** (analiza dokumentów Office) — [BleepingComputer 2026.1](https://bleepingcomputer.com/news/linux/kali-linux-20261-released-with-8-new-tools-new-backtrack-mode/); [BleepingComputer 2026.2](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates)

### Inferences
- Ścieżka kosztowa RE: Ghidra (0) → Binary Ninja Personal ($199 jednorazowo, niekomercyjnie) → IDA Home ($365/rok) → Binary Ninja Commercial ($1,799 jednorazowo) → IDA Pro ($1,099–8,599/rok). Binary Ninja pozostaje jedynym z „dużej trójki” komercyjnych dekompilatorów z licencją wieczystą.

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]**:
- **radare2** — framework RE z CLI; LGPL-3.0; wieloplatformowy — https://github.com/radareorg/radare2. **Cutter** — GUI oparte na Rizin (fork r2); GPL-3.0 — https://cutter.re
- **x64dbg** — debugger user-mode dla Windows (x86/x64); GPL-3.0; tylko Windows — https://x64dbg.com
- **YARA** — reguły do klasyfikacji/wykrywania malware; BSD-3; **YARA-X** — przepisany w Rust następca (VirusTotal) — https://virustotal.github.io/yara-x/
- **Cuckoo Sandbox** (oryginał porzucony ~2019, Python 2); **Cuckoo3** rozwijany przez CERT-EE — status 2026 nieznany.
- **VirusTotal** — darmowy publiczny serwis (użytek niekomercyjny), publiczne API z limitami (ok. 4 zapytania/min, 500/dzień — niezweryfikowane); VT Enterprise/Intelligence płatne, wycena indywidualna — https://www.virustotal.com
- Dokładne ceny IDA Free/IDA Classroom i warunki licencji IDA Free 2026 — pobrane tylko ze snippetów.

---

## 6. Obrona / blue team / DFIR (Wazuh, Security Onion, Elastic Security, Splunk Free, Velociraptor, osquery, CrowdSec, fail2ban, Sigma, MISP, TheHive/Cortex, OpenCTI, Sysmon, KAPE, Autopsy, Volatility 3)

### Takeaway
Większość stosu blue team jest darmowa/open source. Najważniejsza nowość 2026: **Wazuh 5.0 (1 VII 2026)** — nowy silnik detekcji z regułami opartymi o **Sigma**, wbudowane CTI, usunięcie Filebeat, asystent AI i case management. Splunk Free nadal ogranicza się do **500 MB/dzień**, jednej instancji, bez uwierzytelniania i alertów.

### Cited Findings
- **Wazuh 5.0** wydany **1 VII 2026**: ujednolicony model danych **Wazuh Common Schema (WCS)**; nowy silnik detekcji z warstwą normalizacji, obsługą reguł **Sigma** i nową czytelną składnią reguł/dekoderów; **Wazuh CTI** (automatycznie aktualizowane reguły, dekodery, IoC/IoA, dane o podatnościach, GeoIP); usunięty Filebeat, rozdzielony agent i manager, HTTPS domyślnie (kompatybilny z agentami 4.x); **AI Assistant** w dashboardzie (zapytania w języku naturalnym) i zarządzanie sprawami (case management) — [Wazuh release notes](https://documentation.wazuh.com/current/release-notes/); pakiet agenta 5.1.0 widoczny w repozytoriach — [forge.sath.com](https://forge.sath.com/apps/-/packages/debian/wazuh-agent) (snippet)
- **Splunk Free**: indeksowanie do **500 MB/dzień** (limit resetuje się o północy); 3 ostrzeżenia licencyjne w 30-dniowym oknie blokują wyszukiwanie (indeksowanie trwa); tylko pojedyncza instancja; brak uwierzytelniania, wyszukiwania rozproszonego, alertów, forwardingu (tylko odbiór), klastrowania — [Splunk docs 10.2 – About Splunk Free](https://help.splunk.com/en/splunk-enterprise/administer/admin-manual/10.2/configure-splunk-licenses/about-splunk-free); [Uptrace](https://uptrace.dev/blog/splunk-pricing.html)
- **Security Onion** (darmowa platforma NSM/SOC: Suricata, Zeek, Elastic, case management) — wersje 2.4.201/2.4.211 w 2026, płatny Pro z Onion AI i MCP Server — patrz sekcja 1 — [Security Onion blog](https://blog.securityonion.net/2026/03)
- **Velociraptor**: open-source platforma DFIR i monitorowania endpointów (zapytania VQL), przejęta przez Rapid7 (2021); wersja **0.77.2** (10 VIII 2026, wg snippetu) — [Rapid7 press release](https://www.rapid7.com/about/press-releases/rapid7-acquires-digital-forensics-and-incident-response-open-source-project-velociraptor); [Dark Reading](https://www.darkreading.com/threat-intelligence/rapid7-acquires-velociraptor-open-source-project/d/d-id/1340789)

### Inferences
- Wazuh 5.0 + Sigma oznacza, że reguły Sigma stają się „lingua franca” detekcji także w darmowych SIEM/XDR — warto pisać detekcje w Sigmie i konwertować.
- Splunk Free nadaje się do nauki SPL/laboratorium, nie do produkcji (brak alertów i auth).

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]**:
- **Elastic Security** — SIEM + endpoint (Elastic Defend) w darmowej licencji Basic (reguły detekcji, timeline); od 2024 Elasticsearch/Kibana dostępne także na AGPLv3 (obok SSPL/ELv2); płatne Elastic Cloud/Enterprise — https://www.elastic.co/security
- **osquery** — SQL-owe odpytywanie stanu systemu (Linux Foundation); Apache-2.0/GPLv2; Win/macOS/Linux — https://osquery.io
- **CrowdSec** — crowdsourcingowy IPS/blokowanie IP (parsowanie logów + bouncery); MIT; darmowy, płatna konsola/blocklisty premium — https://www.crowdsec.net
- **fail2ban** — banowanie IP po wzorcach w logach (SSH itp.); GPLv2; Linux — https://github.com/fail2ban/fail2ban
- **Sigma** — generyczny format reguł detekcji (SigmaHQ), konwersja przez pySigma/sigma-cli; reguły na Detection Rule License (DRL) — https://github.com/SigmaHQ/sigma
- **MISP** — platforma wymiany threat intel (CIRCL); AGPL-3.0; Linux — https://www.misp-project.org
- **TheHive 5 / Cortex** (StrangeBee) — zarządzanie incydentami/sprawami + analizatory observables; TheHive 5 w modelu community (darmowy z ograniczeniami) + płatne plany; Cortex AGPL — https://strangebee.com
- **OpenCTI** (Filigran) — platforma CTI oparta o STIX2; Community Apache-2.0 + płatna Enterprise Edition — https://filigran.io
- **Sysmon** (Microsoft Sysinternals) — szczegółowe logowanie zdarzeń Windows (procesy, sieć, pliki) do Event Log; darmowy; Windows + Sysmon for Linux. Microsoft zapowiedział natywną integrację Sysmon w Windows (zapowiedź ~XI 2025, wdrożenie 2026) — **niezweryfikowane**.
- **KAPE** (Kroll) — szybkie triage/zbieranie artefaktów Windows; darmowy, ale z ograniczeniami licencyjnymi dla użycia komercyjnego/usługowego — warunki niezweryfikowane — https://www.kroll.com/kape
- **Autopsy / The Sleuth Kit** — GUI do analizy obrazów dysków; Apache-2.0 (Autopsy), Win/Linux/macOS — https://www.autopsy.com
- **Volatility 3** — analiza zrzutów pamięci RAM; Volatility Software License; Python 3; w 2025 osiągnął parytet funkcjonalny z Volatility 2 — **niezweryfikowane** — https://github.com/volatilityfoundation/volatility3

---

## 7. Frameworki do autoryzowanych testów penetracyjnych / red team (Metasploit, Sliver, Mythic, Impacket, BloodHound CE, NetExec) — tylko nazwa, cel, licencja

### Takeaway
Metasploit Framework jest darmowy (BSD); Metasploit Pro to produkt z indywidualną wyceną (agregatory szacują ok. **$15 000/rok**). BloodHound CE v8 (VII 2025) wprowadził **OpenGraph** — ścieżki ataku poza AD/Entra ID (GitHub, Snowflake, MSSQL). Wszystkie te narzędzia są „dual-use” i wymagają pisemnej autoryzacji.

### Cited Findings
- **Metasploit Framework** — darmowy, open source na licencji **BSD**, 2 300+ exploitów/payloadów — [ethicalhacking.ai](https://ethicalhacking.ai/pricing/metasploit-framework-pricing)
- **Metasploit Pro** — wycena indywidualna (stan VI 2026), szacunkowo ok. **$15 000/rok**; web UI, automatyzacja, kampanie phishingowe (symulacje), raportowanie; darmowy trial — [CostBench](https://costbench.com/software/bug-bounty-pentest/metasploit-pro/); [ethicalhacking.ai](https://ethicalhacking.ai/pricing/metasploit-framework-pricing) (agregatory; brak oficjalnego cennika)
- **MetasploitMCP** (serwer MCP pozwalający agentom LLM sterować Metasploit) i **AdaptixC2** (framework C2) dodane do Kali 2026.1 — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20261-released-with-8-new-tools-new-backtrack-mode/)
- **BloodHound Community Edition v8** (29 VII 2025): **OpenGraph** — ingest danych z innych systemów (GitHub, Snowflake, Microsoft SQL Server) i wizualizacja ścieżek ataku na tożsamości poza AD i Entra ID; dostępne w CE i Enterprise — [SpecterOps blog](https://specterops.io/blog/2025/07/29/bloodhound-community-edition-v8-launches-with-opengraph/)
- Kali 2026.2 dodał **legba** (wieloprotokołowy tester poświadczeń) i **penelope** (handler powłok) — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates)

### Inferences
- Integracje MCP (MetasploitMCP) przesuwają frameworki ofensywne w stronę sterowania przez agentów AI — zwiększa to wagę kontroli scope/autoryzacji i logowania działań agenta.

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]** (tylko cel + licencja):
- **Sliver** (Bishop Fox) — open-source framework C2 dla red teamów (Go, wieloplatformowy); GPL-3.0 — https://github.com/BishopFox/sliver
- **Mythic** — modularny framework C2 (agenty/profile jako kontenery Docker), autor Cody Thomas/SpecterOps; BSD-3 — https://github.com/its-a-feature/Mythic
- **Impacket** (Fortra, dawniej SecureAuth/Core Security) — biblioteka Python do protokołów sieciowych Windows (SMB, MSRPC, Kerberos); zmodyfikowana Apache 1.1 — https://github.com/fortra/impacket
- **BloodHound CE** — licencja Apache-2.0; BloodHound Enterprise płatny (SpecterOps) — https://github.com/SpecterOps/BloodHound
- **NetExec (nxc)** — następca CrackMapExec, narzędzie do oceny bezpieczeństwa sieci Windows/AD; BSD-2 — https://github.com/Pennyw0rth/NetExec
- **Cobalt Strike** (Fortra, komercyjny C2, ~$3,500+/użytkownik/rok) — dla kontekstu; cena niezweryfikowana.

---

## 8. Audyt haseł i zarządzanie poświadczeniami (Hashcat, John the Ripper, KeePassXC, Bitwarden)

### Takeaway
**Hashcat 7.0.0** (VIII 2025) to największe wydanie od lat: automatyczne wykrywanie typu hasha, Python Bridge, 58 nowych typów hashy (m.in. Argon2, LUKS2, BitLocker-related extractors). Po stronie obrony: KeePassXC (offline, open source) i Bitwarden (chmura, open source, darmowy plan).

### Cited Findings
- **Hashcat 7.0.0**: „Assimilation Bridge” (integracja CPU/FPGA/interpreterów), Python Bridge Plugin (logika w Pythonie bez rekompilacji), automatyczne wykrywanie hash-mode (bez `-m`), Virtual Backend Devices (partycjonowanie GPU), 58 nowych typów hashy aplikacyjnych (m.in. Argon2, MetaMask, Microsoft Online Accounts, SNMPv3, GPG, OpenSSH, LUKS2), 17 generycznych konstrukcji, 20 nowych ekstraktorów hashy (APFS, VirtualBox, BitLocker, portfele krypto); buildy Docker (cross-compile na Windows); >900 tys. linii zmian, 105 kontrybutorów — [Help Net Security](https://www.helpnetsecurity.com/?p=337962); [hashcat forum](https://hashcat.net/forum/thread-13330.html); [Hack The Box blog](https://www.hackthebox.com/blog/hashcat-7-release-top-new-features)
- Kali 2026.2 dodał **hydra-gtk** (GUI dla Hydra) i **legba** — [HackMag](https://hackmag.com/news/kali-linux-2026-2)

### Inferences
- Wsparcie Argon2 w Hashcat 7 pozwala audytorom realnie sprawdzać odporność nowoczesnych schematów; obrona: długie, losowe hasła z menedżera + MFA/passkeys.

### Gaps
Wpisy katalogowe **[niezweryfikowane w tej sesji]**:
- **Hashcat** — licencja MIT; Win/Linux/macOS; GPU (CUDA/OpenCL/HIP/Metal) — https://hashcat.net
- **John the Ripper** (Openwall) — cracker/audytor haseł; core GPLv2 + „jumbo” community; płatne John the Ripper Pro — https://www.openwall.com/john/
- **KeePassXC** — offline menedżer haseł (format KDBX); GPL-2/3; Win/macOS/Linux; darmowy — https://keepassxc.org
- **Bitwarden** — menedżer haseł open source (klienci GPL, serwer AGPL); Free (nielimitowane hasła, synchronizacja), Premium ok. $10/rok, Families ok. $40/rok, plany biznesowe; możliwy self-hosting (Vaultwarden — nieoficjalna implementacja serwera). **Ceny 2026 niezweryfikowane.**

---

## 9. AI dla bezpieczeństwa (2025–2026) i projekty open-source AI security

### Takeaway
W latach 2025–2026 AI weszło do głównego nurtu: agenci wyszukujący i łatający podatności (Google **Big Sleep** i **CodeMender**, OpenAI **Aardvark**, **XBOW**, Anthropic **Claude Code Security / Claude Security**), copiloty SOC (**Microsoft Security Copilot** — od IV–VI 2026 w pakiecie M365 E5), asystenci AI w narzędziach (Wazuh 5.0, Security Onion Onion AI, Binary Ninja Sidekick, shell-gpt/MetasploitMCP w Kali). Do testowania samych modeli LLM dominują open-source **Garak** (NVIDIA), **PyRIT** (Microsoft), **Promptfoo**, **DeepTeam**.

### Cited Findings
- **Google Big Sleep** (DeepMind/Project Zero): wykrył i zgłosił podatność SQLite **CVE-2025-6965** zanim zaobserwowano jej wykorzystanie — opisane jako pierwszy potwierdzony przypadek, gdy agent AI uprzedził realną próbę exploitacji; w VIII 2025 Google podał, że Big Sleep znalazł 20 podatności — [TechCrunch 2025-08-04](https://techcrunch.com/2025/08/04/google-says-its-ai-based-bug-hunter-found-20-security-vulnerabilities/); [Hive Pro](https://hivepro.com/?p=24957)
- **Google DeepMind CodeMender** — agent AI, który nie tylko znajduje, ale i łata podatności — [SecurityWeek](https://www.securityweek.com/google-deepminds-new-ai-agent-finds-and-fixes-vulnerabilities/amp/)
- **OpenAI Aardvark** — „agentowy badacz bezpieczeństwa” na GPT-5: skanuje repozytoria, priorytetyzuje i naprawia podatności, tworzy modele zagrożeń; 92% skuteczności w wykrywaniu znanych i syntetycznych błędów (benchmark wewnętrzny) — [OpenAI](https://openai.com/index/introducing-aardvark); [SC World](https://www.scworld.com/brief/new-openai-aardvark-agent-automates-vulnerability-management)
- **XBOW** — autonomiczna platforma ofensywna z koordynowanymi agentami AI; przypisano jej m.in. krytyczny RCE (CVSS 9.8) w usłudze chmurowej Microsoft (**CVE-2026-21536**) oraz use-after-free w Exim — [dev.to](https://dev.to/moksh/ai-bug-detection-in-2026-from-root-cause-agents-to-autonomous-fixers-o4); [Stingrai AI CVE tracker](https://www.stingrai.io/blog/ai-attributed-cve-tracker-2026-verified-credits)
- **Anthropic Claude Code Security** (II 2026): usługa skanująca kod źródłowy pod kątem podatności i proponująca łatki do przeglądu; wieloetapowa weryfikacja własnych znalezisk w celu ograniczenia false positives; początkowo research preview dla klientów Enterprise/Team (opiekunowie OSS mogli aplikować); zespół z modelem Claude Opus 4.6 znalazł >500 wcześniej nieznanych podatności w projektach open source — [ThaiCERT 2026-02-25](https://www.thaicert.or.th/en/2026/02/25/anthropic-launches-claude-code-security-an-ai-tool-for-detecting-and-remediating-source-code-vulnerabilities/); [Security Affairs](https://securityaffairs.com/?p=188358)
- **Claude Security** — publiczna beta (V 2026) dla klientów Claude Enterprise, na Claude Opus 4.7, dostęp z paska bocznego claude.ai lub claude.ai/security — [Pulse 2.0](https://pulse2.com/anthropic-launches-claude-security-in-public-beta-for-enterprise-customers)
- **Microsoft Security Copilot**: model standalone — Security Compute Units (SCU) **$4/godz.** (nadwyżka $6/godz.); w ramach **Microsoft 365 E5** — **400 SCU/mies. na każde 1 000 licencji E5, maks. 10 000 SCU/mies.**, bez dodatkowych opłat; rollout 20 IV – 30 VI 2026; agenci w Entra, Intune, Purview, Defender — [TrustedTech](https://trustedtechteam.com/blogs/microsoft-365/microsoft-security-copilot-pricing-e5-inclusion); [M365 Message Center MC1261596](https://mc.merill.net/message/MC1261596)
- **Open-source red teaming LLM**: **Garak** (NVIDIA; skaner podatności LLM, ~100 wektorów), **PyRIT** (Microsoft; orkiestracja wieloturowych ataków i testy agentów), **Promptfoo** (pluginy red team, bramka CI/CD dla aplikacji LLM), **DeepTeam** (Confident AI), **AIGoat** (labowe środowisko OWASP LLM Top 10), **CleverHans** (biblioteka adversarial ML, obecnie Uniwersytet w Toronto), **HackAgent** (SDK/CLI do red teamingu agentów AI) — [Obot.ai](https://obot.ai/blog/top-5-open-source-ai-security-tools-in-2026/); [Mindgard](https://mindgard.ai/blog/best-tools-for-red-teaming); [Confident AI](https://www.confident-ai.com/knowledge-base/compare/best-ai-red-teaming-tools-2026)
- **HexStrike AI** — serwer MCP pozwalający agentom LLM sterować 150+ narzędziami bezpieczeństwa przez 12+ agentów — [Strobes](https://strobes.co/blog/open-source-agentic-pentesting-tools/) (uwaga: narzędzie dual-use)
- Kurowana lista narzędzi AI-security (pentest agents, AI SAST, LLM fuzzing, SOC triage, RE) — [awesome-ai-security-tools (GitHub)](https://github.com/scadastrangelove/awesome-ai-security-tools)
- AI wbudowane w narzędzia obronne: **Wazuh 5.0 AI Assistant** — [Wazuh release notes](https://documentation.wazuh.com/current/release-notes/); **Security Onion – Onion AI** (Pro, także lokalny model) — [Notebookcheck](https://www.notebookcheck.org/Security-Onion-2-4-210-basado-en-Oracle-Linux-se-lanza-con-soporte-para-el-modelo-local-de-Onion-AI.1241213.0.html); **Binary Ninja Sidekick** — [Binary Ninja blog](https://binary.ninja/2026/07/28/pricing-changes.html); **shell-gpt** w Kali 2026.2 — [BleepingComputer](https://bleepingcomputer.com/news/linux/kali-linux-20262-released-with-9-new-tools-nethunter-updates)
- Skutki uboczne: wzrost liczby raportów podatności wspieranych AI widoczny np. w Wireshark 4.6.9 — [wireshark.org](https://www.wireshark.org/news/20260923.html); Cloud Security Alliance opisuje „patch debt crisis” wynikający z przyspieszonego wykrywania podatności przez AI — [CSA Labs](https://labs.cloudsecurityalliance.org/research/ai-accelerated-vuln-discovery-systemic-patch-debt-v1-0-csa-s/)

### Inferences
- Rynek dzieli się na: (a) agentów do odkrywania/łatania podatności w kodzie (Big Sleep, CodeMender, Aardvark, Claude Security, XBOW), (b) copiloty SOC (Security Copilot, asystenci w Wazuh/Security Onion), (c) narzędzia do testowania bezpieczeństwa samych modeli/agentów (Garak, PyRIT, Promptfoo, DeepTeam).
- Dla obrońców kluczowy problem 2026 to nie wykrywanie, lecz przepustowość łatania (patch debt).

### Gaps
**[niezweryfikowane w tej sesji]**:
- **PentestGPT** (asystent pentestu na LLM, MIT), **CAI – Cybersecurity AI** (Alias Robotics, framework agentów bezpieczeństwa), **Strix** (open-source agenci AI do testów aplikacji), **Nebula** (Beryllium) — licencje i stan 2026 niezweryfikowane.
- **Meta PurpleLlama / LlamaFirewall / Llama Guard**, **Protect AI LLM Guard / ModelScan**, **Cisco Foundation-sec-8B** (otwarty model LLM do bezpieczeństwa), **Google Sec-Gemini** — istnieją wg wiedzy bazowej, brak weryfikacji wersji/licencji 2026.
- Doniesienia (wrzesień 2025, Check Point) o nadużyciu HexStrike AI przez przestępców do szybkiego wykorzystania podatności Citrix — wiedza bazowa, niezweryfikowane w tej sesji; ilustruje ryzyko dual-use agentów ofensywnych.
- Ceny: Aardvark (private beta — dostępność 2026 nieznana), CodeMender (brak publicznego produktu), XBOW (wycena enterprise), Claude Security (w ramach planu Enterprise) — brak publicznych cenników.
- Funkcje AI w Burp Suite (Burp AI, kredyty) i Caido (AI assistant) — nie zweryfikowano zasad i cen na 2026.
