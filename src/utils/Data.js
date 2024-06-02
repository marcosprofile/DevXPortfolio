import {
  FaSass,
  FaReact,
  FaGitSquare,
  FaJsSquare
} from 'react-icons/fa';

import Gemini from '../assets/projetos/gemini.png';
import AtomicWork from '../assets/projetos/atomicwork.png';
import DesignAgency from '../assets/projetos/design_agency.png';
import CrudAngular from '../assets/projetos/crud_angular_v17.png';
import VirtualBookcase from '../assets/projetos/virtual_bookcase.jpg';
import LandingPage from '../assets/projetos/landingPage.png';
import SmartBank from '../assets/projetos/smartbank.png';
import JornadaMilhas from '../assets/projetos/jornada_milhas.png';
import MyTodoList from '../assets/projetos/my_todo_list.png';
import FormStep from '../assets/projetos/form_step.png';
import PrimeFlix from '../assets/projetos/prime_flix.png';

export const Skills = [
  {
    id: 0,
    tech: 'SASS',
    icon: <FaSass />
  },
  {
    id: 1,
    tech: 'Git',
    icon: <FaGitSquare />
  },
  {
    id: 2,
    tech: 'React JS',
    icon: <FaReact />
  },
  {
    id: 3,
    tech: 'JavaScript',
    icon: <FaJsSquare />
  },
];

export const projectDetails = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
    project_name: 'Design Agency',
    project_desc: 'Projeto encontrado na comunidade do figma, desenvolvido com o intuito de aperfeiçoar meus conhecimentos na construção de layouts com HTML, CSS e JavaScript.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: DesignAgency,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/AgencyWeb',
    project_url: 'https://agency-web-cyan.vercel.app/',
    reverse: false,
  },
  {
    id: 3,
    project_name: 'CRUD Angular',
    project_desc: 'Este projeto foi desenvolvido com angular 17 com o intuito de aprimorar meus conhecimentos no framework.',
    tech_stack: ['Angular', 'TypeScript', 'CSS'],
    project_img: CrudAngular,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/CRUD-Angular',
    project_url: 'https://github.com/marcosprofile/CRUD-Angular',
    reverse: true,
  },
  {
    id: 4,
    project_name: 'Virtual Bookcase',
    project_desc: 'Projeto criado apenas para organizar e consultar meus livros.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: VirtualBookcase,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/virtual-bookcase',
    project_url: 'https://virtual-bookcase.vercel.app/',
    reverse: false,
  },
  {
    id: 5,
    project_name: 'Mari Doces Finos',
    project_desc: 'Realizei a criação desta landing page para uma cliente que buscava divulgar seus doces. Criei a tela inicial de apresentação de seus serviços e a tela de catálogo com seus doces.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: LandingPage,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/maridocesfinos',
    project_url: 'https://maridocesfinos.vercel.app/',
    reverse: true,
  },
  {
    id: 6,
    project_name: 'Smart Bank',
    project_desc: 'Neste projeto entendi os problemas de conflitos de nomes de classes com CSS, me aprofundei na utilização do Styled Components dentro do projeto, aprendi sobre quando usar os estilos globais e a utilizar herança dentro dos componentes e também fiz a aplicação do dark mode para facilitar a leitura dos dados em ambientes com pouca luz e evitando o excesso de luz emitida.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: SmartBank,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/smart_bank',
    project_url: 'https://smart-bank-snowy.vercel.app/',
    reverse: false,
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
    reverse: true,
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
    reverse: false,
  },
  {
    id: 9,
    project_name: 'Form Step',
    project_desc: 'Este projeto foi realizado com JavaScript apenas para desenvolver um layout de um formulário em fases, em busca de não tornar cansativo o preenchimento para o usuário final.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: FormStep,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/multi-step-form',
    project_url: 'https://multi-step-form-ten-beta.vercel.app/',
    reverse: true,
  },
  {
    id: 10,
    project_name: 'Prime Flix',
    project_desc: 'Este projeto foi realizado com React, realizando a consulta de uma API externa para a construção da aplicação.',
    tech_stack: ['React JS', 'CSS', 'TypeScript'],
    project_img: PrimeFlix,
    github: 'https://github.com/marcosprofile',
    project_code: 'https://github.com/marcosprofile/prime-flix',
    project_url: 'https://prime-flix-one.vercel.app/',
    reverse: false,
  }
];

export const navLinks = [
  {
    id: 0,
    name: 'Home',
    href: '#Home'
  },
  {
    id: 1,
    name: 'Minhas Skills',
    href: '#Skills'
  },
  {
    id: 2,
    name: 'Meus Projetos',
    href: '#Projects'
  },
  {
    id: 3,
    name: 'Contato',
    href: '#Contact'
  },
]
