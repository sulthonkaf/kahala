# KAHALA — Implementation Backlog and Release Gates

**Prepared:** 2026-11-10. All tasks are **open / proposed** unless specifically verified otherwise. Owner roles are proposed, not assigned people.

## Milestone A — Truthful public release

| ID | Priority | Task | Acceptance evidence |
| --- | --- | --- | --- |
| KHL-001 | P0 | Remove/label fake revenue, customer reviews and order success | Published screens display no misleading business claims |
| KHL-002 | P0 | Decide launch mode: real WA-assisted checkout vs full checkout | Signed product decision and order journey |
| KHL-003 | P0 | Wire click-to-WhatsApp with correct number and structured product/quantity message | Test from mobile and desktop with real confirmed receiving number |
| KHL-004 | P0 | Replace product mocks with audited product information | Actual SKU, price, variant, ingredients, allergens, portion, availability |
| KHL-005 | P0 | Protect or disable /admin and related internal staff routes until authorized | Anonymous access cannot read operational customer, financial or internal data |
| KHL-006 | P0 | Remove insecure demo login behavior from public production | All login actions either secure+real or hidden/labeled demo |
| KHL-007 | P0 | Verify product media copyrights and accuracy | Signed usage rights / own product photos and image alt text |
| KHL-008 | P0 | Review public repository, MIT licensing intent and audit file | Security and intellectual-property review notes |
| KHL-009 | P0 | Add smoke test, lint, types, build CI | Green PR verification run |
| KHL-010 | P0 | Verify domain, deployment, rollback and business contact details | Accessible live URL, owner approvals, deployment manifest |

**Exit gate:** a customer can see real information and send an actual order inquiry; no UI claims that an order was persisted or paid if it was not.

## Milestone B — Real orders and admin operations

| ID | Priority | Task | Acceptance evidence |
| --- | --- | --- | --- |
| KHL-011 | P1 | Select database deployment, ORM and migration policy | Architecture decision record |
| KHL-012 | P1 | Create core relational schema and seed for development only | Migration and test data reproducible |
| KHL-013 | P1 | Implement secure staff authentication and server-side RBAC | Unauthorized requests denied on every endpoint |
| KHL-014 | P1 | Catalog management with validated publishing workflow | Product changes recorded and reflected in storefront |
| KHL-015 | P1 | Persist order, snapshots, idempotency and status history | Same submission cannot create duplicate order |
| KHL-016 | P1 | Add order confirmation and fulfillment console | CS updates validated status and leaves audit trail |
| KHL-017 | P1 | Implement delivery zone, cutoffs, capacity and pricing | Impossible fulfillment slots rejected |
| KHL-018 | P1 | Implement customer data notice and marketing consent choice | Legible privacy notice and recorded consent when applicable |
| KHL-019 | P1 | Add payment-neutral customer communications | Confirmation contains real, current order code |
| KHL-020 | P1 | Setup backups and perform restore exercise | Signed restore test evidence |
| KHL-021 | P1 | Unit + integration + end-to-end order test suite | CI pass and UAT acceptance |
| KHL-022 | P1 | Replace hardcoded admin stats with transactional SQL queries | Sales metrics reconcile with actual order totals |

**Exit gate:** validated product → persisted order → confirmation → preparation → delivery → report, with audit history and backup verification.

## Milestone C — Food operations and economics

| ID | Priority | Task | Acceptance evidence |
| --- | --- | --- | --- |
| KHL-023 | P2 | Supplier master and goods receipt QC | Ingredient traceable to approved vendor and receipt |
| KHL-024 | P2 | Lot-level stock, FEFO and irreversible waste record | Stock ledger balances with physical count |
| KHL-025 | P2 | Recipe/BOM, yield, production and QC signoff | Trace shipped order to production lot |
| KHL-026 | P2 | Dispatch and delivery event log | Each order has dispatch and completion evidence |
| KHL-027 | P2 | SKU-level HPP, overhead allocation and margin | Verified margin calculation with accounting signoff |
| KHL-028 | P2 | Complaint/refund/recall workflow | Controlled drill with traceability and decision record |
| KHL-029 | P2 | Corporate leads and quotation approval | Authorized quote → accepted order flow |
| KHL-030 | P2 | Weekly pack schedules and manual pause/skip | No auto-charge without explicit setup/authorization |
| KHL-031 | P2 | Marketing dashboards and customer cohorts | Verified conversion and repeat order reporting |

## Milestone D — Scale only on proven need

| ID | Priority | Task | Evidence |
| --- | --- | --- | --- |
| KHL-032 | P3 | Payment gateway + signed/idempotent webhook + refund reconciliation | Provider sandbox E2E and reconciliation report |
| KHL-033 | P3 | Official WhatsApp API and consented notifications | Templates approved, unsubscribe/opt-out honored |
| KHL-034 | P3 | Customer account and account recovery | Security and privacy acceptance |
| KHL-035 | P3 | Multi-location inventory and dispatch | Segmented location stock, role policies and reporting |
| KHL-036 | P3 | External API or native app only if justified | ADR with usage/business case |

## Engineering policy

- Development style: trunk-based with protected main, short-lived feature branches and pull requests; keep staging and production as controlled deployments.
- Required pull request template: Why, scope, data migration, screenshots, security considerations, test evidence, rollout, rollback, and owner approval.
- CI gate: install dependencies reproducibly; lint; TypeScript; unit/integration; app build; secret and vulnerable-dependency scan; smoke tests.
- Database changes: review migration up/down strategy, backups, schema constraints, data backfill and application compatibility.
- UAT: signed acceptance for product pricing, order flows, food safety SOP, reconciliation and staff permissions.
- Release: version tag, changelog, owner approval, deployment evidence, error monitoring, incident response contacts and rollback command.
- Post-release: incident classifications, service windows, support tickets, root cause analysis, and documented maintenance entitlement.

## Proposed staff RBAC

| Capability | Owner/Admin | Catalog Manager | Customer Service | Kitchen/QC | Delivery | Finance |
| --- | --- | --- | --- | --- | --- | --- |
| Publish menu/pricing | Approve | Propose/edit | Read | Read | Read | Read |
| Confirm/cancel order | Approve | No | Yes, policy | Read | Read | Refund approval only |
| Manage production/QC | View | No | View | Yes | Ready only | View |
| Dispatch/delivery | View | No | View | Prepare | Yes | View |
| Finance/export/margins | Yes | No | Limited | No | No | Yes |
| Roles/secrets/audit export | Yes (controlled) | No | No | No | No | No |

Enforce permissions server-side based on actual assigned roles, not on the UI label. Sensitive finance/audit export should have explicit access approval, limited data scope and logging.

## Definition of Done

A task is Done only if code or process evidence exists, business rules are verified, authorization and privacy are assessed, tests pass, operational documentation is updated and relevant owner approves the result. UI completion alone is not feature completion.
