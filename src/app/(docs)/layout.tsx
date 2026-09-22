import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <div className="flex flex-col min-h-screen">{children}</div>
    </RootProvider>
  );
}
