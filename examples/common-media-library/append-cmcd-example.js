/**
 * Example: append CMCD (including registry custom keys) to a URL using
 * @svta/common-media-library.
 *
 * Run from repo root: node examples/common-media-library/append-cmcd-example.js
 * (Requires: npm install @svta/common-media-library)
 */

const { appendCmcdQuery } = require('@svta/common-media-library/cmcd/appendCmcdQuery');
const { CmcdObjectType } = require('@svta/common-media-library/cmcd/CmcdObjectType');

const cmcd = {
  sid: '4f2867f2-b0fd-4db7-a3e0-cea7dff44cfb',
  cid: 'cc002fc3-d9e1-418d-9a5f-3d0eac601882',
  d: 324.69,
  ot: CmcdObjectType.MANIFEST,
  ['org.svta.player-name']: 'my-web-player',
  ['org.svta.device-type']: 'mobile',
  ['org.svta.content-genre']: 'movie',
  ['org.svta.experiment-cohort']: 'control',
  ['org.svta.utm-source']: 'newsletter',
};

const url = 'https://example.com/playlist.m3u8';
const urlWithCmcd = appendCmcdQuery(url, cmcd);

console.log('URL with CMCD (including registry custom keys):');
console.log(urlWithCmcd);
