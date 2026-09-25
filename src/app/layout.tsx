import './globals.css';
import type { ReactNode } from 'react';
import { funnel } from '@/lib/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'PeersTech — serverless peer-to-peer communication',
    template: '%s · PeersTech',
  },
  description:
    'Peers is a serverless peer-to-peer messenger with sealed direct messages, no central account or project message database, and optional relay infrastructure for peers behind NAT.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={funnel.className}>{children}</body>
    </html>
  );
}
