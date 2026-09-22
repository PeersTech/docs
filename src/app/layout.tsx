import './globals.css';
import type { ReactNode } from 'react';
import { Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PeersTech — serverless encrypted communication',
    template: '%s · PeersTech',
  },
  description:
    'Peers is a serverless, end-to-end encrypted messenger. No accounts. No servers. No databases.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
