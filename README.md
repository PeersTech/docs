# PeersTech docs

Documentation site for the PeersTech ecosystem (Peers, dir-api, ptero-egg). Built with Next.js and Fumadocs. Landing page at `/`, docs at `/docs`.

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```sh
npm run build
```

Content lives in `content/docs/` as MDX files. The docs collection is doc-only (no `meta.json` in the pipeline); sidebar titles fall back to directory names.

## Deploy on Vercel

1. Import the `PeersTech/docs` repo at https://vercel.com/new.
2. Vercel auto-detects Next.js. Keep the defaults: install `npm ci`, build `npm run build`, output `.next`.
3. Node version is pinned to 22.x via `engines` in `package.json`.
4. No environment variables needed. The search API (`/api/search`) runs as a serverless function; all docs pages prerender statically.

## Stack

Pinned versions that build together: Next 15, React 19, fumadocs-mdx 14, fumadocs-core/ui 15.
