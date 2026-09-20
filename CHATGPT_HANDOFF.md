# DISPUTE Web V1 — ChatGPT Handoff

## Purpose

Standalone informational marketing website for the already-live DISPUTE Android app. The website sends users to Google Play; it does not implement web accounts, payments, subscriptions, backend APIs, or authentication.

## Stack

- Next.js 15.5.3 App Router
- React 19.1.1 and TypeScript 5.9.2
- Static CSS in `app/globals.css`
- Node.js 24.13.0 and npm 11.6.2 used for verification

## Routes

- `/` — single-page marketing site with navigation anchors: `#how`, `#product`, and `#faq`.

## Assets

Real DISPUTE screenshots are under `public/screens/` and are referenced by the homepage.

## Google Play CTA

All CTA buttons currently use `https://play.google.com/store/apps/details?id=sg.claimproof.mobile`. This destination was verified against the signed-in Google Play listing for package `sg.claimproof.mobile`.

## Verification

- `npm install`: PASS; generated `package-lock.json` for this handoff.
- `npm run build -- --no-lint`: PASS.
- `npm run lint`: NOT CONFIGURED (no lint script).
- `npm run typecheck`: NOT CONFIGURED (no typecheck script).

## Scope boundaries

No Android source, Android build files, backend source, Employer Record SaaS files, credentials, environment secret files, generated dependencies, or deployment changes are included.
