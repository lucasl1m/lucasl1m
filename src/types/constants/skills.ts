import { ISkill } from '../interfaces/common';

const base = '/assets/png';
const SKILL_IMAGES: Record<string, string> = {
  git: `${base}/git.png`,
  react: `${base}/react.png`,
  styled: `${base}/styled_components.png`,
  javascript: `${base}/javascript.png`,
  typescript: `${base}/typescript.png`,
  angular: `${base}/angular.png`,
  next: `${base}/next.png`,
  tailwind: `${base}/tailwind.png`,
};

export const SKILLS: ISkill[] = [
  {
    src: SKILL_IMAGES.react,
    title: 'React',
    description:
      'React. js é uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única.',
    borderColor: '#3BC0DD',
  },
  {
    src: SKILL_IMAGES.angular,
    title: 'Angular',
    description:
      'Angular é um framework de desenvolvimento para aplicações web dinâmicas, baseado em TypeScript e criado pelo Google, focado na criação de SPAs (Single Page Applications).',
    borderColor: '#DD0031', 
  },
  {
    src: SKILL_IMAGES.next,
    title: 'Next.js',
    description:
      'Next.js é um framework React para a criação de aplicações web com renderização do lado do servidor (SSR), otimização automática e geração de sites estáticos.',
    borderColor: '#000000',
  },
  {
    src: SKILL_IMAGES.typescript,
    title: 'TypeScript',
    description:
      'TypeScript é uma linguagem de programação fortemente tipada que adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor ',
    borderColor: '#017ACB',
  },
  {
    src: SKILL_IMAGES.javascript,
    title: 'Javascript',
    description:
      'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    borderColor: '#F7DF1E',
  },
  {
    src: SKILL_IMAGES.git,
    title: 'Git',
    description:
      'Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.',
    borderColor: '#F05033',
  },
  {
    src: SKILL_IMAGES.styled,
    title: 'Styled Components',
    description:
      'Styled-components é uma biblioteca criada para desenvolvedores React e React Native. Ele permite que você use estilos de nível de componente em seus aplicativos.',
    borderColor: '#E28683',
  },
  {
    src: SKILL_IMAGES.tailwind,
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS é uma estrutura CSS de utilidade de baixo nível para criar designs personalizados rapidamente.',
    borderColor: '#06B6D4',
  }
];
