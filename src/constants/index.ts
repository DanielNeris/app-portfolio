import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  startup,
  email,
  phone,
  linkedin,
  githubSocial,
  solidity,
  nextjs,
  ai,
  testimonial1,
  testimonial2,
  testimonial3,
  zuviadigitalassets,
  zuviapay,
  fstage,
  smoolosbetclub,
  smoolosclubdapp,
  smoolosnft,
  kafka,
  aws,
  postgresql,
} from '../assets'

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'academic',
    title: 'Academic',
  },
  {
    id: 'contact',
    title: 'Contact',
    class: 'bg-[#915EFF] rounded-full px-5 py-3 text-white',
  },
]

const socialMedias = [
  {
    icon: linkedin,
    description: 'Linkedin',
    link: 'https://www.linkedin.com/in/danielneris',
  },
  {
    icon: githubSocial,
    description: 'Github',
    link: 'https://github.com/DanielNeris',
  },
]

const contact = [
  {
    icon: githubSocial,
    description: 'Github',
    link: 'https://github.com/DanielNeris',
  },
  {
    icon: linkedin,
    description: 'Linkedin',
    link: 'https://www.linkedin.com/in/danielneris',
  },
  {
    icon: email,
    description: 'Email',
    link: 'mailto:contact@danielneris.com',
  },
  {
    icon: phone,
    description: 'Phone',
    link: 'tel:+971529618933',
  },
]

const graphcInformations = [
  {
    time: 7,
    description: 'Years<br />in production',
    sufix: '+',
  },
  {
    time: 4,
    description: 'Years<br />in Web3 & decentralization',
    sufix: '+',
  },
  {
    time: 20,
    description: 'Systems<br />designed',
    sufix: '+',
  },
  {
    time: 99,
    description: '%<br />reliability mindset',
    sufix: '',
  },
]

const services = [
  { title: 'Backend & Platform Architecture', icon: backend },
  { title: 'Event-Driven Systems (Kafka Patterns)', icon: web },
  { title: 'Fintech, KYC & Compliance APIs', icon: creator },
  { title: 'Smart Contracts & Tokenization (Solidity)', icon: mobile },
]

const technologies = [
  { name: 'Node.js', icon: nodejs },
  { name: 'TypeScript', icon: typescript },
  { name: 'JavaScript', icon: javascript },
  { name: 'Kafka', icon: kafka }, // ← adiciona (event-driven)
  { name: 'AWS', icon: aws }, // ← cloud / arquitetura
  { name: 'Docker', icon: docker },
  { name: 'MongoDB', icon: mongodb },
  { name: 'PostgreSQL', icon: postgresql }, // ← se não tiver asset, pode manter sem icon
  { name: 'React', icon: reactjs },
  { name: 'Next.js', icon: nextjs },
  { name: 'RN', icon: reactjs },
  { name: 'Solidity', icon: solidity },
  { name: 'AI', icon: ai }, // ← mantém
  { name: 'Git', icon: git },
]

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Nova Information Technology',
    url: 'https://thenovaweb.com',
    icon: startup,
    iconBg: '#383E56',
    date: '2025 – Present',
    points: [
      'Designing and building backend services and APIs for regulated KYC and compliance workflows (Node.js/TypeScript).',
      'Implementing data handling for sensitive information, aligning architecture with compliance constraints.',
      'Working with event-driven patterns and asynchronous workflows for scalable processing and automation (Kafka patterns).',
      'Contributing to platform-level decisions: modular boundaries, reliability, observability, and safe deployments.',
    ],
  },
  {
    title: 'Principal Software Engineer | Co-Founder',
    company_name: 'Zuvia',
    url: 'https://zuvia.com.br',
    icon: startup,
    iconBg: '#E6DEDD',
    date: '2022 – 2025',
    points: [
      'Co-founded Zuvia and led the architecture and delivery of the tokenization platform (Solidity + Node.js/TypeScript).',
      'Built on-chain/off-chain integrations and backend services supporting R$200M+ in tokenized assets and 5K+ active users.',
      'Designed distributed services and data layers (PostgreSQL/MongoDB/Redis) focusing on reliability, idempotency, and traceability.',
      'Implemented CI/CD pipelines and cloud deployments, improving release cadence and reducing operational friction.',
      'Owned end-to-end delivery for core financial workflows, ensuring security, scalability, and uptime in production.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'SHSquads',
    url: 'https://shsquads.com',
    icon: startup,
    iconBg: '#383E56',
    date: '2024 – 2025',
    points: [
      'Delivered backend-driven systems for fintech clients, building APIs and integrations in Node.js/TypeScript.',
      'Shipped web and mobile features (Next.js, React Native) tightly coupled to backend services and data models.',
      'Improved performance and reliability through better service boundaries, caching, and async workflows.',
      'Collaborated with product and QA to deliver business-critical features in iterative releases.',
    ],
  },
  {
    title: 'Lead Software Engineer | Co-Founder',
    company_name: 'SkyDan',
    url: '#',
    icon: startup,
    iconBg: '#E6DEDD',
    date: '2021 – 2022',
    points: [
      'Led Web3 architecture and delivery across smart contracts (Solidity) and backend services (Node.js).',
      'Designed tokenization and reward mechanics with security-focused smart contract patterns.',
      'Built API layers (REST/GraphQL) and supporting dApps to integrate on-chain and off-chain workflows.',
      'Explored decentralized/P2P flows with an emphasis on ownership, privacy, and system reliability.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Live On Solutions',
    url: '#',
    icon: startup,
    iconBg: '#383E56',
    date: '2019 – 2021',
    points: [
      'Built backend services for fintech platforms (BaaS/CaaS), integrating payment providers and core financial workflows.',
      'Designed APIs and data models in Node.js/TypeScript with PostgreSQL and MongoDB.',
      'Improved performance through query optimization and backend refactoring for scale.',
      'Collaborated across engineering and business teams to ship production features end-to-end.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Amais Terceiro Setor',
    url: '#',
    icon: startup,
    iconBg: '#E6DEDD',
    date: '2018 – 2018',
    points: [
      'Maintained and developed new features using PHP and vanilla JavaScript.',
      'Built responsive interfaces using HTML5, CSS3, and Bootstrap for nonprofit admin systems.',
      'Improved SQL queries and managed MySQL operations for internal tools.',
      'Collaborated in code reviews and agile delivery with the development team.',
    ],
  },
]

const education = [
  {
    degree: 'Bachelor in Systems Analysis and Development',
    institution: 'Descomplica Faculdade Digital, Brazil',
    graduationYear: '2026',
  },
  {
    degree: 'Intensive English Programme',
    institution: 'Stellenbosch University, South Africa',
    graduationYear: '2024',
  },
  {
    degree: 'Web Developer',
    institution: 'Etec Comendador João Rays, Brazil',
    graduationYear: '2018',
  },
  {
    degree: 'Information Technology',
    institution: 'Etec Comendador João Rays, Brazil',
    graduationYear: '2017',
  },
]

const testimonials = [
  {
    testimonial:
      "Daniel's commitment to delivering high-quality solutions is unparalleled. He's a great developer who truly makes the difference.",
    name: 'Rodrigues, Luan',
    designation: 'CTO',
    company: 'Live On Solutions',
    image: testimonial1,
  },
  {
    testimonial:
      "Daniel was instrumental in building Zuvia's platform, merging blockchain innovation with scalable tech solutions.",
    name: 'Montanini, Matheus',
    designation: 'Credit Director',
    company: 'Zuvia',
    image: testimonial2,
  },
  {
    testimonial:
      'I had the privilege of working with Daniel Neris at Zuvia, where he showcased exceptional expertise in software development skills.',
    name: 'Montanini, Jonatas',
    designation: 'Co-CEO',
    company: 'Zuvia',
    image: testimonial3,
  },
]

const projects = [
  {
    name: 'Zuvia Digital Assets',
    description:
      'End-to-end platform for real estate tokenization. Enables users to invest in fractionalized assets, manage their portfolio, and track performance through a secure and transparent Web3 interface.',
    tags: [
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'tokenization', color: 'pink-text-gradient' },
    ],
    image: zuviadigitalassets,
    source_code_link: 'https://app.zuvia.com.br',
  },
  {
    name: 'ZuviaPay',
    description:
      'Fiat-to-crypto gateway that allows users to easily purchase cryptocurrencies with an intuitive UI and secure transaction flow. Built for simplicity and compliance.',
    tags: [
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'nuxtjs', color: 'blue-text-gradient' },
      { name: 'crypto-payments', color: 'pink-text-gradient' },
    ],
    image: zuviapay,
    source_code_link: '#',
  },
  {
    name: 'Fstage Diagnostic',
    description:
      'AI-driven website diagnostic tool that analyzes performance, SEO, and UX to deliver actionable recommendations for technical and strategic improvement.',
    tags: [
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'ai-insights', color: 'pink-text-gradient' },
    ],
    image: fstage,
    source_code_link: 'https://diagnostico.fstage.com.br',
  },
  {
    name: 'Smoolos Club DApp',
    description:
      'Decentralized application for Smoolos NFT holders, unlocking exclusive club features and benefits. Seamlessly integrates Web3 authentication and smart contract interactions.',
    tags: [
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'reactjs', color: 'blue-text-gradient' },
      { name: 'web3-auth', color: 'pink-text-gradient' },
    ],
    image: smoolosclubdapp,
    source_code_link: 'https://smoolos-club-dapp.netlify.app',
  },
  {
    name: 'Smoolos Bet Club',
    description:
      'Web3 betting dApp for NFT holders. Players can place on-chain bets on real-time games in a decentralized and permissionless environment.',
    tags: [
      { name: 'solidity', color: 'green-text-gradient' },
      { name: 'reactjs', color: 'blue-text-gradient' },
      { name: 'dapp', color: 'pink-text-gradient' },
    ],
    image: smoolosbetclub,
    source_code_link: 'https://smoolos-bet-club.netlify.app',
  },
  {
    name: 'Smoolos NFT Minting',
    description:
      'Smart contract-based NFT minting platform for the Smoolos collection. Users can mint, manage, and explore NFTs with integrated Web3 wallet support.',
    tags: [
      { name: 'solidity', color: 'green-text-gradient' },
      { name: 'reactjs', color: 'blue-text-gradient' },
      { name: 'nft', color: 'pink-text-gradient' },
    ],
    image: smoolosnft,
    source_code_link: 'https://smoolos.netlify.app',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
  socialMedias,
  graphcInformations,
  contact,
  education,
}
