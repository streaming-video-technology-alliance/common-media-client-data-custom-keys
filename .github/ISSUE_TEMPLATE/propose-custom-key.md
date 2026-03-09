---
name: Propose a custom key
about: Propose a new custom key for the CMCDv2 registry
title: "[Key] "
labels: key-proposal
assignees: ''
---

## Proposed key

**Full key name:** (e.g. `org.svta.player-name`. Must follow `<reverseDNS>.<namespace>-<field>`; namespace = alphanumeric only, no hyphens; field = hyphen-separated words. Both namespace and field are required.)

## Description

(Short, clear purpose of the key.)

## Value type

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

(Optional example, e.g. `my-web-player` or `2.1.0`.)

## Use case

(Why this key is needed and how it will be used.)

## Checklist

- [ ] Key name uses reverse-DNS prefix and has both namespace and field (namespace-only not allowed).
- [ ] Namespace contains only lowercase letters and digits (no hyphens, no dots, no special characters).
- [ ] Field contains only lowercase letters, digits, and hyphens (no dots or other special characters).
- [ ] I have read the [key schema](docs/key-schema.md).
