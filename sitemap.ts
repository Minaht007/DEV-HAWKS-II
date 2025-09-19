import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dev-hawks.dev/',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://www.dev-hawks.dev/en',
          de: 'https://www.dev-hawks.dev/de',
          uk: 'https://www.dev-hawks.dev/ua', 
        },
      },
    },
    {
      url: 'https://www.dev-hawks.dev/en/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.dev-hawks.dev/de/about',
          uk: 'https://www.dev-hawks.dev/ua/about',
        },
      },
    },
    {
      url: 'https://www.dev-hawks.dev/en/services',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.dev-hawks.dev/de/services',
          uk: 'https://www.dev-hawks.dev/ua/services',
        },
      },
    },
    {
      url: 'https://www.dev-hawks.dev/en/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://www.dev-hawks.dev/de/contact',
          uk: 'https://www.dev-hawks.dev/ua/contact',
        },
      },
    },
  ]
}
