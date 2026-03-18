# CMCDv2 Custom Key Schema

This document defines how custom keys for the [CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html) are named and structured in this registry. It aligns with the CMCD spec (abbreviated keys, minimal payload) and with Common Media Library (CML) CMCD practice.

Per the CMCD specification: custom key names **MUST** carry a hyphenated prefix to avoid namespace collision; players **SHOULD** use reverse-DNS syntax. Custom keys **MUST** have a value type of **STRING or TOKEN** and a **maximum character count of 64** for the value. **This registry is the source of truth** for the meaning of each key (like the CMCD spec for reserved keys).

## Key format

**Pattern:** `<reverseDNS>-<namespaceAbbr>-<fieldAbbr>`

- **reverseDNS:** Authority prefix (e.g. `org.svta`, `com.example`). Uses dots (`.`) to separate internal segments. A **hyphen** joins the prefix to the key suffix (as required by the CMCD spec's "hyphenated prefix" rule).
- **namespaceAbbr:** Abbreviated namespace (alphanumeric only). Unique across the registry.
- **fieldAbbr:** Abbreviated field (alphanumeric only). Unique **within the namespace**.
- The hyphens in the suffix separate reverse-DNS from namespace, and namespace from field; no hyphens inside either abbreviation.

**Example:** `org.svta-a-ad` (accessibility: audio-description), `org.svta-p-n` (player: name).

## Abbreviation rules

- **As short as possible:** Start with one character; use more only when needed for uniqueness.
- **Multi-word field** (e.g. `audio-description`): Use the **first character of each word** → `ad`. Single-word (e.g. `captions`) → first character → `c`.
- **Uniqueness:** Only within the **namespace**. If a field abbreviation already exists in that namespace, extend using the **second character of the first word**, then the third, and so on, until there is no collision.
- **Namespace abbreviations:** As short as possible (1 character first). If collision (e.g. accessibility and application both → `a`), use a second character for one (e.g. application → `ap`).

## Allowed characters

- **Namespace and field abbreviations:** Lowercase letters (`a-z`) and digits (`0-9`) only. No hyphens inside an abbreviation; hyphens only appear as separators between the reverse-DNS prefix, the namespace abbreviation, and the field abbreviation.

## Value type and header name

- **typeAndUnit** (registry): **STRING or TOKEN** only; in the registry we use `string` or `token`. Both imply values compliant with RFC 8941 Structured Field Values.
- **Maximum value length:** Custom key values **MUST** be at most **64 characters** (per CMCD specification).
- **headerName:** The [header name](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition) (CTA-5004-A Section 3.1) under which the key is sent: `CMCD-Object`, `CMCD-Request`, `CMCD-Session`, or `CMCD-Status`.

## Examples

| Key name (keyName)   | Namespace (description) | Field (description) |
| -------------------- | ---------------------- | ------------------- |
| `org.svta-p-n`       | player                 | name                |
| `org.svta-d-t`       | device                 | type                |
| `org.svta-co-g`      | content                | genre               |
| `org.svta-e-c`       | experiment             | cohort              |
| `org.svta-um-s`      | utm                    | source              |

## Registry entry shape

Each key in the registry (e.g. in `keys/registry.json`) is an object. Property names align with [CMCD spec Table 1](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition) (lowercase-first camelCase in JSON):

- **keyName** (required): Full key for transmission (Key Name per CMCD spec), e.g. `org.svta-a-ad`.
- **keyNameAbbr** (required): Abbreviation suffix only, e.g. `a-ad` (namespaceAbbr-fieldAbbr).
- **description** (required): Human-readable field meaning (Description per CMCD spec), e.g. `audio-description`.
- **namespaceDescription** (required): Human-readable namespace, e.g. `accessibility`.
- **valueDefinition** (required): Short purpose/definition of the key (Value definition per CMCD spec).
- **typeAndUnit** (required): `string` or `token` (Type & Unit per CMCD spec). Values max 64 characters.
- **headerName** (required): Header name per spec: `CMCD-Object`, `CMCD-Request`, `CMCD-Session`, or `CMCD-Status` (see [spec Section 3.1](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition)).
- **example** (optional): Example value (must be ≤64 characters).
- **added** (required): Date added (YYYY-MM-DD).
- **source** (optional): Link to issue or discussion.

The registry file must validate against `schemas/registry.schema.json`. The registry is a JSON object with a `version` (semver) and a `keys` array.
