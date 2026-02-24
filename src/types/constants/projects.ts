import { IProject } from "../interfaces/common";

const base = '/assets/png';

export const PROJECTS: IProject[] = [
    {
        src: `${base}/pphoje.png`,
        uptitle: "Frontend & UI Designer",
        title: "PPHoje",
        description:
        "🌽 PPHoje é uma plataforma que mantém os participantes do São João de Campina Grande sempre informados. Com uma interface intuitiva, o app oferece programação detalhada, horários, mapas interativos e um espaço para feedback e interação entre os participantes. Nosso objetivo é aumentar o engajamento e melhorar a experiência de turistas, comerciantes e moradores locais durante o evento.",
        tags: ["React Native", "Styled-Components", "Expo", "Figma"],
        figmaURL: "https://www.figma.com/design/fGBFtpllTwSmvaUZSGZOXn/PPHoje?node-id=0-1&t=asEnjbT76B5Q12v3-1",
    },
    {
        src: `${base}/findweather.png`,
        uptitle: "Frontend",
        title: "FindWeather",
        description: "🌦️ O FindWeather e uma aplicação mobile onde você poderá buscar por uma cidade ou país para ver o clima em tempo real. Além disso, também é possível visualizar a temperatura para os próximos 5 dias.",
        tags: ["React Native", "Expo", "Native Base", "OpenWeatherMap API"],
        githubURL: "https://github.com/lucasl1m/findweather/tree/master",
    },
    {
        src: `${base}/adottami.png`,
        uptitle: "Frontend & UI Designer",
        title: "Adottami",
        description:
            "🐶 Addotami é uma plataforma de adoção simples, prática e agradável para facilitar a adoção e anúncio de animais vivendo em situações precarias. Nosso objetivo é conscientizar sobre a posse responsável e ajudar a diminuir o índice de animais abandonados.",
        tags: ["React", "NextJs", "PWA", "Figma", "TailwindCSS"],
        deployURL: "https://adottami-web.vercel.app/",
        githubURL: "",
        figmaURL:
            "https://www.figma.com/design/jcO6yAgdwfG2RLVRoab3OV/%F0%9F%90%B6-Adottami?node-id=0-1&t=IZks7IL7tOlqnZdG-1",
    },
    {
        src: `${base}/moveup.png`,
        uptitle: "Frontend",
        title: "MoveUp",
        description:
            "🏋 MoveUp é uma aplicação mobile que tem como objetivo ajudar pessoas a se exercitarem em casa. Com uma interface simples e intuitiva, o app oferece uma série de exercícios para serem feitos em casa, sem a necessidade de equipamentos.",
        tags: ["React Native", "Expo", "Styled-Components"],
        githubURL: "https://github.com/lucasl1m/move.up",
        deployURL: "https://move-up-pied.vercel.app/",
    }
];
