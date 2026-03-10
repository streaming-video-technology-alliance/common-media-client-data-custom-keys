# Contributing to the CMCDv2 Custom Keys Registry

This repository is an **informal** registry for custom keys used with the [CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html). It is not a formal standard. Keys are added only after review and acceptance by the maintainers (chairs).

## How to propose a new key

1. **Open an issue** using the [Propose a custom key](.github/ISSUE_TEMPLATE/propose-custom-key.md) template.  
   Provide: key name (full keyName, e.g. `org.svta.p-n`), keyNameAbbr (abbreviation suffix, e.g. `p-n`), description (field meaning), namespaceDescription, value definition (purpose text), type and unit (string or token; value max 64 characters per CMCD spec), header name ([CTA-5004-A Section 3.1](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition): CMCD-Session, CMCD-Request, CMCD-Object, or CMCD-Status), example, and use case.

2. **Review.** Maintainers will check:
   - **Naming:** Key format is `<reverseDNS>.<namespaceAbbr>-<fieldAbbr>` (abbreviations alphanumeric only; one hyphen between namespace and field). See [key schema](docs/key-schema.md) for abbreviation rules. Namespace abbreviation must be unique globally; field abbreviation must be unique within the namespace.
   - **Value type:** Custom keys MUST be STRING or TOKEN only; value max 64 characters (per [CMCD spec](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html)).
   - Clarity and no overlap with existing or standard CMCD keys.
   - Consistency with the [key schema](docs/key-schema.md).

3. **Acceptance.** Once accepted, a maintainer adds the key to [keys/registry.json](keys/registry.json), runs `node scripts/generate-keys-readme.js` to regenerate [keys/README.md](keys/README.md), and closes the issue. You may be asked to open a PR for the edit; the issue number will be referenced.

## Key schema and validation

- The key format and allowed characters are defined in [docs/key-schema.md](docs/key-schema.md).
- Every entry in `keys/registry.json` **must** validate against [schemas/registry.schema.json](schemas/registry.schema.json). Run validation (e.g. via a JSON Schema validator) before submitting changes to the registry.

## Rules

- Only keys that have been **accepted by the chairs** after review are added.
- Follow the schema and naming rules in [docs/key-schema.md](docs/key-schema.md).
