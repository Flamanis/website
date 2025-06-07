// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://nice-with-a-cup-of-tea-a60a19e5af38.herokuapp.com/",
  integrations: [preact()],
  adapter: node( {
    mode: 'middleware',
  })
});