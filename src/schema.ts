/**
 * 结构化数据（schema.org JSON-LD）。
 *
 * 为什么单独一个文件：schema 里的服务清单、问答、覆盖区县必须和页面文案
 * 永远一致。直接从 data.ts 生成，就不会出现「改了页面忘了改 schema」——
 * 那种不一致会直接拉低搜索引擎和大模型对站点的可信度评分。
 *
 * 由 scripts/prerender.mjs 在构建时注入 index.html 的 <!--JSONLD--> 占位处。
 */
import { AREAS, COMPANY, FAQS, SERVICES, SITE_URL } from './data'

/** 周口市川汇区（公司所在地）大致经纬度，用于本地搜索的地域归属 */
const GEO = { lat: 33.625, lng: 114.6966 }

const BIZ_ID = `${SITE_URL}#business`

export function buildJsonLd(): string {
  const graph = [
    {
      '@type': ['LocalBusiness', 'Plumber', 'HomeAndConstructionBusiness'],
      '@id': BIZ_ID,
      name: COMPANY.name,
      alternateName: [COMPANY.short, '周口浩鑫管道疏通', '周口抽污清掏'],
      description:
        '周口本地管道疏通、化粪池清理、高压清洗、污水池隔油池清掏、市政管网清淤服务商。自有清洗吸污一体车，本地司机本地工人，不转包，24 小时接单。',
      url: SITE_URL,
      telephone: `+86-${COMPANY.phone}`,
      image: [`${SITE_URL}images/truck.jpg`, `${SITE_URL}images/work-manhole.jpg`],
      logo: `${SITE_URL}favicon.svg`,
      priceRange: '面议',
      currenciesAccepted: 'CNY',
      foundingDate: String(COMPANY.since),
      knowsLanguage: 'zh-CN',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '川汇区',
        addressLocality: '周口市',
        addressRegion: '河南省',
        addressCountry: 'CN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
      areaServed: AREAS.map((name) => ({ '@type': 'City', name: `${name}（周口市）` })),
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '服务项目',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            description: s.desc,
            serviceType: s.title,
            provider: { '@id': BIZ_ID },
            areaServed: { '@type': 'City', name: '周口市' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: `${COMPANY.name}｜周口管道疏通 抽污清掏`,
      inLanguage: 'zh-CN',
      publisher: { '@id': BIZ_ID },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}#faq`,
      isPartOf: { '@id': `${SITE_URL}#website` },
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return `<script type="application/ld+json">\n${JSON.stringify(
    { '@context': 'https://schema.org', '@graph': graph },
    null,
    2,
  )}\n</script>`
}
