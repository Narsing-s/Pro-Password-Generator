# Security Policy

## Supported Versions
The latest version on the `main` branch is supported.

## Reporting a vulnerability
Please do not disclose security vulnerabilities in a public issue. Contact the repository owner privately through GitHub.

## Security design
VaultForge is a static, client-side application. Password generation uses the browser Web Crypto API (`crypto.getRandomValues()`). No generated secret is intentionally transmitted to an application server.

## Responsible use
Do not reuse generated passwords across services. Use a password manager and MFA whenever possible.
