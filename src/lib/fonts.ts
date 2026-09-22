import { Funnel_Display, JetBrains_Mono } from 'next/font/google';

export const funnel = Funnel_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});
