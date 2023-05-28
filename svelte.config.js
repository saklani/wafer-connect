import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({}),
  },
  extensions: [".svelte", ".svx"] ,
  preprocess: [mdsvex({  extensions: [".svelte", ".svx"] }), vitePreprocess()],
};

export default config;