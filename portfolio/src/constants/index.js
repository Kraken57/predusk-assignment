

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Version Control System Like GIT',
    desc: 'A powerful CLI-based version control system built in C++ with OOP principles. Utilizes vectors and maps to efficiently track file changes and versions. Implements branching, merging, and stash for seamless version management.',
    subdesc:
      'Implemented essential features like branches, merging, and stash. Developed an intuitive Python GUI with PyQT5 for file staging and a visually appealing branch merging representation using HTML, CSS, and JavaScript.',
    href: 'https://github.com/Kraken57/VersionControlSystem',
    texture: '',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'C++', path: '/icons/c++.png' },
      { id: 2, name: 'Python', path: '/icons/python.png' },
      { id: 3, name: 'HTML', path: '/icons/html.png' },
      { id: 4, name: 'CSS', path: '/icons/css.png' },
      { id: 5, name: 'Javascript', path: '/icons/javascript.png' },
    ],
  },
  {
    title: 'ChatApp',
    desc: 'A real-time messaging platform with a Next.js frontend and a Node.js backend. Utilizes Express for handling server-side logic and API requests. Ensures seamless communication with WebSockets and Socket.IO integration.',
    subdesc:
      'Leverages Socket.IO to enable real-time, bidirectional communication between users. Stores and manages chat data efficiently using PostgreSQL as the database. Implements Redis for caching to optimize performance and reduce latency. Ensures a smooth and responsive messaging experience with scalable architecture.',
    href: 'https://github.com/Kraken57/ibyassignment',
    texture: '',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/icons/nextjs.png' },
      { id: 2, name: 'Node.js', path: '/icons/nodejs.png' },
      { id: 3, name: 'Socket.IO', path: '/icons/socketio.png' },
      { id: 4, name: 'PostgreSQL', path: '/icons/postgres.png' },
      { id: 5, name: 'Redis', path: '/icons/redis.png' },
    ],
  },
  {
    title: 'AR Basketball',
    desc: '"An immersive AR basketball shooting game built with Unity3D and ARCore, delivering realistic gameplay. Focuses on an engaging UI/UX to enhance player interaction and experience. Designed for smooth controls and intuitive mechanics for an authentic feel.',
    subdesc: 'Developed detailed 3D models of the basketball and hoop using Blender. Ensured accurate proportions and realistic textures for a visually appealing game. Optimized models for performance without compromising quality.',
    href: 'https://github.com/ariesiitr/AR-BASKETBALL',
    texture : '',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Unity3D', path: '/icons/unity.png' },
      { id: 2, name: 'C#', path: '/icons/csharp.png' },
      { id: 3, name: 'Blender', path: '/icons/blender.png' },
    ],
  },
  {
    title: 'Car Game with Health Bar & Pickups',
    desc: 'A fast-paced Unity3D car game featuring a dynamic health system. Health bar depletes on collisions, adding a strategic challenge. Implemented health pickups using C# to restore health and extend gameplay.',
    subdesc:
      'Implemented health pickups using C# to enhance the gameplay experience. Designed a dynamic system for collecting health boosts during races. Ensured smooth integration with the game\'s mechanics.',
    href: 'https://github.com/Kraken57/Game_Car',
    texture: '',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Unity3D', path: '/icons/unity.png' },
      { id: 2, name: 'C#', path: '/icons/csharp.png' },
    ],
  },
  {
    title: 'Graphics Library | ArIES: Artificial Intelligence and Electronics Society, IITR',
    desc: 'Engineered a bespoke graphics library entirely in C, devoid of external graphics APIs such as OpenGL or SDL.',
    subdesc:
      'Created foundational drawing functionalities including lines, rectangles, circles, polygons, and advanced area filling operations from scratch. Developed robust error handling mechanisms to ensure stability and reliability under diverse conditions.',
    href: 'https://github.com/Kraken57/graphiX.c',
    texture: '',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'C', path: '/icons/c.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Machau Games',
    pos: 'Game Developer',
    duration: 'Jul 2023 - Sep 2024',
    title:
      'Crafted a dynamic car racing game with a health bar using Unity3D and developed an email automation system with Python.',
    icon: '/assets/machau.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ARIES, IIT Roorkee',
    pos: 'Recruitment Project',
    duration: 'Apr 2023 - May 2023',
    title:
      'Utilized Unity3D and ARCore to create an AR basketball game, incorporating Vuforia and ARCore for marker-based implementation.',
    icon: '/assets/aries.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Kirabiz Technologies',
    pos: 'Full-Stack Developer',
    duration: 'Feb 2024 - Jun 2024',
    title:
      'Built a full-stack MERN application for online shopping, enhancing user experience and backend efficiency. Developed a responsive ed-tech frontend and managed version control with Git and GitHub.',
    icon: '/assets/kira.png',
    animation: 'salute',
  },
];
