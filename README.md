# KAHALA — Healthy Fruit Snack Platform

KAHALA is a brand website and evolving fresh-food commerce platform for fruit-based snacks and desserts in Indonesia.

**Repository status (reviewed 2026-11-10):** Frontend foundation / interactive demo. **Do not treat the current customer login, checkout, admin metrics, or order-success screens as verified production transactions.** Backend persistence, secure staff authentication, operational fulfillment and compliance controls are part of the proposed roadmap.

## Where to start

- [Platform ecosystem and architecture](docs/PLATFORM-ECOSYSTEM.md)
- [Implementation roadmap and release gates](docs/IMPLEMENTATION-ROADMAP.md)
- [Production/security/food-safety readiness](docs/PRODUCTION-READINESS.md)

## Existing technology

Next.js 16, React 19, TypeScript, Tailwind CSS 4 and supporting UI/motion libraries. Consult package.json for the pinned dependencies and scripts. The existing products and business dashboards currently include mock/demo data.

## Run locally

Requirements: a supported Node.js runtime and npm.

1. Clone this repository.
2. Run `npm ci`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

Build checks: `npm run lint` and `npm run build`.

## Existing environment configuration

The code currently reads:
- NEXT_PUBLIC_APP_NAME
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_API_URL
- NEXT_PUBLIC_WHATSAPP_NUMBER

These are public client-side environment variables. Set a real WhatsApp business number before using any order link. Do **not** put tokens, password hashes, database URLs, payment API secrets or private business data into NEXT_PUBLIC variables. An operational backend will require separate server-only configuration and secret management.

## Project sections

- Public: Home, Menu, About, Why KAHALA, Blog, FAQ, Contact, Corporate Order, Campaign and Bundles.
- Planned customer system: Login, Register, Orders, Addresses, Profile and Favorites.
- Planned admin system: Products, Orders, Customers, Content, Reports and Settings.

Routes and UI being present does **not** mean all backend services exist. Consult code and the audit in docs/PLATFORM-ECOSYSTEM.md before advertising functionality.

## Engineering standards

Contributions must be delivered through reviewed pull requests with tests and updated documentation. All privileged actions must be authorized on the server. Mocks must be clearly labeled and must never result in a false confirmation of payment or a completed order.

## Ownership and license

This GitHub repository is currently public and has an MIT license. Owners should explicitly review whether that license and repository visibility align with KAHALA's intended commercial/IP policy. Do not change permissions or license retroactively without a proper rights review.

The blueprint is a planning document; its existence does not certify food-safety compliance, secure deployment, or a production-ready checkout.
