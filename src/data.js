// Single source of truth for all site content.
// Every claim here traces back to the CV (2025) or the project repositories.
// No em dashes anywhere; ranges use plain hyphens.

export const profile = {
  name: 'Gitam Shimoni',
  role: 'Full-Stack Developer',
  location: 'Israel',
  email: 'gitam.shimoni@gmail.com',
  github: 'https://github.com/GitamShimoni',
  githubHandle: '@GitamShimoni',
};

export const navLinks = [
  { label: 'about', href: '#about', num: '01' },
  { label: 'experience', href: '#experience', num: '02' },
  { label: 'projects', href: '#projects', num: '03' },
  { label: 'skills', href: '#skills', num: '04' },
  { label: 'education', href: '#education', num: '05' },
  { label: 'contact', href: '#contact', num: '06' },
];

export const hero = {
  eyebrow: 'full-stack developer · Israel',
  headline: 'Gitam Shimoni.',
  subhead: 'I build complete products: React front ends, Node.js and Python services on AWS, and the infrastructure underneath them.',
  highlight: 'complete',
  body: 'Full-stack developer at TlvTech, shipping features for an e-commerce automation platform with thousands of daily users.',
};

export const about = {
  paragraphs: [
    'I am a full-stack developer at TlvTech, where I have been since February 2024. Most of my time goes into AutoDS, an e-commerce automation platform with thousands of daily users: React on the front end, Node.js services behind it, and Python tooling wherever data has to move between systems.',
    'The path here was not the usual one. Before writing code I served almost four years in Oketz, the IDF\u2019s K9 unit: operational deployments first, then command and instruction. Engineering began with the CyberPro bootcamp, 700+ hours of full-stack training with an acceptance ratio of 1:35.',
    'Outside of work I build tools I actually use: SyncOTP, which relays verification codes from my phone to my browser over an encrypted channel; Kitzur, a Chrome extension that turns Zoom lectures into structured study notes; and Calorie Arena, a calorie tracker my family logs meals in every day.',
  ],
  facts: [
    { k: 'currently', v: 'Full-stack developer at TlvTech' },
    { k: 'focus', v: 'React · Node.js · Python · AWS · Cloudflare' },
    { k: 'based in', v: 'Israel' },
  ],
};

export const experience = [
  {
    company: 'TlvTech',
    title: 'Full-Stack Developer',
    range: 'Feb 2024 - Present',
    summary:
      'Full-stack product development across a portfolio of internal platforms and client products, owning features from requirement gathering with customers through deployment.',
    work: [
      {
        name: 'AutoDS',
        desc: 'E-commerce automation platform serving thousands of daily users. Ship features across the React front end and Node.js services, including the subscription-management service that gates the paid plans, and Python tooling for the data pipelines between services.',
        sub: {
          label: 'CreateUGC',
          desc: 'The flagship product under AutoDS: a platform for creating and sharing AI-generated UGC videos. Build across the creation flow, from the React editor to the services behind it, used by thousands of creators daily.',
        },
      },
      {
        name: 'Pizza Hut for webOS',
        desc: 'Connected-TV app for Pizza Hut, built for LG\u2019s webOS platform and published on the LG Content Store.',
      },
      {
        name: 'Metrofun',
        desc: 'Bike-sharing app. Refactored it end to end and shipped a complete UI redesign on top of the rebuilt core.',
      },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'MongoDB', 'AWS'],
  },
];

// Featured projects. `links` entries are rendered in order; when a project
// has no public repository or demo, availability is stated instead.
export const projects = [
  {
    title: 'Calorie Arena',
    blurb:
      'A family calorie tracker styled as a daily leaderboard. Free-form Hebrew meal text goes through an AI pipeline: one model extracts food items with gram amounts, then each is checked against USDA FoodData Central, so values come from a real database instead of a model guess. Photo and voice logging included. One Cloudflare Worker, D1 storage, free tiers only.',
    stack: ['Cloudflare Workers', 'D1 (SQLite)', 'Workers AI', 'USDA FDC API', 'PWA'],
    links: [{ label: 'live', href: 'https://calorie-arena.adventurecraftgamers.workers.dev/' }],
    note: 'Source available on request',
    featured: true,
  },
  {
    title: 'SyncOTP',
    blurb:
      'Forwards verification SMS codes from an Android phone to the browser, end-to-end encrypted. A native Kotlin receiver fires even with the app closed, encrypts with AES-256-GCM, and a Cloudflare Durable Object relays ciphertext over hibernating WebSockets to a Chrome extension.',
    stack: ['Kotlin', 'Expo / React Native', 'Chrome MV3', 'Cloudflare Workers', 'WebCrypto'],
    links: [],
    note: 'Source available on request',
    featured: true,
  },
  {
    title: 'Kitzur',
    blurb:
      'A Chrome extension that turns Zoom lecture recordings into structured study summaries. Captures transcripts by patching fetch/XHR and matching response shape rather than URLs, whitelists fields before anything leaves the browser, and renders LLM output through a deterministic HTML renderer.',
    stack: ['JavaScript', 'Chrome MV3', 'LLM pipelines'],
    links: [],
    note: 'Source available on request',
    featured: true,
  },
  {
    title: 'Wakey',
    blurb:
      'An alarm for people who fall asleep on public transport: set a destination, get woken up before you reach it. Serverless backend on AWS (Express on Lambda, MongoDB, Cognito phone auth, SNS push) deployed to dev and prod by GitHub Actions, with a React Native Expo app on top.',
    stack: ['React Native', 'Node.js', 'AWS Lambda', 'MongoDB', 'Cognito'],
    links: [
      { label: 'github', href: 'https://github.com/GitamShimoni/Wakey-Frontend' },
      { label: 'live', href: 'https://wakeyapp.netlify.app/' },
    ],
    note: null,
    featured: true,
  },
];

// Smaller earlier projects, compact list under the featured grid.
export const otherProjects = [
  {
    title: 'CvCreator',
    desc: 'CV builder with live preview and print-ready templates.',
    links: [
      { label: 'repo', href: 'https://github.com/GitamShimoni/CvCreator_frontend' },
      { label: 'live', href: 'https://create-acv.netlify.app/' },
    ],
  },
  {
    title: 'Shift Manager Pro',
    desc: 'Shift scheduling system with separate admin and employee views.',
    links: [
      { label: 'repo', href: 'https://github.com/GitamShimoni/ShiftManager-frontend' },
      { label: 'live', href: 'https://shiftmanagerpro.netlify.app/' },
    ],
  },
  {
    title: 'FindMyNest',
    desc: 'Real-estate listing platform with saved searches and filters.',
    links: [
      { label: 'repo', href: 'https://github.com/GitamShimoni/FindMyNest' },
      { label: 'live', href: 'https://findmynest.netlify.app/' },
    ],
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Kotlin', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React', 'React Native / Expo', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'MongoDB'],
  },
  {
    group: 'Cloud & Infra',
    items: ['AWS (Lambda, API Gateway, Cognito, S3, SQS/SNS)', 'Cloudflare Workers & D1', 'Serverless Framework', 'GitHub Actions'],
  },
];

export const education = [
  {
    title: 'B.Sc. Computer Science',
    org: 'Holon Institute of Technology (HIT)',
    range: '2024 - Present',
    detail:
      'Evening program, taken while working full time. Admitted to the Excellence Class track.',
  },
  {
    title: 'Full-Stack Development Bootcamp',
    org: 'CyberPro',
    range: '2023',
    detail:
      '700+ hours of hands-on full-stack training. Acceptance ratio of 1:35; built 10+ projects against real company requirements.',
  },
];

export const military = {
  title: 'K9 Oketz Unit, IDF',
  role: 'Fighter, then Commander & Instructor',
  range: '2019 - 2023',
  detail:
    'Served in Israel\u2019s elite K9 unit: operational deployments first, then leading and instructing a fighter team through daily training.',
};
