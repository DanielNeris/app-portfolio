export type SocialLink = {
  label: string
  href: string
  external?: boolean
}

export type Project = {
  id: string
  stack: string[]
  href: string
  status?: 'live' | 'in-progress' | 'beta' | 'private' | 'open-source'
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
  id: string
  items: string[]
  focus?: boolean
}

export type EducationItem = {
  id: string
}

export const profile = {
  name: 'Daniel Neris',
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

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'zuvia',
    stack: ['Node.js', 'PostgreSQL', 'Event-Driven', 'Solidity', 'Next.js'],
    href: 'https://app.zuvia.com.br',
    status: 'live',
    year: '2022 / 2025',
  },
  {
    id: 'retry',
    stack: ['Pear', 'Hyperdrive', 'Hyperbee', 'Protomux', 'QVAC'],
    href: 'https://github.com/DanielNeris/retry',
    status: 'open-source',
    year: '2026',
  },
  {
    id: 'ecommerce',
    stack: ['NestJS', 'Kafka', 'PostgreSQL', 'Redis', 'OpenSearch'],
    href: 'https://github.com/DanielNeris/event-driven-ecommerce-system',
    status: 'open-source',
    year: '2026',
  },
  {
    id: 'udp',
    stack: ['Node.js', 'UDP', 'Networking'],
    href: 'https://github.com/DanielNeris/udp-from-scratch',
    status: 'open-source',
    year: '2026',
  },
  {
    id: 'lario',
    stack: ['Electron', 'AI / DSP', 'TypeScript', 'Audio'],
    href: 'https://larioai.com',
    status: 'beta',
    year: '2025',
  },
  {
    id: 'smoolos',
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
    stack: ['Node.js', 'TypeScript', 'Async Workflows', 'State Machines'],
  },
  {
    id: 'zuvia',
    url: 'https://zuvia.com.br',
    start: '2022',
    end: '2025',
    stack: [
      'Node.js',
      'PostgreSQL',
      'Event-Driven',
      'Redis',
      'MongoDB',
      'Solidity',
    ],
  },
  {
    id: 'shsquads',
    url: 'https://shsquads.com',
    start: '2024',
    end: '2025',
    stack: ['Node.js', 'TypeScript', 'Next.js', 'React Native'],
  },
  {
    id: 'skydan',
    start: '2021',
    end: '2022',
    stack: ['Node.js', 'Solidity', 'Web3', 'React'],
  },
  {
    id: 'liveon',
    start: '2019',
    end: '2021',
    stack: ['Node.js', 'PostgreSQL', 'MongoDB', 'React'],
  },
  {
    id: 'amais',
    start: '2018',
    end: '2018',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'architecture',
    items: [
      'System Design',
      'Domain-Driven Design',
      'Microservices',
      'Event-Driven Architecture',
      'Event Sourcing',
      'CQRS',
      'REST APIs',
    ],
  },
  {
    id: 'backend',
    items: ['Node.js', 'TypeScript', 'Go', 'JavaScript', 'NestJS', 'Express'],
  },
  {
    id: 'distributed',
    items: [
      'Transactional Outbox',
      'Saga',
      'Idempotency',
      'Circuit Breaker',
      'Retries & Backoff',
      'Dead-Letter Queues',
      'Rate Limiting',
    ],
  },
  {
    id: 'p2p',
    focus: true,
    items: [
      'Holepunch/Pear',
      'Hypercore',
      'Hyperdrive',
      'Hyperbee',
      'Autobase',
      'Protomux',
      'UDP',
    ],
  },
  {
    id: 'data',
    items: [
      'PostgreSQL',
      'Apache Kafka',
      'BullMQ',
      'Redis',
      'MongoDB',
      'MySQL',
      'OpenSearch',
      'Prisma',
    ],
  },
  {
    id: 'cloud',
    items: [
      'AWS',
      'EC2',
      'S3',
      'Serverless',
      'Lambda',
      'ECS',
      'SQS',
      'SNS',
      'EventBridge',
      'API Gateway',
      'IAM',
      'VPC',
    ],
  },
  {
    id: 'security',
    items: ['OAuth2', 'JWT'],
  },
  {
    id: 'fintech',
    items: [
      'Tokenization',
      'Smart Contracts',
      'Solidity',
      'Ethereum',
      'Multisig Wallets',
      'Banking-as-a-Service',
    ],
  },
  {
    id: 'frontend',
    items: ['Next.js', 'React', 'React Native', 'Expo'],
  },
  {
    id: 'devops',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Jest', 'Vitest', 'Cypress'],
  },
]

export const education: (EducationItem & { hasNote?: boolean })[] = [
  { id: 'computerScience' },
  { id: 'systems', hasNote: true },
  { id: 'english' },
  { id: 'webDev' },
  { id: 'itTechnician' },
]

export const certifications: EducationItem[] = [{ id: 'blockchain' }]

export const languages: { id: string }[] = [
  { id: 'portuguese' },
  { id: 'english' },
  { id: 'spanish' },
]
