# Documentation hardening plan

**Goal:** Make operator and security documentation match the implementation and add validation coverage.

**Approach:** Reconcile E2E and persistence claims, correct deployment instructions, document the current Directory API contract, and add CI-safe link/MDX validation where practical.

**Files touched:** `content/docs/**/*.mdx`, docs README, package scripts, and a small validation script if needed.

**Verification:** `npm run lint`, `npm run typecheck`, and `npm run build`.

**Status:** complete

## Delivery semantics follow-up

**Goal:** Document the offline outbox, delivery acknowledgements, and DM read
receipts without overstating group or attachment guarantees.

**Files touched:** `content/docs/peers/architecture.mdx`,
`content/docs/peers/index.mdx`, `content/docs/ptero-egg/index.mdx`, and this
plan.

**Status:** complete — the protocol boundary and chunked attachment path are
documented.

**Implemented:** Reconciled the docs and landing metadata with the current
protocol: only direct messages are sealed end-to-end; signed/plaintext server,
Plaza, and relay-control topics are called out. Corrected Pterodactyl's
`/mnt/server` install-volume versus `/home/container` runtime-volume identity
and authentication guidance, documented the Directory API's current signed
write/public-read contract, and added an offline internal route/link validator.

**Deferred:** External URL reachability, heading/fragment validation, a full
MDX linting pass beyond the existing Fumadocs build, live multi-network relay
integration tests, and the existing Next/Fumadocs invalid-dependency warning
for `src/.source/source.config.mjs` remain out of scope.
