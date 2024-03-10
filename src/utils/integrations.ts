import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export function withSitemap() {
  return sitemap({
    i18n: {
      defaultLocale: "en",
      locales: {
        en: "en-US",
      },
    },
    changefreq: "weekly",
  });
}

export function withMdx() {
  return mdx({
    syntaxHighlight: "shiki",
    gfm: true,
  });
}

export function withIcons() {
  return icon({
    svgoOptions: {},
    include: {
      "radix-icons": [
        "github-logo",
        "twitter-logo",
        "linkedin-logo",
        "external-link",
      ],
    },
  });
}
