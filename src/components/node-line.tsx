'use client';

import { useEffect, useRef, useState } from 'react';
import { mono } from '@/lib/fonts';

const LINE = '/ip4/203.0.113.7/tcp/4001/p2p/12D3KooWQ7xJ4kR2mN8pL5vX3wY6zA9bC1dE4fG7hJ0kL2mN5pQ';

const SEGS = [
  { text: 'PEERS_NODES=', tone: 'text-[#8a877c]' },
  { text: '/ip4/203.0.113.7', tone: 'text-[#d8d5c9]' },
  { text: '/tcp/4001', tone: 'text-[#fbbf24]' },
  { text: '/p2p/12D3KooWQ7xJ4kR2mN8pL5vX3wY6zA9bC1dE4fG7hJ0kL2mN5pQ', tone: 'text-[#ff8a4d]' },
];

export function NodeLine() {
  const [lit, setLit] = useState(-1);
  const [copied, setCopied] = useState(false);
  const [rung, setRung] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLit(SEGS.length);
      return;
    }
    timers.current = SEGS.map((_, i) =>
      window.setTimeout(() => setLit(i + 1), 500 + i * 420),
    );
    const ring = window.setTimeout(() => setRung(true), 500 + SEGS.length * 420 + 200);
    const unring = window.setTimeout(() => setRung(false), 500 + SEGS.length * 420 + 1600);
    timers.current.push(ring, unring);
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const copy = async () => {
    const text = `PEERS_NODES=${LINE}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="term overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className={`${mono.className} ml-3 text-xs text-[#8a877c]`}>
            peers --node
          </span>
        </div>
        <span className="flex items-center gap-2 text-xs text-[#8a877c]">
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-green-500" />
          reachability: public
        </span>
      </div>
      <div className={`${mono.className} space-y-2 p-5 text-[13px] leading-7`}>
        <p className="text-[#8a877c]">
          <span className={mono.className}>$ ./peers --node</span>
        </p>
        <p className="text-[#8a877c]">
          <span className={mono.className}>peers node peer id: 12D3KooW…</span>
        </p>
        <p className={`${mono.className} break-all`} aria-label="PEERS_NODES line">
          {SEGS.map((s, i) => (
            <span key={i} className={`dial-seg ${i < lit ? 'lit' : ''} ${s.tone}`}>
              {s.text}
            </span>
          ))}
        </p>
        <p className="text-[#8a877c]">
          <span className={mono.className}>peers node is up.</span>
        </p>
      </div>
      <div className="border-t border-white/10 px-5 py-4">
        <button
          type="button"
          onClick={copy}
          className={`copy-btn ${rung ? 'rung' : ''} ${mono.className} w-full rounded-lg px-4 py-3 text-sm font-medium ${
            copied ? 'bg-green-500 text-[#111110]' : 'bg-[#ff6b35] text-[#111110] hover:bg-[#ff7d4d]'
          }`}
        >
          {copied ? 'Copied to clipboard' : 'Copy the line'}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-[#8a877c]">
          This is the whole onboarding. The operator copies one line, both users
          paste it once into PEERS_NODES or nodes.json.
        </p>
      </div>
    </div>
  );
}
