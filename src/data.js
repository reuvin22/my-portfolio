export const profile = {
  name: 'Reuvin Hernandez',
  initials: 'RH',
  title: 'Full-Stack Software Engineer',
  location: 'Laguna, PH',
  email: 'reuvinhernandez22@gmail.com',
  summary:
    "I'm a software engineer with 3 years of experience building reliable and user-friendly web applications, from the backend and database to the frontend, and I enjoy solving challenging problems along the way.",
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: 'https://github.com/reuvin22', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reuvin-hernandez-a6688a26b/', icon: 'linkedin' },
  ],
}

/**
 * Generates a placeholder thumbnail (gradient + label) so each project has
 * media out of the box. Swap entries in a project's `media` array for real
 * screenshots/videos whenever you have them — each entry is either
 * { type: 'image', src } or { type: 'video', src }.
 */
function projectImage(label, from, to) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}" />
        <stop offset="1" stop-color="${to}" />
      </linearGradient>
    </defs>
    <rect width="640" height="360" fill="url(#g)" />
    <text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="36" font-weight="700"
      fill="#ffffff" fill-opacity="0.92" text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const projects = [
  {
    title: 'Alumni Tracking System',
    description:
      'A web platform for Laguna State Polytechnic University where alumni submit their post-graduation details through a public form, and administrators track employment outcomes via a dashboard with yearly trend and gender distribution reports.',
    tags: ['React', 'Firebase', 'Vercel'],
    status: 'Live',
    credentials: {
      note: 'Use these to explore the full dashboard.',
      fields: [
        { label: 'Email', value: 'admin@alumni.test' },
        { label: 'Password', value: 'Admin123!' },
      ],
    },
    media: [
      { type: 'image', src: '/images/ats/Landing.png' },
      { type: 'image', src: '/images/ats/Login.png' },
      { type: 'image', src: '/images/ats/Dashboard.png' },
      { type: 'image', src: '/images/ats/Form.png' },
      { type: 'image', src: '/images/ats/Info.png' },
    ],
    liveUrl: 'https://alumni-tracking-system-tau.vercel.app/',
    codeUrl: '#',
  },
  {
    title: 'Pathfinder — Trip Planning App',
    description:
      'A collaborative trip planner that generates optimized multi-stop itineraries and syncs live between travelers using WebSockets.',
    tags: ['Next.js', 'Tailwind CSS', 'Mapbox', 'Redis'],
    status: 'In Development',
    media: [
      { type: 'image', src: projectImage('Pathfinder — Overview', '#0ea5e9', '#6366f1') },
      { type: 'image', src: projectImage('Pathfinder — Map', '#0284c7', '#4f46e5') },
      { type: 'image', src: projectImage('Pathfinder — Itinerary', '#6366f1', '#0ea5e9') },
    ],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Ledger Lite — Personal Finance Tracker',
    description:
      'A privacy-first budgeting app with automatic categorization, recurring bill detection, and exportable monthly reports.',
    tags: ['React', 'Express', 'MongoDB', 'Chart.js'],
    status: 'In Revision',
    credentials: {
      note: 'Sign in with this test account to see sample budgets and reports.',
      fields: [
        { label: 'Username', value: 'demo_user' },
        { label: 'Password', value: 'Ledger#Demo24' },
      ],
    },
    media: [
      { type: 'image', src: projectImage('Ledger Lite — Overview', '#f97316', '#ec4899') },
      { type: 'image', src: projectImage('Ledger Lite — Budgets', '#ea580c', '#db2777') },
      { type: 'image', src: projectImage('Ledger Lite — Reports', '#ec4899', '#f97316') },
    ],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'DevSnippets — Code Snippet Manager',
    description:
      'A searchable snippet library for developers with syntax highlighting, tagging, and a VS Code extension for quick capture.',
    tags: ['TypeScript', 'Vite', 'SQLite', 'VS Code API'],
    status: 'Not Live',
    media: [
      { type: 'image', src: projectImage('DevSnippets — Overview', '#10b981', '#0ea5e9') },
      { type: 'image', src: projectImage('DevSnippets — Library', '#059669', '#0284c7') },
      { type: 'image', src: projectImage('DevSnippets — Editor', '#0ea5e9', '#10b981') },
    ],
    liveUrl: '#',
    codeUrl: '#',
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Vue.js', icon: 'vuejs' },
      { name: 'AngularJS', icon: 'angular' },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'DynamoDB', icon: 'dynamodb' },
    ],
  },
  {
    category: 'Cloud, Tools & AI',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'AWS CodeCommit', icon: 'codecommit' },
      { name: 'S3', icon: 's3' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'AI', icon: 'ai' },
    ],
  },
]

export const education = [
  {
    school: 'Laguna State Polythecnic University',
    degree: 'B.S. in Computer Science',
    period: '2018 – 2022'
  },
  {
    school: 'Laguna State Polythecnic University',
    degree: 'Senior Highschool',
    period: '2016-2018'
  },
  {
    school: 'Los Banos Integrated School',
    degree: 'Junior Highschool',
    period: '2012-2016'
  },
]
