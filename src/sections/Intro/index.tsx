import { useEffect, useState } from "react";

import { AiOutlineExperiment } from "react-icons/ai";
import { FiAward, FiGithub } from "react-icons/fi";

import { Annotation } from "../../components/Annotation";
import { Button } from "../../components/Button";

import {
    Container,
    ProfileWrapper,
    HelloText,
    UserBox,
    Avatar,
    ExperienceWrapper,
} from "./styles";

import { githubApi } from "../../lib/axios";
import dayjs from "dayjs";

export function Main() {
    const [bio, setBio] = useState("");

    async function getGithubBio(username: string) {
        try {
            const response = await githubApi.get(`users/${username}`);
            setBio(response.data.bio);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getGithubBio("lucasl1m");
    }, []);

    return (
        <Container>
            <ProfileWrapper>
                <div>
                    <HelloText>
                        Olá 👋, <br /> Bem-vindo ao meu site.
                    </HelloText>

                    <UserBox>
                        <Avatar>
                            <img src="https://github.com/lucasl1m.png" alt="" />
                        </Avatar>
                        <section>
                            <strong>Lucas Araujo de Lima</strong>
                            <small>{bio}</small>
                        </section>
                    </UserBox>

                    <Annotation>
                        Desenvolvedor <b>Frontend</b> e bacharel em <b>Ciência da Computação</b> (UFCG, 2024) com experiência consolidada no setor de <b>fintech</b>. Minha trajetória anterior como <b>Product Designer</b> me proporciona uma perspectiva abrangente do produto, atuando como elo estratégico entre design e desenvolvimento para implementações técnicas otimizadas e focadas na <b>experiência do usuário</b>.
                        Fui responsável pela liderança e desenvolvimento de interfaces para produtos financeiros críticos, incluindo a expansão do <b>Pix Internacional</b>, soluções de <b>Core Banking</b> e a arquitetura e manutenção do frontend de sistemas de alta relevância, como o <b>PagTesouro</b> para o Governo Federal.
                        Minha especialização técnica envolve <b>React 18+</b>, <b>Next.js</b>, <b>React Native</b>, <b>Angular (6+)</b> e <b>TypeScript</b>, com foco em fluxos de checkout seguros, dashboards financeiros e interfaces escaláveis. No dia a dia, utilizo pipelines de <b>CI/CD</b> e testes com <b>Cypress</b> e <b>Jest</b> para garantir qualidade do código e agilidade nas entregas em ambientes de alta demanda.
                    </Annotation>

                </div>

                <a
                        href="https://drihttps://drive.google.com/file/d/1aPc_kmB0o_v_oVCH1yaD0vn6jUWrJBfe/view?usp=sharingve.google.com/file/d/1sgeP1WInabUu1D9H31Oo7hPSoAFNhhQZ/view?usp=sharing"
                        target="_blank"
                    >
                        <Button>Currículo</Button>
                    </a>
            </ProfileWrapper>

            <ExperienceWrapper>
                <li>
                    <div className="iconBox">
                        <AiOutlineExperiment className="icon" />
                    </div>
                    <div className="textBox">
                        <strong>{dayjs().year() - 2022}</strong>
                        <small>Anos de experiência</small>
                    </div>
                </li>
                <li>
                    <div className="iconBox">
                        <FiAward className="icon" />
                    </div>
                    <div className="textBox">
                        <strong>1</strong>
                        <small>Premiação</small>
                    </div>
                </li>
                <li>
                    <div className="iconBox">
                        <FiGithub className="icon" />
                    </div>
                    <div className="textBox">
                        <strong>2</strong>
                        <small>Contribuições no total</small>
                    </div>
                </li>
            </ExperienceWrapper>
        </Container>
    );
};
