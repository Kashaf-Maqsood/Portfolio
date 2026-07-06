export type Domain = 'frontend' | 'backend' | 'design' | 'docs';

export const domainColor: Record<Domain, string> = {
  frontend: 'var(--coral)',
  backend: 'var(--violet)',
  design: 'var(--amber)',
  docs: 'var(--teal)'
};

export const domainLabel: Record<Domain, string> = {
  frontend: 'Frontend',
  backend: 'Backend & Data',
  design: 'Design',
  docs: 'Docs & Process'
};

export const profile = {
  name: 'Kashaf Maqsood',
  role: 'Software Engineer',
  tagline: 'I build interfaces in Angular, data in SQL, and the odd graphic in between.',
  location: 'Dhedowali, Daska, Pakistan',
  email: 'kashafmaqsood36@gmail.com',
  phone: '+92 334 4101115',
  summary:
    "Software Engineering graduate currently working as a Developer . Interested in web development, databases, and software design. Hands-on experience with Angular, Python, and SQL through academic and internship projects. Passionate about learning, building practical solutions, and growing as a software professional."
};

export interface SkillGroup {
  domain: Domain;
  title: string;
  blurb: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: 'frontend',
    title: 'Frontend',
    blurb: 'Building interfaces people actually use.',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    domain: 'backend',
    title: 'Backend & Data',
    blurb: 'Python on top, SQL underneath.',
    skills: ['Python', 'SQL', 'PostgreSQL', 'Stored Procedures', 'Database Design & Normalization']
  },
  {
    domain: 'design',
    title: 'Design',
    blurb: 'Where interfaces start, on paper first.',
    skills: ['Graphic Design', 'Prototyping Tools', 'Adobe Illustrator', 'Canva']
  },
  {
    domain: 'docs',
    title: 'Docs & Process',
    blurb: 'Because a project without documentation is a rumor.',
    skills: ['IEEE-standard SDLC Documentation', 'ER & Sequence Diagrams', 'Communication']
  }
];

export interface ExperienceItem {
  domain: Domain;
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    domain: 'frontend',
    role: 'Developer Intern',
    org: 'Deep Cognitive Solutions',
    period: 'March 2026 — Present',
    points: [
      'Work mainly on the Angular frontend, using Bootstrap and Tailwind CSS for UI development.',
      'Contribute to backend development with Python, integrating SQL and PostgreSQL databases.',
      'Collaborate on full-stack project tasks as part of an ongoing internship.'
    ]
  },
  {
    domain: 'design',
    role: 'Graphic Designer',
    org: 'Freelance / Social Media',
    period: 'May 2024 — Present',
    points: [
      'Design visual content for online social media platforms.',
      'Apply art and craft skills to design a range of products.',
      'Work with Adobe Illustrator and Canva.'
    ]
  }
];

export interface EducationItem {
  domain: Domain;
  degree: string;
  org: string;
  period: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    domain: 'backend',
    degree: 'BS Software Engineering',
    org: 'University of the Punjab',
    period: '2021 — July 2025',
    detail: 'CGPA 3.28/4.00 · Networking, DBMS, Web Development, Software Engineering & Re-Engineering, Software Project Management, Operating Systems'
  },
  {
    domain: 'docs',
    degree: 'Intermediate, FSc Pre-Medical',
    org: 'Kips College',
    period: '2019 — 2021',
    detail: '994/1100'
  }
];

export interface ProjectItem {
  domain: Domain;
  title: string;
  period: string;
  role: string;
  points: string[];
}

export const projects: ProjectItem[] = [
  {
    domain: 'frontend',
    title: 'RecipeVerse & Mini Projects',
    period: 'March 2026 — Present',
    role: 'Frontend Developer (Angular) · Internship Project',
    points: [
      'Built RecipeVerse, a web app that generates and adds recipes from user-provided ingredients, and browses a collection of pre-made recipes.',
      'Built smaller practice projects: a Task Management Website, a Notes App, and a Weather App.',
      'While learning Python, built a terminal-based Quiz App and a Contact Book application.'
    ]
  },
  {
    domain: 'backend',
    title: 'E-Commerce Database System',
    period: 'December 2025',
    role: 'Database Developer · Academic Project',
    points: [
      'Designed a relational eCommerce database with 7+ tables, applying normalization and data integrity rules.',
      'Implemented Admin (CRUD), Seller (Read/Update), and Provider (Read/Insert) roles using SQL permissions.',
      'Inserted 100+ records per table using INSERT and INSERT INTO…SELECT, validated with SELECT queries.'
    ]
  },
  {
    domain: 'docs',
    title: 'CraftyWorld Ecommerce Website',
    period: 'Dec 2024 — July 2025',
    role: 'Coordinator · Frontend Developer · Database Administrator (Final Year Project)',
    points: [
      'Built an online eCommerce platform using frontend technologies.',
      'Designed ER diagrams, sequence diagrams, and use cases.',
      'Documented the project to IEEE standards and managed tasks in Excel.'
    ]
  },
  {
    domain: 'docs',
    title: 'Online Shopping Platform Documentation',
    period: 'Dec 2024 & Jan 2025',
    role: 'Individual Academic Project',
    points: [
      'Developed complete software documentation following IEEE format.',
      'Designed ERDs, sequence diagrams, and use-case diagrams.',
      'Used SmartDraw, MS Word, and Excel aligned with university templates.'
    ]
  },
  {
    domain: 'backend',
    title: 'Software House Network Design',
    period: 'May 2024',
    role: 'Academic Project',
    points: [
      'Designed a logical network using Cisco Packet Tracer.',
      'Implemented a Windows Server setup and documented the full process.'
    ]
  }
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];
