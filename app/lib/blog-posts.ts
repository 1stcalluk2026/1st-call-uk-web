export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-service-business-websites-fail-to-convert",
    title: "Why service business websites fail to convert",
    subtitle:
      "Most UK service businesses do not have a traffic problem. They have a clarity, trust, and conversion problem.",
    date: "2026-03-12",
    image: "/blog/blog-convert.png",
    content: [
      "A website can look modern and still fail at the one job that matters: helping the right people get in touch. For legal, financial, immigration, construction, and other service businesses, visitors usually arrive with a specific problem. If the site does not explain the offer, prove credibility, and make the next step obvious, they leave.",
      "The most common issues are slow pages, vague headlines, weak proof, and enquiry forms that ask too much too soon. Template platforms often add another layer of drag: bloated code, plugin conflicts, and layouts that were never designed around how your clients actually buy.",
      "A stronger website starts with positioning. Visitors should understand who you help, what you do, and why they should trust you within a few seconds. From there, the page structure, calls to action, and technical performance all support the same outcome: more qualified enquiries.",
      "If your current site is generating traffic but not conversations, an audit is usually the right first step. It shows what to fix first, and whether you need a focused improvement plan or a full custom rebuild.",
    ],
  },
  {
    slug: "what-a-high-performance-website-actually-means",
    title: "What a high-performance website actually means",
    subtitle:
      "Speed, security, and clean structure are not extras. They are the foundation of trust and search visibility.",
    date: "2026-04-08",
    image: "/blog/blog-performance.png",
    content: [
      "High-performance does not mean a flashy animation or a heavier design. It means the site loads quickly, stays stable, and is easy to use on a phone. Those details affect bounce rates, search rankings, and whether someone feels confident enough to enquire.",
      "Custom-built websites have an advantage here. Without template bloat, pages can be leaner, more secure, and easier to maintain. That also makes it simpler to add the pages, schema, and content systems a service business actually needs.",
      "Performance also includes the user journey. A fast site with confusing messaging still underperforms. The best builds combine technical speed with clear copy, strong trust signals, and a short path from first visit to first contact.",
      "For most UK service businesses, this is the difference between a brochure and a working sales asset. If you want the website to bring in better enquiries, start with performance and clarity together — not one or the other.",
    ],
  },
  {
    slug: "ai-search-optimisation-for-uk-service-businesses",
    title: "AI search optimisation for UK service businesses",
    subtitle:
      "Clients are no longer only searching on Google. They are asking AI tools who to trust, and your website needs to be easy to cite.",
    date: "2026-05-21",
    image: "/blog/blog-ai-search.png",
    content: [
      "AI search engines and answer tools now sit alongside Google as a discovery channel. If your service pages are vague, unstructured, or hard to quote, those tools are more likely to recommend a competitor with clearer content.",
      "GEO — generative engine optimisation — is the work of making your business easy to understand. That includes structured data, answer-ready copy, entity-clear service pages, and content that matches the questions your clients actually ask.",
      "It is not a replacement for a good website. It depends on one. Fast pages, clear services, and a trustworthy brand still come first. AI visibility then builds on that foundation with schema, FAQs, and content systems that stay easy to update.",
      "If you want to be found by the right people in both traditional search and AI tools, start with the pages that already drive enquiries. Make them clearer, more specific, and easier for both people and machines to quote accurately.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
