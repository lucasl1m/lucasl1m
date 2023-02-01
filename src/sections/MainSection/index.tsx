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
                        Sou graduando em <b>Ciência da Computação</b> pela UFCG.
                        Comecei a estudar <b>programação</b> e <b>design</b> em
                        2020. Eu amo o que faço e sempre busco desenvolver
                        códigos e interfaces{" "}
                        <b>simples, impactantes e com qualidade</b>.
                    </Annotation>
                </div>

                <a href="#about">
                    <Button>Saiba mais</Button>
                </a>
            </ProfileWrapper>

            <ExperienceWrapper>
                <li>
                    <div className="iconBox">
                        <AiOutlineExperiment className="icon" />
                    </div>
                    <div className="textBox">
                        <strong>{dayjs().year() - 2020}</strong>
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
                        <strong>+ 450</strong>
                        <small>Contribuições no total</small>
                    </div>
                </li>
            </ExperienceWrapper>
        </Container>
    );
};
