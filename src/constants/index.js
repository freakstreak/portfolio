import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  medpiper,
  geekyAnts,
  servicenow,
  tripguide,
  bolt,
  geekdocs,
  linkedin,
  twitter,
  github,
  nextjs,
  mysql,
  graphql,
  laravel,
  qemu,
  linux,
  boltsh,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Dev Ops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "Medpiper Technologies",
    icon: medpiper,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Developed both frontend and backend components for several applications like Doctor Swasth and Resume builder.",
      "Utilized a range of technologies, including Next.js, React.js, Node.js, Gatsby.js and GraphQL to achieve project objectives.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Engineer 3",
    company_name: "GeekyAnts",
    icon: geekyAnts,
    iconBg: "#383E56",
    date: "Aug 2022 - Jun 2025",
    points: [
      "Contributed to a diverse range of open-source projects, including 'Bolt,' 'Gluestack,' a comprehensive full-stack framework.",
      "Developed full-stack dashboard apps for admin and user needs",
      "Developed Seal, which is a hosting service optimized and built for gluestack apps by the creators of gluestack.",
      "Collaborated with a team of developers to create high-quality products.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Servicenow",
    icon: servicenow,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Present",
    points: [
      "Working on the Now Platform, focusing on enhancing user experience and functionality through innovative solutions.",
      "Collaborating with cross-functional teams to deliver high-quality software that meets client needs and industry standards.",
      "Implementing best practices in coding, testing, and deployment to ensure robust and scalable applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bolt Framework",
    description:
      "Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "qemu",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: bolt,
    source_code_link: "https://bolt.gluestack.io/",
  },
  {
    name: "Geekdocs",
    description:
      "Build your best ideas together, in Geek Docs Create and collaborate on online documents in real-time and from any device.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "gray-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react-slate",
        color: "pink-text-gradient",
      },
    ],
    image: geekdocs,
    source_code_link: "https://github.com/freakstreak/geekdocs",
  },
  {
    name: "bolt.sh",
    description:
      "Bolt.sh provides expert cloud migration, management, DevOps, automation, and security, ensuring scalable, cost-efficient, and high-performing solutions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "openstack",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
      {
        name: "postgres",
        color: "gray-text-gradient",
      },
    ],
    image: boltsh,
    source_code_link: "https://bolt.sh/",
  },
];

const socialMediaHandles = [
  {
    url: "https://www.linkedin.com/in/tanmay-jaiswal-aa3580189/",
    icon: linkedin,
  },
  {
    url: "https://twitter.com/_tanmay22",
    icon: twitter,
  },
  {
    url: "https://github.com/freakstreak",
    icon: github,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaHandles,
};
