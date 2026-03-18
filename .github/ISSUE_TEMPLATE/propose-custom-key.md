---
name: Propose a custom key
about: Propose a new custom key for the CMCDv2 registry
title: "[Key] "
labels: key-proposal
assignees: ''
---

## Proposed key

**Key name (full):** (e.g. `org.svta-p-n`. Format: `<reverseDNS>-<namespaceAbbr>-<fieldAbbr>`. Abbreviations are alphanumeric only; hyphens separate reverse-DNS prefix, namespace, and field.)

**keyNameAbbr:** (Abbreviation suffix only, e.g. `p-n`. Must be unique. See [key schema](docs/key-schema.md) for rules: as short as possible; multi-word = first char of each word; uniqueness within namespace.)

**namespaceDescription:** (Human-readable namespace, e.g. `player`.)

**description (field):** (Human-readable field meaning, e.g. `name`.)

## Value definition

(Short purpose/definition of the key – CMCD "Value definition".)

## Type & Unit

(Per CMCD spec: custom keys MUST be STRING or TOKEN; value max 64 characters.)

- [ ] `string`
- [ ] `token`

## Header name

[Header field name](https://cta-wave.github.io/Resources/common-media-client-data--cta-5004-a.html#header-field-definition) per CTA-5004-A Section 3.1:

- [ ] CMCD-Object (values vary with the object being requested)
- [ ] CMCD-Request (values vary with each request)
- [ ] CMCD-Session (values invariant over the session)
- [ ] CMCD-Status (values do not vary with every request or object)

## Example value

(Optional example, max 64 characters, e.g. `my-web-player` or `2.1.0`.)

## Use case

(Why this key is needed and how it will be used.)

## Checklist

- [ ] Key name uses reverse-DNS prefix and abbreviated namespace and field (format: `org.svta-<nsAbbr>-<fieldAbbr>`).
- [ ] Namespace and field abbreviations are alphanumeric only; no hyphens inside abbreviations.
- [ ] Namespace abbreviation is unique in the registry; field abbreviation is unique within the namespace.
- [ ] I have read the [key schema](docs/key-schema.md) (abbreviation rules and registry entry shape).
