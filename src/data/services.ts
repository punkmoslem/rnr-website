export interface Service {
  slug: string;
  name: string;
  icon: 'megaphone' | 'users' | 'shield' | 'compass' | 'award';
  summary: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: 'media-management',
    icon: 'megaphone',
    name: 'Media Management',
    summary:
      'Earned coverage that builds authority — from press conferences to overseas media junkets.',
    description:
      'Earned media remains the hardest signal to fake and the strongest to own. With relationships built across two and a half decades of Indonesian newsrooms — and close to 100,000 coverage clips secured for our clients — we design media programmes that earn attention on merit: the right story, the right journalist, the right moment.',
    deliverables: [
      'Press release development and distribution',
      'Press conferences and media gatherings',
      'Exclusive interviews and desk-side visits',
      'TV specials and broadcast placements',
      'Overseas media junkets and workshops',
      'Media analysis and coverage reporting',
    ],
  },
  {
    slug: 'influencer-management',
    icon: 'users',
    name: 'Influencer Management',
    summary:
      'Credible creator partnerships, managed end to end — over 40,000 posts and counting.',
    description:
      'Influence only works when the fit is genuine. We map and recommend creators whose audiences and values match your brand, manage the relationship from first approach to long-term partnership, and measure every campaign against agreed outcomes — not vanity metrics. More than 40,000 reviewer and influencer posts have been delivered under our management.',
    deliverables: [
      'Influencer mapping and recommendation',
      'Initial approach and ongoing relations',
      'Campaign and content management',
      'Monitoring, evaluation and reporting',
    ],
  },
  {
    slug: 'crisis-management',
    icon: 'shield',
    name: 'Crisis Management',
    summary:
      'Clear-headed counsel and real-time response when reputation is on the line.',
    description:
      'A crisis is rarely won in the moment it breaks — it is won in the preparation before and the discipline during. We start with problem-based background analysis to understand what is actually at stake, develop response strategy grounded in facts, and manage real-time response and editorial outreach so your organisation speaks with one clear, credible voice.',
    deliverables: [
      'Problem-based background analysis',
      'Crisis strategy development',
      'Real-time response management',
      'Editorial outreach planning',
    ],
  },
  {
    slug: 'strategic-communications',
    icon: 'compass',
    name: 'Strategic Communications & Positioning',
    summary:
      'The narrative architecture beneath every campaign — where your brand stands, and why.',
    description:
      'Before any press release or campaign, there is a harder question: what should this brand mean, and to whom? We work with leadership teams to define positioning, sharpen narratives and translate business strategy into communication strategy — adaptive, ethically sound and built to hold up across traditional, digital and emerging media.',
    deliverables: [
      'Brand and corporate positioning',
      'Narrative and message development',
      'Communication strategy and planning',
      'Stakeholder mapping and engagement',
    ],
  },
  {
    slug: 'corporate-reputation',
    icon: 'award',
    name: 'Corporate Reputation Management',
    summary:
      'Long-term reputation building, measured and managed as a business asset.',
    description:
      'Reputation is earned over years and spent in minutes. We help corporates manage it deliberately — monitoring how the organisation is perceived across media and stakeholders, strengthening the storylines that matter, and addressing vulnerabilities before they become headlines. Our longest client relationships have run for over a decade for a reason.',
    deliverables: [
      'Reputation audits and perception analysis',
      'Executive profiling and thought leadership',
      'Sustained media and stakeholder programmes',
      'Measurement and reporting frameworks',
    ],
  },
];
