import type { CollectionEntry } from "astro:content";

export function updateProjectWithBadgeStyle(
  project: CollectionEntry<"projects">
) {
  let badgeColor = getProjectBadgeStyle(project.data.state);

  return {
    badgeColor,
    ...project,
  };
}

export function getProjectBadgeStyle(
  state: CollectionEntry<"projects">["data"]["state"]
) {
  let badgeColor = "";

  switch (state) {
    case "Complete":
      badgeColor = "bg-gray-900 text-white";
      break;
    case "In Progress":
      badgeColor = "bg-blue-600 text-white";
      break;
    case "Paused":
      badgeColor = "bg-gray-900 text-white";
  }
  return badgeColor;
}
