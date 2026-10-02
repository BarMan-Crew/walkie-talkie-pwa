# Legalna nauka cyberbezpieczeństwa: platformy, CTF, kursy, certyfikaty, bug bounty (stan na październik 2026)

> **Method / reliability note (read first):** WebFetch was blocked by the egress proxy for every domain tried (tryhackme.com, offsec.com, help.hackthebox.com, securityblue.team, isc2.org, hackerdna.com, trainingcamp.com, sekurak.pl, ctftime.org, lexlege.pl, api.sejm.gov.pl). GitHub API access to public repos was also not enabled. After about 30 queries the session-wide WebSearch budget (200) ran out. **Every fact below comes from search-result snippets or search-engine summaries, not from full pages.** Many price figures come from third-party aggregator blogs (hackerdna.com, unihackers.com, examcert.app, ethicalhacking.ai). hackerdna.com is itself a competing training platform. Treat prices as "approximate, check the official pricing page before buying". Prices are in USD unless stated otherwise. The report date is 2 Oct 2026.

## Q1. Training / lab platforms: what they teach, level, and price

### Takeaway
You can get from zero to junior level almost entirely on free platforms: PortSwigger Web Security Academy, pwn.college, Root-Me, OverTheWire and picoGym, plus the free tiers of TryHackMe, HTB, LetsDefend and CyberDefenders. Paying makes sense mainly for structured paths. TryHackMe Premium costs about $10–14/mo. HTB Academy Silver Annual costs about $490/yr and includes a CPTS voucher. The TCM Academy All-Access membership is about $29.99/mo.

### Cited Findings
**TryHackMe** (beginner→intermediate, guided browser-based rooms, red and blue)
- Freemium. Premium is about $14/mo monthly or about $10/mo annual ($126/yr). The student price is about $8/mo ($100/yr) with academic email verification. — [hackerdna: TryHackMe Pricing 2026](https://hackerdna.com/blog/tryhackme-pricing)
- A new higher tier, "TryHackMe MAX", reportedly launched in June 2026 at $18.99/mo on the annual plan or $30.73/mo billed monthly. This appears only in a search-engine summary and its source attribution is unclear (possibly [TryHackMe blog: subscriptions compared 2026](https://tryhackme.com/resources/blog/cyber-security-training-subscriptions-compared-cost-features-roi-2026)). **LOW CONFIDENCE, verify.**
- TryHackMe publishes its own comparison, "best free vs paid cybersecurity learning platforms in 2026". — [TryHackMe blog](https://tryhackme.com/resources/blog/best-free-vs-paid-cybersecurity-learning-platforms-in-2026)
- A "HTB Academy vs TryHackMe for beginners 2026" comparison exists (TryHackMe is usually recommended first for absolute beginners). — [SimeonOnSecurity](https://simeononsecurity.com/articles/hackthebox-academy-vs-tryhackme-what-is-best/)

**Hack The Box** (intermediate→advanced. Academy = structured theory+labs, Labs = machines, Sherlocks = DFIR)
- Academy annual (access-based) plans: Silver Annual $490/yr (Tier II modules, **includes CPTS exam voucher**) and Gold Annual $1,260/yr (Tier III, several vouchers). — [hackerdna: HTB Academy Pricing 2026](https://hackerdna.com/blog/hack-the-box-academy); official plan page exists: [HTB Help: Academy Subscription Models](https://help.hackthebox.com/en/articles/13677074-academy-subscriptions) (fetch blocked)
- Academy monthly plans use "cubes": Silver $18/mo (200 cubes), Gold $38/mo (500 cubes), Platinum $68/mo (1,000 cubes). The student plan is $8/mo with academic email and gives access to modules up to Tier II. — [hackerdna](https://hackerdna.com/blog/hack-the-box-academy)
- HTB Labs VIP+ costs $25/mo or $223/yr. — [hackerdna](https://hackerdna.com/blog/hack-the-box-academy?lang=save). Older VIP pricing is not confirmed; **verify on hackthebox.com**.
- HTB Sherlocks are investigation-based DFIR/blue-team scenarios. Some are free, and premium Sherlocks come with VIP/VIP+. At launch 15 were free, and later a split kept about 8 on the free plan. — [HTB blog: Sherlocks](https://www.hackthebox.com/blog/sherlocks); [HTB: blue team labs for DFIR](https://hackthebox.com/hacker/blue-team-labs-for-dfir)

**PortSwigger Web Security Academy** (beginner→advanced, web app security, free)
- Free online training with labs. The "Burp Suite Certified Practitioner" (BSCP) exam costs $99, lasts 4 hours, and must be used within 12 months of purchase. To be ready you should comfortably solve all labs labelled "Practitioner" or lower. The exam needs Burp Suite Professional, quoted at $449 (license price may be dated, verify). — [PortSwigger: certification FAQ](https://portswigger.net/web-security/certification/frequently-asked-questions); [PortSwigger: exam hints](https://portswigger.net/web-security/certification/exam-hints-and-guidance); [TrustFoundry BSCP review](https://trustfoundry.net/blog/burpsuite-certified-practitioner-exam-review)

**pwn.college** (beginner→advanced, Linux, binary exploitation, systems, free)
- Free education platform created at Arizona State University and open worldwide. It is designed to take a "white belt" to "blue belt" level, able to approach simple CTFs and wargames. — [pwn.college](https://pwn.college/); [Small Wars Journal, Mar 2025](https://smallwarsjournal.com/2025/03/20/learn-to-hack-for-free-with-pwn-college-by-arizona-state-university/)

**Root-Me** (beginner→advanced, French non-profit, challenges and CTF-like tasks, free)
- Non-profit with free challenges across web, app-script, cracking/RE, crypto, forensics, network and more. Listed on the EU Digital Skills & Jobs platform. A business offering exists as Root-Me PRO. — [EU Digital Skills & Jobs](https://digital-skills-jobs.europa.eu/en/learning-space/resources/root-me-challenge-your-hacking-skills); [root-me.pro](https://root-me.pro/)

**PentesterLab** (intermediate→advanced, web exploitation and code review)
- PRO costs $199.99 for 1 year (vs $239.88 when paying monthly, i.e. about $19.99/mo). — [PentesterLab PRO](https://pentesterlab.com/pro); [PentesterLab 1 year](https://pentesterlab.com/pro/one_year). An aggregator claims "no free tier". — [ethicalhacking.ai](https://ethicalhacking.ai/pricing/pentesterlab-pricing). This conflicts with PentesterLab historically offering some free exercises; **unverified**.

**TCM Security Academy** (beginner→intermediate, practical pentest courses that feed PJPT/PNPT)
- The All-Access Membership is $29.99/mo (snippet). — [TCM Academy: All-Access](https://academy.tcm-sec.com/p/all-access-pass); TCM announced price increases effective 1 Apr 2024. — [TCM price increases 2024](https://certifications.tcm-sec.com/price-increases-april-2024)

**LetsDefend** (beginner→intermediate, SOC analyst simulation: alerts, SIEM, playbooks)
- Freemium. Paid plans are about $25–40/mo and the free version is limited. — [ethicalhacking.ai: LetsDefend pricing 2026](https://ethicalhacking.ai/pricing/letsdefend-pricing); [FitGap](https://us.fitgap.com/products/letsdefend)

**CyberDefenders** (intermediate, blue-team labs: DFIR, threat hunting, SOC)
- Free and Pro access levels exist. A Pro price was not visible in snippets. An annual plan reportedly gives "2 free months". — [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/); [CyberDefenders blog: Premium Blue Team Labs](https://cyberdefenders.org/blog/blue-team-labs-soc-analysts)

**Blue Team Labs Online (Security Blue Team)**: no price found (see Gaps).

**RangeForce** (beginner→intermediate, cyber range and SOC modules)
- A free Community Edition gives access to 20 core modules (a free preview of the range). — [TechRSeries](https://techrseries.com/?p=69660); [ethicalhacking.ai: RangeForce pricing](https://ethicalhacking.ai/pricing/rangeforce-pricing)

**SANS Cyber Aces** (absolute beginner: OS, networking, system administration basics, free)
- SANS' philanthropic initiative with free, self-paced online courses on cybersecurity fundamentals. — [cyberaces.org/about](https://cyberaces.org/about.html)

**Google Cybersecurity Professional Certificate (Coursera)** (absolute beginner, SOC/analyst fundamentals, Python, SQL, Linux, SIEM)
- 8 courses and about 170 hours, typically about 6 months at about 7 h/week. The Coursera subscription is about $49/mo in the US (regional $39–59), about $294 total over 6 months. Coursera financial aid is available. — [CyberSteps review 2026](https://cybersteps.de/en/?p=15693); [The Interview Guys review 2026](https://blog.theinterviewguys.com/?p=10689); [e-student.org](https://e-student.org/coursera-professional-certificate-google-cybersecurity)

### Inferences
- The cheapest serious combination in 2026 is: free tiers, then TryHackMe Premium (about $126/yr), then HTB Academy (Silver Annual $490 including the CPTS voucher, or the $8/mo student plan). Students should use the student pricing on TryHackMe and HTB.
- Blue-team learners can stay mostly free: Sherlocks free tier, LetsDefend free, CyberDefenders free, RangeForce Community. They can pay later for a BTL1 or HTB CDSA path.

### Gaps
- **OverTheWire** (Bandit, Natas, Leviathan…), **picoCTF / picoGym**, **VulnHub**, **Cisco Networking Academy** free courses (e.g. Intro to Cybersecurity, Networking Basics, Ethical Hacker), **Blue Team Labs Online pricing**, and **CyberDefenders Pro pricing** could not be verified. Background knowledge (unverified this session): OverTheWire and picoGym are free. VulnHub hosts downloadable vulnerable VMs but has had little new content in recent years. Cisco NetAcad offers several free self-paced cybersecurity courses.
- I could not verify the exact current HTB VIP (non-plus) price or whether "VIP+ $25/mo" is current.
- The "TryHackMe MAX" tier (June 2026) needs confirmation on tryhackme.com/pricing.

## Q2. CTFs: calendar, major events, Polish teams, how to start

### Takeaway
CTFtime.org is the central calendar and team ranking. The 2026 DEF CON CTF Qualifier ran 22–24 May 2026. Poland is a CTF powerhouse: Dragon Sector and p4 are both top-ranked teams on CTFtime.

### Cited Findings
- The DEF CON CTF Qualifier 2026 is listed on CTFtime as Fri 22 May 2026 21:00 UTC to Sun 24 May 2026 21:00 UTC. Finals take place at DEF CON in Las Vegas in August 2026. — [CTFtime event 3205](https://ctftime.org/event/3205); [CTFtime 2026 event list](https://ctftime.org/event/list/?year=2026)
- Google CTF 2026 was reported as starting 19 June 2026 (search-summary only, exact source unclear). — [CTFtime 2026 event list](https://ctftime.org/event/list/?year=2026). **LOW CONFIDENCE.**
- Dragon Sector (PL) is a multiple-time DEF CON CTF finalist and "one of the most decorated European teams", with a CTFtime 2026 rating of about 1092. p4 (PL) is rated about 901 and appears in the global top 5. Polish CTF culture leans towards reverse engineering and cryptography. — [hackerdna: Poland rankings](https://hackerdna.com/rankings/poland) (aggregator, ratings change continuously)
- Polish CTF teams had a joint assembly ("pl ctf teams") at 39C3 (Chaos Communication Congress, Dec 2025). — [CCC 2025 hub: pl-ctf-teams](https://events.ccc.de/congress/2025/hub/en/assembly/detail/pl-ctf-teams)
- CONFidence (Kraków) historically hosts a CTF, and Dragon Sector has organized the CONFidence CTF. Inferred from the CTFtime 2018/2019 events that came up in a Dragon Sector search ([ctftime event 649](https://ctftime.org/event/649), [ctftime event 887](https://ctftime.org/event/887)). The exact names were not visible in snippets, **verify**.

### Inferences
- **How to start:** (1) picoCTF/picoGym and OverTheWire Bandit. (2) Join beginner-friendly online CTFs on CTFtime (weight <25). (3) Read write-ups after each event. (4) Join a team, e.g. a local university team or Polish Discord communities. pwn.college is the best free path towards pwn/RE categories.
- CTF play is legal by design: you attack infrastructure the organizers built and authorized for attack. Rules still forbid attacking the scoreboard or infrastructure unless explicitly in scope.

### Gaps
- picoCTF 2026 dates were not found.
- Current (Oct 2026) CTFtime ranks for Dragon Sector and p4 are not verified from a primary source.
- Not verified: whether CERT Polska / NASK still runs the selection CTF for the Polish ECSC (European Cybersecurity Challenge) team in 2026 (search budget exhausted before this query).

## Q3. Certifications: 2026 prices and what they validate

### Takeaway
Typical 2026 path costs: ISC2 CC $199 (the free "1M CC" program reportedly closed 20 May 2026), Security+ about $425–439, eJPT $249 (or $299/yr INE bundle), PNPT $499, HTB CPTS about $210 (or via the $490/yr Academy plan), OSCP+ via Learn One about $2,749/yr, CISSP $749, CEH $950–1,199 voucher, GIAC about $949–999 exam-only (SANS course about $8,780). For junior jobs, practical certificates (PNPT/CPTS/OSCP+, BTL1/CDSA) are cheaper and more hands-on than CEH or GIAC.

### Cited Findings
**Entry level**
- **ISC2 CC (Certified in Cybersecurity)**: the "One Million Certified in Cybersecurity" program gave free training and a free exam. The EU pledge targeted 30,000 people in the EU by 31 Aug 2026. — [EU Digital Skills & Jobs: ISC2 pledge](https://digital-skills-jobs.europa.eu/en/inspiration/pledges/isc2-pledge-certified-cybersecurity). Search summaries state that ISC2 **closed the program to new participants on 20 May 2026**. The exam now costs **$199** plus a **$50 annual maintenance fee (AMF)** after passing. — [Training Camp: ISC2 CC guide 2026](https://trainingcamp.com/articles/isc2-cc-certification-guide-2026-exam-domains-cost-and-what-its-worth/); [ExamCert: Is ISC2 CC worth it 2026](https://www.examcert.app/blog/isc2-cc-worth-it/); official page [isc2.org/1MCC](https://www.isc2.org/1MCC) (fetch blocked). **The closure date comes only from snippets, so verify on isc2.org.**
- **CompTIA Security+ (SY0-701)**: $425 per voucher bought directly according to one source. The "new retail" price is $439, and $474 with a retake bundle, after a 5–7% increase effective June 2025 (previously $394). — [ExamCert: Security+ cost 2026](https://www.examcert.app/blog/comptia-security-plus-exam-cost-2026/); [Total Seminars: CompTIA price change 2026](https://totalsem.com/comptia-exam-price-change-2026/); [course.careers: CompTIA price guide 2026](https://course.careers/certifications/comptia-price). Sources conflict ($425 vs $439). Authorized resellers often sell 10–20% below retail. The voucher covers 1 attempt, 90 min, up to 90 questions (MCQ+PBQ), and 3-year validity.
- **eJPT (INE)**: standalone voucher $249 with 1 free retake. The INE Fundamentals annual plan ($299/yr) includes the PTSv2 path, labs **and** the eJPT voucher. — [hackerdna: eJPT 2026](https://hackerdna.com/blog/ejpt-certification); [INE eJPT page](https://info.ine.com/ejpt/)
- **Google Cybersecurity Certificate**: see Q1, about $49/mo on Coursera.

**Intermediate (practical)**
- **CompTIA CySA+ (CS0-003)**: retail $439 in 2026. Training Camp resells the voucher for $373. — [Training Camp CySA+ voucher](https://trainingcamp.com/training/exam-voucher-comptia-cysa/); [course.careers](https://course.careers/certifications/comptia-price)
- **CompTIA PenTest+ (PT0-003)**: retail $439. — [Total Seminars](https://totalsem.com/comptia-exam-price-change-2026/); [unihackers: PenTest+](https://unihackers.com/de/certifications/pentest-plus)
- **PNPT (TCM Security)**: $499 for voucher plus training (45+ h, 12 months access, 1 free retake). Other options: Professional Pentester Bundle about $1,500 (PJPT, PNPT, PORP, PWPA, PWPP + 24 months training) and Ethical Hacker Bootcamp $2,999 (live). 20% discount for students, educators, military and first responders. The exam is a 5-day hands-on pentest, then 2 days for the report, then a live debrief. It is unproctored. — [hackerdna: PNPT 2026](https://hackerdna.com/blog/pnpt-certification); [TCM: PNPT](https://certifications.tcm-sec.com/pnpt/)
- **HTB CPTS / CWES (formerly CBBH) / CDSA**: exam voucher about $210 each. Silver Annual ($490/yr) includes a CPTS voucher. — [hackerdna: HTB Academy](https://hackerdna.com/blog/hack-the-box-academy?lang=save); HTB lists "six certification exams" tied to Academy role paths. — [HTB Enterprise Help: certifications](https://enterprise-help.hackthebox.com/en/articles/13569965-enterprise-certifications)
- **BTL1 (Security Blue Team)**: from £399 + VAT through QA (UK reseller). It includes 4 months of training, 2 exam attempts and 100 lab hours. Extra resit vouchers cost about £100. — [QA: BTL1](https://qa.com/QACBTL1OL); [SBT discounts help article](https://securityblueteam.helpscoutdocs.com/article/52-discounts). **Polish angle:** Compendium CE (Polish training center) offers "Centri Authorized Training – BTL1". — [compendium.pl](https://www.compendium.pl/training/12177/centri-authorized-training-blue-team-level-1-btl1)
- **BSCP (PortSwigger)**: $99 exam (see Q1).

**Advanced / senior**
- **OSCP / OSCP+ (OffSec PEN-200)**: Learn One is about **$2,749/yr** and includes 2 exam attempts plus extra courses. Since Nov 2024, passing PEN-200 grants **OSCP (lifetime) + OSCP+ (3-year validity**, renewable via OffSec CPE, a recert exam or another OffSec exam). The exam is 23 h 45 min of hacking, then 24 h for the report, with 70/100 points needed to pass. — [unihackers: OSCP](https://unihackers.com/certifications/oscp); [StationX: OSCP exam guide 2026](https://www.stationx.net/?p=2050639); [Startup Defense: OSCP](https://www.startupdefense.io/blog/oscp-certification). The prices of the Course+Cert bundle and Learn Unlimited were not verified.
- **CISSP (ISC2)**: **$749** per attempt (Pearson VUE). Retake waits are 30, then 90, then 180 days. 5 years of experience are required, otherwise you become an Associate of ISC2. — [Destination Certification: CISSP cost 2026](https://destcert.com/resources/cissp-exam-cost/); [ExamCert: CISSP cost 2026](https://www.examcert.app/blog/cissp-exam-cost-2026/)
- **CEH v13 (EC-Council)**: sources conflict. One gives Pearson VUE voucher about $1,199 (about €1,100) and ECC remote-proctored about $950 (about €875). Another lists a direct ECC voucher at $950, Pearson VUE at $1,199 and a "Remote Proctoring Service" at $550. Training: On-Demand $2,199 (includes voucher), Live Online $3,499, eCourseware $850, Unlimited $2,999/yr. Self-study candidates pay a $100 application fee. — [QuickStart: CEH cost](https://quickstart.com/blog/how-much-ceh-exam-cost); [CyberKraft: CEH exam cost](https://cyberkrafttraining.com/ec-council-ceh-exam-cost/); [Learners Ink: CEH v13 2026](https://www.learnersink.com/blog/ceh-v13-exam-guide-2026)
- **GIAC / SANS**: GIAC Practitioner certification attempt $979, retake $879. Self-study exam-only figures range $949–999 (sources conflict). A SANS course is about $8,780 (e.g. SEC530), so course + cert comes to about $9,800. Practice tests cost $399 each, and 2 are included when the attempt is bundled with a course. — [GIAC pricing](https://www.giac.org/certifications/pricing); [netguardia: GIAC worth the $8K?](https://netguardia.com/learning-development/certifications/sans-giac-certifications-which-ones-are-worth-the-8k-price-tag/); [StationX: best GIAC 2026](https://www.stationx.net/?p=2057004)

### Inferences
- Value ranking for a self-funded learner: eJPT ($249) or PJPT, then PNPT ($499) or CPTS ($210 + Academy), then OSCP+ (about $2,749). Security+ is mostly a "HR filter" certificate, still asked for in many job ads and in US government (DoD 8140). CEH and GIAC are expensive and usually employer-funded.
- For PLN budgets, assume roughly 3.6–4.0 PLN/USD (not verified for Oct 2026) and VAT on some purchases.

### Gaps
- No official confirmation (fetch blocked) for: OffSec Learn One exact price and PEN-200 bundle price, CompTIA official price (425 vs 439), CEH voucher variants, and the ISC2 1MCC closure date.
- No Polish-zloty or EU-specific (VAT) prices for CompTIA, ISC2 or OffSec.
- **BTL1 direct price from securityblue.team** (non-reseller) was not visible.

## Q4. Bug bounty and vulnerability disclosure: payouts, authorization, scope

### Takeaway
On the bug bounty platforms (HackerOne, Bugcrowd, Intigriti, YesWeHack) the company defines the scope and rules. You get paid per valid, in-scope, non-duplicate report, from about $100–300 for low severity to $100k+ for critical findings at top programs. Only testing the listed in-scope assets under program rules gives you authorization (safe harbor). Anything else may be a crime (see Q6 for Polish law).

### Cited Findings
- Typical ranges: HackerOne about $500–5,000 for general findings and $100k+ for critical. Bugcrowd about $300–5,000. Intigriti about $300–5,000. YesWeHack about $300–4,000. Low severity starts at about $100. — [guptadeepak: Top 5 bug bounty platforms 2026](https://guptadeepak.com/top-5-bug-bounty-platforms-for-security-researchers-in-2026/); [Training Camp: best bug bounty websites 2026](https://trainingcamp.com/articles/the-best-bug-bounty-websites-in-2026-a-researchers-guide-to-hackerone-bugcrowd-and-beyond/); [CloudSEK: best bug bounty platforms](https://www.cloudsek.com/knowledge-base/best-bug-bounty-platforms)
- Platforms let companies define scope and rules, and give hackers standardized report submission (PoC, details) and secure communication. — [guptadeepak](https://guptadeepak.com/top-5-bug-bounty-platforms-for-security-researchers-in-2026/)
- HackerOne's **Gold Standard Safe Harbor (GSSH)** is "short, broad, easily-understood" language, so researchers need not parse each target's terms before testing in-scope assets. Many companies still have no safe-harbor policy. — [Dark Reading: Safe harbor programs](https://darkreading.com/application-security/safe-harbor-programs-ensuring-the-bounty-isn-t-on-white-hat-hackers-heads)
- **Apple Security Bounty** (announced Oct 2025): top award doubled to **$2M** for exploit chains comparable to mercenary spyware. With bonuses (Lockdown Mode bypass, beta-software bugs) the maximum exceeds **$5M**. Other awards: $100k for a full Gatekeeper bypass, $1M for broad unauthorized iCloud access, $300k for a one-click WebKit sandbox escape, up to $1M for wireless proximity exploits. — [BetaNews, 13 Oct 2025](https://betanews.com/2025/10/13/apple-doubles-its-top-bug-bounty-payout-to-2-million/); [Expert Insights](https://expertinsights.com/news/apples-new-5m-bounty-program)
- **Google VRP** started in 2010. It paid **$11.8M in 2024 to 660 researchers**, and top rewards reach up to about $1M (Titan M chip). **Microsoft**: maximum award cited as $250,000. These come from a search summary with unclear attribution, from the same result set as [Expert Insights](https://expertinsights.com/news/apples-new-5m-bounty-program). **Verify** with bughunters.google.com and microsoft.com/msrc/bounty. Google's 2025 totals were not found.
- PortSwigger's "Bug bounty radar" (Daily Swig, 2022) shows the historical practice of monthly new-program roundups. — [PortSwigger Daily Swig, Dec 2022](https://portswigger.net/daily-swig/bug-bounty-radar-the-latest-bug-bounty-programs-for-december-2022)

### Inferences
- **Authorization rules (practical):** test only assets listed "in scope". Respect "out of scope" items and forbidden techniques (DoS, social engineering, physical access, spam are usually banned). Use your own test accounts. Do not access, keep or exfiltrate other users' data beyond the minimum PoC. Stop and report at once when you reach sensitive data. Never disclose publicly without the program's consent. Without a program or VDP, contact the vendor or CERT Polska rather than "testing" in production.
- For a Polish/EU beginner, Intigriti (Belgium) and YesWeHack (France) are EU-based and pay in EUR. This is background knowledge, not verified this session.
- Bug bounty is a poor first job path: most beginner reports are duplicates or N/A. It works better after the PortSwigger Academy and BSCP level.

### Gaps
- No primary-source payout mechanics found (e.g. HackerOne's platform fee to programs, KYC/tax forms (W-8BEN) for Polish researchers, payout methods such as PayPal or bank transfer).
- Whether any Polish companies or government run public bug bounty or VDP programs in 2026 is not verified. Background: CERT Polska coordinates vulnerability disclosure (CVD) and is a CVE CNA. **Unverified this session.**

## Q5. Books and free reference resources

### Takeaway
OWASP Top 10:2025 (released Nov 2025) is the current web-risk baseline. Free practice targets (OWASP Juice Shop, DVWA) and references (HackTricks, PayloadsAllTheThings, MITRE ATT&CK, NIST CSF 2.0) should be run locally or read, never aimed at third-party systems.

### Cited Findings
- **OWASP Top 10:2025** was released in Nov 2025 at Global AppSec in Washington, D.C., the first update since 2021. The list: A01 Broken Access Control (now includes SSRF), A02 Security Misconfiguration (↑3), A03 Software Supply Chain Failures (new, ↑), A04 Cryptographic Failures, A05 Injection, A06 Insecure Design, A07 Authentication Failures, A08 Software or Data Integrity Failures, A09 Logging & Alerting Failures, A10 Mishandling of Exceptional Conditions (new). — [The Register, 11 Nov 2025](https://www.theregister.com/2025/11/11/new_owasp_top_ten_broken/); [Cyber Security News](https://cybersecuritynews.com/owasp-top-10-2025/); [Reflectiz guide](https://www.reflectiz.com/blog/owasp-top-ten-2025/)

### Inferences
- A sensible reading order: OWASP Top 10:2025, then the PortSwigger Academy topics, then OWASP Juice Shop/DVWA locally in Docker, then HackTricks/PayloadsAllTheThings as cheat-sheets during labs and CTFs.

### Gaps (not verified this session; search budget exhausted, GitHub API not enabled)
- **OWASP Juice Shop** (intentionally vulnerable Node.js app, free, local or Docker) and **DVWA** (PHP/MySQL vulnerable app): current versions not verified.
- **HackTricks** (book.hacktricks.wiki, free pentest wiki) and **PayloadsAllTheThings** (GitHub payload reference): status not verified.
- **MITRE ATT&CK**: latest version number as of Oct 2026 not verified (background: v17 in Apr 2025 and v18 around Oct 2025, so it may be v19 by now).
- **NIST CSF 2.0**: published 26 Feb 2024 (background knowledge, not verified this session).
- **YouTube** (free): John Hammond (CTF, malware), IppSec (HTB walkthroughs), NetworkChuck (beginner, networking), LiveOverflow (binary exploitation, CTF). Channel activity in 2026 not verified.
- Book prices (e.g. "The Web Application Hacker's Handbook", "Hacking: The Art of Exploitation", No Starch titles) not researched.

## Q6. Polish resources, community, and legal framework

### Takeaway
Polish-language learning is strong around **Sekurak** (paid courses and books, e.g. Websecurity Master at 1,950 PLN net per module), plus news and education from Niebezpiecznik and Zaufana Trzecia Strona. CERT Polska handles incident reporting and runs the SECURE conference. **CONFidence 2026** took place 25–26 May 2026 in Kraków. Under the Polish Criminal Code (arts. 267–269b), unauthorized access and related acts are crimes. Art. 269c gives a narrow exemption from punishment for acting solely to secure a system with immediate notification of the operator, and it is **not** a general licence to hack.

### Cited Findings
**Sekurak (sekurak.pl, Securitum)**
- **Websecurity Master**: online live course, 4-hour sessions weekly for 12 weeks, over 50 hours of workshops. You can take the basic module, the advanced module, or both. Price is **1,950 PLN net per module** or **3,500 PLN net for both**. Includes a dedicated training lab, 6 months of recordings, a Discord community, a PL/EN certificate, and a free e-book of the book **"Bezpieczeństwo aplikacji webowych"**. — [Sekurak leaflet (PDF)](https://cdn.sekurak.pl/tt/websecm/ulotka.pdf); [Sekurak op-websecurity leaflet](https://cdn.sekurak.pl/tt/ulotka/op-websecurity.pdf). The leaflet date is not visible, so treat the price as possibly dated.
- Sekurak regularly runs free webinars (e.g. a free AI training mentioned on the sekurak.pl/tag/www page). — [sekurak.pl/tag/www](https://sekurak.pl/tag/www)
- Sekurak courses are also listed in the PARP "Baza Usług Rozwojowych" (BUR), which may allow EU co-funding of training. — [PARP BUR examples](https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=2323169). This is inferred from the search hits; the link between specific BUR entries and Sekurak was not verified.

**Conferences**
- **CONFidence 2026**: 25–26 May 2026, EXPO Kraków. Running for over 20 years with close to 2,000 attendees. Tracks cover offensive and defensive security, technology and leadership. CPE points and a certificate of attendance are available. The CfP deadline was 15 Mar 2026. — [infosec-conferences: CONFidence 2026](https://infosec-conferences.com/event/confidence-2026); [Crossweb: CONFidence 2026](https://crossweb.pl/wydarzenia/confidence-2026/); [confidence-conference.org](https://confidence-conference.org)
- Securing (Kraków security company) is associated with CONFidence. — [LinkedIn: Securing](https://pl.linkedin.com/company/securing). Organizer relationship not verified.

**Polish CTF scene**: see Q2 (Dragon Sector, p4).

**Polish training providers**: Compendium CE offers authorized BTL1 training (see Q3). — [compendium.pl BTL1](https://www.compendium.pl/training/12177/centri-authorized-training-blue-team-level-1-btl1)

**Legal framework (Kodeks karny, Rozdział XXXIII "Przestępstwa przeciwko ochronie informacji")**
- **Art. 267 § 1** covers anyone who without authorization obtains access to information not intended for them, including by breaking or bypassing electronic or other special security. — [lexlege: Rozdział XXXIII](https://lexlege.pl/kk/rozdzial-xxxiii-przestepstwa-przeciwko-ochronie-informacji/211/); [Standardy Prawa](https://standardyprawa.pl/akt/1/art/410)
- **Art. 269c** (added by an amendment published as Dz.U. 2017 poz. 768) says, in essence: a person is not punishable for the offences in art. 267 § 2 or art. 269a if they act **exclusively** to secure a computer system, teleinformatic system or network, or to develop a security method, **immediately notified the system or network operator** about the threats found, and their action **did not violate public or private interest and caused no damage**. (From background knowledge only: the 2017 amendment may also have added a parallel exemption for art. 269b (§ 1a). This is not in the snippets, **verify in ISAP**.) — [lexlege: art. 269c](https://lexlege.pl/kk/art-269c/); [Dz.U. 2017 poz. 768 (Sejm ELI)](https://api.sejm.gov.pl/eli/acts/DU/2017/768/text.html); [Standardy Prawa: komentarz](https://standardyprawa.pl/akt/1/art/410/komentarz-redakcyjny). The text comes from a snippet translation; the exact wording of the §-references (esp. 269b) should be checked in ISAP.
- Polish legal commentary on the cyber-crime provisions exists, e.g. Antyweb on Anna Streżyńska and the Criminal Code. — [Antyweb](https://antyweb.pl/anna-strezynska-kodeks-karny)

### Inferences
- **Practical legal message (for the PL report):** in Poland only these are legal: (a) your own lab (VMs, Docker, Juice Shop, DVWA), (b) platforms that grant permission in their terms (TryHackMe, HTB, PortSwigger, Root-Me, CTFs), (c) a written contract or authorization for a pentest (scope, dates, contact), and (d) bug bounty or VDP within scope. Art. 269c is a narrow "defence" after the fact. It requires an exclusive security purpose, immediate notification and no damage, so it is not a way to scan or hack strangers' systems "for practice". Possessing or creating hacking tools is covered by art. 269b. Learning with tools on your own lab is the normal practice, but the details should be checked with a lawyer.
- Polish-language resources are rich for awareness and news (Sekurak, Niebezpiecznik, ZTS, CERT Polska) and for paid courses (Sekurak). Hands-on labs are almost all in English, so English is effectively required.

### Gaps (search budget exhausted; not verified)
- **CERT Polska** (cert.pl): incident reporting, warning lists, publications, the free "moje.cert.pl" service, its role in SECURE, and any 2026 CTF or ECSC qualification. Not verified.
- **SECURE 2026** (NASK/CERT Polska conference, Warsaw, traditionally in October): dates not verified.
- **Niebezpiecznik** (niebezpiecznik.pl: news, paid trainings for companies and individuals, prices unknown) and **Zaufana Trzecia Strona** (zaufanatrzeciastrona.pl: news, "Weekendowa Lektura" digest): no data collected this session.
- **OWASP Poland chapters** (e.g. Kraków, Warszawa, Poznań…) and meetups: not verified.
- **Sekurak books** ("Wprowadzenie do bezpieczeństwa IT" tom I/II, "Bezpieczeństwo aplikacji webowych"), **Sekurak.Academy** subscription and **Mega Sekurak Hacking Party** prices and dates for 2026: not verified.
- Penalty ranges for arts. 267/268a/269a/269b after recent amendments were not verified. ISAP is the authoritative source.

## Q7. Suggested learning path: zero to job-ready

### Takeaway
A realistic self-study path takes about 12–24 months at 10–15 h/week. The steps are: fundamentals (networking, Linux, Windows, scripting), then guided labs, then a specialization (red or blue), then 1–2 practical certifications plus a portfolio (write-ups, CTF results, GitHub). A budget path can cost under about $1,000 in total.

### Cited Findings
(The path is a synthesis. Each step uses the resources and prices cited above.)
- Fundamentals: SANS Cyber Aces (free) — [cyberaces.org](https://cyberaces.org/about.html); Google Cybersecurity Certificate (about $49/mo, about 6 months) — [CyberSteps](https://cybersteps.de/en/?p=15693); ISC2 CC ($199 + $50 AMF) — [ExamCert](https://www.examcert.app/blog/isc2-cc-worth-it/)
- Guided labs: TryHackMe (about $10–14/mo) — [hackerdna](https://hackerdna.com/blog/tryhackme-pricing); pwn.college (free) — [pwn.college](https://pwn.college/)
- Red track: PortSwigger Academy (free) and BSCP ($99) — [PortSwigger](https://portswigger.net/web-security/certification/frequently-asked-questions); eJPT ($249) — [hackerdna](https://hackerdna.com/blog/ejpt-certification); PNPT ($499) — [TCM](https://certifications.tcm-sec.com/pnpt/); CPTS (about $210, or $490/yr Silver including voucher) — [hackerdna](https://hackerdna.com/blog/hack-the-box-academy); OSCP+ (Learn One about $2,749) — [unihackers](https://unihackers.com/certifications/oscp)
- Blue track: LetsDefend (freemium, $25–40/mo) — [ethicalhacking.ai](https://ethicalhacking.ai/pricing/letsdefend-pricing); HTB Sherlocks — [HTB blog](https://www.hackthebox.com/blog/sherlocks); CyberDefenders — [cyberdefenders.org](https://cyberdefenders.org/blue-team-labs/); BTL1 (about £399 + VAT) — [QA](https://qa.com/QACBTL1OL); HTB CDSA (about $210) — [hackerdna](https://hackerdna.com/blog/hack-the-box-academy?lang=save); CySA+ ($439) — [course.careers](https://course.careers/certifications/comptia-price)
- HR filter: Security+ ($425–439) — [ExamCert](https://www.examcert.app/blog/comptia-security-plus-exam-cost-2026/)

### Inferences
**Proposed path (to synthesize in the PL report):**
1. **Months 0–3, fundamentals (free or cheap):** networking (Cisco NetAcad free courses, unverified), Linux (OverTheWire Bandit, pwn.college "Linux Luminarium"-type modules), Windows basics, Python and Bash. Optionally SANS Cyber Aces and the Google Cybersecurity Certificate. Sit ISC2 CC ($199) only if you need a first line on the CV.
2. **Months 3–6, guided labs:** TryHackMe Pre-Security, then Jr Penetration Tester or SOC Level 1 (Premium about $126/yr). Use PortSwigger Academy Apprentice labs and picoCTF/picoGym. Read OWASP Top 10:2025.
3. **Months 6–9, choose a track:**
   - *Red/pentest:* HTB Academy (student $8/mo or Silver Annual $490 with CPTS voucher), HTB Labs, then **eJPT ($249)**, then **PNPT ($499)** or **CPTS**. Web specialists: PortSwigger Practitioner labs, then **BSCP ($99)**.
   - *Blue/SOC:* LetsDefend, CyberDefenders, HTB Sherlocks, then **BTL1** or **HTB CDSA**, with optional **CySA+**.
4. **Months 9–15, portfolio and community:** CTFs from the CTFtime calendar, public write-ups of *retired* boxes and CTFs (never active-exam material), a home lab (AD lab, SIEM such as Wazuh or ELK, Juice Shop), and meetups (OWASP Poland, CONFidence, SECURE). Optionally careful bug bounty on wide-scope programs.
5. **Job-ready signal:** 1 practical certificate (PNPT/CPTS/BTL1/CDSA), optionally Security+ for HR filters, plus a portfolio. **OSCP+** (about $2,749/yr Learn One) is the next step once employed or nearly so. CISSP ($749) and GIAC (about $9.8k with SANS) are senior or employer-funded steps.
- **Budget variants:** "Minimal" about $400–700 (TryHackMe annual + eJPT or PNPT). "Standard" about $1,000–1,500 (TryHackMe + HTB Silver Annual including CPTS voucher + Security+). "Premium" at least $3,000 (adds OSCP+).

### Gaps
- No primary job-market data for Poland in 2026 (which certificates Polish job ads ask for, junior salaries) was gathered. This was out of scope and the search budget ran out.
- Hour estimates per step are author inference, not sourced.
