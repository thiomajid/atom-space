import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { withIcons, withMdx, withSitemap } from "./src/utils/integrations";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://thiomajid.vercel.app",
  integrations: [withMdx(), withSitemap(), withIcons(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  experimental: {},
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
