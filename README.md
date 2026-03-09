# Common Media Client Data – Custom Keys Registry

Informal registry for custom keys for the **CMCDv2** specification (CTA-5004-A), aligned with the [Common Media Library (CML)](https://github.com/streaming-video-technology-alliance/common-media-library) CMCD integration.

## Purpose

This repository:

- Proposes a **consistent schema** for custom CMCD keys (naming, allowed characters, structure).
- Maintains a **curated list** of registered keys in a machine-readable format.
- Describes **how to propose new keys** (open an issue, chairs review, then the key is added to the repo).

## Quick start

- **Use the keys:** See [keys/README.md](keys/README.md) for a human-readable list of registered custom keys, or [keys/registry.json](keys/registry.json) for the machine-readable registry.
- **Integration example:** See [examples/common-media-library/](examples/common-media-library/) for using these keys with **@svta/common-media-library** (CML).

## Links

- **CMCDv2 specification (CTA-5004-A):** [Common Media Client Data](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html)
- **CTA-WAVE (discussion/feedback):** [common-media-client-data](https://github.com/cta-wave/common-media-client-data)
- **Common Media Library:** [GitHub](https://github.com/streaming-video-technology-alliance/common-media-library) · [npm](https://www.npmjs.com/package/@svta/common-media-library)

## Contributing

To propose a new custom key, open a GitHub issue using the **["Propose a custom key"](.github/ISSUE_TEMPLATE/propose-custom-key.md)** template. After review by the maintainers, accepted keys are added to the registry. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full process and key schema rules.

## For developers and automation

- **Registry (machine-readable):** [keys/registry.json](keys/registry.json)
- **Registry (human-readable):** [keys/README.md](keys/README.md) – generated from the JSON; run `node scripts/generate-keys-readme.js` to regenerate.
- **Schema (validation):** [schemas/registry.schema.json](schemas/registry.schema.json)
- **Key format and how to propose keys:** [docs/key-schema.md](docs/key-schema.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT – see [LICENSE](LICENSE).
