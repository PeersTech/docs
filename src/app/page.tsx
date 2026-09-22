import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          PeersTech
        </h1>
        <p className="mb-8 text-xl text-neutral-600 dark:text-neutral-400">
          Decentralized communication. No servers. No accounts. No databases.
        </p>

        <div className="mb-12 grid gap-6 text-left sm:grid-cols-3">
          <Link
            href="/docs/peers"
            className="group rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="mb-2 text-lg font-semibold">Peers</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              End-to-end encrypted messenger. Peer-to-peer over libp2p.
            </p>
          </Link>

          <Link
            href="/docs/dir-api"
            className="group rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="mb-2 text-lg font-semibold">Directory API</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Live registry of relay nodes. Client integration planned.
            </p>
          </Link>

          <Link
            href="/docs/ptero-egg"
            className="group rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="mb-2 text-lg font-semibold">Pterodactyl Egg</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Run relay nodes on Pterodactyl panels. One-click deployment.
            </p>
          </Link>
        </div>

        <Link
          href="/docs"
          className="inline-block rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          Read the docs
        </Link>
      </div>
    </main>
  );
}
