// ── Somfy images ──────────────────────────────────────────────────────────
import somfyScreen01 from '../img/Somfy Screens/somfy-screen-01.png'
import somfyScreen02 from '../img/Somfy Screens/somfy-screen-02.png'
import somfyScreen03 from '../img/Somfy Screens/somfy-screen-03.png'
import somfyScreen04 from '../img/Somfy Screens/somfy-screen-04.png'
import somfyScreen05 from '../img/Somfy Screens/somfy-screen-05.png'
import somfyScreen06 from '../img/Somfy Screens/somfy-screen-06.png'

// ── 360Learning images ─────────────────────────────────────────────────────
import screen360_01 from '../img/360Learning/360-screen-01.png'
import screen360_02 from '../img/360Learning/360-screen-02.png'
import screen360_03 from '../img/360Learning/360-screen-03.png'
import screen360_04 from '../img/360Learning/360-screen-04.png'
import screen360_05 from '../img/360Learning/360-screen-05.png'
import screen360_06 from '../img/360Learning/360-screen-06.png'

// ── Vibe images ────────────────────────────────────────────────────────────
import vibeScreen01 from '../img/Vibe Screens/vibe-screen-01.png'
import vibeScreen02 from '../img/Vibe Screens/vibe-screen-02.png'
import vibeScreen03 from '../img/Vibe Screens/vibe-screen-03.png'
import vibeScreen04 from '../img/Vibe Screens/vibe-screen-04.png'
import vibeScreen05 from '../img/Vibe Screens/vibe-screen-05.png'
import vibeScreen06 from '../img/Vibe Screens/vibe-screen-06.png'
import vibeCampaignsVideo from '../img/Vibe Screens/vibe_campaigns.mp4'

// ── Zestia images ─────────────────────────────────────────────────────────
import zestiaScreen01 from '../img/Zestia Screens/zestia-screen-01.png'
import zestiaScreen02 from '../img/Zestia Screens/zestia-screen-02.png'
import zestiaScreen03 from '../img/Zestia Screens/zestia-screen-03.png'

// ── AXA images ─────────────────────────────────────────────────────────────
import axaScreen01 from '../img/AXA/axa-screen-01.png'
import axaScreen02 from '../img/AXA/axa-screen-02.png'
import axaScreen03 from '../img/AXA/axa-screen-03.png'
import axaScreen04 from '../img/AXA/axa-screen-04.png'
import axaScreen05 from '../img/AXA/axa-screen-05.png'

export type ProjectAccent = 'amber' | 'sky' | 'violet' | 'orange' | 'rose'

export interface ProjectSection {
  title: string
  body: string[]
  images?: string[]
  video?: string
}

export interface ProjectData {
  slug: string
  company: string
  tag: string
  title: string
  description: string
  year: string
  tags: string[]
  outcome: string
  accent: ProjectAccent
  index: string
  coverImage?: string
  // Detail page
  category: string
  period: string
  intro: string[]
  detailTags: string[]
  sections: ProjectSection[]
  nextProject?: string
}

export const accentStyles: Record<ProjectAccent, {
  hoverBg: string
  hoverBorder: string
  numColor: string
  tagBg: string
  tagText: string
  arrowHoverBg: string
  arrowHoverBorder: string
  pillBg: string
  pillText: string
  sectionNum: string
  leftBorder: string
  accentHex: string
  cardRgb: string
}> = {
  amber: {
    hoverBg: 'hover:bg-amber-950/40',
    hoverBorder: 'hover:border-amber-500/30',
    numColor: 'text-[#FAB800]',
    tagBg: 'bg-amber-900/30',
    tagText: 'text-[#FAB800]',
    arrowHoverBg: 'group-hover:bg-[#FAB800]',
    arrowHoverBorder: 'group-hover:border-[#FAB800]',
    pillBg: 'bg-amber-900/30',
    pillText: 'text-[#FAB800]',
    sectionNum: 'text-[#FAB800]',
    leftBorder: 'border-l-[#FAB800]',
    accentHex: '#FAB800',
    cardRgb: '250, 184, 0',
  },
  sky: {
    hoverBg: 'hover:bg-blue-950/40',
    hoverBorder: 'hover:border-blue-500/30',
    numColor: 'text-[#2567F4]',
    tagBg: 'bg-blue-950/30',
    tagText: 'text-[#2567F4]',
    arrowHoverBg: 'group-hover:bg-[#2567F4]',
    arrowHoverBorder: 'group-hover:border-[#2567F4]',
    pillBg: 'bg-blue-950/30',
    pillText: 'text-[#2567F4]',
    sectionNum: 'text-[#2567F4]',
    leftBorder: 'border-l-[#2567F4]',
    accentHex: '#2567F4',
    cardRgb: '37, 103, 244',
  },
  violet: {
    hoverBg: 'hover:bg-teal-950/40',
    hoverBorder: 'hover:border-teal-500/30',
    numColor: 'text-[#C87C2F]',
    tagBg: 'bg-teal-950/30',
    tagText: 'text-[#C87C2F]',
    arrowHoverBg: 'group-hover:bg-[#C87C2F]',
    arrowHoverBorder: 'group-hover:border-[#C87C2F]',
    pillBg: 'bg-teal-950/30',
    pillText: 'text-[#C87C2F]',
    sectionNum: 'text-[#C87C2F]',
    leftBorder: 'border-l-[#C87C2F]',
    accentHex: '#C87C2F',
    cardRgb: '0, 46, 53',
  },
  orange: {
    hoverBg: 'hover:bg-indigo-950/40',
    hoverBorder: 'hover:border-indigo-500/30',
    numColor: 'text-[#3B28CC]',
    tagBg: 'bg-indigo-950/30',
    tagText: 'text-[#3B28CC]',
    arrowHoverBg: 'group-hover:bg-[#3B28CC]',
    arrowHoverBorder: 'group-hover:border-[#3B28CC]',
    pillBg: 'bg-indigo-950/30',
    pillText: 'text-[#3B28CC]',
    sectionNum: 'text-[#3B28CC]',
    leftBorder: 'border-l-[#3B28CC]',
    accentHex: '#3B28CC',
    cardRgb: '59, 40, 204',
  },
  rose: {
    hoverBg: 'hover:bg-blue-950/40',
    hoverBorder: 'hover:border-blue-900/30',
    numColor: 'text-[#FF1721]',
    tagBg: 'bg-blue-950/30',
    tagText: 'text-[#FF1721]',
    arrowHoverBg: 'group-hover:bg-[#FF1721]',
    arrowHoverBorder: 'group-hover:border-[#FF1721]',
    pillBg: 'bg-blue-950/30',
    pillText: 'text-[#FF1721]',
    sectionNum: 'text-[#FF1721]',
    leftBorder: 'border-l-[#FF1721]',
    accentHex: '#FF1721',
    cardRgb: '0, 0, 143',
  },
}

export const projects: ProjectData[] = [
  {
    slug: 'somfy',
    company: 'Somfy',
    tag: 'UX + Design System',
    title: 'Building a unified design language across the entire product surface.',
    description:
      "Led the end-to-end redesign of core product flows for one of Europe's largest smart home companies. Established a scalable component library used by 6 product teams, cutting design-to-dev handoff time by 40%.",
    year: '2023',
    tags: ['Product Design', 'Design System', 'B2B'],
    outcome: '6 teams unified, 40% faster handoff',
    accent: 'amber',
    index: '01',
    coverImage: somfyScreen01,
    category: 'Smart Home & Building Automation',
    period: 'Nov 2022 – Present',
    intro: [
      'Somfy is a global leader in smart home and building automation, known for creating user-centric solutions that balance simplicity, comfort, and efficiency.',
      "I've been collaborating with Somfy as a freelance product designer for almost 3 years, working on both B2B and B2C experiences. My focus has been on improving dashboards, refining key flows, and maintaining a scalable design system used across teams and products. It's an ongoing partnership that continues to evolve with new features and design improvements.",
    ],
    detailTags: ['Design System', 'Product Design', 'App Design', 'Web Design'],
    sections: [
      {
        title: 'Dashboard & Order Tracking',
        body: [
          'The first goal was to help professional clients better visualize their business data and follow their orders more effectively.',
          'I redesigned the activity dashboard with a clear view of yearly performance and order activity, making business insights easier to access. The new order tracking flow simplified the navigation and reduced friction for recurring users, resulting in faster browsing and fewer support needs.',
        ],
        images: [somfyScreen01, somfyScreen02],
      },
      {
        title: 'Comparator experience',
        body: [
          'I introduced a new product comparison experience that allows multi-selection and side-by-side evaluation.',
          'This helped installers make decisions with greater confidence while improving catalog navigation and overall understanding.',
        ],
        images: [somfyScreen03, somfyScreen04],
      },
      {
        title: 'Homepage for Installers & Product Variants',
        body: [
          'The new homepage was designed to make the experience more useful from the first interaction by organizing key actions, quick access tools, and relevant data.',
          "I also worked on product variant tables to simplify technical data reading and reduce complexity. Both sections align with the new design system and can easily scale across Somfy's product range.",
        ],
        images: [somfyScreen05, somfyScreen06],
      },
    ],
    nextProject: 'zestia',
  },
  {
    slug: 'zestia',
    company: 'Zestia',
    tag: 'Real Estate SaaS',
    title: 'Building a full MVP for a platform that unifies every step of property buying.',
    description:
      'Collaborated directly with the CEO and CTO to design the full MVP from scratch, defining structure, user flows, and key experiences for brokers and buyers across property search, financing, and document management.',
    year: '2023',
    tags: ['Product Design', 'SaaS Design', 'MVP Design'],
    outcome: 'MVP ready for investors in 6 months',
    accent: 'violet',
    index: '02',
    coverImage: zestiaScreen01,
    category: 'Real Estate SaaS',
    period: '2023 (6 months)',
    intro: [
      'Zestia is a real estate SaaS that brings every step of property buying into one process: property search, financing, and brokerage services.',
      'I worked directly with the CEO and CTO as a freelance senior product designer, fully remote from Spain. Starting from zero, I designed the full MVP, defining the information architecture, core user flows, and visual system for each profile type. After 6 months, the product was ready for investor demos and pilot users.',
    ],
    detailTags: ['Design System', 'Product Design', 'SaaS Design', 'MVP Design'],
    sections: [
      {
        title: 'Dashboards & Analytics',
        body: [
          'I designed two main dashboard views: one for individual franchise activity and another for multi-franchise global oversight.',
          'Each dashboard was built around role-adaptive interfaces that surface the right data at the right time. The goal was clear insights at a glance, with balanced data visualisation that avoids cognitive overload across different user levels.',
        ],
        images: [zestiaScreen01, zestiaScreen02],
      },
      {
        title: 'Flows & Experience',
        body: [
          'I created the core MVP flows covering property search, financing, and document management, designed to reduce friction and enhance collaboration between brokers and buyers.',
          'Each journey was mapped end to end, with careful attention to the handoff points between profiles. The result was a coherent, scalable experience that made a complex process feel manageable from day one.',
        ],
        images: [zestiaScreen03],
      },
    ],
    nextProject: 'vibe',
  },
  {
    slug: 'vibe',
    company: 'Vibe',
    tag: 'Product Redesign',
    title: 'Rethinking the core product experience for a fast-growing ad-tech platform.',
    description:
      'Took ownership of core product flows, redesigned the campaign creation experience, and built a scalable design system to support the next growth phase. Shipped key features in short, focused sprints over 15 months.',
    year: '2023',
    tags: ['Product Design', 'Adtech', 'Design System'],
    outcome: '15 months, full product overhaul',
    accent: 'orange',
    index: '03',
    coverImage: vibeScreen03,
    category: 'Ad-tech',
    period: 'Jan 2022 – Mar 2023',
    intro: [
      'Vibe is the Google Ads of TV. It allows any marketer to plan, buy, and air TV ads on major channels within minutes.',
      "I worked with Vibe for 1.5 years as a freelance product designer, fully remote from Spain. The product team was small, around 10 people across Paris and the US. When I joined, an MVP had already been built by a previous designer, and my role was to bring fresh ideas, rework key flows, and build a strong design system for scalability. During this time, I designed new features, improved the campaign creation experience, and helped shape the structure that supported Vibe's next growth phase.",
    ],
    detailTags: ['Design System', 'Product Design', 'SaaS Design'],
    sections: [
      {
        title: 'Campaign Dashboard & Creation Flow',
        body: [
          'The first focus was to redesign the full campaign experience, from creation to tracking. We simplified the flow to help users create and manage campaigns faster while keeping a clear sense of control.',
          'The new dashboard offers a cleaner overview of active campaigns and performance metrics. Campaign creation was redesigned step by step, with simpler targeting, audience selection, and scheduling.',
        ],
        images: [vibeScreen03],
        video: vibeCampaignsVideo,
      },
      {
        title: 'Campaign Views & Analytics',
        body: [
          'Once the creation flow was stable, we worked on the campaign management views and analytics. These sections help users review performance across multiple campaigns and act on insights directly.',
          'I designed table views with filters and custom sorting options, and a new analytics dashboard focused on clarity and comparison. The goal was to give users data that feels accessible and actionable without adding complexity.',
        ],
        images: [vibeScreen01, vibeScreen02, vibeScreen04],
      },
      {
        title: 'User Management & Permissions',
        body: [
          'I also created the flows for user management, team access, and billing. This made the product easier to scale and adapt to different organization types like agencies and brands.',
          'Everything was documented in Storybook with consistent components and behaviors.',
        ],
        images: [vibeScreen05, vibeScreen06],
      },
    ],
    nextProject: '360learning',
  },
  {
    slug: '360learning',
    company: '360Learning',
    tag: 'Platform Redesign',
    title: 'Simplifying course creation for 1,700+ enterprise clients worldwide.',
    description:
      'Embedded with cross-functional teams to untangle complex authoring flows and surface learner insights. Reduced course creation time by 30% through strategic information architecture changes and a new component system.',
    year: '2022',
    tags: ['UX Research', 'Platform Design', 'SaaS'],
    outcome: '1,700+ clients, 30% faster course creation',
    accent: 'sky',
    index: '04',
    coverImage: screen360_01,
    category: 'LMS EdTech / Learning & Development',
    period: 'Dec 2018 – Jan 2022',
    intro: [
      '360Learning is a collaborative learning platform that helps companies build and share knowledge internally.',
      'I joined the company in December 2018 and worked there for more than 3 years as a Product Designer in the Enterprise squad. Our squad included one PM and two developers, and I was part of a design team of eight designers, each owning a different product area. My main mission was to design and grow the enterprise suite of the product, while also maintaining the design system used across all squads.',
    ],
    detailTags: ['Product Design', 'Design System', 'Web Design', 'SaaS Design'],
    sections: [
      {
        title: 'Learning Needs',
        body: [
          'The first area I worked on was Learning Needs, one of the key features for knowledge sharing inside a company. It allows employees to express what they want to learn and connect with others who have expertise on the same topic.',
          'When someone creates a new learning need, colleagues can upvote it, join the discussion, and even volunteer to create a course to answer that need. We built the full experience: collecting requests, finding contributors, and managing the collaboration and course creation. The goal was to make internal learning more organic, social, and transparent.',
        ],
        images: [screen360_01, screen360_02],
      },
      {
        title: 'Course Structure & Draft Management',
        body: [
          'Once a learning need is validated, the team starts building the course. This part of the experience focuses on planning, organizing, and assigning work before the actual course creation begins.',
          'We designed a clean interface to manage drafts, define structure and content, and clarify who is responsible for each step. It helped teams stay efficient and keep everyone aligned from the start of the process.',
        ],
        images: [screen360_03, screen360_04],
      },
      {
        title: 'Design System',
        body: [
          'In parallel with product work, I helped maintain the shared design system used across all squads at 360Learning. With a design team of 8 (each owning a different product area), a solid shared system was the only way to stay consistent. Regular cross-squad syncs helped surface new patterns early and prevent fragmentation.',
          'The system covered everything from atoms to complex patterns like modals, forms, and data tables. I worked closely with developers to define handoff standards, write usage guidelines, and document edge cases. Keeping it alive meant constantly reviewing new requests and making sure nothing was built twice.',
        ],
        images: [screen360_05, screen360_06],
      },
    ],
    nextProject: 'axa',
  },
  {
    slug: 'axa',
    company: 'AXA',
    tag: 'Design System',
    title: 'Building consistent digital experiences across insurance and banking.',
    description:
      'Worked as a consulting product designer through agency Monsieur Guiz for one year: six months with AXA Bank and six months with AXA Insurance. Focused on new features, design system components, and aligning design with development.',
    year: '2018',
    tags: ['Design System', 'Product Design', 'App Design'],
    outcome: 'Insurance & banking, 2 product lines',
    accent: 'rose',
    index: '05',
    coverImage: axaScreen01,
    category: 'Insurance / Bank',
    period: 'Aug 2017 – Nov 2018',
    intro: [
      'AXA is a global leader in banking and insurance services.',
      'During my time at the agency Monsieur Guiz, I worked as a consulting product designer for AXA for about one year, six months with AXA Bank and six months with AXA Insurance. My work focused on creating new features, maintaining the design system, and helping teams align design and development around a consistent product language.',
    ],
    detailTags: ['Design System', 'Product Design', 'App Design', 'Illustrations'],
    sections: [
      {
        title: 'AXA Insurance & Bank Website',
        body: [
          'At AXA Insurance, I contributed to the website evolution by creating new features and improving the design system foundations. Work involved layouts, navigation, and responsive guidelines to provide flexibility across products and devices.',
          'For AXA Bank, I created responsive layouts and visuals for a website introducing the new mobile app, showcasing features while maintaining brand consistency.',
        ],
        images: [axaScreen01, axaScreen02],
      },
      {
        title: 'Design System',
        body: [
          'I also worked on the shared AXA Design System, building components and defining spacing, constraints, and documentation for developers.',
          'The focus was on clarity and adaptability, making sure each component could be used consistently across different teams and use cases without losing flexibility.',
        ],
        images: [axaScreen03, axaScreen04],
      },
      {
        title: 'Illustrations',
        body: [
          "In parallel, I created a set of custom illustrations for AXA Bank's website and app.",
          'These visuals helped communicate complex topics in a more friendly and human way, making the product feel more approachable for everyday users.',
        ],
        images: [axaScreen05],
      },
    ],
    nextProject: undefined,
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}
