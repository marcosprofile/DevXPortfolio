import {
  FaReact,
  FaGitSquare,
  FaJsSquare,
  FaCss3,
  FaAngular,
  FaFigma,
  FaHtml5
} from 'react-icons/fa'

import { SiFramer, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiVite, SiVuedotjs } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";

export const Skills = [
  {
    id: 1,
    tech: 'HTML',
    icon: <FaHtml5 />
  },
  {
    id: 2,
    tech: 'CSS',
    icon: <FaCss3 />
  },
  {
    id: 3,
    tech: 'Tailwind CSS',
    icon: <SiTailwindcss />
  },
  {
    id: 4,
    tech: 'JavaScript',
    icon: <FaJsSquare />
  },
  {
    id: 5,
    tech: 'TypeScript',
    icon: <BiLogoTypescript />
  },
  {
    id: 6,
    tech: 'React',
    icon: <FaReact />
  },
  {
    id: 7,
    tech: 'Next JS',
    icon: <SiNextdotjs />
  },
  {
    id: 8,
    tech: 'Angular',
    icon: <FaAngular />
  },
  {
    id: 9,
    tech: 'Vite',
    icon: <SiVite />
  },
  {
    id: 10,
    tech: 'VueJS',
    icon: <SiVuedotjs />
  },
  {
    id: 11,
    tech: 'Node JS',
    icon: <SiNodedotjs />
  },
  {
    id: 12,
    tech: 'Git',
    icon: <FaGitSquare />
  },
  {
    id: 13,
    tech: 'Figma',
    icon: <FaFigma />
  },
  {
    id: 14,
    tech: 'Framer',
    icon: <SiFramer />
  },
]

export const navLinks = [
  {
    id: 0,
    name: 'Início',
    href: '#inicio'
  },
  {
    id: 1,
    name: 'Skills',
    href: '#skills'
  },
  {
    id: 2,
    name: 'Projetos',
    href: '#projetos'
  },
  {
    id: 3,
    name: 'Contato',
    href: '#contato'
  },
]
