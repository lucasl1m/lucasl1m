import { ProjectCard } from "../../components/ProjectCard";
import { TitleSection } from "../../components/TitleSection";

import { PROJECTS } from "../../data/projects";

import projects from "./../../assets/projects.svg";

import { Container } from "./styles";

export function Project() {
    return (
        <Container id="projects">
            <TitleSection image={projects} title="Projetos"></TitleSection>

            <div
                className="projects-container"
            >
                {PROJECTS.map((project, i: number) => (
                    <ProjectCard
                        key={i}
                        projectInfos={project}
                        isReversed={i % 2 === 1}
                    />
                ))}
            </div>
        </Container>
    );
};
