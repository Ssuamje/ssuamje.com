import { MetadataRoute } from 'next'
import { getSortedProjects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getSortedProjects()
  
  const projectUrls = projects.map((project) => ({
    url: `https://ssuamje.com/projects/${project.name}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://ssuamje.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectUrls,
  ]
}