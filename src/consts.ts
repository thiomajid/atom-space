import type { Metadata, Site, Socials } from "@/types";

export const SITE_TITLE = "AtomSpace";
export const SITE_DESCRIPTION = "Abdoul Majid O. Thiombiano personal website";

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://twitter.com/thiomajid",
    icon: "radix-icons:twitter-logo",
    iconClass: "bg-blue-500 text-white rounded-full p-0.5",
  },
  {
    name: "GitHub",
    url: "https://github.com/thiomajid",
    icon: "radix-icons:github-logo",
    iconClass: "bg-black text-white rounded-full p-0.5",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thiomajid/",
    icon: "radix-icons:linkedin-logo",
    iconClass: "text-blue-600",
  },
] as const;

export const SITE: Site = {
  NAME: "AtomSpace",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE_DESCRIPTION,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/thiomajid",
  },
  {
    NAME: "Github",
    HREF: "https://github.com/thiomajid",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/thiomajid",
  },
];
