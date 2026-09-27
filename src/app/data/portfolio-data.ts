export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  image?: string;
  description: string;
  role: string;
  tech: string[];
  link?: string;
  repo?: string;
  links?: ProjectLink[];
  featured?: boolean;
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  level: string;
  school: string;
  credential: string;
  period: string;
  note?: string;
}

export const PROFILE = {
  name: 'Jobert Padillo Noyad',
  role: 'Front-End Developer · Full-Stack',
  location: 'Tagum City, Davao del Norte, Philippines',
  tagline: 'I build interfaces first, then wire up everything behind them.',
  bio:
    'Fourth-year BSIT student at Aces Tagum College, Inc. and a front-end–focused full-stack developer. ' +
    'I design and ship web and mobile experiences with Angular, TypeScript, and Flutter — from the interface ' +
    'down to the database — and recently led the front end of TheobroTect, a cacao disease detector.',
  email: 'jobertnoyad93@gmail.com',
  github: 'https://github.com/nuyadjobert',
  facebook: 'https://www.facebook.com/jobert.nuyad',
  photo: 'assets/jobert-portrait.jpg',
};

export const JOURNEY = [
  {
    label: 'Started',
    text: 'Began as a BSIT student at Aces Tagum College, curious about how apps are actually built under the interface.',
  },
  {
    label: 'Building',
    text: 'Picked up Angular and TypeScript for the web, then Flutter with Dart and Kotlin for mobile — plus PHP and MySQL on the server.',
  },
  {
    label: 'Now',
    text: 'Specializing in front-end development while shipping full-stack work: capstone, registrar tools, and UI that people can actually use.',
  },
];

export const SKILLS = {
  Languages: [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Dart',
    'Kotlin',
    'Java',
    'PHP',
  ],

  Frontend: [
    'Angular',
    'Flutter',
  ],

  Backend: [
    'Laravel',
    'REST API',
    'MySQL',
  ],

  Tools: [
    'VS Code',
    'Android Studio',
    'GitHub',
    'Figma',
  ],
};

export const PROJECTS: Project[] = [
  {
    name: 'TheobroTect',
    image: 'assets/theobrotect.png',
    description:
      'Capstone image detector that helps identify cacao plant diseases from photos — built so farmers and researchers can get a faster first read in the field.',
    role: 'Front-end developer · Capstone team',
    tech: ['Flutter', 'Dart', 'UI/UX'],
    repo: 'https://github.com/nuyadjobert/TheobroTect',
    featured: true,
  },
  {
    name: 'Registrar Module',
    image: 'assets/registrar.png',
    description:
      'Registrar workflow for campus records: a dedicated front-end for staff-facing screens, paired with a PHP module that handles the registrar logic.',
    role: 'Front-end & module developer',
    tech: [
      'Tailwind CSS',
      'TypeScript',
      'Angular',
      'Laravel',
      'PHP',
      'REST API',
      'MySQL',
    ],
    links: [
      {
        label: 'Front-end',
        url: 'https://github.com/nuyadjobert/registrar-frontend',
      },
      {
        label: 'Back-end',
        url: 'https://github.com/nuyadjobert/Registrar_module1',
      },
    ],
        featured: true,

  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    org: 'TheobroTect · Capstone, Aces Tagum College',
    role: 'Front-End Developer',
    period: '2026 — Capstone',
    bullets: [
      'Built the Flutter front end for an image-based cacao disease detector used by the capstone team.',
      'Translated detection results into screens that are readable in the field, not just in a lab demo.',
      'Collaborated with the team on UI/UX decisions from first layout through the shipped repository.',
    ],
  },
  {
    org: 'Registrar Module · Academic project',
    role: 'Front-End / Module Developer',
    period: '2026',
    bullets: [
      'Implemented the registrar front-end for campus record workflows.',
      'Delivered the companion PHP registrar module that powers the server-side process.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    level: 'College',
    school: 'Aces Tagum College, Inc.',
    credential: 'Bachelor of Science in Information Technology',
    period: '2023 — Present · 4th year',
    note: 'Institute of Information and Communications Technology',
  },
  {
    level: 'Senior High School',
    school: 'Kimamon National High School', // fill in actual school name
    credential: 'ICT Strand', // adjust to actual strand
    period: '2018-2019', // e.g. '2019 — 2021'
  },
  {
    level: 'Junior High School',
    school: 'Kimamon National High School', // fill in actual school name
    credential: '',
    period: '2016-2017', // e.g. '2015 — 2019'
  },
  {
    level: 'Elementary',
    school: 'Lunga-og Elementary School', // fill in actual school name
    credential: '',
    period: '2009-2015', // e.g. '2009 — 2015'
  },
];

export const ACHIEVEMENTS: string[] = [
  'UI/UX Designer of the Year — Aces Tagum College, Inc., April 15, 2026',
];

export const AWARD_IMAGE = 'assets/uiux-award.jpg';