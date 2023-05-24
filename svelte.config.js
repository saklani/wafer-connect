import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";

function highlight(code, lang) {
  return `<pre><code class="language-${lang}">${code}</code></pre>`;
}


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx"],
  preprocess: mdsvex(),
};

export default config;