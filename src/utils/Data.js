import {
  FaSass,
  FaReact,
  FaGitSquare,
  FaJsSquare
} from 'react-icons/fa';

import DevLinks from '../assets/devlinks.jpg';
import MochilaDeViagem from '../assets/mochila-de-viagem.png';
import Fokus from '../assets/fokus.png';
import LandingPage from '../assets/landingPage.png';
import SmartBank from '../assets/smartbank.png';
import JornadaMilhas from '../assets/jornada_milhas.png';
import MyTodoList from '../assets/my_todo_list.png';
import FormStep from '../assets/form_step.png';
import ViaCEP from '../assets/consulta_cep.png';
import Gooday from '../assets/gooday.png';
import PrimeFlix from '../assets/prime_flix.png';
import Finans from '../assets/finans.png';
import Spotify from '../assets/spotify.png';

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
    project_name: 'DevLinks',
    project_desc: 'O DevLinks é um agregador de links para usar como cartão de visitas online.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: DevLinks,
    project_url: 'https://devlinks-tau.vercel.app/',
    reverse: false,
  },
  {
    id: 1,
    project_name: 'Mochila de Viagem',
    project_desc: 'Neste projeto construi uma aplicação de lista de itens, onde é possível adicionar, atualizar ou remover um item da mochila. Aprendi na prática a interagir com a página e com o LocalStorage. Criei objetos no JavaScript. Registrei dados no LocalStorage. Implementei uma página WEB que armazena dados e entendi o comportamento do LocalStorage.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: MochilaDeViagem,
    project_url: 'https://mochila-de-viagem-eta-beige.vercel.app/',
    reverse: true,
  },
  {
    id: 2,
    project_name: 'Fokus',
    project_desc: 'Neste projeto construi uma aplicação de temporizador estilo Pomodoro do zero. Aprendi na prática métodos de manipulação de elementos no DOM, como estilos CSS, imagens e textos. Alterei atributos e classes de forma dinâmica com JavaScript. Criei eventos de interação com a pessoa usuária e utilizei objetos utilitários do JavaScript.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: Fokus,
    project_url: 'https://fokus-eta.vercel.app/',
    reverse: false,
  },
  {
    id: 3,
    project_name: 'Landing Page',
    project_desc: 'Realizei a criação desta landing page para uma cliente que buscava divulgar fácilmente seus doces e que tinha uma grande necessidade de alterar os preços de seus produtos e adicionar novos também. Tendo isso em mente, criei uma tela inicial de apresentação do seus serviços e uma tela com o catálogo de seus doces para que seus seus clientes possam visualizar e ter idéia da qualidade de seus serviços.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: LandingPage,
    project_url: 'https://maridocesfinos.vercel.app/',
    reverse: true,
  },
  {
    id: 4,
    project_name: 'Smart Bank',
    project_desc: 'Neste projeto entendi os problemas de conflitos de nomes de classes com CSS, me aprofundei na utilização do Styled Components dentro do projeto, aprendi sobre quando usar os estilos globais e a utilizar herança dentro dos componentes e também fiz a aplicação do dark mode para facilitar a leitura dos dados em ambientes com pouca luz e evitar o excesso de luz emitida.',
    tech_stack: ['React', 'JavaScript', 'styled-components'],
    project_img: SmartBank,
    project_url: 'https://smart-bank-snowy.vercel.app/',
    reverse: false,
  },
  {
    id: 5,
    project_name: 'Jornada Milhas',
    project_desc: 'Este projeto foi realizado em busca de ampliar minhas habilidades em componentização no Angular, criando componentes reutilizáveis e organizando a aplicação. Aprendi a utilizar o Angular Material para criar uma interface moderna e atraente e também como adicionar ícones usando o Angular Material. Explorei a ampla variedade de componentes disponíveis no Angular Material, incluindo botões, barras de ferramentas, cards e muito mais.',
    tech_stack: ['Angular', 'SASS', 'TypeScript'],
    project_img: JornadaMilhas,
    project_url: 'https://jornada-milhas-three.vercel.app/',
    reverse: true,
  },
  {
    id: 6,
    project_name: 'ToDo List',
    project_desc: 'Este projeto foi realizado em busca de ampliar minhas habilidades no Angular, criando uma aplicação para listar, editar e remover tarefas.',
    tech_stack: ['Angular', 'SASS', 'TypeScript'],
    project_img: MyTodoList,
    project_url: 'https://todo-list-angular-ecru.vercel.app/',
    reverse: false,
  },
  {
    id: 7,
    project_name: 'Form Step',
    project_desc: 'Este projeto foi realizado com JavaScript apenas para desenvolver um layout de um formulário em fases, em busca de não tornar cansativo o preenchimento para o usuário final.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: FormStep,
    project_url: 'https://multi-step-form-ten-beta.vercel.app/',
    reverse: true,
  },
  {
    id: 8,
    project_name: 'Consulta de CEP',
    project_desc: 'Este projeto foi realizado para colocar em prática o consumo de uma API externa para consultar CEP e listar endereços do mesmo através dos dados que são fornecidos através de um JSON. Também realizei a validação para CEP inválido caso a pesquisa seja de um CEP que não existe e validação para CEP com o total de números superiores a 8.',
    tech_stack: ['HTML', 'CSS', 'JavaScript'],
    project_img: ViaCEP,
    project_url: 'https://via-cep-api-omega.vercel.app/',
    reverse: false,
  },
  {
    id: 9,
    project_name: 'Gooday',
    project_desc: 'Neste projeto de Figma, alcançei um domínio completo da ferramenta, adquirindo uma compreensão profunda do design de interface de usuário e suas tecnologias. Na criação deste aplicativo de rede social, desenvolvi habilidades para atuar como UI Designer em equipes de alto desempenho, aprendi a prototipar com qualidade de mercado, otimizei a eficiência na criação com recursos como bibliotecas e cores, ganhei expertise em exportar projetos de forma profissional para facilitar a colaboração com programadores. Em suma, me tornei um designer versátil, inovador e apto a liderar projetos de design de aplicativos e sites.',
    tech_stack: ['Figma'],
    project_img: Gooday,
    project_url: 'https://www.behance.net/gallery/174834333/Gooday',
    reverse: true,
  },
  {
    id: 10,
    project_name: 'Prime Flix',
    project_desc: 'Este projeto foi realizado com React, realizando a consulta de uma API externa para a construção da aplicação. O intuito é listar os filmes na página inicial, trazer a descrição do filme na tela de detalhes possibilitando o usuário de salvá-lo como favorito ou visualizar o trailer no youtuve e listar os filmes favoritos também possibilitando de remover da lista. Também tem uma tela de erro caso o usuário insira uma URL inválida.',
    tech_stack: ['React JS', 'CSS', 'TypeScript'],
    project_img: PrimeFlix,
    project_url: 'https://prime-flix-one.vercel.app/',
    reverse: false,
  },
  {
    id: 11,
    project_name: 'Finans',
    project_desc: 'Este projeto foi realizado no meu início de carreira com bootstrap. Construi a interface de uma landing page de forma rápida com componentes e classes do bootstrap, onde foi possivel deixar a interface responsiva sem a necessidade de utilizar muitas linhas de código no CSS para obter o mesmo resultado.',
    tech_stack: ['HTML', 'Bootstrap', 'CSS'],
    project_img: Finans,
    project_url: 'https://projeto-finans-iota.vercel.app/',
    reverse: true,
  },
  {
    id: 12,
    project_name: 'Spotify',
    project_desc: 'Este projeto foi realizado no meu início de carreira com bootstrap. Contrui a interface de uma landing page de forma rápida com componentes e classes do bootstrap, onde foi possivel deixar a interface responsiva sem a necessidade de utilizar muitas linhas de código no CSS para obter o mesmo resultado. ',
    tech_stack: ['HTML', 'Bootstrap', 'CSS'],
    project_img: Spotify,
    project_url: 'https://spotify-wheat-six.vercel.app/',
    reverse: false,
  },
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
