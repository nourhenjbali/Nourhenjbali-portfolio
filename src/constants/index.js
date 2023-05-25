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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  springboot,
  cody,
  python,
  angular,
  dockerproj,
  socket,
  angularproj,
  enicar,
  c,
  booking,
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
    title: "Machine learning",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Spring boot",
    icon: springboot,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer internship",
    company_name: "T-cody",
    icon: cody,
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Teacher - Part Time",
    company_name: "Manouba",
    icon: python,
    iconBg: "#E6DEDD",
    date: "september 2022 - April 2023",
    points: [
      "Helping hight school student undrestanting the basics of python",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
    name: "BIND Server Dockerized - Linux ",
    description:
      "Development of BIND Server for efficient management of domain name resolution on a network, creation and manage DNS zones",

    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "Ubuntu",
        color: "pink-text-gradient",
      },
      {
        name: "VMWare",
        color: "pink-text-gradient",
      },
    ],
    image: dockerproj,
    source_code_link: "https://github.com/nourhenjbali/BIND-Server-Dockerized",
  },
  {
    name: "Online flight reservation System - Python Project",
    description:
      "Establishment of a client-server connection for online flight reservation management using Python and socket ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Socket",
        color: "green-text-gradient",
      },
      {
        name: "Tcp/Ip",
        color: "pink-text-gradient",
      },
    ],
    image: socket,
    source_code_link: "https://github.com/nourhenjbali/Python-Project",
  },
  {
    name: "internships/Workshops website E-INTERNS",
    description:
      "Development of web site for Enicathage students to navigate and explore various internship and workshop opportunities. ",
    tags: [
      {
        name: "Spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "Spring Security",
        color: "pink-text-gradient",
      },
      {
        name: " MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: enicar,
    source_code_link: "https://github.com/nourhenjbali/Enicar_internships",
  },
  
  
  {
    name: "MERN Stack Booking System ",
    description:
      "Developing of booking and reservation system includes features such as the ability to search for available rooms, select a check-in and check-out date, make a reservation, and view past reservations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/nourhenjbali/MERN-Stack-Booking-System",
  },
  {
    name: "FrontEnd Angular Project -- Employee Management ",
    description:
      "Developing HR Dashboard to manage interns and employees' information using Json-Server ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Json-Server",
        color: "green-text-gradient",
      },
    ],
    image: angularproj,
    source_code_link: "https://github.com/nourhenjbali/AngularProject",
  },
 
 
  
  {
    name: "Airport Management -- C++ Project ",
    description:
      "Development of a program that manages reservations, flights, and personnel of an airline company using C++ programming language",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: c,
    source_code_link: "https://github.com/nourhenjbali/Airport-Management/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
