import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX({
  outDir: 'src/.source',
});

const nextConfig = {};

export default withMDX(nextConfig);
