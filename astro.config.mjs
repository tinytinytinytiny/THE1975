import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind(), mdx()],
  output: "server",
  adapter: netlify()
});