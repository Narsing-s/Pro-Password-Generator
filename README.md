# VaultForge — Pro Password Generator

A modern, privacy-first password security lab that runs entirely in the browser.

**Live app:** https://narsing-s.github.io/Pro-Password-Generator/

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
