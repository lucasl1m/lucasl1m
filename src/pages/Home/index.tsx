import { Container, Content } from "./styles";

import shape from "./../../assets/static/shape.png";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Main } from "../../sections/MainSection";
import { About } from "../../sections/AboutSection";
import { Contact } from "../../sections/ContactSection";
import { Skills } from "../../sections/SkillsSection";
import { Project } from "../../sections/ProjectSection";

export function Home() {
    return (
        <Container>
            <Header />

            <img src={shape} alt="" />

            <Content>
                <Main />

                <Project />

                <About />

                <Skills />

                <Contact />

                <Footer />
            </Content>
        </Container>
    );
}
