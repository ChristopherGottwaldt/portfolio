import nextMdx from '@next/mdx'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'; // GitHub-flavored markdown (includes checkboxes, tables, etc.)

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm], // Include these plugins
    rehypePlugins: [rehypePrism], // Enable syntax highlighting for code blocks
  },
})

const nextConfig = {
  pageExtensions: ['mdx', 'tsx', 'ts', 'jsx', 'js', 'md'],
  reactStrictMode: true,  // Optional: React strict mode for better debugging
}

export default withMdx(nextConfig)
