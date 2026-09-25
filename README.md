# PeersTech documentation

Documentation site for the PeersTech ecosystem:

- [Peers](/docs/peers) — Tauri desktop messenger and native node guide
- [Directory API](/docs/dir-api) — signed relay-node registry
- [Pterodactyl egg](/docs/ptero-egg) — panel deployment with a custom runtime image

The docs distinguish **current behavior**, **planned integration**, and
**operational requirements**. In particular, the Directory API is live but the
Peers client does not fetch it automatically yet, and the Pterodactyl egg still
requires a custom image build.

## Content map

| Section | Start here | Use it for |
|---|---|---|
| Peers | [Getting started](/docs/peers/getting-started) | Run the desktop app in development |
| Peers operators | [Running a node](/docs/peers/running-a-node) | Deploy a VPS or Raspberry Pi relay |
| Peers internals | [Architecture](/docs/peers/architecture) | Understand crypto, state, and networking boundaries |
| Directory API | [API reference](/docs/dir-api/api-reference) | Integrate registration, heartbeat, and discovery |
| Directory operators | [Deployment](/docs/dir-api/deployment) | Deploy the Cloudflare Worker and D1 |
| Pterodactyl | [Setup](/docs/ptero-egg/setup) | Build the image and create a panel server |
| Pterodactyl | [Troubleshooting](/docs/ptero-egg/troubleshooting) | Diagnose install, reachability, and identity issues |

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:3000.

Content lives in `content/docs/` as MDX. The docs route renders the frontmatter
title and description through Fumadocs, so MDX pages should not repeat the page
title as a second H1. The intro diagram is intentionally a `text` diagram: the
current pipeline does not install a Mermaid renderer.

## Quality checks

```sh
npm run lint
npm run validate:content
npm run typecheck
npm run build
```

`npm run validate:content` is an offline route/link check. It derives routes
from `content/docs/`, checks hand-written internal links in MDX, source files,
and this README, and does not fetch external URLs. It complements the MDX
compilation performed by `next build`; it is not a full MDX or external-link
validator. When changing routes, keep the landing-page links in
`src/app/page.tsx` aligned with the content map above.

## Deploy on Vercel

1. Import the `PeersTech/docs` repository at https://vercel.com/new.
2. Keep the default install (`npm ci`) and build (`npm run build`).
3. Node is pinned to 22.x by `engines` in `package.json`.
4. No environment variables are required. Search is server-rendered through
   `/api/search`; documentation pages are statically generated.

## Stack

Next 15, React 19, Fumadocs MDX 14, and Fumadocs UI 15. The landing page uses
local 21st.dev-inspired Bento components in `src/components/landing-bento.tsx`
to avoid adding a runtime dependency for presentation-only UI.
