import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import {escapeSvelte, mdsvex} from 'mdsvex';

import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

import { THEMES, highlightCode } from './src/lib/highlighter.js';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: { _: './src/mdsvex.svelte' },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [
    [rehypeSlug, {}],
    [rehypePrettyCode,
      {
        keepBackground: false,
        theme: {
          light: THEMES[0],
          dark: THEMES[1],
        }
      }
    ]
  ],
  highlight: { highlighter: async (code, lang) => {
      const { light, dark } = await highlightCode(code, lang);
      return `{@html \`${escapeSvelte(light)}${escapeSvelte(dark)}\` }`;
    }},
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
