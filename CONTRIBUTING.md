# Contributing to the CMCDv2 Custom Keys Registry

This repository is an **informal** registry for custom keys used with the [CMCDv2 specification (CTA-5004-B)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html). It is not a formal standard. Keys are added only after review and acceptance by the maintainers (chairs).

## How to propose a new key

1. **Open an issue** using the [Propose a custom key](https://github.com/streaming-video-technology-alliance/common-media-client-data-custom-keys/issues/new?template=propose-custom-key.md) template.  
   Provide: key name (full keyName, e.g. `org.svta-p-n`), keyNameAbbr (abbreviation suffix, e.g. `p-n`), description (field meaning), namespaceDescription, value definition (purpose text), type and unit (string or token; value max 64 characters per CMCD spec), header name ([CTA-5004-B Section 3.1](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html#header-field-definition): CMCD-Session, CMCD-Request, CMCD-Object, or CMCD-Status), example, and use case.

2. **Review.** Maintainers will check:
   - **Naming:** Key format is `<reverseDNS>-<namespaceAbbr>-<fieldAbbr>` (abbreviations alphanumeric only; hyphens separate reverse-DNS prefix, namespace, and field). See [key schema](docs/key-schema.md) for abbreviation rules. Namespace abbreviation must be unique globally; field abbreviation must be unique within the namespace.
   - **Value type:** Custom keys MUST be STRING or TOKEN only; value max 64 characters (per [CMCD spec](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html)).
   - Clarity and no overlap with existing or standard CMCD keys.
   - Consistency with the [key schema](docs/key-schema.md).

3. **Acceptance.** Once a key is accepted, it is added to the registry **via a pull request** that references the proposal issue (e.g. `Closes #12`) — registry changes are not committed directly to `main`. Either:
   - the **proposer** opens the PR, or
   - a **maintainer** opens the PR on the proposer's behalf (common for small edits and follow-up changes).

   The PR adds the key to [keys/registry.json](keys/registry.json), bumps the registry version (see [Versioning](#versioning)), and regenerates [keys/README.md](keys/README.md) with `node scripts/generate-keys-readme.js`. A maintainer merges the PR; merging it closes the issue.

## Key schema and validation

- The key format and allowed characters are defined in [docs/key-schema.md](docs/key-schema.md).
- Every entry in `keys/registry.json` **must** validate against [schemas/registry.schema.json](schemas/registry.schema.json). Run validation (e.g. via a JSON Schema validator) before submitting changes to the registry.

## Editorial changes

Not every change is a new key. For changes that do not add, remove, or rename a key:

- **Registry text changes** — any edit to a key's text in [keys/registry.json](keys/registry.json) (`valueDefinition`, `description`, `namespaceDescription`, or `example`), from typo fixes to rewordings. The registry is the source of truth for what a key means, so **every** such change — however small — bumps the **patch** version (see [Versioning](#versioning)) and regenerates [keys/README.md](keys/README.md). Open a PR directly; no proposal issue is needed, but reference the discussion that motivated the change if one exists. If the change redefines what a key measures or identifies (not just how that is expressed), open an issue for discussion first.
- **Documentation and process changes** (README, CONTRIBUTING, key schema docs, templates, scripts): open a PR directly. No issue and no registry version bump — the version tracks [keys/registry.json](keys/registry.json) only.

As with new keys, a maintainer merges the PR.

## Rules

- Only keys that have been **accepted by the chairs** after review are added.
- Follow the schema and naming rules in [docs/key-schema.md](docs/key-schema.md).

## Versioning

The registry uses [semantic versioning](https://semver.org/) (`major.minor.patch`). The version is stored in the `version` field of [keys/registry.json](keys/registry.json).

- **Patch** (e.g. 1.0.0 -> 1.0.1): description fixes, example updates, typos.
- **Minor** (e.g. 1.0.0 -> 1.1.0): new keys added, keys removed or renamed.
- **Major** (e.g. 1.0.0 -> 2.0.0): breaking changes to the registry schema shape (e.g. property renames, structural changes that break consumers).

The version bump is part of the PR — contributors do not need to bump it themselves; a maintainer will confirm or add it during review. Each logical change gets its own version increment, one per commit, even when several land in one PR (e.g. a description reword bumps patch, then a new key bumps minor); the merged PR lands on the last resulting version. When the version in `keys/registry.json` is updated, the version line in [README.md](README.md) must be updated to match.
