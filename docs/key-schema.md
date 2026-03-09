# CMCDv2 Custom Key Schema

This document defines how custom keys for the [CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html) are named and structured in this registry. It aligns with Common Media Library (CML) CMCD practice and ensures keys are unambiguous for parsers and safe for use in headers and query strings.

Per the CMCD specification: custom key names **MUST** carry a hyphenated prefix to avoid namespace collision with future revisions; players **SHOULD** use reverse-DNS syntax for that prefix. Custom keys **MUST** have a value type of **STRING or TOKEN** and a **maximum character count of 64** for the value.

## Key format

**Pattern:** `<reverseDNS>.<namespace>-<field>`

- **reverseDNS:** Authority prefix (e.g. `org.svta`, `com.example`). Uses dots (`.`) to separate segments.
- **namespace:** Single token after the last dot of the reverse-DNS; groups related keys (e.g. `player`, `device`).
- **field:** The specific attribute within that namespace; follows a single hyphen after the namespace.

**Both namespace and field are required.** Namespace-only keys (e.g. `org.svta.player` with no `-<field>`) are not allowed. Every key MUST contain at least one hyphen after the reverse-DNS segment so that a non-empty field follows the namespace.

## Allowed characters

### Namespace

- **Allowed:** Lowercase letters (`a-z`) and digits (`0-9`) only.
- **Not allowed:** Hyphens, dots, or any other special characters (e.g. no `. % & \`).

This keeps the dot (`.`) reserved for the reverse-DNS segment only, so parsers can unambiguously split the key.

### Field

- **Allowed:** Lowercase letters (`a-z`), digits (`0-9`), and hyphens (`-`). Hyphens are used only as word separators (e.g. `episode-number`, `start-trigger`).
- **Not allowed:** Dots or other special characters (e.g. no `. % & \`).

The single hyphen that follows the namespace is always the namespace–field boundary; no character in the field is mistaken for structure.

## Value type and header name

- **valueType:** **STRING or TOKEN** only (per CMCD: custom keys MUST have value type STRING or TOKEN). In this registry we use `string` or `token`; both imply values compliant with RFC 8941 Structured Field Values. Token values do not require double-quote delimiters when transmitted.
- **Maximum value length:** Custom key values **MUST** be at most **64 characters** (per CMCD specification).
- **headerName:** The [header name](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition) (CTA-5004-A Section 3.1) under which the key is sent: `CMCD-Object`, `CMCD-Request`, `CMCD-Session`, or `CMCD-Status`. Keys whose values are invariant over the session use `CMCD-Session`; other headers reflect different variability (Request, Object, Status).

## Examples

| Key                        | Namespace  | Field   |
| -------------------------- | ---------- | ------- |
| `org.svta.player-name`     | player     | name    |
| `org.svta.device-type`     | device     | type    |
| `org.svta.content-genre`   | content    | genre   |
| `org.svta.experiment-cohort` | experiment | cohort  |
| `org.svta.utm-source`      | utm        | source  |

## Registry entry shape

Each key in the registry (e.g. in `keys/registry.json`) is an object with:

- **key** (required): Full key name.
- **namespace** (optional in JSON): Namespace segment; can be derived from `key`.
- **field** (optional in JSON): Field segment; can be derived from `key`.
- **description** (required): Short, clear purpose of the key.
- **valueType** (required): `string` or `token` (CMCD custom keys MUST be STRING or TOKEN; values max 64 characters).
- **headerName** (required): Header name per spec: `CMCD-Object`, `CMCD-Request`, `CMCD-Session`, or `CMCD-Status` (see [spec Section 3.1](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition)).
- **example** (optional): Example value (must be ≤64 characters).
- **added** (required): Date added (YYYY-MM-DD).
- **source** (optional): Link to issue or discussion.

The registry file must validate against `schemas/registry.schema.json`.
