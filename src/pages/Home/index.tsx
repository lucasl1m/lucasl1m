import { Container, Content } from "./styles";

import shape from "./../../assets/static/shape.png";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Main } from "../../sections/Intro";
import { Contact } from "../../sections/Contact";
import { Skills } from "../../sections/Skills";
import { Project } from "../../sections/Projects";

export function Home() {
    return (
        <Container>
            <Header />

            <img src={shape} alt="" />

            <Content>
                <Main />

                <Project />
å
                <Skills />

                <Contact />

                <Footer />
            </Content>
        </Container>
    );
}
