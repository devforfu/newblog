import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/mdsvex.svelte',
  },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const theme = 'github-light-default';
      const highlighter = await createHighlighter({
        themes: [theme],
        langs: ['javascript', 'typescript', 'rust', 'python', 'json', 'bash', 'toml'],
      });
      await highlighter.loadLanguage('javascript', 'typescript', 'rust', 'python', 'json', 'bash', 'toml');
      const html = escapeSvelte(
        highlighter.codeToHtml(code, { lang, theme })
      );
      return `{@html \`${html}\` }`;
    },
  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
  },
};

export default config;
