import Git from '../../assets/static/git.png';
import React from '../../assets/static/react.png';
import StyledComponents from '../../assets/static/styled_components.png';
import Javascript from '../../assets/static/javascript.png';
import Typescript from '../../assets/static/typescript.png';
import Angular from '../../assets/static/angular.png'; 
import Next from '../../assets/static/next.png'; 
import Tailwind from '../../assets/static/tailwind.png';

import { ISkill } from '../interfaces/common';

export const SKILLS: ISkill[] = [
  {
    src: React,
    title: 'React',
    description:
      'React. js é uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única.',
    borderColor: '#3BC0DD',
  },
  {
    src: Angular,
    title: 'Angular',
    description:
      'Angular é um framework de desenvolvimento para aplicações web dinâmicas, baseado em TypeScript e criado pelo Google, focado na criação de SPAs (Single Page Applications).',
    borderColor: '#DD0031', 
  },
  {
    src: Next,
    title: 'Next.js',
    description:
      'Next.js é um framework React para a criação de aplicações web com renderização do lado do servidor (SSR), otimização automática e geração de sites estáticos.',
    borderColor: '#000000',
  },
  {
    src: Typescript,
    title: 'TypesScript',
    description:
      'TypeScript é uma linguagem de programação fortemente tipada que adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor ',
    borderColor: '#017ACB',
  },
  {
    src: Javascript,
    title: 'Javascript',
    description:
      'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
    borderColor: '#F7DF1E',
  },
  {
    src: Git,
    title: 'Git',
    description:
      'Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.',
    borderColor: '#F05033',
  },
  {
    src: StyledComponents,
    title: 'Styled Components',
    description:
      'Styled-components é uma biblioteca criada para desenvolvedores React e React Native. Ele permite que você use estilos de nível de componente em seus aplicativos.',
    borderColor: '#E28683',
  },
  {
    src: Tailwind,
    title: 'Tailwind CSS',
    description:
      'Tailwind CSS é uma estrutura CSS de utilidade de baixo nível para criar designs personalizados rapidamente.',
    borderColor: '#06B6D4',
  }
];
