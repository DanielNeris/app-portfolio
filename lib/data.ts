export type SocialLink = {
  label: string
  href: string
  external?: boolean
}

export type Project = {
  id: string
  metric?: string
  stack: string[]
  href: string
  status?: 'live' | 'in-progress' | 'beta' | 'private'
  year: string
}

export type ExperienceItem = {
  id: string
  url?: string
  start: string
  end: string
  stack?: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type EducationItem = {
  id: string
}

export const profile = {
  name: 'Daniel Neris',
  title: 'Senior Software Architect',
  location: 'Dubai, UAE',
  available: 'Open to architect & staff roles',
  tagline:
    'Designing cloud-native architectures for fintech, Web3 and regulated platforms.',
  summary:
    '8+ years architecting and operating distributed systems on AWS. Event-driven services, idempotent data flows, on-chain integrations and observability built in from day one. I lead architecture end-to-end: from system design and ADRs to production incidents and team mentoring.',
  email: 'danielneris01@gmail.com',
  phone: '+971 52 961 8933',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/DanielNeris', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danielneris',
    external: true,
  },
  { label: 'Email', href: 'mailto:danielneris01@gmail.com' },
]

export const stats = [
  { value: '8+', label: 'Years in production' },
  { value: 'R$200M+', label: 'Tokenized assets shipped' },
  { value: '5K+', label: 'Active investors served' },
  { value: '99.9%', label: 'Uptime mindset' },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'lario',
    metric: 'Local-first',
    stack: ['Electron', 'AI / DSP', 'TypeScript', 'Audio'],
    href: 'https://larioai.com',
    status: 'beta',
    year: '2025',
  },
  {
    id: 'zuvia',
    metric: 'R$200M+',
    stack: ['Solidity', 'Node.js', 'PostgreSQL', 'Redis', 'Next.js'],
    href: 'https://app.zuvia.com.br',
    status: 'live',
    year: '2022 / 2025',
  },
  {
    id: 'nova',
    metric: '20K+',
    stack: ['Node.js', 'TypeScript', 'OCR', 'Event-Driven', 'AWS'],
    href: 'https://thenovaweb.com',
    status: 'live',
    year: '2025 / Present',
  },
  {
    id: 'smoolos',
    metric: 'On-chain',
    stack: ['Solidity', 'Node.js', 'React', 'Web3'],
    href: 'https://smoolos-club-dapp.netlify.app',
    status: 'live',
    year: '2021 / 2022',
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: 'nova',
    url: 'https://thenovaweb.com',
    start: '2025',
    end: 'Present',
    stack: ['Node.js', 'TypeScript', 'AWS', 'OCR', 'Event-Driven'],
  },
  {
    id: 'zuvia',
    url: 'https://zuvia.com.br',
    start: '2022',
    end: '2025',
    stack: ['Solidity', 'Node.js', 'PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    id: 'shsquads',
    url: 'https://shsquads.com',
    start: '2024',
    end: '2025',
    stack: ['Node.js', 'Next.js', 'React Native', 'TypeScript'],
  },
  {
    id: 'skydan',
    start: '2021',
    end: '2022',
    stack: ['Solidity', 'Node.js', 'React', 'Web3'],
  },
  {
    id: 'liveon',
    start: '2019',
    end: '2021',
    stack: ['Node.js', 'React', 'PostgreSQL', 'MongoDB'],
  },
]

export const aboutBlocks = [
  {
    heading: 'Backend & platform architecture',
    body: 'I design systems that survive production. APIs, event-driven services, distributed workflows, idempotent data flows, built with clear service boundaries and observability from day one.',
  },
  {
    heading: 'Regulated & privacy-first by default',
    body: 'Most of my work touches money or identity. KYC pipelines, tokenization rails, on-chain/off-chain bridges, designed under compliance constraints without sacrificing developer ergonomics.',
  },
  {
    heading: 'Cloud, scale & reliability',
    body: 'PostgreSQL, MongoDB, Redis, Kafka on AWS. Modular services, CI/CD that ships safely, performance tuned where it matters, and instrumentation that tells you when it does not.',
  },
  {
    heading: 'Builder mindset, end-to-end',
    body: 'Co-founded two companies. Comfortable owning the full arc, from architectural decision to production incident to retrospective. I build with product, not around it.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    items: ['Node.js', 'TypeScript', 'NestJS', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    category: 'Architecture',
    items: [
      'Distributed Systems',
      'Event-Driven',
      'Domain-Driven Design',
      'Idempotency',
      'Observability',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux'],
  },
  {
    category: 'Databases & Streaming',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
  },
  {
    category: 'Blockchain',
    items: ['Solidity', 'Tokenization', 'P2P Systems', 'Web3 Infrastructure'],
  },
  {
    category: 'AI',
    items: ['LLM Integration', 'RAG', 'AI Product Engineering', 'Audio AI'],
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'React Native', 'Tailwind'],
  },
  {
    category: 'Leadership',
    items: ['Ownership', 'Mentoring', 'Tech Strategy', 'Hiring'],
  },
]

export const education: (EducationItem & {
  period: string
  hasLocation?: boolean
})[] = [
  { id: 'msc', period: '2026 to 2028' },
  { id: 'bsc', period: 'Jan 2024 to Dec 2026', hasLocation: true },
  { id: 'english', period: 'Mar 2024 to Dec 2024', hasLocation: true },
]

export const certifications: (EducationItem & { period: string })[] = [
  { id: 'blockchain', period: 'Nov 2025' },
  { id: 'aws', period: 'Jan 2026' },
]
