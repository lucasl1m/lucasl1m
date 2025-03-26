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
                        Sou desenvolvedor <b>Frontend</b>, bacharel em <b>Ciência da Computação</b> pela UFCG (2024), com experiência em <b>fintechs</b> e foco em criar soluções <b>eficientes e escaláveis</b>. 
                        Ao longo da minha carreira, trabalhei no desenvolvimento de plataformas financeiras utilizando <b>React.js</b> e <b>React Native</b>, impactando mais de 100 empresas parceiras. Fui responsável por otimizar processos, integrar APIs e criar interfaces mais intuitivas, contribuindo para melhorar a performance e a experiência do usuário.
                        Meu objetivo é sempre entregar soluções de <b>alta qualidade</b>, que sejam funcionais e tragam <b>valor real ao negócio</b>.
                    </Annotation>

                </div>

                <a
                        href="https://drive.google.com/file/d/1wLt-DDd59K0tQxIX_KMHeqsmBGBdmIi1/view?usp=sharing"
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
