# Common Media Client Data: Custom Keys Registry

A shared, informal registry of **custom keys** for the [CMCDv2](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html) specification (CTA-5004-A). If you’re using CMCD in any player environment and want to use additional information in a well-defined manner, this repo gives you a consistent naming scheme and a curated list of keys you can use and contribute to.

---

## What’s in here

- **A clear key schema** – How to name custom keys (short, abbreviated names to keep payloads small), what characters are allowed, and how they map to CMCD headers. Everything is documented in [docs/key-schema.md](docs/key-schema.md).
- **A curated registry** – A list of registered keys with descriptions, value types, and examples. You can browse it in a [human-friendly table](keys/README.md) or consume it as [JSON](keys/registry.json) for tooling.
- **A simple contribution process** – Propose a new key via a GitHub issue; after review, maintainers add it to the registry so others can use it too.

---

## Quick start

**Just want to see what keys exist?**  
Open [keys/README.md](keys/README.md) for a readable table of all registered keys, with examples in CMCD format.

**Need the data in code or automation?**  
Use [keys/registry.json](keys/registry.json): same list, machine-readable.

**Building with the Common Media Library?**  
We have a small [integration example](examples/common-media-library/) showing how to send these custom keys with [@svta/common-media-library](https://github.com/streaming-video-technology-alliance/common-media-library) (CML).

---

## Proposing a new key

Have an idea for a key that would help the community? Open a GitHub issue using the **[“Propose a custom key”](.github/ISSUE_TEMPLATE/propose-custom-key.md)** template. Describe the key, its purpose, and an example value. After review, accepted keys are added to the registry. The full process and rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Reference and tooling

- **[CMCDv1 specification (CTA-5004)](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf)** – Common Media Client Data specification (version 1).
- **[CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html)** – Common Media Client Data specification (version 2).
- **[CTA-WAVE (discussion / feedback)](https://github.com/cta-wave/common-media-client-data)** – Where the spec is discussed and evolved.
- **[Common Media Library](https://github.com/streaming-video-technology-alliance/common-media-library)** – [GitHub](https://github.com/streaming-video-technology-alliance/common-media-library) · [npm](https://www.npmjs.com/package/@svta/common-media-library)
- **Registry (JSON):** [keys/registry.json](keys/registry.json)  
- **Registry (generated table):** [keys/README.md](keys/README.md). Run `node scripts/generate-keys-readme.js` from the repo root to regenerate after editing the JSON.
- **Schema:** [schemas/registry.schema.json](schemas/registry.schema.json), for validation.
- **Key format and rules:** [docs/key-schema.md](docs/key-schema.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT. See [LICENSE](LICENSE).
