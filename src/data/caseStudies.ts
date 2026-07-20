// Case studies drawn from R&R's 2025 credentials deck.
// NOTE FOR EDITORS: confirm with each client that their name, logo and
// figures may appear on a public website before launch. Pitch decks and
// public sites carry different disclosure norms.

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  title: string;
  period: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'msd-indonesia',
    client: 'MSD Indonesia',
    sector: 'Healthcare',
    title: 'Putting cervical cancer prevention on the national agenda',
    period: 'PR Retainer · 2024–present',
    challenge:
      'Cervical cancer remains one of Indonesia’s most preventable yet most under-discussed public health threats. MSD needed sustained, credible national coverage that educated the public on HPV prevention without drifting into product promotion.',
    approach:
      'We built a public health education programme anchored by the "Tenang untuk Menang" campaign in collaboration with the Ministry of Health, supported by journalism roadshows that equipped health reporters across regions to cover HPV and cervical cancer accurately and consistently.',
    result:
      'Twelve activities delivered 759 media articles, establishing MSD as a trusted voice in national cervical cancer prevention and keeping HPV education in the news cycle year-round.',
    metrics: [
      { value: '759', label: 'Media articles' },
      { value: '12', label: 'Activities delivered' },
    ],
  },
  {
    slug: 'bayer',
    client: 'Bayer',
    sector: 'Healthcare & Wellness',
    title: 'From product launches to a science education platform',
    period: 'PR Retainer · 2018–2025',
    challenge:
      'Over a seven-year retainer, Bayer’s communication needs matured from individual product launches to a broader ambition: owning credible science conversations on food security, self-care and kidney health.',
    approach:
      'We evolved the programme into "The Science Behind" — an educational editorial series that translated Bayer’s science into stories journalists wanted to tell, sustained by consistent media relations across every business division.',
    result:
      'The series and supporting programme generated more than 500 media articles across 2023–2025, repositioning Bayer from product advertiser to science educator in the Indonesian press.',
    metrics: [
      { value: '510+', label: 'Media articles, 2023–2025' },
      { value: '7 yrs', label: 'Retained partnership' },
    ],
  },
  {
    slug: 'jec-eye-hospitals',
    client: 'JEC Eye Hospitals & Clinics',
    sector: 'Healthcare',
    title: 'Building Indonesia’s most visible voice in eye health',
    period: 'PR Retainer · 2018–2025',
    challenge:
      'JEC needed to stand apart in an increasingly crowded private healthcare market — not by advertising harder, but by becoming the reference point journalists call first on eye health.',
    approach:
      'We created "JEC Eye Talk", a journalistic series pairing JEC specialists with national media, and amplified the group’s CSR programme of free cataract and vitreoretina surgeries into stories of national relevance.',
    result:
      'Twenty-two activities produced more than 1,400 media articles, cementing JEC’s position as the country’s most quoted authority on eye health.',
    metrics: [
      { value: '1,400+', label: 'Media articles' },
      { value: '22', label: 'Activities delivered' },
    ],
  },
  {
    slug: 'samsung',
    client: 'Samsung',
    sector: 'Technology',
    title: 'A decade of award-winning launches',
    period: 'Retained · 2013–2024',
    challenge:
      'In Indonesia’s most competitive consumer technology market, every Samsung launch had to cut through — repeatedly, across eleven years of flagship cycles.',
    approach:
      'We delivered launch after launch — including the Galaxy S9/S9+ programme that won The Best Marketing PR Program 2018 and the "Nightography" campaign — and pioneered Samsung’s first overseas media workshop, taking Indonesian journalists behind the product story.',
    result:
      'More than 3,000 media articles over the partnership, an industry award for the S9/S9+ launch, and a launch playbook that became the benchmark for the category.',
    metrics: [
      { value: '3,000+', label: 'Media articles' },
      { value: '11 yrs', label: 'Retained partnership' },
    ],
  },
  {
    slug: 'skf',
    client: 'SKF',
    sector: 'Industrial Technology',
    title: 'Positioning an engineering leader for the digital era',
    period: 'Retained · since 2022',
    challenge:
      'SKF is a global engineering name, but in Indonesia its story risked being confined to components. The brand needed to be understood as a leader in industrial digital transformation.',
    approach:
      'We built a B2B thought-leadership programme around flagship trade moments — Mining Indonesia and Manufacturing Indonesia — and the "Reimagining Rotation" narrative, translating rotating-equipment expertise into a digital transformation story for industrial media.',
    result:
      'SKF is now covered in Indonesian industrial media as a digital-transformation voice, not a parts supplier — a positioning shift that supports its commercial teams in every sector conversation.',
    metrics: [
      { value: '2', label: 'Flagship trade platforms owned' },
      { value: '3+ yrs', label: 'Retained partnership' },
    ],
  },
  {
    slug: 'bosch',
    client: 'Bosch',
    sector: 'Technology & Automotive',
    title: 'One brand, three audiences, consistent share of voice',
    period: 'Retained · 2016–2023',
    challenge:
      'Bosch speaks to consumers, drivers and factory owners at once. The challenge was maintaining a coherent brand voice while serving three distinct divisions with different media ecosystems.',
    approach:
      'We ran parallel media programmes across Bosch’s consumer, automotive and industrial businesses, with a shared narrative spine and division-specific story angles, spokespeople and media targets.',
    result:
      '561 media articles across the three divisions, delivered with a single consistent brand voice over a seven-year partnership.',
    metrics: [
      { value: '561', label: 'Media articles' },
      { value: '3', label: 'Divisions served' },
    ],
  },
];
