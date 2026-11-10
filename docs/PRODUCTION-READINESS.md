# KAHALA — Production, Security, Food Safety and Governance Checklist

This is a readiness checklist, **not certification**. The checked result must be supported by evidence; all items begin unchecked.

## Security & privacy

- [ ] Inventory all personal data: identity, contact, addresses, order history, consent and staff data; document retention, deletion and processors.
- [ ] Publish privacy notice and contact channel; avoid collecting unnecessary health conditions or sensitive diet diagnoses.
- [ ] Document lawful processing bases and marketing opt-in/opt-out under Indonesian personal-data protection requirements.
- [ ] Enforce server-side authorization and tenant/organization scoping on each nonpublic read/write.
- [ ] Require MFA for privileged staff; enforce session expiration, secure cookie attributes and account recovery controls.
- [ ] Validate inputs and outputs; use CSRF mitigations, rate limits, security headers and restrictive content policy.
- [ ] Avoid exposed NEXT_PUBLIC secrets; use server-only environment variables and least-privilege provider credentials.
- [ ] Sign and authenticate external webhooks and ensure idempotent processing.
- [ ] Log privileged actions with actor, timestamp, target, before/after metadata and reason, without logging credentials or full personal-data payloads.
- [ ] Rotate credentials, scan Git history/public artifacts for accidentally committed secrets, and check audit logs.
- [ ] Run dependency scanning, static checks, automated tests and security review before deployment.
- [ ] Establish incident severity, contacts, notification assessment and postincident action plan.

## Production operations

- [ ] Domain ownership and DNS/TLS verified.
- [ ] Staging and production databases, secrets, storage and payment endpoints separated.
- [ ] CI required before merge and protected main branch policy agreed.
- [ ] Infrastructure ownership, billing, access and offboarding responsibilities documented.
- [ ] Health checks, uptime monitoring, error tracking, performance monitoring and on-call owner established.
- [ ] Managed backups and off-platform backup copies with retention policy.
- [ ] Restore test completed and signed, RPO/RTO agreed with business owner.
- [ ] Database migration, deployment and rollback plan tested.
- [ ] Smoke test: product list, current price, order capture, confirmation, admin authorization, contact details.
- [ ] Business approval and go/no-go record for each release.

## Product truth, food safety and traceability

- [ ] Each SKU has real ingredients, accurate portion/weight, allergens (including potential cross-contact), current price, available order slots, safe storage/use guidance supported by process validation.
- [ ] Nutritional/health claims substantiated; never imply diabetes safety, therapeutic outcomes, validated calories or no added sugar without evidence.
- [ ] Determine applicable food category: freshly prepared/ready-to-eat, processed packaged, or fresh horticultural; then verify OSS KBLI, hygiene, labeling, SPP-IRT/BPOM/PSAT registration **as applicable**, not indiscriminately.
- [ ] Supplier qualification, incoming QC, washing/preparation hygiene, packaging and cold-chain process SOP documented.
- [ ] Temperature limits and holding times validated for actual recipes/packaging/distribution; do not invent universal safe settings.
- [ ] Batch/lot traceability from vendor delivery to customer order and expiry/disposal.
- [ ] QC release rights clearly assigned; nonconforming batches blocked and destroyed/reworked per approved policy.
- [ ] Staff hygiene/training and cleaning logs in place.
- [ ] Delivery handover, delay/temperature exceptions and rejected goods recorded.
- [ ] Complaint, recall and corrective action workflow tested.
- [ ] Corporate allergen, special dietary, delivery and invoice terms contractually confirmed.

## Finance & commercial control

- [ ] HPP by SKU, recipe yield, waste allowance, packaging, labor and overhead assumptions reviewed.
- [ ] Price floors, discount authority and exceptional deal approval defined.
- [ ] Net sales, refunds, discounts and payment fees reconcile to provider/bank records.
- [ ] Separate gross profit and contribution margin in reporting; no confusion between margin and markup.
- [ ] Corporate credit terms, deposit, invoice due date and cancellation rules approved.
- [ ] Sales campaign claims and customer testimonials reviewed for authenticity.
- [ ] Roles, work instructions and audit trail for price overrides, cancellations and refunds documented.

## Legal/reference lookup (current verification needed before operations)

- Indonesian Personal Data Protection Act (UU No. 27/2022): https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022
- BPOM processed-food claims regulation (PerBPOM 1/2022): https://jdih.pom.go.id/view/slide/1341/1/2022/91ba190d76226f73bfbf189f933b4aaa
- BPOM processed-food nutrition labeling (PerBPOM 10/2026): https://jdih.pom.go.id/view/slide/1758/10/2026/080dbfe4020dc87672a7fa0d6adb68ab
- OSS licensing KBLI and relevant hygiene-sanitation certification: https://oss.go.id/
- OWASP ASVS controls: https://owasp.org/www-project-application-security-verification-standard/
- Google Search Central Product data: https://developers.google.com/search/docs/appearance/structured-data/product/

## Release signoff template

Version:
Commit SHA:
Environment:
Business owner:
Engineering owner:
Operations/QC owner:
Security/privacy reviewer:
Schema migration:
Backup/restore evidence:
Customer/order UAT:
Food-handling readiness:
Known limitations:
Rollback steps:
Go/no-go decision and date:
