import { Button } from "../../components/Button";
import { Annotation } from "../../components/Annotation";
import { TitleSection } from "../../components/TitleSection";

import { Container } from "./styles";

import about from "./../../assets/about.svg";
import avatar from "./../../assets/avatar.svg";

export function About() {
    return (
        <Container id="about">
            <TitleSection image={about} title="Sobre Mim" />

            <div>
                <div className="infos-container">
                    <Annotation>
                        Olá, 👋 Sou graduando em <b>Ciência da Computação</b> na
                        Universidade Federal de Campina Grande (UFCG), porém sou
                        entusiasta da área de design, busco aproveitar ao máximo
                        o conhecimento e experiências adquiridas durante esses{" "}
                        <b>3 (três)</b> anos de mercado em ambas as áreas, a fim
                        de aplicar e garantir uma melhor <b>experiência</b> e{" "}
                        <b>qualidade</b> nos projetos em que trabalho.
                    </Annotation>

                    <a
                        href="https://drive.google.com/file/d/1wMGI6sOt_ha8YiLYOXAk7CKPiVFNl_3x/view?usp=sharing"
                        target="_blank"
                    >
                        <Button>Currículo</Button>
                    </a>
                </div>

                <img src={avatar} alt="" className="avatar" />
            </div>
        </Container>
    );
};
