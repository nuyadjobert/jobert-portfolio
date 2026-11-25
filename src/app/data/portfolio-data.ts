export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  image?: string;
  images?: string[];
  description: string;
  role: string;
  tech: ProjectTech[];
  link?: string;
  repo?: string;
  links?: ProjectLink[];
  featured?: boolean;
  icon?: string;
  apk?: string;

  category?: string;
  year?: string;
  background?: string;
  problem?: string;
  solution?: string;
  objectives?: string[];
  features?: ProjectFeature[];
  architecture?: string;
  contributions?: string[];
  challenges?: string[];
  applications?: ProjectApplication[];

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
  name: 'Noyad Jobert',
  role: 'Front-End Developer · Full-Stack Developer · UI/UX Designer',
  location: 'Tagum City, Davao del Norte, Philippines',
  tagline: 'I turn ideas into interfaces — then make sure everything underneath actually works.',
  bio:
    'BSIT student at Aces Tagum College, Inc., and a front-end–focused full-stack developer. ' +
    'I care most about how an interface feels to use — the layout, the flow, the small details that make ' +
    'something intuitive — and I make sure everything behind it holds up just as well. That balance, ' +
    'crafting the experience first and building the structure to support it, is what drives how I approach every project.',
  email: 'jobertnoyad93@gmail.com',
  github: 'https://github.com/nuyadjobert',
  facebook: 'https://www.facebook.com/jobert.nuyad',
  photo: 'assets/jobert-portrait.jpg',
};

export const JOURNEY = [
  {
    label: 'Started',
    text: 'Curious about what makes an app feel right to use — not just how it looks, but how it responds.',
  },
  {
    label: 'Building',
    text: 'Learned by building for both web and mobile, always starting from how something should feel before worrying about how it works underneath.',
  },
  {
    label: 'Now',
    text: 'Specializing in front-end craft while still owning full-stack work — focused on shipping interfaces that people actually find easy to use.',
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
    'Tailwind CSS',
    'Bootstrap',

  ],

  Backend: [
    'Laravel',
    'REST API',
    'MySQL',
    'MVC Architecture',
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
    category: 'Web & Mobile Application',
    year: '2026',

    link: 'https://theobrotect.vercel.app',
    apk: 'https://github.com/nuyadjobert/TheobroTect/releases/download/v1.0.4/TheobroTect-v1.0.4.apk',
    repo: 'https://github.com/nuyadjobert/TheobroTect',

    background:
      'TheobroTect is a cacao-focused project that uses image-based detection to help users identify possible cacao diseases and conditions. It provides web and mobile application experiences.',

    problem:
      'Identifying cacao diseases and pests can be difficult without access to timely identification support. Users need a convenient way to examine cacao-related images and understand the detection results.',

    solution:
      'TheobroTect provides image-based detection through its applications, presenting the identified result to help users make an initial assessment.',

    objectives: [
      'Provide an accessible way to submit cacao-related images for detection.',
      'Present detection results in a clear and understandable format.',
      'Make the system accessible through web and Android applications.'
    ],

    features: [
      {
        title: 'Image-Based Detection',
        description:
          'Allows users to submit images for the system to analyze and return a detection result.'
      },
      {
        title: 'Cacao Condition Classification',
        description:
          'Supports the identification of black pod disease, cacao pod borer, mealybug, healthy cacao, and non-cacao images.'
      },
      {
        title: 'Detection Result Display',
        description:
          'Presents the detection output to help users understand the identified cacao condition.'
      }
    ],

    applications: [
      {
        name: 'Web Application',
        description:
          'The web version provides browser-based access to TheobroTect. Add a description of the actual functions available in your deployed web application.',
        images: [
          'assets/T-1.png',
          'assets/T-2.png',
          'assets/T-3.png',
          'assets/T-4.png',
        ],
        technologies: [
          { name: 'Angular', icon: 'devicon-angular-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' }
        ]
      },
      {
        name: 'Android Application',
        description:
          'The mobile version provides Android access to the cacao image detection system.',
        images: [
          'assets/TM-1.png',
          'assets/TM-2.png',
          'assets/TM-3.png',
          'assets/TM-4.png',
          'assets/TM-5.png',
        ],
        technologies: [
          { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
          { name: 'Dart', icon: 'devicon-dart-plain colored' }
        ]
      }
    ],

    architecture:
      'The project includes web and mobile application clients. Describe the actual backend, API, and model integration here based on your implemented system.',

    contributions: [
      'Developed front-end screens for the mobile application.',
      'Worked on UI/UX design and the presentation of detection results.',
      'Collaborated with the capstone team during application development.'
    ],

    tech: [
      { name: 'Angular', icon: 'devicon-angular-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
      { name: 'Dart', icon: 'devicon-dart-plain colored' },
      { name: 'UI/UX', icon: 'devicon-figma-plain colored' }
    ],

    featured: true
  },
  {
    name: 'Registrar Information System',
    image: 'assets/registrar.png',

    description:
      'A web-based registrar system that centralizes student records, enrollment, grades, and document requests, helping school staff process records faster and with fewer errors.',

    role: 'Full-Stack Developer',
    category: 'Web Application',
    year: '2026',

    links: [
      { label: 'Frontend Repository', url: 'https://github.com/nuyadjobert/registrar-frontend' },
      { label: 'Backend Repository (PHP)', url: 'https://github.com/nuyadjobert/Registrar_module1' }
    ],

    background:
      'The registrar office keeps a school\'s academic records: student profiles, enrollment, grades, and official documents such as transcripts and certificates. This system digitizes those tasks into a single secure platform, so staff can find, update, and release records without digging through paper files or scattered spreadsheets.',

    problem:
      'Handling records by hand is slow and error-prone. Searching for a student file takes time, data is duplicated across files, and document requests pile up in long queues. Without a central system, it is also hard to track the status of a request or produce accurate reports.',

    solution:
      'The system stores all records in one database with fast search and role-based access. Staff can manage student profiles, process enrollment, encode grades, and handle document requests from a single dashboard, while reports are generated from the same data.',

    objectives: [
      'Centralize student records in one secure, searchable system.',
      'Reduce the time needed to process enrollment and document requests.',
      'Minimize data entry errors and duplicate records.',
      'Provide clear dashboards and reports for registrar staff.',
      'Restrict access to sensitive records through role-based permissions.'
    ],

    features: [
      {
        title: 'Student Records',
        description: 'Create, search, and update student profiles with academic history in one place.'
      },
      {
        title: 'Enrollment Management',
        description: 'Process enrollment per semester, assign subjects, and track enrollment status.'
      },
      {
        title: 'Grades & Transcripts',
        description: 'Encode and review grades, then prepare transcripts from the stored records.'
      },
      {
        title: 'Document Requests',
        description: 'Receive and track requests for certificates and other documents from pending to released.'
      },
      {
        title: 'Dashboard & Reports',
        description: 'View live summaries of enrollment and requests, and generate reports for printing or review.'
      },
      {
        title: 'User Roles & Security',
        description: 'Separate access for admins and staff, with login protection for sensitive data.'
      }
    ],

    applications: [
      {
        name: 'Web Application',
        description:
          'The registrar portal gives staff a dashboard, student record management, and request tracking in a clean browser-based interface.',
        images: [
          'assets/R-1.png',
          'assets/R-2.png',
          'assets/R-3.png',
          'assets/R-4.png'
        ],
        technologies: [
          { name: 'Angular', icon: 'devicon-angular-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' }
        ]
      }
    ],

    architecture:
      'The system follows a client-server design. An Angular single-page application provides the user interface and communicates with a PHP backend over HTTP. The backend handles authentication, validation, and business logic, and stores data in a MySQL database.',

    contributions: [
      'Designed and built the user interface, including the dashboard and record management screens.',
      'Implemented the main modules: student records, enrollment, and document requests.',
      'Built forms with validation to keep the encoded data accurate.',
      'Set up login and role-based access for secure use.',
      'Tested the system and fixed issues found during use.'
    ],

    tech: [
      { name: 'Angular', icon: 'devicon-angular-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-original colored' }
    ],

    featured: true
  },

  {
    name: 'Minute Burger Management System',
    image: 'assets/MB.png',

    description:
      'A branch-based inventory and cash management system for daily store operations. Crew members record shift inventory and cash counts, while Head Crew members review and verify the submitted records.',

    role: 'Full-Stack Developer',
    category: 'Inventory & Cash Management System',
    year: '2026',

    links: [
      { label: 'Frontend Repository', url: 'https://github.com/nuyadjobert/Mb-frontend' },
      { label: 'Backend Repository (Laravel)', url: 'https://github.com/nuyadjobert/Mb-backend' }
    ],

    background:
      'Minute Burger stores handle daily inventory movement and cash transactions across multiple shifts. Monitoring these records manually makes it hard to keep inventory balances accurate, track sales, and verify cash collections. This system provides a centralized digital platform for recording and reviewing daily branch operations.',

    problem:
      'Manual inventory and cash recording leads to calculation errors, inconsistent shift records, duplicate or incorrect entries, and weak accountability. Previous shift balances also have to be carried into the next shift, which is difficult to monitor by hand.',

    solution:
      'The system digitizes inventory and cash counting through a branch-based platform. Crew members record beginning inventory, deliveries, outgoing quantities, ending inventory, usage, orders, and sales per shift, and submit denomination-based cash counts with serial number validation. Head Crew members review inventory records and verify cash count submissions.',

    objectives: [
      'Digitize daily inventory recording and shift monitoring.',
      'Improve accuracy in calculating inventory usage and remaining stock.',
      'Maintain inventory continuity between consecutive shifts.',
      'Provide structured cash count recording with serial number validation.',
      'Allow Head Crew members to review and verify submitted records.',
      'Improve accountability and monitoring of branch operations.'
    ],

    features: [
      {
        title: 'Shift-Based Inventory',
        description:
          'Record beginning inventory, deliveries, outgoing quantities, ending inventory, usage, total orders, and sales for each shift.'
      },
      {
        title: 'Automatic Inventory Carry-Over',
        description:
          'Use the previous shift\'s ending inventory as the next shift\'s beginning inventory to keep daily records continuous.'
      },
      {
        title: 'Inventory Validation',
        description:
          'Apply quantity and divisor validation to prevent invalid inventory entries and incorrect calculations.'
      },
      {
        title: 'Inventory Correction',
        description:
          'Support corrections that require a reason, so every adjustment is on record.'
      },
      {
        title: 'Cash Count Management',
        description:
          'Record cash denominations from ₱1,000 bills down to ₱1 coins, including serial numbers for applicable denominations.'
      },
      {
        title: 'Serial Number Validation',
        description:
          'Check for empty, duplicate, and repeated serial numbers across denominations before submission.'
      },
      {
        title: 'Cash Summary',
        description:
          'Calculate total cash, expenses, and net cash to support end-of-shift reconciliation.'
      },
      {
        title: 'Head Crew Verification',
        description:
          'Let authorized Head Crew members review inventory entries and verify submitted cash counts.'
      },
      {
        title: 'Branch-Based Records',
        description:
          'Organize records by branch, crew, shift, and record date.'
      }
    ],

    applications: [
      {
        name: 'Web Application',
        description:
          'A responsive web platform where crew and Head Crew members manage shift inventory, record cash counts, and review daily branch operations.',
        images: [
          'assets/mb-1.png',
          'assets/mb-2.png',
          'assets/mb-3.png'
        ],
        technologies: [
          { name: 'Angular', icon: 'devicon-angular-plain colored' },
          { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
          { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' }
        ]
      }
    ],

    architecture:
      'The system uses Angular with TypeScript for the frontend and Laravel with PHP for the backend API. The frontend communicates with the backend through REST API endpoints, while MySQL stores branch information, inventory records, cash count details, and related operational data. Authentication and role-based access control which functions crew and Head Crew members can use.',

    contributions: [
      'Designed and developed the Angular frontend for inventory and cash count workflows.',
      'Developed backend API functionality using Laravel and PHP.',
      'Implemented shift-based inventory recording and automatic inventory carry-over.',
      'Developed inventory quantity validation and correction workflows.',
      'Implemented denomination-based cash counting and serial number validation.',
      'Developed Head Crew inventory checking and verification workflows.',
      'Integrated frontend components with backend API endpoints.',
      'Tested inventory calculations, cash count validation, and shift-based operations.'
    ],

    tech: [
      { name: 'Angular', icon: 'devicon-angular-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'Laravel', icon: 'devicon-laravel-original colored' },
      { name: 'PHP', icon: 'devicon-php-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-original colored' }
    ],

    featured: true
  }
];

export interface ProjectFeature {
  title: string;
  description: string;
}


export interface ProjectApplication {
  name: string;
  description: string;
  images: string[];
  technologies: ProjectTech[];
}
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