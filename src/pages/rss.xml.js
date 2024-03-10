import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const [posts, projects] = await Promise.all([
    getCollection("blog"),
    getCollection("projects"),
  ]);

  const blogItems = posts
    .filter((x) => !x.data.draft)
    .map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    }));

  const projectItems = projects
    .filter((x) => x.data.isPublic)
    .map((project) => ({
      ...project.data,
      link: `/projects/${project.slug}/`,
    }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blogItems.concat(projectItems),
  });
}
