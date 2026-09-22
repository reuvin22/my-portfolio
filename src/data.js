export const profile = {
  name: 'Reuvin Hernandez',
  initials: 'RH',
  title: 'Full-Stack Software Engineer',
  location: 'Laguna, PH',
  email: 'reuvinhernandez22@gmail.com',
  summary:
    "I'm a software engineer with 4 years of experience building reliable and user-friendly web applications, from the backend and database to the frontend, and I enjoy solving challenging problems along the way.",
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

/**
 * A project under revision hides its live/source links until the rework ships,
 * and a link only shows when the project actually has that URL.
 */
export function projectLinks(project) {
  const usable = (url) => Boolean(url) && url !== '#'
  if (project.status === 'Under Revision') return { live: false, code: false, any: false }
  const live = usable(project.liveUrl)
  const code = usable(project.codeUrl)
  return { live, code, any: live || code }
}

export const projects = [
  {
    title: 'RagDex — Trading Journal',
    description:
      'Journal every trade. Trade with an edge. RagDex turns the trades you log into an honest read on your edge and your habits — the numbers you would never assemble by hand.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Firebase', 'OpenRouter', 'GCP'],
    status: 'Under Development',
    credentials: {
      note: 'Sign in with this demo account to explore the journal and dashboard.',
      fields: [
        { label: 'Email', value: 'demo@ragdex.app' },
        { label: 'Password', value: 'YPfKCRLimUjzvpja' },
      ],
    },
    media: [
      { type: 'image', src: '/images/ragdex/Landing.png' },
      { type: 'image', src: '/images/ragdex/Login.png' },
      { type: 'image', src: '/images/ragdex/Dashboard.png' },
      { type: 'image', src: '/images/ragdex/Calendar.png' },
    ],
    liveUrl: 'https://trades-z8kx.vercel.app/',
  },
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
    codeUrl: 'https://github.com/reuvin22/AlumniTrackingSystem',
  },
  {
    title: 'Line Mini App',
    description:
      'A LINE-based mini app that helps fresh graduates write a cover letter that actually lands them their first job. Users answer a short set of guided questions about their course, skills, and the role they are applying for, and the app turns those answers into a polished, ready-to-send cover letter they can edit and export — all inside the LINE chat they already use every day.',
    tags: ['LINE API', 'React JS', 'Tailwind', 'Laravel', 'Vercel', 'cPanel', 'OpenAI API'],
    status: 'Under Revision',
    media: [
      { type: 'image', src: '/images/Liff/Line.jpg' },
    ],
  },
  {
    title: 'Thrift Shop',
    description:
      'An online store for secondhand clothing, where shoppers browse curated thrift finds by category and size, add pieces to a cart, and check out securely through Stripe. Listings, inventory, and orders are managed from an admin side so one-of-a-kind items come down as soon as they sell.',
    tags: ['Laravel', 'React', 'Firebase', 'Stripe'],
    status: 'Under Revision',
    media: [
      { type: 'image', src: projectImage('Thrift Shop — Storefront', '#f43f5e', '#8b5cf6') },
    ],
  },
  {
    title: 'LRF — Construction Site Attendance',
    description:
      'A LINE app that runs daily site operations for construction crews. Workers time in from their phone and tag the subcontractor they are assigned to, log travel expenses as they go, and upload receipts and site documents that are read automatically through OCR. Supervisors get a live view of which subcontractors are on site and working at any moment.',
    tags: ['Laravel', 'React JS', 'Render', 'Firebase Storage', 'GCP OCR', 'Claude Code', 'OpenRouter'],
    status: 'Under Development',
    media: [
      { type: 'image', src: '/images/lrf/4.png' },
      { type: 'image', src: '/images/lrf/1.png' },
      { type: 'image', src: '/images/lrf/2.png' },
      { type: 'image', src: '/images/lrf/3.png' },
    ],
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

export const experience = [
  {
    role: 'Software Engineer',
    company: 'The One by Camp Connection',
    logo: '/images/Experiences/camp-connection.png',
    type: 'Freelance',
    period: 'Nov 2025 – Present',
    duration: '11 mos',
    location: 'California, USA · Remote',
    skills: ['React', 'TypeScript', 'Firebase', 'REST APIs'],
    highlights: [
      'Develop and maintain full-stack web applications, working across frontend and backend features using React, TypeScript, Firebase, and backend services.',
      'Build and integrate RESTful APIs, database-driven features, authentication, and backend functionality to support application requirements.',
      'Develop and deploy new Firebase functions and backend services to extend system functionality and improve application capabilities.',
      'Implement and maintain frontend features, ensuring responsive interfaces, consistent user experiences, and reliable integration with backend services.',
      'Perform end-to-end QA testing across the system to identify existing bugs, functional issues, integration problems, and unexpected application behavior.',
      'Troubleshoot and resolve issues across both frontend and backend components, improving system stability and overall application reliability.',
      'Collaborate and communicate with other developers to discuss requirements, investigate technical issues, coordinate changes, and ensure smooth integration of features.',
      'Participate in application deployments and production updates, ensuring new features and fixes are properly tested and deployed across environments.',
      'Review existing system functionality and code to identify areas for improvement, maintainability, security, and performance.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'AIM Ltd. Co.',
    type: 'Freelance',
    period: 'Dec 2024 – August 2026',
    duration: '1 yr 7 mos',
    location: 'Tokyo, Japan · Remote',
    skills: ['React.js', 'Laravel', 'SQL', 'LINE API', 'Google Cloud Vision', 'cPanel'],
    highlights: [
      'Developed and maintained full-stack web applications using React.js, Laravel, and SQL, implementing frontend features, backend services, and database-driven functionality.',
      'Designed and developed RESTful APIs to support application features, third-party integrations, and communication between frontend and backend systems.',
      'Integrated external services and APIs, including the LINE App API, Google Cloud Vision, Claude, and Gemini, for application features and OCR-based document and image processing.',
      'Implemented and maintained OCR detection workflows, integrating AI and vision services to extract and process information from uploaded documents and images.',
      'Implemented Firebase Storage for secure image and file storage, including handling uploads and integrating stored files with application workflows.',
      'Managed application databases and data workflows using SQL and spreadsheets as data sources, ensuring data consistency and reliable application functionality.',
      'Deployed and maintained applications using cPanel and Render, handling environment configuration, application updates, and production deployments.',
      'Performed QA testing and post-production monitoring to identify existing bugs, deployment issues, and unexpected system behavior, then worked on fixes and improvements.',
      'Implemented security measures across frontend and backend applications, including secure API handling, authentication, access control, and protection of sensitive application data.',
      'Performed ongoing operation and maintenance of production systems, troubleshooting issues and improving application stability, performance, and reliability.',
      'Collaborated with and guided other developers on implementation approaches, troubleshooting, code changes, and project requirements.',
      'Communicated with developers and stakeholders through Slack and Discord to coordinate development tasks, discuss issues, provide updates, and ensure smooth project delivery.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'MAYANI PH',
    logo: '/images/Experiences/MAYANI.jpg',
    type: 'Full-time',
    period: 'Jun 2024 – Jan 2026',
    duration: '1 yr 8 mos',
    location: 'Muntinlupa, PH - Remote',
    skills: ['Angular', 'Vue.js', 'Node.js', 'Laravel', 'AWS', 'DynamoDB'],
    highlights: [
      'Developed and maintained full-stack web applications using Angular, Vue.js, Node.js, and Laravel, delivering business solutions tailored to the needs of agricultural product distributors.',
      'Designed and developed management systems, inventory systems, and other business applications to streamline operational workflows and support day-to-day business processes.',
      'Developed and maintained RESTful APIs and backend services using Node.js and Laravel, integrating frontend applications with databases and external services.',
      'Worked with AWS services, DynamoDB, and IAM to support application infrastructure, data management, access control, and secure system operations.',
      'Designed and managed database structures and application data workflows to support scalable and reliable business applications.',
      'Implemented authentication, authorization, and access-control mechanisms to protect application data and ensure appropriate system access.',
      'Performed QA testing and troubleshooting across frontend and backend systems to identify bugs, resolve issues, and improve application stability.',
      'Participated in the full software development lifecycle, including requirements gathering, development, testing, deployment, maintenance, and post-deployment support.',
      'Collaborated with clients and team members to understand business requirements, provide technical recommendations, and develop solutions aligned with operational needs.',
      'Communicated with clients and development teams through Viber and participated in project meetings through Google Meet to discuss requirements, progress, technical issues, and project updates.',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'QSolutionz PH',
    logo: '/images/Experiences/qscammers.jpg',
    type: 'Contract',
    period: 'Feb 2024 – Apr 2024',
    duration: '3 mos',
    location: 'Muntinlupa, PH - Remote',
    skills: ['Next.js', 'Laravel', 'PostgreSQL', 'Docker', 'Nginx'],
    highlights: [
      'Developed and maintained full-stack web applications using Next.js and Laravel, building responsive frontend interfaces and scalable backend services based on project requirements.',
      'Designed and developed RESTful APIs using Laravel to support frontend functionality, data processing, authentication, and system integrations.',
      'Designed and managed relational databases using PostgreSQL, developing database structures, relationships, queries, and data workflows to support application requirements.',
      'Built and maintained application features across both frontend and backend, ensuring reliable communication between user interfaces, APIs, and databases.',
      'Containerized applications using Docker and configured Nginx as a web server and reverse proxy to support consistent application deployment and operation.',
      'Participated in the full software development lifecycle, including feature development, testing, deployment, troubleshooting, maintenance, and production support.',
      'Collaborated closely with other developers to implement features, review technical approaches, troubleshoot issues, and maintain code quality and consistency.',
      'Participated in daily Scrum meetings to provide development updates, discuss blockers, coordinate tasks, and align with the development team on project priorities.',
      'Communicated with clients and team members through Viber to discuss requirements, project updates, technical concerns, and implementation details.',
      'Performed QA testing and debugging to identify and resolve frontend, backend, API, database, and deployment-related issues before and after production releases.',
      'Assisted in maintaining and improving existing systems through code refactoring, bug fixes, performance improvements, and ongoing application maintenance.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'The One by Camp Connection',
    logo: '/images/Experiences/camp-connection.png',
    type: 'Freelance',
    period: 'Jul 2023 – Nov 2023',
    duration: '5 mos',
    location: 'California, USA · Remote',
    skills: ['Laravel', 'AWS RDS', 'AWS Elastic Beanstalk', 'Postman'],
    highlights: [
      'Developed and maintained backend applications and RESTful APIs using Laravel, supporting business requirements and integration with frontend systems.',
      'Designed and implemented API endpoints, request validation, authentication, authorization, data processing, and backend business logic.',
      'Designed and managed relational databases using AWS RDS, including database structures, relationships, queries, and data management.',
      'Utilized AWS Elastic Beanstalk for application deployment and management, supporting reliable backend operations across development and production environments.',
      'Used Postman extensively for API development, testing, debugging, and validation to ensure reliable API functionality and proper request and response handling.',
      'Implemented backend security practices, including authentication, authorization, input validation, access control, and secure handling of application data.',
      'Troubleshot and resolved backend, API, database, and production issues to maintain system stability and reliability.',
      'Performed API and backend testing to identify bugs and ensure that new features and system changes functioned correctly before deployment.',
      'Participated in daily meetings through Zoom to discuss development progress, technical issues, requirements, and project priorities.',
      'Collaborated and communicated with developers and team members through Slack to coordinate tasks, troubleshoot issues, and support the successful delivery and maintenance of backend systems.',
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
