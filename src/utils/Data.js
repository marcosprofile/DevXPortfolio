import {
  FaSass,
  FaReact,
  FaGitSquare,
  FaJsSquare,
  FaCss3,
  FaAngular,
  FaFigma,
  FaHtml5
} from 'react-icons/fa'

import { SiFramer } from "react-icons/si";

import { BiLogoTypescript } from "react-icons/bi";

import AgendaAI from '../assets/projetos/agenda-ai.png'
import Gemini from '../assets/projetos/gemini.png'
import AtomicWork from '../assets/projetos/atomicwork.png'
import DesignAgency from '../assets/projetos/design_agency.png'
import CrudAngular from '../assets/projetos/crud_angular_v17.png'
import VirtualBookcase from '../assets/projetos/virtual_bookcase.jpg'
import JornadaMilhas from '../assets/projetos/jornada_milhas.png'
import MyTodoList from '../assets/projetos/my_todo_list.png'
import PrimeFlix from '../assets/projetos/prime_flix.png'
import ProjetoUnes from '../assets/projetos/projeto_unes.png'
import CloneNetflix from '../assets/projetos/clone_netflix.png'

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
    tech: 'SASS',
    icon: <FaSass />
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
    tech: 'Angular',
    icon: <FaAngular />
  },
  {
    id: 8,
    tech: 'Git',
    icon: <FaGitSquare />
  },
  {
    id: 9,
    tech: 'Figma',
    icon: <FaFigma />
  },
  {
    id: 10,
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

export const GridSixProjects = [
  {
    id: 0,
    name: 'Agenda AI',
    image: AgendaAI
  },
  {
    id: 1,
    name: 'Gemini UI',
    image: Gemini
  },
  {
    id: 2,
    name: 'Design Agency',
    image: DesignAgency
  },
  {
    id: 3,
    name: 'Prime Flix',
    image: PrimeFlix
  },
  {
    id: 4,
    name: 'Jornada Milhas',
    image: JornadaMilhas
  },
  {
    id: 5,
    name: 'Virtual Bookcase',
    image: VirtualBookcase
  }
]

export const projectDetails = [
  {
    id: 0,
    project_name: 'Agenda AI',
    project_desc: 'Criei essa landing page com React e TailwindCSS para treinar uma interface limpa e responsiva. O foco foi entregar uma experiência simples e direta para um sistema de agendamentos. Projeto rápido, mas com atenção aos detalhes!',
    tech_stack: ['React', 'Tailwind CSS'],
    project_img: AgendaAI,
    github: 'https://github.com/marcosprofile',
    project_url: 'https://agenda-ai-six.vercel.app/',
    reverse: true,
  },
  {
    id: 1,
    project_name: 'Gemini UI',
    project_desc: 'Projeto desenvolvido com o intuito de aprimorar meus conhecimentos no framework Angular.',
    tech_stack: ['Angular', 'CSS', 'TypeScript'],
    project_img: Gemini,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/gemini-ui',
    project_url: 'https://gemini-ui-delta.vercel.app/',
    reverse: false,
  },
  {
    id: 2,
    project_name: 'Atomicwork',
    project_desc: 'Projeto encontrado na comunidade do figma, desenvolvido com o intuito de aperfeiçoar meus conhecimentos na construção de componentes com Angular.',
    tech_stack: ['Angular', 'CSS', 'TypeScript'],
    project_img: AtomicWork,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/landing-page',
    project_url: 'https://atomicwork.vercel.app/',
    reverse: true,
  },
  {
    id: 3,
    project_name: 'Projeto Unes',
    project_desc: 'Projeto desenvolvido para fins de estudo, aplicando conceitos de Flexbox',
    tech_stack: ['HTML', 'CSS'],
    project_img: ProjetoUnes,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/projeto_unes',
    project_url: 'https://projetounes.vercel.app/',
    reverse: false,
  },
  {
    id: 4,
    project_name: 'Design Agency',
    project_desc: 'Projeto encontrado na comunidade do figma, desenvolvido com o intuito de aperfeiçoar meus conhecimentos na construção de layouts com HTML, CSS e JavaScript.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: DesignAgency,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/AgencyWeb',
    project_url: 'https://agency-web-cyan.vercel.app/',
    reverse: true,
  },
  {
    id: 5,
    project_name: 'CRUD Angular',
    project_desc: 'Este projeto foi desenvolvido com angular 17 com o intuito de aprimorar meus conhecimentos no framework.',
    tech_stack: ['Angular', 'TypeScript', 'CSS'],
    project_img: CrudAngular,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/CRUD-Angular',
    reverse: false,
  },
  {
    id: 6,
    project_name: 'Virtual Bookcase',
    project_desc: 'Projeto criado apenas para organizar e consultar meus livros.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: VirtualBookcase,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/virtual-bookcase',
    project_url: 'https://virtual-bookcase.vercel.app/',
    reverse: true,
  },
  {
    id: 7,
    project_name: 'Jornada Milhas',
    project_desc: 'Este projeto foi realizado em busca de ampliar minhas habilidades no Angular, criando componentes reutilizáveis e organizando a aplicação. Aprendi a utilizar o Angular Material, explorando a ampla variedade de componentes disponíveis para criar uma interface moderna e atraente.',
    tech_stack: ['Angular', 'SASS', 'TypeScript'],
    project_img: JornadaMilhas,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/jornada-milhas',
    project_url: 'https://jornada-milhas-three.vercel.app/',
    reverse: false,
  },
  {
    id: 8,
    project_name: 'ToDo List',
    project_desc: 'Este projeto foi realizado em busca de ampliar minhas habilidades no Angular, criando uma aplicação para listar, editar e remover tarefas.',
    tech_stack: ['Angular', 'SASS', 'TypeScript'],
    project_img: MyTodoList,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/todo-list-angular',
    project_url: 'https://todo-list-angular-ecru.vercel.app/',
    reverse: true,
  },
  {
    id: 9,
    project_name: 'Prime Flix',
    project_desc: 'Este projeto foi realizado com React, realizando a consulta de uma API externa para a construção da aplicação.',
    tech_stack: ['React', 'CSS', 'TypeScript'],
    project_img: PrimeFlix,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/prime-flix',
    project_url: 'https://prime-flix-one.vercel.app/',
    reverse: false,
  },
  {
    id: 10,
    project_name: 'Netflix Site (clone)',
    project_desc: 'Projeto criado com base no site antigo da netflix, apenas para praticar estilizações de layout.',
    tech_stack: ['HTML', 'CSS'],
    project_img: CloneNetflix,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/Clone-Netflix',
    project_url: 'https://netflixclone-site.vercel.app/',
    reverse: true,
  }
]
