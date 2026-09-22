import Link from 'next/link';
import './landing.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { Reveal } from '@/components/reveal';

const features = [
  {
    title: 'End-to-end encrypted',
    body: 'ChaCha20-Poly1305 with per-session HKDF hash-chain keys. A fresh key per message, forward secrecy throughout.',
  },
  {
    title: 'Serverless by design',
    body: 'No backend, no accounts, no phone numbers, no database. Private keys never leave the Rust backend.',
  },
  {
    title: 'Peer-to-peer mesh',
    body: 'Gossipsub live topics plus Kademlia DHT blob parking on the public libp2p network. Senders can go offline.',
  },
  {
    title: 'Cross-NAT relaying',
    body: 'Always-on nodes give two home routers a rendezvous point, then DCUtR hole-punching upgrades them to direct.',
  },
  {
    title: 'Seed-phrase identity',
    body: 'A BIP39 12/24-word phrase is the private key. Same phrase rebuilds the same peer ID on any machine.',
  },
  {
    title: 'Low-end friendly',
    body: 'A node idles at 30 to 60 MB of RAM. Raspberry Pi, old laptops and cheap VPSs carry the backbone.',
  },
];

const steps = [
  {
    n: '01',
    title: 'Run a node',
    body: 'One binary, one port, one command: ./peers --node. It prints a PEERS_NODES= line with its public address.',
  },
  {
    n: '02',
    title: 'Share the line',
    body: 'Hand the PEERS_NODES= line to both users. They paste it into PEERS_NODES or nodes.json. Done.',
  },
  {
    n: '03',
    title: 'Chat, then go direct',
    body: 'Messages flow relayed through the node, then hole-punching upgrades the pair to a direct connection.',
  },
];

const stats = [
  { value: '30–60 MB', label: 'idle RAM per node' },
  { value: '4', label: 'env vars, total' },
  { value: '64', label: 'relay slots per node' },
  { value: '12 words', label: 'is your identity' },
];

const ticker = [
  'End-to-end encrypted',
  'No servers',
  'No accounts',
  'libp2p mesh',
  'Circuit Relay v2',
  'DCUtR hole punching',
  'Kademlia DHT',
  'Seed-phrase login',
  'Open roadmap',
];

export default function Home() {
  return (
    <SmoothScroll>
      <div className="landing font-grotesk min-h-screen">
        {/* Nav */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0c0a09]/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff6b35] text-lg font-bold text-[#0c0a09]">
                P
              </span>
              <span className="text-lg font-semibold tracking-tight">PeersTech</span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm text-[#a8a29e] sm:flex">
              <Link href="/docs/peers" className="transition-colors hover:text-white">
                Peers
              </Link>
              <Link href="/docs/dir-api" className="transition-colors hover:text-white">
                Directory
              </Link>
              <Link href="/docs/ptero-egg" className="transition-colors hover:text-white">
                Nodes
              </Link>
            </nav>
            <Link
              href="/docs"
              className="rounded-lg bg-[#ff6b35] px-4 py-2 text-sm font-semibold text-[#0c0a09] transition-transform hover:scale-105"
            >
              Read the docs
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
          <div className="bg-grid absolute inset-0" />
          <div className="orb left-[-120px] top-[-80px] h-[420px] w-[420px] bg-[#ff6b35]/25" />
          <div
            className="orb right-[-140px] top-[160px] h-[380px] w-[380px] bg-[#fbbf24]/12"
            style={{ animationDelay: '-6s' }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p
                className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#a8a29e]"
                style={{ animationDelay: '0ms' }}
              >
                <span className="live-dot inline-block h-2 w-2 rounded-full bg-green-400" />
                SERVERLESS · ENCRYPTED · PEER-TO-PEER
              </p>
              <h1
                className="rise text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
                style={{ animationDelay: '120ms' }}
              >
                No servers.
                <br />
                No accounts.
                <br />
                <span className="headline-gradient">Just peers.</span>
              </h1>
              <p
                className="rise mt-6 max-w-xl text-lg leading-relaxed text-[#a8a29e]"
                style={{ animationDelay: '240ms' }}
              >
                Peers is a desktop messenger where every byte is encrypted
                end-to-end and every message travels peer-to-peer over a public
                libp2p mesh. There is no company that can read your
                conversations and no server that can be taken down.
              </p>
              <div
                className="rise mt-9 flex flex-wrap items-center gap-4"
                style={{ animationDelay: '360ms' }}
              >
                <Link
                  href="/docs"
                  className="rounded-xl bg-[#ff6b35] px-7 py-3.5 font-semibold text-[#0c0a09] transition-transform hover:scale-105"
                >
                  Read the docs
                </Link>
                <Link
                  href="https://github.com/PeersTech/Peers"
                  className="rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="rise" style={{ animationDelay: '480ms' }}>
              <div className="term overflow-hidden rounded-2xl">
                <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
                  <span className="term-dot bg-[#ff5f57]" />
                  <span className="term-dot bg-[#febc2e]" />
                  <span className="term-dot bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-[#a8a29e]">
                    peers --node
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-[#d6d3d1]">
                  <code>
                    <span className="text-[#a8a29e]">$</span> ./peers --node{'\n'}
                    peers node peer id: <span className="text-[#ff6b35]">12D3KooW…</span>{'\n'}
                    listening: /ip4/203.0.113.7/tcp/<span className="text-[#fbbf24]">4001</span>{'\n'}
                    <span className="text-green-400">→ PEERS_NODES=/ip4/203.0.113.7/…</span>{'\n'}
                    peers node is up.{'\n'}
                    reachability: <span className="text-green-400">public</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="overflow-hidden border-y border-white/5 bg-black/40 py-4">
          <div className="marquee-track gap-0">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {ticker.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 pr-6 text-sm font-medium uppercase tracking-[0.2em] text-[#78716c]"
                  >
                    {item}
                    <span className="text-[#ff6b35]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="landing-card rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-[#a8a29e]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b35]">
              Why Peers
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Chat that trusts no one but the people chatting.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="landing-card h-full rounded-2xl p-7">
                  <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#a8a29e]">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b35]">
              The ecosystem
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Three projects, one mesh.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <Reveal delay={0}>
              <Link href="/docs/peers" className="landing-card block h-full rounded-2xl p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff6b35]">
                  App
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Peers</h3>
                <p className="mt-3 leading-relaxed text-[#a8a29e]">
                  The messenger itself. Tauri desktop app, Rust crypto core,
                  React shell. Keys never leave the backend.
                </p>
                <p className="mt-6 font-semibold text-white">
                  Explore Peers <span aria-hidden>→</span>
                </p>
              </Link>
            </Reveal>
            <Reveal delay={90}>
              <Link href="/docs/dir-api" className="landing-card block h-full rounded-2xl p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff6b35]">
                  Service
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Directory API</h3>
                <p className="mt-3 leading-relaxed text-[#a8a29e]">
                  Live registry of relay nodes on Cloudflare. Signed IDs,
                  heartbeat cadence, client integration planned.
                </p>
                <p className="mt-6 font-semibold text-white">
                  Explore the API <span aria-hidden>→</span>
                </p>
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <Link href="/docs/ptero-egg" className="landing-card block h-full rounded-2xl p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff6b35]">
                  Deploy
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">Pterodactyl Egg</h3>
                <p className="mt-3 leading-relaxed text-[#a8a29e]">
                  One-click relay nodes on game-server panels. Custom image,
                  auto public-IP detect, identity-safe reinstalls.
                </p>
                <p className="mt-6 font-semibold text-white">
                  Run a node <span aria-hidden>→</span>
                </p>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-white/5 bg-black/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6b35]">
                Cross-NAT in practice
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Two routers, three steps, zero servers.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <div className="relative pl-8">
                    <span className="step-line absolute bottom-0 left-0 top-0 w-px" aria-hidden />
                    <p className="font-mono text-sm font-semibold text-[#ff6b35]">{s.n}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-[#a8a29e]">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="orb left-1/2 top-[-160px] h-[360px] w-[600px] -translate-x-1/2 bg-[#ff6b35]/15" />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
            <Reveal>
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Run a node.
                <br />
                <span className="headline-gradient">Join the mesh.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[#a8a29e]">
                Ten minutes, one port, about four dollars a month. Two people
                behind ordinary routers can finally talk.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/docs/peers/running-a-node"
                  className="rounded-xl bg-[#ff6b35] px-7 py-3.5 font-semibold text-[#0c0a09] transition-transform hover:scale-105"
                >
                  Run a node
                </Link>
                <Link
                  href="/docs"
                  className="rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  Read the docs
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff6b35] text-sm font-bold text-[#0c0a09]">
                P
              </span>
              <span className="font-semibold tracking-tight">PeersTech</span>
            </div>
            <nav className="flex items-center gap-7 text-sm text-[#a8a29e]">
              <Link href="/docs" className="transition-colors hover:text-white">
                Docs
              </Link>
              <Link
                href="https://github.com/PeersTech/Peers"
                className="transition-colors hover:text-white"
              >
                Peers
              </Link>
              <Link
                href="https://github.com/PeersTech/dir-api"
                className="transition-colors hover:text-white"
              >
                Directory
              </Link>
              <Link
                href="https://github.com/PeersTech/ptero-egg"
                className="transition-colors hover:text-white"
              >
                Egg
              </Link>
            </nav>
            <p className="text-xs text-[#78716c]">
              No accounts. No servers. No databases.
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
