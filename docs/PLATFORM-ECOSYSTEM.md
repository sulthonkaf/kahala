# KAHALA — Complete Platform Ecosystem Blueprint

**Date:** 2026-11-10
**Status:** Proposed target architecture and implementation plan, NOT a claim of production readiness.
**Reviewed repository:** https://github.com/sulthonkaf/kahala (main)

## 1. Product and business direction

KAHALA is an Indonesian healthy fruit snack / fruit-based dessert brand. Its digital ecosystem should generate brand trust, explain actual ingredients, display an accurate catalog, convert interest into orders, support repeat purchases and corporate packages, and connect sales to real kitchen and financial operations.

The business is currently better described as direct-to-consumer fresh-food commerce with business-to-business orders, not a multi-tenant SaaS platform.

**Principle:** validate demand, unit economics, quality, and repeat purchase before building expensive automation.

## 2. Verified code baseline

- The existing package manifest includes Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind 4, Zod, Zustand and visual/animation packages.
- Public paths cover home, menu, blog, campaigns, bundles, FAQs, about, and corporate orders.
- Customer dashboard and admin screen structures exist.
- Product service imports a mock product dataset; admin statistics are hard-coded and labeled as mock.
- Auth store exports a mock admin user; login page explicitly says backend auth integration is pending.
- The checkout form has inputs and a button but does not create an order.
- The order-success screen displays a simulated order identifier.
- Admin layout has no server-side authorization check in the inspected file.
- README is still boilerplate; repository is public with MIT licensing and contains a large audit text file. Review public artifacts, secrets and licensing choices.
- Main and master branches exist; staging and production branches were not found in the initial branch search. A branch is not a production environment; environments need distinct credentials and deployments.

These are source-code findings from selected files, not a complete security audit. The live Vercel URL could not be verified.

## 3. Architectural decision

**Recommended: modular monolith**, one organization, one authoritative PostgreSQL transactional database, protected staff/admin pages, Next.js public website, and integration adapters. Do not default to microservices, Kubernetes, Kafka, native apps or a multi-tenant model.

**Deployment evolution**
- Phase 0: existing Next.js website + real product/pricing data + WhatsApp-assisted conversion.
- Phase 1: Next.js server-side API, managed PostgreSQL, real order records, customer service/admin workflow, secure auth, audit logs.
- Phase 2: supplier, inventory, production batches, QC, delivery, repeat orders, corporate quotation and finance.
- Phase 3: automated payments, external WhatsApp business API, loyalty, BI, multi-location if proven useful.

Next.js Route Handlers or Server Actions are sufficient for the first backend phase. Use one typed ORM and server-side Zod validation; add a dedicated NestJS or Laravel backend later only if there is an independent integration/mobile/team requirement.

## 4. Ecosystem surfaces

| Surface | Users | Main capability |
| --- | --- | --- |
| Public website | visitors | brand, products, ingredients, trust, FAQ, content |
| Mobile responsive ordering | shoppers | catalog, quantity, location, preferred slot, order conversion |
| Account portal (optional early) | repeat buyers | order history, reorder, addresses, consent |
| Staff/admin portal | customer service, kitchen, ops, finance, owner | validate and fulfill orders, manage catalog, inventory, reporting |
| B2B portal (future) | corporate buyers | quote requests, event schedules, invoice and account terms |
| Operations integrations | internal/external systems | WhatsApp, payments, delivery, monitoring, accounting |

Avoid creating empty account or tracking pages that suggest real transactions when they are not wired to a database.

## 5. Core bounded business modules

Catalog; ingredients and allergens; price lists; availability and daily capacity; cart; order capture; confirmation; payment state; supplier and procurement; inventory lots and stock movement; recipes/BOM; production batch; QA/QC signoff; dispatch and proof of delivery; customer contacts/consent; subscriptions and repeat order; corporate leads and quotations; promotions; refunds and complaints; cost accounting; analytics; access control and audit.

**Order state transitions:**
DRAFT → SUBMITTED → PENDING_CONFIRMATION → CONFIRMED → IN_PREPARATION → QC_PENDING → READY → OUT_FOR_DELIVERY → DELIVERED → COMPLETED. Track cancellation and exception states with a reason. Payment has a separate state machine; paid status is never inferred from a browser redirect.

**Inventory invariant:** every stock adjustment is an auditable movement, with supplier lot, preparation batch, damaged/waste quantity, and FEFO handling. Track availability by product and preparation/fulfillment capacity, not only total stock.

**Transaction invariant:** historical order price, product text, taxes/discounts and agreed delivery terms are snapshots. Changes to catalog must not modify past orders. Monetary amounts use integer IDR or fixed-precision decimal, never floating-point arithmetic.

## 6. Minimum canonical database entities

Users, roles, user_roles, customers, customer_addresses, products, product_variants, product_prices, ingredients, allergens, product_ingredients, orders, order_items, order_status_history, payments, vendors, purchase_orders, purchase_lines, inventory_batches, stock_movements, recipes, production_batches, qc_checks, deliveries, delivery_events, subscriptions, corporate_leads, quotations, discounts, audit_logs and consent_events.

Add indexes and foreign keys appropriate to query workloads. Prevent race conditions on limited-quantity orders with database transactions. Payment callbacks and order creation require idempotency and authorization.

## 7. Technical stack decisions

| Layer | Recommended | Rationale |
| --- | --- | --- |
| Public web | existing Next.js / TypeScript | retain prior implementation and SEO |
| UI | existing Tailwind/components; design tokens | reduce unnecessary rewrites |
| Backend at first | Next.js server endpoints | reduce separate deployment and cross-service complexity |
| Data | managed PostgreSQL | transactional integrity |
| Data access | choose Drizzle OR Prisma | typed migrations, not both |
| Asset storage | managed object storage/CDN | media and controlled documents |
| Authentication | secure httpOnly server sessions, MFA for staff | protect business administration |
| Integrations | WhatsApp-assisted first; licensed payment provider later | staged operational validation |
| Hosting | Vercel or documented compatible Node/Docker platform | repeatable deploys |
| Monitoring | app logs, error reporting, uptime, database backup alerts | detect failures |
| CI | GitHub Actions lint, typecheck, tests, build, dependency/secret scans | release evidence |

Only allow authorized staff to change orders, products, pricing or stock. Server-side checks are mandatory for every sensitive read/write; UI-hidden buttons do not count as authorization.

## 8. Environments and hostnames

Development, preview, staging and production must use separate secrets; production data should not be copied to test. Start with a single canonical owned domain and protected /admin, not a complex subdomain maze. Only add staging.example-domain and api.example-domain after the domain is owned and separated infrastructure actually exists. Configure TLS, redirect rules, DNS, security headers, WAF/rate limiting, secure cookies, CSP, backup and ownership records. Never commit real environment credentials.

## 9. Conversion, SEO, trust

Maintain Home, Menu, Product Detail, About, Why KAHALA, FAQ, Contact, Blog, Corporate and assisted ordering. A product page needs actual photo, current price, weight/portion, ingredient list, allergen warnings, availability, storage guidance, delivery zone and real order CTA. Implement canonical URLs, metadata, sitemap, robots, Open Graph, image optimization, internal links and appropriate Product structured data. Google search enhancements are not guaranteed.

Events: product_view, add_to_cart, begin_checkout, whatsapp_order_click, confirmed_order, repeat_order, corporate_lead_submitted. Report actual confirmed orders separately from WhatsApp click events.

## 10. Food operations and quality

Operational chain: approved suppliers → receipt and visual QC → lot registration → chilled handling according to documented product-specific SOP → production plan → hygiene/portion/packaging checks → QC release → dispatch temperature/time log → proof of delivery → complaints and product recall procedure.

Define who can reject damaged fruit; batch traceability; maximum time per step; temperature limits based on product evaluation; FIFO/FEFO; cleaning/sanitizing; separation of allergens; recall contacts; supplier corrective actions; and incident documentation.

Never invent nutritional values or imply suitability for diabetes without reliable validation.

## 11. Business economics and management

Track SKU-level: purchase cost, preparation yield, spoilage/waste, packaging, directly attributable labor, production overhead allocation, delivery subsidy, payment fees, discount and returned items.

Gross margin = (net sales - COGS) / net sales. Contribution margin additionally deducts variable selling/delivery/payment/marketing expenses. Target margins from earlier business drafts are hypotheses to validate, not actual measured outcomes.

KPIs: visitors, menu-to-checkout conversion, WhatsApp leads vs confirmed orders, first-order conversion, AOV, repeat-purchase rate, order cancellation, QC reject, waste %, on-time delivery, gross margin and contribution margin per product/channel, cash conversion, corporate quote win-rate.

## 12. Documentation and governance

Maintain: vision / business model; product requirements (PRD); process maps; role and RBAC matrix; architecture ADRs; ERD/data dictionary; API OpenAPI spec; threat model/privacy data inventory; QA/test strategy; traceability matrix; deployment and recovery runbooks; support/incident policy; food QC SOP; product/specification and pricing SOP; release notes; acceptance/UAT and evidence.

Adopt GitHub issues, pull requests, review approval, protected main branch, CI checks, release tags and change log. Use staging as a deployment, not proof of business approval.

## 13. Priority roadmap and release gates

### P0 — Stabilize honest storefront
Replace inaccurate or fictional stats, labels, order success and stock claims; finalize actual product data; use truthful WhatsApp link and order capture; make admin non-public until auth exists; baseline tests and documentation. **Gate:** users cannot mistake an unprocessed mock order for a completed real order.

### P1 — Transactional MVP
PostgreSQL schema/migrations, product catalog admin, signed-in staff roles, order creation and confirmation, audit history, stock/capacity checks, notifications and backup. **Gate:** an order is persisted, confirmed, prepared and completed without manual database edits.

### P2 — Operational platform
Supplier and ingredient lots, stock movements, production batches, QC, dispatch, delivery evidence, cost reporting, repeat-order and corporate sales. **Gate:** trace an order to preparation lot and calculate contribution economics accurately.

### P3 — Growth/expansion
Payment webhook reconciliation, automated repeat delivery, customer accounts/consent, CRM, analytics, multi-location (if needed) and integration APIs. **Gate:** verified business benefit and operational readiness.

## 14. Sources and regulatory verification

- Next.js Deployment: https://nextjs.org/docs/app/getting-started/deploying
- Next.js Production checklist: https://nextjs.org/docs/app/guides/production-checklist
- Google Product structured data: https://developers.google.com/search/docs/appearance/structured-data/product/
- Indonesia UU 27/2022 Pelindungan Data Pribadi: https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- BPOM Peraturan 1/2022 tentang klaim pangan olahan: https://jdih.pom.go.id/view/slide/1341/1/2022/91ba190d76226f73bfbf189f933b4aaa
- BPOM Peraturan 10/2026 tentang informasi nilai gizi pangan olahan: https://jdih.pom.go.id/view/slide/1758/10/2026/080dbfe4020dc87672a7fa0d6adb68ab
- OSS licensing / hygiene category must match actual kitchen and business activity: https://oss.go.id/

Legal classification depends on whether KAHALA sells prepared-to-order food, prepackaged processed food, or registered fresh produce. Verify applicable KBLI, hygiene, labeling, and distribution requirements with relevant Indonesian authorities before launch; do not assume SPP-IRT or a BPOM registration applies to every SKU.

**This is an architecture document, not deployed functionality or legal certification.**
