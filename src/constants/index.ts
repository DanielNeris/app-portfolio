import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  startup,
  download,
  email,
  phone,
  linkedin,
  githubSocial,
  solidity,
  nextjs,
  nuxtjs,
  ai,
  vuejs,
  testimonial1,
  testimonial2,
  testimonial3,
  zuviadigitalassets,
  zuviapay,
  fstage,
  smoolosbetclub,
  smoolosclubdapp,
  smoolosnft,
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
    link: 'tel:+971586193162',
  },
]

const graphcInformations = [
  {
    time: '7',
    description: 'Years<br />of experience',
    sufix: '+',
  },
  {
    time: '20',
    description: 'Projects<br />delivered',
    sufix: '+',
  },
  {
    time: '12',
    description: 'Technologies <br />mastered',
    sufix: '+',
  },
  {
    time: '5',
    description: 'dApps<br />launched',
    sufix: '+',
  },
]

const services = [
  {
    title: 'Smart Contract Development',
    icon: creator,
  },
  {
    title: 'Full Stack Web Applications',
    icon: web,
  },
  {
    title: 'Decentralized Apps (dApps)',
    icon: backend,
  },
  {
    title: 'Mobile App Development',
    icon: mobile,
  },
]

const technologies = [
  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'AI',
    icon: ai,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Nuxt.js',
    icon: nuxtjs,
  },
  {
    name: 'Vue.js',
    icon: vuejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },

  {
    name: 'Tailwind',
    icon: tailwind,
  },
]

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Nova Information Technology',
    icon: startup,
    iconBg: '#383E56',
    date: 'Mar 2025 – Present',
    points: [
      'Developing backend services and RESTful APIs in Node.js for KYC and compliance workflows.',
      'Integrating identity verification providers and handling secure user data with privacy-focused architecture.',
      'Supporting SDKs and internal dashboards for partner onboarding and automation.',
      'Collaborating with cross-functional teams to ensure scalable and modular backend systems.',
    ],
  },
  {
    title: 'Senior Full Stack Engineer',
    company_name: 'SHSquads',
    icon: startup,
    iconBg: '#E6DEDD',
    date: 'Nov 2024 – Mar 2025',
    points: [
      'Led development of cross-platform applications using Node.js, Next.js, and React Native with Expo.',
      'Built and maintained RESTful APIs and backend services in Node.js with TypeScript.',
      'Implemented mobile-first UIs using React Native, optimizing performance across Android and iOS.',
      'Developed web interfaces with Next.js and React, focused on responsive design and user engagement.',
      'Collaborated in an agile environment with designers, QA, and product managers to deliver business-critical features.',
    ],
  },
  {
    title: 'Co-Founder | Head of Technology',
    company_name: 'Zuvia',
    icon: startup,
    iconBg: '#383E56',
    date: 'Sep 2022 – Present',
    points: [
      'Co-founded Zuvia and led the development of the company’s tokenization infrastructure from the ground up.',
      'Tokenized over R$30 million in real estate assets and scaled the platform to support 3,000+ users.',
      'Designed distributed microservices using Node.js and MongoDB, and integrated secure payment flows.',
      'Implemented CI/CD pipelines with GitHub Actions and Azure, improving deployment speed by over 60%.',
      'Oversaw frontend development with React.js and Vue.js, delivering performant, user-centered interfaces.',
    ],
  },
  {
    title: 'Co-Founder | Head of Web3',
    company_name: 'SkyDan',
    icon: startup,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 – Aug 2022',
    points: [
      'Led Web3 strategy and blockchain product development, aligning technical architecture with business goals.',
      'Designed and deployed smart contracts using Solidity, including on-chain logic for betting and reward systems.',
      'Built full-stack dApps using Node.js (REST/GraphQL) and React, following SOLID and clean architecture principles.',
      'Explored metaverse integration, focusing on immersive gamified experiences within decentralized platforms.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Live On Solutions',
    icon: startup,
    iconBg: '#383E56',
    date: 'Jan 2019 – Oct 2021',
    points: [
      'Built and maintained features for white-label BaaS and CaaS platforms, serving fintech clients.',
      'Developed back-end services in Node.js with TypeScript, and integrated third-party payment APIs.',
      'Created and maintained responsive UIs with React.js, focused on usability and performance.',
      'Worked with PostgreSQL and MongoDB, optimizing queries and ensuring scalable data structures.',
    ],
  },
  {
    title: 'Trainee Developer',
    company_name: 'Amais Terceiro Setor',
    icon: startup,
    iconBg: '#E6DEDD',
    date: 'Jan 2018 – Dec 2018',
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
    degree: 'Intensive English Programme',
    institution: 'Stellenbosch University, South Africa',
    graduationYear: '2024',
  },
  {
    degree: 'Bachelor in Computer Science',
    institution: 'UNISAGRADO, Brazil',
    graduationYear: '2020',
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
