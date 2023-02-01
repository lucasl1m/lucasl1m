import { FaBehance, FaMedium } from "react-icons/fa";
import { SiGooglesheets } from "react-icons/si";
import { FiExternalLink, FiFigma, FiGithub } from "react-icons/fi";
import { IconBox } from "../IconBox";

import {
    Container,
    Description,
    IconsWrapper,
    UpTitle,
    Title,
    Tags,
} from "./styles";

interface ProjectProps {
    imageSrc: string;
    uptitle: string;
    title: string;
    description: string;
    tags: string[];
    deployURL?: string;
    figmaURL?: string;
    githubURL?: string;
    behanceURL?: string;
    mediumURL?: string;
    googleSheets?: string;
}

interface Props {
    isReversed: boolean;
    projectInfos: ProjectProps;
}

export function ProjectCard({ isReversed, projectInfos }: Props) {
    
    return (
        <Container
            isReversed={isReversed}
        >
            <div className="image-container">
                <a
                    target="_blank"
                    href={
                        projectInfos.deployURL ||
                        projectInfos.githubURL ||
                        projectInfos.figmaURL
                    }
                >
                    <img src={projectInfos.imageSrc} alt="project-preview" />
                </a>
            </div>

            <div className="infos-container">
                <UpTitle>{projectInfos.uptitle}</UpTitle>
                <Title>{projectInfos.title}</Title>

                <Description>
                    <p>{projectInfos.description}</p>
                </Description>

                <Tags>
                    {projectInfos.tags.map((tag) => (
                        <p key={tag} className="tag">
                            {tag}
                        </p>
                    ))}
                </Tags>

                <IconsWrapper>
                    {projectInfos.figmaURL ? (
                        <IconBox href={projectInfos.figmaURL}>
                            <FiFigma className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}

                    {projectInfos.mediumURL ? (
                        <IconBox href={projectInfos.mediumURL}>
                            <FaMedium className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}

                    {projectInfos.githubURL ? (
                        <IconBox href={projectInfos.githubURL}>
                            <FiGithub className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}

                    {projectInfos.behanceURL ? (
                        <IconBox href={projectInfos.behanceURL}>
                            <FaBehance className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}

                    {projectInfos.deployURL ? (
                        <IconBox href={projectInfos.deployURL}>
                            <FiExternalLink className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}

                    {projectInfos.googleSheets ? (
                        <IconBox href={projectInfos.googleSheets}>
                            <SiGooglesheets className="icon" />
                        </IconBox>
                    ) : (
                        <></>
                    )}
                </IconsWrapper>
            </div>
        </Container>
    );
}
