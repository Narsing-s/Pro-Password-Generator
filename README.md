# VaultForge — Pro Password Generator

[![Live Demo](https://img.shields.io/badge/Live-Demo-8b5cf6)](https://narsing-s.github.io/Pro-Password-Generator/) [![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee.svg)](LICENSE)

> **A privacy-first password security lab — strong secrets, generated locally.**

A modern, privacy-first password security lab that runs entirely in the browser.

**Live app:** https://narsing-s.github.io/Pro-Password-Generator/

## Why VaultForge

VaultForge is deliberately built as a static application: no account, database, analytics pipeline, backend, or API key is required. The security-sensitive generation path stays in the browser.

## What it provides

- Cryptographically secure password generation with Web Crypto API
- 6–128 character passwords
- Uppercase, lowercase, numbers and symbols
- Ambiguous-character avoidance
- Optional no-repeat mode
- Live entropy estimate and strength guidance
- Passphrase mode
- Secure PIN mode
- API-token mode
- One-click copy
- Responsive dark interface
- No backend, database, login, analytics or API keys

## Security

The generator uses `crypto.getRandomValues()` rather than `Math.random()`. Generated secrets are created locally in the browser and are not intentionally sent to a server.

Entropy and crack-resistance labels are estimates, not guarantees. A password's real security also depends on how it is stored, reused, exposed and whether the target service uses rate limiting and MFA.

**Important:** Never use a generated password for multiple services. Prefer a reputable password manager and enable MFA where available.

## Privacy

VaultForge is designed as a static client-side application. There is no application backend and no account system.

## Run locally

Open `index.html` in a modern browser, or serve the directory with any static web server.

## Deployment

The project is compatible with GitHub Pages and other static hosts.

## License

MIT — see [LICENSE](LICENSE).


## Project structure

- `index.html` — complete static application
- `SECURITY.md` — security reporting and design notes
- `CONTRIBUTING.md` — contribution workflow
- `.github/ISSUE_TEMPLATE/` — bug and feature templates

## Browser support

Use a current version of Chrome, Edge, Firefox, Safari, or another browser with Web Crypto API support.
