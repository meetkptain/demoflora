import { floraData } from '@/lib/constants';
import { seo } from '@/lib/seo';

export async function GET() {
  const posts = floraData.posts ?? [];

  const items = posts.map((p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${seo.baseUrl}/blog/${p.slug}</link>
      <guid>${seo.baseUrl}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.published_at).toUTCString()}</pubDate>
      <description><![CDATA[Article du Dr Flora Jullian : ${p.title}]]></description>
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dr Flora Jullian — Actualités & Expertise</title>
    <link>${seo.baseUrl}/blog</link>
    <description>Articles du Dr Flora Jullian, chirurgien maxillo-facial au GHRMSA Mulhouse.</description>
    <language>fr</language>
    <atom:link href="${seo.baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
