/**
 * Generate keys/README.md from keys/registry.json.
 *
 * Usage (from repo root): node scripts/generate-keys-readme.js
 *
 * After adding or editing keys in keys/registry.json, run this script to
 * regenerate the human-readable keys/README.md. Commit both files.
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const registryPath = path.join(repoRoot, 'keys', 'registry.json');
const readmePath = path.join(repoRoot, 'keys', 'README.md');

function esc(s) {
  if (s == null || s === '') return '';
  return String(s).replace(/\|/g, '\\|').trim();
}

/** Format example as full CMCD key=value. String: key="value" (quotes/backslashes escaped). Token: key=value (no quotes). */
function formatExample(entry) {
  const key = entry.keyName;
  const raw = entry.example;
  if (key == null || raw == null) return '';
  const val = String(raw);
  if (entry.typeAndUnit === 'string') {
    const escaped = val.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `${key}="${escaped}"`;
  }
  return `${key}=${val}`;
}

function tableRow(entry) {
  return [
    esc(entry.keyName),
    esc(entry.namespaceDescription || ''),
    esc(entry.description),
    esc(entry.valueDefinition),
    esc(entry.typeAndUnit),
    esc(entry.headerName),
    esc(formatExample(entry)),
    esc(entry.added),
  ].join(' | ');
}

function renderTable(entries) {
  const header = '| Key name | Namespace | Description | Value definition | Type & Unit | Header name | Example | Added |';
  const separator = '| --- | --- | --- | --- | --- | --- | --- | --- |';
  const rows = entries.map(tableRow).map((r) => '| ' + r + ' |');
  return [header, separator, ...rows].join('\n');
}

function namespaceLabel(ns) {
  return ns.charAt(0).toUpperCase() + ns.slice(1) + ' keys';
}

const registryData = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const registry = registryData.keys;

const byNamespace = {};
for (const entry of registry) {
  const ns = entry.namespaceDescription || 'other';
  if (!byNamespace[ns]) byNamespace[ns] = [];
  byNamespace[ns].push(entry);
}

const namespaces = Object.keys(byNamespace).sort();

const sections = namespaces.map((ns) => {
  const entries = byNamespace[ns].sort((a, b) => (a.keyName || '').localeCompare(b.keyName || ''));
  const title = `### ${namespaceLabel(ns)}`;
  const table = renderTable(entries);
  return title + '\n\n' + table;
});

const intro = `# Registered custom keys

This page is an overview of all registered custom keys. It is generated from the underlying registry [registry.json](registry.json).

`;

const footer = `

---

To propose a new key, see [CONTRIBUTING.md](../CONTRIBUTING.md). Key format and rules: [docs/key-schema.md](../docs/key-schema.md).
`;

const body = intro + sections.join('\n\n') + footer;

fs.writeFileSync(readmePath, body, 'utf8');
console.log('Written:', readmePath);
