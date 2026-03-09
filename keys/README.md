# Registered custom keys

This page is an overview of all registered custom keys. It is generated from the underlying registry [registry.json](registry.json).

### Accessibility keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.accessibility-audio-description | accessibility | audio-description | Whether audio description is enabled (e.g. true, false). | string | CMCD-Status | false | 2026-03-09 |
| org.svta.accessibility-captions | accessibility | captions | Whether captions/subtitles are enabled (e.g. true, false). | string | CMCD-Status | true | 2026-03-09 |

### Application keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.application-configuration | application | configuration | Application configuration or environment identifier. | string | CMCD-Session | production | 2026-03-09 |
| org.svta.application-domain | application | domain | Domain or origin from which the application is served. | string | CMCD-Session | app.example.com | 2026-03-09 |
| org.svta.application-name | application | name | Application or site name. | string | CMCD-Session | MyStreamingApp | 2026-03-09 |
| org.svta.application-type | application | type | Application type (e.g. web, native, embedded). | string | CMCD-Session | web | 2026-03-09 |
| org.svta.application-version | application | version | Application version. | string | CMCD-Session | 3.0.1 | 2026-03-09 |

### Connection keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.connection-strength | connection | strength | Connection strength or quality indicator. | string | CMCD-Status | good | 2026-03-09 |
| org.svta.connection-type | connection | type | Network connection type (e.g. wifi, mobile, fixed, ethernet). | string | CMCD-Status | wifi | 2026-03-09 |

### Content keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.content-age-rating | content | age-rating | Age classification of content (e.g. 12+, 18+). | string | CMCD-Session | 12+ | 2026-03-09 |
| org.svta.content-episode-number | content | episode-number | Episode number within a season (for episodic content). | string | CMCD-Session | 3 | 2026-03-09 |
| org.svta.content-genre | content | genre | Content genre or category (e.g. movie, news, sports). | string | CMCD-Session | movie | 2026-03-09 |
| org.svta.content-language | content | language | Content language code (e.g. en, de). | string | CMCD-Session | en | 2026-03-09 |
| org.svta.content-provider | content | provider | Content provider, studio, or brand name. | string | CMCD-Session | StudioX | 2026-03-09 |
| org.svta.content-season-number | content | season-number | Season number (for episodic content). | string | CMCD-Session | 1 | 2026-03-09 |
| org.svta.content-title | content | title | Content title or program name (e.g. for analytics). | string | CMCD-Session | Sample Show S01E01 | 2026-03-09 |

### Device keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.device-display-type | device | display-type | Display panel technology (e.g. LCD, OLED, MicroLED, Mini-LED). | string | CMCD-Session | OLED | 2026-03-09 |
| org.svta.device-model | device | model | Device model name or identifier. | string | CMCD-Session | iPhone14,2 | 2026-03-09 |
| org.svta.device-operating-system-name | device | operating-system-name | Operating system name (e.g. iOS, Android, Windows). | string | CMCD-Session | iOS | 2026-03-09 |
| org.svta.device-operating-system-version | device | operating-system-version | Operating system version. | string | CMCD-Session | 17.2 | 2026-03-09 |
| org.svta.device-screen-size | device | screen-size | Screen resolution or size (e.g. widthxheight in pixels). | string | CMCD-Session | 1920x1080 | 2026-03-09 |
| org.svta.device-type | device | type | Device category (e.g. mobile, tv, desktop). | string | CMCD-Session | mobile | 2026-03-09 |

### Experiment keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.experiment-cohort | experiment | cohort | Cohort or variant for this session (e.g. control, treatment-a). | string | CMCD-Session | control | 2026-03-09 |
| org.svta.experiment-id | experiment | id | Identifier of the experiment (e.g. feature flag or A/B test id). | string | CMCD-Session | exp_player_ui_2024 | 2026-03-09 |
| org.svta.experiment-type | experiment | type | Type of experiment (e.g. ab, mvt, feature-flag, rollout). | string | CMCD-Session | ab | 2026-03-09 |

### Player keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.player-autoplay | player | autoplay | Whether playback started via autoplay (string, e.g. true or false). | string | CMCD-Session | false | 2026-03-09 |
| org.svta.player-configuration | player | configuration | Player or client configuration identifier or profile name. | string | CMCD-Session | production | 2026-03-09 |
| org.svta.player-name | player | name | Name or identifier of the player/client application. | string | CMCD-Session | my-web-player | 2026-03-09 |
| org.svta.player-start-trigger | player | start-trigger | How playback was started (e.g. user-click, autoplay, deep-link). | string | CMCD-Session | user-click | 2026-03-09 |
| org.svta.player-version | player | version | Player or client application version. | string | CMCD-Session | 2.1.0 | 2026-03-09 |

### User keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.user-id | user | id | Anonymous or hashed user/session identifier (avoid PII). | string | CMCD-Session | usr_abc123 | 2026-03-09 |

### Utm keys

| Key | Namespace | Field | Description | Value type | Header name | Example | Added |
| --- | --- | --- | --- | --- | --- | --- | --- |
| org.svta.utm-campaign | utm | campaign | UTM campaign parameter for attribution. | string | CMCD-Session | summer_promo | 2026-03-09 |
| org.svta.utm-content | utm | content | UTM content parameter for attribution. | string | CMCD-Session | banner_a | 2026-03-09 |
| org.svta.utm-medium | utm | medium | UTM medium parameter for attribution (e.g. email, cpc). | string | CMCD-Session | email | 2026-03-09 |
| org.svta.utm-source | utm | source | UTM source parameter for attribution (e.g. newsletter, google). | string | CMCD-Session | newsletter | 2026-03-09 |

---

To propose a new key, see [CONTRIBUTING.md](../CONTRIBUTING.md). Key format and rules: [docs/key-schema.md](../docs/key-schema.md).
