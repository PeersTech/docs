import Link from 'next/link';
import './landing.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { NodeLine } from '@/components/node-line';
import { mono } from '@/lib/fonts';

const tiers = [
  {
    name: 'citizen',
    who: 'Every GUI client',
    reservations: '8 (2/peer)',
    circuits: '16 (2/peer)',
    cap: '16 MiB',
  },
  {
    name: 'node',
    who: 'peers --node',
    reservations: '64 (4/peer)',
    circuits: '64 (8/peer)',
    cap: '128 MiB',
  },
  {
    name: 'off',
    who: 'PEERS_NO_RELAY=1',
    reservations: '0',
    circuits: '0',
    cap: 'none',
  },
];

const projects = [
  {
    href: '/docs/peers',
    name: 'Peers',
    kind: 'The messenger',
    body: 'Tauri desktop app. Rust crypto core, React shell. Keys never leave the backend. BIP39 seed-phrase identity, servers with signed member lists, DHT blob parking.',
  },
  {
    href: '/docs/dir-api',
    name: 'Directory API',
    kind: 'The registry',
    body: 'Live list of relay nodes on Cloudflare Workers. Self-certifying peer IDs, atomic nonces, adaptive heartbeat cadence. Client fetching is planned, not yet wired.',
  },
  {
    href: '/docs/ptero-egg',
    name: 'Pterodactyl egg',
    kind: 'The deployment',
    body: 'One-click relay nodes on game-server panels. Custom runtime image, public-IP detect, identity-safe reinstalls.',
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <div className="landing grain min-h-screen">
        <header className="border-b border-[#e4e1d6]">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1c1b17] text-sm font-bold text-[#fafaf7]"
              >
                P
              </span>
              <span className="text-[17px] font-semibold tracking-tight">PeersTech</span>
            </Link>
            <nav className="flex items-center gap-6 text-[15px]">
              <Link
                href="/docs/peers/running-a-node"
                className="hidden text-[#5f5d55] transition-colors hover:text-[#1c1b17] sm:inline"
              >
                Run a node
              </Link>
              <Link
                href="https://github.com/PeersTech/Peers"
                className="hidden text-[#5f5d55] transition-colors hover:text-[#1c1b17] sm:inline"
              >
                GitHub
              </Link>
              <Link
                href="/docs"
                className="rounded-lg bg-[#1c1b17] px-4 py-2.5 text-[15px] font-medium text-[#fafaf7] transition-transform hover:scale-[1.03]"
              >
                Read the docs
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-6">
          <section className="grid gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className={`${mono.className} rise text-sm text-[#5f5d55]`}>
                peers --node
              </p>
              <h1
                className="rise display-hero mt-4 font-semibold"
                style={{ animationDelay: '100ms' }}
              >
                Two routers. One line. Zero servers.
              </h1>
              <p
                className="rise mt-6 max-w-md text-lg leading-relaxed text-[#5f5d55]"
                style={{ animationDelay: '200ms' }}
              >
                Peers is a serverless messenger. Every message is encrypted
                end-to-end and travels peer to peer over a public libp2p mesh.
                No accounts, no company reading along, no server to seize.
              </p>
              <div
                className="rise mt-8 flex flex-wrap gap-3"
                style={{ animationDelay: '300ms' }}
              >
                <Link
                  href="/docs/peers/running-a-node"
                  className="rounded-xl bg-[#1c1b17] px-6 py-3.5 font-medium text-[#fafaf7] transition-transform hover:scale-[1.03]"
                >
                  Run a node
                </Link>
                <Link
                  href="/docs"
                  className="rounded-xl border border-[#d8d4c7] px-6 py-3.5 font-medium transition-colors hover:border-[#1c1b17]"
                >
                  Read the docs
                </Link>
              </div>
            </div>
            <div className="rise" style={{ animationDelay: '400ms' }}>
              <NodeLine />
            </div>
          </section>

          <section className="border-t border-[#e4e1d6] py-14">
            <h2 className="max-w-2xl display-section font-semibold">
              The DHT finds peers. A node makes them reachable.
            </h2>
            <div className="mt-8 grid max-w-4xl gap-8 text-[17px] leading-relaxed text-[#5f5d55] sm:grid-cols-3">
              <p>
                <strong className="font-semibold text-[#1c1b17]">Discovery</strong> is
                free. The public IPFS DHT already tells two laptops where each
                other is.
              </p>
              <p>
                <strong className="font-semibold text-[#1c1b17]">Reachability</strong> is
                the hard part. Behind home routers, neither side can be dialed
                at all.
              </p>
              <p>
                <strong className="font-semibold text-[#1c1b17]">Relaying</strong> bridges
                the gap. Both peers dial one public node, chat, then upgrade to
                a direct connection.
              </p>
            </div>
          </section>

          <section className="border-t border-[#e4e1d6] py-14">
            <h2 className="display-section font-semibold">
              Three steps, in order
            </h2>
            <ol className="mt-8">
              {[
                {
                  n: '1',
                  title: 'Run a node',
                  body: 'One binary, one port, one command. It idles at 30 to 60 MB of RAM on a Pi, an old laptop, or a four-dollar VPS, and prints a PEERS_NODES line with its public address.',
                },
                {
                  n: '2',
                  title: 'Share the line',
                  body: 'Hand the PEERS_NODES line to both users. They paste it into the PEERS_NODES variable or nodes.json once. More than one node is better, since any single node can go down.',
                },
                {
                  n: '3',
                  title: 'Chat, then go direct',
                  body: 'Messages flow relayed through the node while DCUtR hole-punching tries both NATs. When it succeeds the node drops out of the path entirely.',
                },
              ].map((s) => (
                <li key={s.n} className="grid gap-2 border-t border-[#e4e1d6] py-7 sm:grid-cols-[64px_220px_1fr] sm:gap-6">
                  <span className={`${mono.className} text-[15px] text-[#5f5d55]`}>
                    {s.n}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="max-w-2xl text-[17px] leading-relaxed text-[#5f5d55]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="border-t border-[#e4e1d6] py-14">
            <h2 className="display-section font-semibold">
              Every install relays, in its tier
            </h2>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#5f5d55]">
              A node is not a special build, just a different tier of the same
              binary. Whether an install actually relays is decided by
              reachability: an unreachable client advertises slots harmlessly,
              because nobody can dial it.
            </p>
            <div className="mt-8 overflow-x-auto">
              <table className="tier-table min-w-[560px] text-[15px]">
                <thead>
                  <tr>
                    <th scope="col">Tier</th>
                    <th scope="col">Who</th>
                    <th scope="col">Reservations</th>
                    <th scope="col">Circuits</th>
                    <th scope="col">Per circuit</th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((t) => (
                    <tr key={t.name}>
                      <td className={`${mono.className} font-medium`}>{t.name}</td>
                      <td className="text-[#5f5d55]">{t.who}</td>
                      <td>{t.reservations}</td>
                      <td>{t.circuits}</td>
                      <td>{t.cap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-[#e4e1d6] py-14">
            <h2 className="display-section font-semibold">
              The projects
            </h2>
            <div className="mt-4">
              {projects.map((p) => (
                <Link key={p.href} href={p.href} className="ledger-row grid gap-1 py-7 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <p className="text-[15px] text-[#5f5d55]">{p.kind}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-2 max-w-2xl text-[17px] leading-relaxed text-[#5f5d55]">
                      {p.body}
                    </p>
                  </div>

                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-[#e4e1d6] py-16">
            <h2 className="max-w-2xl display-section font-semibold">
              Ten minutes, one port, and two people can talk across the world.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs/peers/running-a-node"
                className="rounded-xl bg-[#d9480f] px-6 py-3.5 font-medium text-white transition-transform hover:scale-[1.03]"
              >
                Run a node
              </Link>
              <Link
                href="/docs"
                className="rounded-xl border border-[#d8d4c7] px-6 py-3.5 font-medium transition-colors hover:border-[#1c1b17]"
              >
                Read the docs
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#e4e1d6]">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-[15px] text-[#5f5d55] sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-[#1c1b17]">PeersTech</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/docs" className="transition-colors hover:text-[#1c1b17]">
                Docs
              </Link>
              <Link
                href="https://github.com/PeersTech/Peers"
                className="transition-colors hover:text-[#1c1b17]"
              >
                Peers
              </Link>
              <Link
                href="https://github.com/PeersTech/dir-api"
                className="transition-colors hover:text-[#1c1b17]"
              >
                Directory
              </Link>
              <Link
                href="https://github.com/PeersTech/ptero-egg"
                className="transition-colors hover:text-[#1c1b17]"
              >
                Egg
              </Link>
            </nav>
            <p className="text-sm">No accounts. No servers. No databases.</p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
