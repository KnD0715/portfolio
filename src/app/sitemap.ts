import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ];
}
