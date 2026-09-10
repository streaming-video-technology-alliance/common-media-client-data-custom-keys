# Using registry custom keys with Common Media Library (CML)

This example shows how to send **registered custom keys** from this repo’s registry ([keys/registry.json](../../keys/registry.json); human-readable list: [keys/README.md](../../keys/README.md)) using [@svta/cml-cmcd](https://www.npmjs.com/package/@svta/cml-cmcd), the CMCD package of the [Common Media Library](https://github.com/streaming-video-technology-alliance/common-media-library) (CML).

## Prerequisites

```bash
npm install @svta/cml-cmcd
```

CML is published as per-feature packages. `@svta/cml-cmcd` supersedes the CMCD helpers previously shipped in the monolithic `@svta/common-media-library` package.

## Registry keys used

The example uses these keys from the registry (see [key schema](../../docs/key-schema.md)). Keys use abbreviations (Key name); Description is the human-readable field meaning:

| Key name          | Description (field) | Example value   |
| ----------------- | ------------------- | --------------- |
| `org.svta-p-n`    | name (player)       | `my-web-player` |
| `org.svta-d-t`    | type (device)       | `mobile`        |
| `org.svta-co-g`   | genre (content)     | `movie`         |
| `org.svta-e-c`    | cohort (experiment) | `control`       |
| `org.svta-um-s`   | source (utm)        | `newsletter`    |

## Building a CMCD payload with custom keys

The CMCD payload object accepts registry custom keys alongside the standard keys. Use the exact key names from the registry, quoted, since they contain dots and hyphens:

```javascript
import { appendCmcdQuery, CmcdObjectType } from '@svta/cml-cmcd';

const cmcd = {
  // Standard CMCD keys
  sid: '4f2867f2-b0fd-4db7-a3e0-cea7dff44cfb',
  cid: 'cc002fc3-d9e1-418d-9a5f-3d0eac601882',
  ot: CmcdObjectType.MANIFEST,

  // Registry custom keys (key names from keys/registry.json)
  'org.svta-p-n': 'my-web-player',
  'org.svta-d-t': 'mobile',
  'org.svta-co-g': 'movie',
  'org.svta-e-c': 'control',
  'org.svta-um-s': 'newsletter',
};

const url = 'https://example.com/playlist.m3u8';
const urlWithCmcd = appendCmcdQuery(url, cmcd);
console.log(urlWithCmcd);
// https://example.com/playlist.m3u8?CMCD=cid%3D%22cc002fc3-...%22%2Corg.svta-co-g%3D%22movie%22%2C...%2Cv%3D2
```

Decoded, the `CMCD` query value is:

```text
cid="cc002fc3-d9e1-418d-9a5f-3d0eac601882",org.svta-co-g="movie",org.svta-d-t="mobile",org.svta-e-c="control",org.svta-p-n="my-web-player",org.svta-um-s="newsletter",ot=m,sid="4f2867f2-b0fd-4db7-a3e0-cea7dff44cfb",v=2
```

Custom keys are encoded and sorted exactly like the standard keys. The library encodes CMCDv2 by default (hence the trailing `v=2`), which is the version this registry targets. Keys that do not follow the CMCD custom-key rules (see [docs/key-schema.md](../../docs/key-schema.md)) are dropped during encoding; every key in this registry passes the package’s `isCmcdCustomKey` check.

## References

- [CMCDv2 specification (CTA-5004-B)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-b.html) – Common Media Client Data definition
- [keys/registry.json](../../keys/registry.json) – full list of registered keys; [keys/README.md](../../keys/README.md) – human-readable list
- [docs/key-schema.md](../../docs/key-schema.md) – key format and allowed characters
- [@svta/cml-cmcd on npm](https://www.npmjs.com/package/@svta/cml-cmcd) – package README and API; source in [libs/cmcd](https://github.com/streaming-video-technology-alliance/common-media-library/tree/main/libs/cmcd) of the CML repo
