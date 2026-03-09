# Using registry custom keys with Common Media Library (CML)

This example shows how to send **registered custom keys** from this repo’s registry ([keys/registry.json](../../keys/registry.json); human-readable list: [keys/README.md](../../keys/README.md)) using [@svta/common-media-library](https://www.npmjs.com/package/@svta/common-media-library) and its CMCD helpers.

## Prerequisites

```bash
npm install @svta/common-media-library
```

## Registry keys used

The example uses these keys from the registry (see [key schema](../../docs/key-schema.md)):

| Key                         | Description           | Example value   |
| --------------------------- | --------------------- | --------------- |
| `org.svta.player-name`      | Player/client name    | `my-web-player` |
| `org.svta.device-type`      | Device category       | `mobile`        |
| `org.svta.content-genre`    | Content genre         | `movie`         |
| `org.svta.experiment-cohort`| Experiment cohort     | `control`       |
| `org.svta.utm-source`       | UTM source (attribution) | `newsletter`  |

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

  // Registry custom keys (from keys/registry.json)
  ['org.svta.player-name']: 'my-web-player',
  ['org.svta.device-type']: 'mobile',
  ['org.svta.content-genre']: 'movie',
  ['org.svta.experiment-cohort']: 'control',
  ['org.svta.utm-source']: 'newsletter',
};

const url = 'https://example.com/playlist.m3u8';
const urlWithCmcd = appendCmcdQuery(url, cmcd);
console.log(urlWithCmcd);
// CMCD query string will include the custom keys in the same way as standard keys
```

## Running the example script

From the repo root (or from this directory if you install dependencies here):

```bash
node append-cmcd-example.js
```

The script builds a sample URL with `appendCmcdQuery` including the registry custom keys and prints the result.

## References

- [CMCDv2 specification (CTA-5004-A)](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html) – Common Media Client Data definition
- [keys/registry.json](../../keys/registry.json) – full list of registered keys; [keys/README.md](../../keys/README.md) – human-readable list
- [docs/key-schema.md](../../docs/key-schema.md) – key format and allowed characters
- [CML npm package](https://www.npmjs.com/package/@svta/common-media-library) – API and usage
