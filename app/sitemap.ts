import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dr-flora-jullian.fr'
  
  const routes = [
    '',
    '/a-propos',
    '/blog',
    '/contact',
    '/legal',
    '/parcours',
    '/services/chirurgie-maxillo-faciale',
    '/services/dents-de-sagesse',
    '/services/douleur-machoire',
    '/services/orthognathie',
    '/symptomes/dents-de-sagesse-poussent',
    '/symptomes/douleur-machoire',
    '/symptomes/gonflement',
    '/symptomes/ouverture-bouche',
    '/symptomes/traumatisme-facial',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
