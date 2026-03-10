# Registered custom keys

This page is an overview of all registered custom keys. It is generated from the underlying registry [registry.json](registry.json).

### Accessibility keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.a-ad | accessibility | audio-description | Whether audio description is enabled. Possible values: true / false. | string | CMCD-Status | org.svta.a-ad="false" | 2026-03-09 |
| org.svta.a-c | accessibility | captions | Whether captions/subtitles are enabled. Possible values: true / false. | string | CMCD-Status | org.svta.a-c="true" | 2026-03-09 |

### Application keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.ap-c | application | configuration | Application configuration or environment identifier. | string | CMCD-Session | org.svta.ap-c="production" | 2026-03-09 |
| org.svta.ap-d | application | domain | Domain or origin from which the application is served. | string | CMCD-Session | org.svta.ap-d="app.example.com" | 2026-03-09 |
| org.svta.ap-n | application | name | Application or site name. | string | CMCD-Session | org.svta.ap-n="MyStreamingApp" | 2026-03-09 |
| org.svta.ap-t | application | type | Application type (e.g. web, native, embedded). | string | CMCD-Session | org.svta.ap-t="web" | 2026-03-09 |
| org.svta.ap-v | application | version | Application version. | string | CMCD-Session | org.svta.ap-v="3.0.1" | 2026-03-09 |

### Connection keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.c-s | connection | strength | Connection strength or quality indicator. | string | CMCD-Status | org.svta.c-s="good" | 2026-03-09 |
| org.svta.c-t | connection | type | Network connection type (e.g. wifi, mobile, fixed, ethernet). | string | CMCD-Status | org.svta.c-t="wifi" | 2026-03-09 |

### Content keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.co-ar | content | age-rating | Age classification of content (e.g. 12+, 18+). | string | CMCD-Session | org.svta.co-ar="12+" | 2026-03-09 |
| org.svta.co-en | content | episode-number | Episode number within a season (for episodic content). | string | CMCD-Session | org.svta.co-en="3" | 2026-03-09 |
| org.svta.co-g | content | genre | Content genre or category (e.g. movie, news, sports). | string | CMCD-Session | org.svta.co-g="movie" | 2026-03-09 |
| org.svta.co-l | content | language | Content language code (e.g. en, de). | string | CMCD-Session | org.svta.co-l="en" | 2026-03-09 |
| org.svta.co-p | content | provider | Content provider, studio, or brand name. | string | CMCD-Session | org.svta.co-p="StudioX" | 2026-03-09 |
| org.svta.co-sn | content | season-number | Season number (for episodic content). | string | CMCD-Session | org.svta.co-sn="1" | 2026-03-09 |
| org.svta.co-t | content | title | Content title or program name (e.g. for analytics). | string | CMCD-Session | org.svta.co-t="Sample Show S01E01" | 2026-03-09 |

### Device keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.d-dt | device | display-type | Display panel technology (e.g. LCD, OLED, MicroLED, Mini-LED). | string | CMCD-Session | org.svta.d-dt="OLED" | 2026-03-09 |
| org.svta.d-m | device | model | Device model name or identifier. | string | CMCD-Session | org.svta.d-m="iPhone14,2" | 2026-03-09 |
| org.svta.d-osn | device | operating-system-name | Operating system name (e.g. iOS, Android, Windows). | string | CMCD-Session | org.svta.d-osn="iOS" | 2026-03-09 |
| org.svta.d-osv | device | operating-system-version | Operating system version. | string | CMCD-Session | org.svta.d-osv="17.2" | 2026-03-09 |
| org.svta.d-ss | device | screen-size | Screen resolution or size (e.g. widthxheight in pixels). | string | CMCD-Session | org.svta.d-ss="1920x1080" | 2026-03-09 |
| org.svta.d-t | device | type | Device category (e.g. mobile, tv, desktop). | string | CMCD-Session | org.svta.d-t="mobile" | 2026-03-09 |

### Experiment keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.e-c | experiment | cohort | Cohort or variant for this session (e.g. control, treatment-a). | string | CMCD-Session | org.svta.e-c="control" | 2026-03-09 |
| org.svta.e-i | experiment | id | Identifier of the experiment (e.g. feature flag or A/B test id). | string | CMCD-Session | org.svta.e-i="exp_player_ui_2024" | 2026-03-09 |
| org.svta.e-t | experiment | type | Type of experiment (e.g. ab, mvt, feature-flag, rollout). | string | CMCD-Session | org.svta.e-t="ab" | 2026-03-09 |

### Player keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.p-a | player | autoplay | Whether playback started via autoplay. Possible values: true / false. | string | CMCD-Session | org.svta.p-a="false" | 2026-03-09 |
| org.svta.p-c | player | configuration | Player or client configuration identifier or profile name. | string | CMCD-Session | org.svta.p-c="production" | 2026-03-09 |
| org.svta.p-n | player | name | Name or identifier of the player/client application. | string | CMCD-Session | org.svta.p-n="my-web-player" | 2026-03-09 |
| org.svta.p-st | player | start-trigger | How playback was started (e.g. user-click, autoplay, deep-link). | string | CMCD-Session | org.svta.p-st="user-click" | 2026-03-09 |
| org.svta.p-v | player | version | Player or client application version. | string | CMCD-Session | org.svta.p-v="2.1.0" | 2026-03-09 |

### User keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.u-i | user | id | Anonymous or hashed user/session identifier (avoid PII). | string | CMCD-Session | org.svta.u-i="usr_abc123" | 2026-03-09 |

### Utm keys

| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.um-c | utm | campaign | UTM campaign parameter for attribution. | string | CMCD-Session | org.svta.um-c="summer_promo" | 2026-03-09 |
| org.svta.um-co | utm | content | UTM content parameter for attribution. | string | CMCD-Session | org.svta.um-co="banner_a" | 2026-03-09 |
| org.svta.um-m | utm | medium | UTM medium parameter for attribution (e.g. email, cpc). | string | CMCD-Session | org.svta.um-m="email" | 2026-03-09 |
| org.svta.um-s | utm | source | UTM source parameter for attribution (e.g. newsletter, google). | string | CMCD-Session | org.svta.um-s="newsletter" | 2026-03-09 |

---

To propose a new key, see [CONTRIBUTING.md](../CONTRIBUTING.md). Key format and rules: [docs/key-schema.md](../docs/key-schema.md).
