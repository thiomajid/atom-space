import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { withIcons, withMdx, withSitemap } from "./src/utils/integrations";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
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
});
