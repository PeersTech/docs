import './globals.css';
import type { ReactNode } from 'react';
import { funnel } from '@/lib/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'PeersTech — serverless encrypted communication',
    template: '%s · PeersTech',
  },
  description:
    'Peers is a serverless, end-to-end encrypted messenger with no central account or message database. Optional relay nodes and a node directory help peers behind NAT connect.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={funnel.className}>{children}</body>
    </html>
  );
}
