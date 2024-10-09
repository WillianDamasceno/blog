// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://WillianDamasceno.github.io",
  base: "blog",
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
});
