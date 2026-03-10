# Using registry custom keys with Common Media Library (CML)

This example shows how to send **registered custom keys** from this repo’s registry ([keys/registry.json](../../keys/registry.json); human-readable list: [keys/README.md](../../keys/README.md)) using [@svta/common-media-library](https://www.npmjs.com/package/@svta/common-media-library) and its CMCD helpers.

## Prerequisites

```bash
npm install @svta/common-media-library
```

## Registry keys used

The example uses these keys from the registry (see [key schema](../../docs/key-schema.md)). Keys use abbreviations (Key name); Description is the human-readable field meaning:

| Key name          | Description (field) | Example value   |
| ----------------- | ------------------- | --------------- |
| `org.svta.p-n`    | name (player)       | `my-web-player` |
| `org.svta.d-t`    | type (device)       | `mobile`        |
| `org.svta.co-g`   | genre (content)     | `movie`         |
| `org.svta.e-c`    | cohort (experiment) | `control`       |
| `org.svta.um-s`   | source (utm)        | `newsletter`    |

## Building a CMCD payload with custom keys

CML accepts custom keys on the CMCD payload object. Use the exact key names from the registry (bracket notation in JavaScript for keys containing hyphens):

```javascript
import { appendCmcdQuery } from '@svta/common-media-library/cmcd/appendCmcdQuery';
import { CmcdObjectType } from '@svta/common-media-library/cmcd/CmcdObjectType';

const cmcd = {
  // Standard CMCD keys
  sid: '4f2867f2-b0fd-4db7-a3e0-cea7dff44cfb',
  cid: 'cc002fc3-d9e1-418d-9a5f-3d0eac601882',
  d: 324.69,
  ot: CmcdObjectType.MANIFEST,

  // Registry custom keys (abbreviated key names from keys/registry.json)
  ['org.svta.p-n']: 'my-web-player',
  ['org.svta.d-t']: 'mobile',
  ['org.svta.co-g']: 'movie',
  ['org.svta.e-c']: 'control',
  ['org.svta.um-s']: 'newsletter',
};

const url = 'https://example.com/playlist.m3u8';
const urlWithCmcd = appendCmcdQuery(url, cmcd);
console.log(urlWithCmcd);
// CMCD query string will include the custom keys in the same way as standard keys
```

## References

- [CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html) – Common Media Client Data definition
- [keys/registry.json](../../keys/registry.json) – full list of registered keys; [keys/README.md](../../keys/README.md) – human-readable list
- [docs/key-schema.md](../../docs/key-schema.md) – key format and allowed characters
- [CML npm package](https://www.npmjs.com/package/@svta/common-media-library) – API and usage
