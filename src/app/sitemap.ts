import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insander.org';

  return [
    {
      url: `${baseUrl}/tr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Ana sayfa en yüksek öncelik
    },
    {
      url: `${baseUrl}/tr/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tr/projects/gazze-yemek-yardimi`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, // SEO hedeflerimiz için yüksek öncelik
    },
    {
      url: `${baseUrl}/tr/projects/gazze-zekat-bagisi`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, // SEO hedeflerimiz için yüksek öncelik
    },
    {
      url: `${baseUrl}/tr/projects/kurban-bagisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Varsa kurumsal, iletişim gibi diğer statik sayfalarınızı da buraya ekleyebilirsiniz
    {
      url: `${baseUrl}/tr/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}