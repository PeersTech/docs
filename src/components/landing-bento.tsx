import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
}

/** A lightweight 21st.dev-style bento layout with a strong first tile. */
export function BentoGrid({children}: BentoGridProps) {
  return <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{children}</div>;
}

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  featured?: boolean;
}

/** Content card used for the feature story; motion stays hover-only. */
export function BentoCard({icon: Icon, title, body, featured = false}: BentoCardProps) {
  return (
    <article className={`u-card p-7 ${featured ? 'sm:col-span-2 lg:col-span-3' : 'lg:col-span-3'}`}>
      <span className="icon-chip">
        <Icon size={22} strokeWidth={1.8} aria-hidden />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2.5 leading-relaxed text-[#98a2b3]">{body}</p>
    </article>
  );
}
