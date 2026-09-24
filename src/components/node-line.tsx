'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { mono } from '@/lib/fonts';

const SEGS = [
  { text: 'PEERS_NODES=', tone: 'text-[#98a2b3]' },
  { text: '/ip4/203.0.113.7', tone: 'text-[#f5f7fa]' },
  { text: '/tcp/4001', tone: 'text-[#fbbf24]' },
  { text: '/p2p/12D3KooWQ7xJ4kR2mN8pL5vX3wY6zA9bC1dE4fG7hJ0kL2mN5pQ', tone: 'text-[#ff8a4d]' },
];

const DIM = 'text-[#98a2b3]';

export function NodeLine() {
  const [lit, setLit] = useState(-1);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLit(SEGS.length);
      return;
    }
    timers.current = SEGS.map((_, i) =>
      window.setTimeout(() => setLit(i + 1), 500 + i * 420),
    );
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="term overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className={`${mono.className} ml-3 text-xs ${DIM}`}>peers --node</span>
        </div>
        <span className={`flex items-center gap-2 text-xs ${DIM}`}>
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-[#47cd89]" />
          example output · not a live node
        </span>
      </div>
      <div className={`${mono.className} space-y-2 p-5 text-[13px] leading-7`}>
        <p className={DIM}>$ ./peers --node</p>
        <p className={DIM}>peers node peer id: 12D3KooW…</p>
        <p className="break-all" aria-label="PEERS_NODES line">
          {SEGS.map((s, i) => (
            <span key={i} className={`dial-seg ${i < lit ? 'lit' : ''} ${s.tone}`}>
              {s.text}
            </span>
          ))}
        </p>
        <p className={DIM}>peers node is up.</p>
      </div>
      <div className="border-t border-white/10 px-5 py-4">
        <Link
          href="/docs/peers/running-a-node"
          className={`${mono.className} block w-full rounded-lg bg-[#ff6b35] px-4 py-3 text-center text-sm font-medium text-[#0b0d10] transition-colors hover:bg-[#ff7d4d]`}
        >
          Read the node guide
        </Link>
        <p className={`mt-3 text-xs leading-relaxed ${DIM}`}>
          This is an illustrative address, not a live node. A real operator
          copies the line printed by <code>peers --node</code> into
          <code> PEERS_NODES</code> or <code>nodes.json</code>.
        </p>
      </div>
    </div>
  );
}
