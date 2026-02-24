export interface ProfileSocial {
  github: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;
}

export interface Profile {
  name: string;
  avatar: string;
  introText: string;
  resumeUrl: string;
  experienceStartYear: number;
  awardsCount: number;
  contributionsCount: number;
  social: ProfileSocial;
}

export const PROFILE: Profile = {
  name: 'Lucas Araujo de Lima',
  avatar: 'https://github.com/lucasl1m.png',
  introText: `Desenvolvedor **Frontend** e bacharel em **Ciência da Computação** (UFCG, 2024) com experiência consolidada no setor de **fintech**. Minha trajetória anterior como **Product Designer** me proporciona uma perspectiva abrangente do produto, atuando como elo estratégico entre design e desenvolvimento para implementações técnicas otimizadas e focadas na **experiência do usuário**.
Fui responsável pela liderança e desenvolvimento de interfaces para produtos financeiros críticos, incluindo a expansão do **Pix Internacional**, soluções de **Core Banking** e a arquitetura e manutenção do frontend de sistemas de alta relevância, como o **PagTesouro** para o Governo Federal.
Minha especialização técnica envolve **React 18+**, **Next.js**, **React Native**, **Angular (6+)** e **TypeScript**, com foco em fluxos de checkout seguros, dashboards financeiros e interfaces escaláveis. No dia a dia, utilizo pipelines de **CI/CD** e testes com **Cypress** e **Jest** para garantir qualidade do código e agilidade nas entregas em ambientes de alta demanda.`,
  resumeUrl: 'https://drive.google.com/file/d/1aPc_kmB0o_v_oVCH1yaD0vn6jUWrJBfe/view?usp=sharing',
  experienceStartYear: 2022,
  awardsCount: 1,
  contributionsCount: 2,
  social: {
    github: 'https://github.com/lucasl1m',
    linkedin: 'https://www.linkedin.com/in/lucasl1m/',
    instagram: 'https://www.instagram.com/lucasl1m/',
    whatsapp: 'https://api.whatsapp.com/send?phone=5583987196021',
  },
};
