import {
  frontend,
  backend,
  mobileapp,
  web,
  javascript,
  laravel,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mysql,
  git,
  figma,
  androidstudio,
  alibaba,
  rti,
  travel,
  absensi,
  aws,
  lks,
  asek,
  alibabalogo,
  rtilogo,
  awslogo,
  lkslogo,
  bs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobileapp,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
];

const experiences = [
  {
    banner: alibaba,
    title: "Alibaba Cloud AI Forward ASIA",
    company_name: "Alibaba",
    icon: alibabalogo,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Join Alibaba Cloud AI Forward 2021",
      "Success The Exam Alibaba Cloud"
    ],
  },
  {
    banner: rti,
    title: "Rumah Teknologi Indonesia",
    company_name: "RTI",
    icon: rtilogo,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Nov 2022",
    points: [
      "Complete training from Rumah Teknologi",
      "Build Android App with Kodular",
      "Graduated with predicate 'Sangat Memuaskan'"
    ],
  },
  {
    banner: aws,
    title: "Workshop AWS",
    company_name: "AWS",
    icon: awslogo,
    iconBg: "#383E56",
    date: "22 September 2022",
    points: [
      "Joining Workshop with AWS.",
    ],
  },
  {
    banner: lks,
    title: "Web Technologies",
    company_name: "LKS",
    icon: lkslogo,
    iconBg: "#E6DEDD",
    date: "9 Maret 2023",
    points: [
      "Juara 2 lomba LKS Web Technologies Tingkat Kota",
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
    name: "Absence App",
    description:
      "Create Absence App 'Absensiku' with Kodular",
    tags: [
      {
        name: "kodular",
        color: "pink-text-gradient",
      }
    ],
    image: absensi,
    source_code_link: "https://play.google.com/store/apps/details?id=com.absensiku.app&hl=en",
  },
  {
    name: "Travel App",
    description:
      "Create Travel App 'Travelopedia' with Android Studio",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      
    ],
    image: travel,
    source_code_link: "https://play.google.com/store/apps/details?id=com.thrq.travelopedia2&hl=en",
  },
  {
    name: "Quiz App",
    description:
      "Create Quiz App 'Asek Quiz' with Android Studio",
    tags: [
      {
        name: "java",
        color: "orange-text-gradient",
      },
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      
    ],
    image: asek,
    // source_code_link: "https://play.google.com/store/apps/details?id=com.thrq.travelopedia2&hl=en",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
