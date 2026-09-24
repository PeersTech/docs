import Link from 'next/link';
import {
  ShieldCheck,
  ServerOff,
  Network,
  Zap,
  KeyRound,
  Cpu,
} from 'lucide-react';
import './landing.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { NodeLine } from '@/components/node-line';
import { BentoCard, BentoGrid } from '@/components/landing-bento';
import { mono } from '@/lib/fonts';

const features = [
  {
    icon: ShieldCheck,
    title: 'End-to-end encrypted',
    body: 'ChaCha20-Poly1305 with per-session HKDF hash-chain keys. A fresh key per message, forward secrecy throughout.',
  },
  {
    icon: ServerOff,
    title: 'Serverless by design',
    body: 'No central account or message database. Derived private keys and message decryption stay in the Rust backend; optional relay infrastructure helps peers behind NAT connect.',
  },
  {
    icon: Network,
    title: 'Peer-to-peer mesh',
    body: 'Gossipsub live topics plus Kademlia DHT blob parking on the public libp2p network. Senders can go offline.',
  },
  {
    icon: Zap,
    title: 'Cross-NAT relaying',
    body: 'Always-on nodes give two home routers a rendezvous point, then DCUtR hole-punching upgrades them to direct.',
  },
  {
    icon: KeyRound,
    title: 'Seed-phrase identity',
    body: 'A BIP39 12/24-word phrase is the private key. Same phrase rebuilds the same peer ID on any machine.',
  },
  {
    icon: Cpu,
    title: 'Low-end friendly',
    body: 'A node idles at 30 to 60 MB of RAM. Raspberry Pi, old laptops and cheap VPSs carry the backbone.',
  },
];

const metrics = [
  { value: '30–60 MB', label: 'Idle RAM per node' },
  { value: '4', label: 'Core Peers binary variables' },
  { value: '64', label: 'Relay slots per node' },
  { value: '12/24', label: 'Words in your recovery identity' },
];

function Bar({
  label,
  detail,
  value,
  max,
  tone,
}: {
  label: string;
  detail: string;
  value: number;
  max: number;
  tone: string;
}) {
  const pct = Math.max(2, Math.round((value / max) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[15px] font-medium text-white">
          {label} <span className="font-normal text-[#98a2b3]">{detail}</span>
        </p>
        <p className={`${mono.className} shrink-0 text-sm text-white`}>{value}</p>
      </div>
      <div
        className="bar-track mt-2 h-2.5"
        role="img"
        aria-label={`${label}: ${value} of ${max}`}
      >
        <div className={`bar-fill h-full ${tone}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <SmoothScroll>
      <div className="landing min-h-screen">
        <header className="sticky inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0d10]">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff6b35] text-base font-bold text-[#0b0d10]"
              >
                P
              </span>
              <span className="text-[17px] font-semibold tracking-tight">PeersTech</span>
            </Link>
            <nav className="hidden items-center gap-8 text-[15px] text-[#98a2b3] sm:flex">
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
              className="rounded-lg bg-[#ff6b35] px-4 py-2.5 text-sm font-semibold text-[#0b0d10] transition-transform hover:scale-105"
            >
              Read the docs
            </Link>
          </div>
        </header>

        <main>
          <section className="glow-top relative px-6 pb-16 pt-20 text-center sm:pt-28">
            <div className="mx-auto max-w-4xl">
              <p className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-[#98a2b3]">
                <span className="live-dot inline-block h-2 w-2 rounded-full bg-[#47cd89]" />
                Serverless, encrypted, peer-to-peer
              </p>
              <h1
                className="rise display-hero mx-auto mt-6 max-w-3xl font-semibold"
                style={{ animationDelay: '110ms' }}
              >
                Two routers. One line. No central message server.
              </h1>
              <p
                className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#98a2b3]"
                style={{ animationDelay: '220ms' }}
              >
                Peers is a desktop messenger where every byte is encrypted
                end-to-end and every message travels peer-to-peer over a public
                libp2p mesh. No accounts, no company reading along, no central message database to
                seize.
              </p>
              <div
                className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
                style={{ animationDelay: '330ms' }}
              >
                <Link
                  href="/docs/peers/running-a-node"
                  className="rounded-xl bg-[#ff6b35] px-7 py-3.5 font-semibold text-[#0b0d10] transition-transform hover:scale-105"
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
              <div className="rise mx-auto mt-12 max-w-2xl text-left" style={{ animationDelay: '440ms' }}>
                <NodeLine />
              </div>
            </div>
          </section>

          <section className="border-y border-white/5 bg-[#0e1114]">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
              <p className="text-sm text-[#667085]">Built on open protocols</p>
              {['libp2p', 'Kademlia DHT', 'gossipsub', 'Noise', 'QUIC', 'BIP39'].map((p) => (
                <span key={p} className={`${mono.className} text-sm text-[#98a2b3]`}>
                  {p}
                </span>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label} className="u-card p-6 text-center">
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm text-[#98a2b3]">{m.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <p className="text-center text-sm font-semibold text-[#ff8a4d]">Why Peers</p>
            <h2 className="display-section mx-auto mt-3 max-w-2xl text-center font-semibold">
              Chat that trusts no one but the people chatting
            </h2>
            <BentoGrid>
              {features.map((f, index) => (
                <BentoCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  body={f.body}
                  featured={index === 0}
                />
              ))}
            </BentoGrid>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-center text-sm font-semibold text-[#ff8a4d]">Capacity</p>
            <h2 className="display-section mx-auto mt-3 max-w-2xl text-center font-semibold">
              A node is cheap because chat is small
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-[#98a2b3]">
              Every install relays in its tier. Per-peer caps stop one busy peer
              from consuming every slot on a shared box.
            </p>
            <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-2">
              <div className="u-card space-y-6 p-7">
                <h3 className="font-semibold tracking-tight">Reservations per tier</h3>
                <Bar label="citizen" detail="2 per peer" value={8} max={64} tone="bg-[#667085]" />
                <Bar label="node" detail="4 per peer" value={64} max={64} tone="bg-[#ff6b35]" />
                <Bar label="off" detail="PEERS_NO_RELAY=1" value={0} max={64} tone="bg-[#333a44]" />
              </div>
              <div className="u-card space-y-6 p-7">
                <h3 className="font-semibold tracking-tight">Circuits per tier</h3>
                <Bar label="citizen" detail="2 per peer" value={16} max={64} tone="bg-[#667085]" />
                <Bar label="node" detail="8 per peer" value={64} max={64} tone="bg-[#ff6b35]" />
                <Bar label="RAM footprint" detail="of a 2 GB VPS" value={60} max={2048} tone="bg-[#47cd89]" />
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-[#667085]">
              Reservation, circuit and RAM figures from the node operator guide.
              RAM bar shows 60 MB against a 2 GB VPS.
            </p>
          </section>

          <section className="border-y border-white/5 bg-[#0e1114]">
            <div className="mx-auto max-w-6xl px-6 py-20">
              <p className="text-sm font-semibold text-[#ff8a4d]">Cross-NAT in practice</p>
              <h2 className="display-section mt-3 max-w-2xl font-semibold">
                Three steps, in order
              </h2>
              <div className="mt-10">
                {[
                  {
                    n: '01',
                    title: 'Run a node',
                    body: 'One binary, one port, one command. It prints a PEERS_NODES line with its public address.',
                  },
                  {
                    n: '02',
                    title: 'Share the line',
                    body: 'Hand the line to both users. They paste it into PEERS_NODES or nodes.json once.',
                  },
                  {
                    n: '03',
                    title: 'Chat, then go direct',
                    body: 'Messages flow relayed while hole-punching tries both NATs. On success the node drops out.',
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="ledger-row grid gap-1 py-7 sm:grid-cols-[72px_220px_1fr] sm:gap-6"
                  >
                    <span className={`${mono.className} text-[15px] text-[#667085]`}>
                      {s.n}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="max-w-2xl text-[17px] leading-relaxed text-[#98a2b3]">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-center text-sm font-semibold text-[#ff8a4d]">The ecosystem</p>
            <h2 className="display-section mx-auto mt-3 max-w-2xl text-center font-semibold">
              Three projects, one mesh
            </h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  href: '/docs/peers',
                  tag: 'App',
                  name: 'Peers',
                  body: 'The messenger itself. Tauri desktop app, Rust crypto core, React shell. Keys never leave the backend.',
                  cta: 'Explore Peers',
                },
                {
                  href: '/docs/dir-api',
                  tag: 'Service',
                  name: 'Directory API',
                  body: 'Live registry of relay nodes on Cloudflare. Signed IDs, adaptive heartbeat cadence. Client fetching planned.',
                  cta: 'Explore the API',
                },
                {
                  href: '/docs/ptero-egg',
                  tag: 'Deploy',
                  name: 'Pterodactyl egg',
                  body: 'One-click relay nodes on game-server panels. Custom image, public-IP detect, identity-safe reinstalls.',
                  cta: 'Run a node',
                },
              ].map((p) => (
                <Link key={p.href} href={p.href} className="u-card flex h-full flex-col p-8">
                  <p className={`${mono.className} text-xs uppercase tracking-[0.15em] text-[#ff8a4d]`}>
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-[#98a2b3]">{p.body}</p>
                  <p className="mt-6 font-semibold text-white">{p.cta}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="glow-top border-t border-white/5">
            <div className="mx-auto max-w-3xl px-6 py-24 text-center">
              <h2 className="display-hero font-semibold">
                Run a node. Join the mesh.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-[#98a2b3]">
                Ten minutes, one port, about four dollars a month. Two people
                behind ordinary routers can finally talk.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/docs/peers/running-a-node"
                  className="rounded-xl bg-[#ff6b35] px-7 py-3.5 font-semibold text-[#0b0d10] transition-transform hover:scale-105"
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
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff6b35] text-sm font-bold text-[#0b0d10]"
              >
                P
              </span>
              <span className="font-semibold tracking-tight">PeersTech</span>
            </div>
            <nav className="flex items-center gap-7 text-sm text-[#98a2b3]">
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
            <p className="text-xs text-[#667085]">No accounts. No central message database.</p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
