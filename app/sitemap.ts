import { MetadataRoute } from 'next'
import { floraData, symptomData } from '@/lib/constants'
import { seo } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const p = seo.sitemap.priorities;
  const f = seo.sitemap.changeFreq;
  const now = new Date('2026-07-09');

  const staticRoutes = [
    { url: '', priority: p.home, changeFreq: f.home, lastModified: now },
    { url: '/a-propos', priority: p.apropos, changeFreq: f.default, lastModified: now },
    { url: '/blog', priority: p.blog, changeFreq: f.blog, lastModified: now },
    { url: '/contact', priority: p.contact, changeFreq: f.default, lastModified: now },
    { url: '/legal', priority: p.legal, changeFreq: f.legal, lastModified: now },
    { url: '/parcours', priority: p.parcours, changeFreq: f.default, lastModified: now },
    { url: '/tarifs', priority: p.tarifs, changeFreq: f.default, lastModified: now },
    { url: '/interventions', priority: p.interventions, changeFreq: f.interventions, lastModified: now },
    { url: '/symptomes', priority: p.symptomes, changeFreq: f.symptomes, lastModified: now },
  ]

  const serviceRoutes = floraData.services.map((s) => ({
    url: `/interventions/${s.slug}`,
    priority: p.intervention,
    changeFreq: f.default,
    lastModified: now,
  }))

  const symptomRoutes = symptomData.map((s) => ({
    url: `/symptomes/${s.slug}`,
    priority: p.symptome,
    changeFreq: f.default,
    lastModified: now,
  }))

  const blogRoutes = (floraData.posts ?? []).map((post) => ({
    url: `/blog/${post.slug}`,
    priority: p.blogPost,
    changeFreq: f.default,
    lastModified: new Date(post.published_at),
  }))

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...symptomRoutes, ...blogRoutes]

  return allRoutes.map((route) => ({
    url: `${seo.baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))
}
