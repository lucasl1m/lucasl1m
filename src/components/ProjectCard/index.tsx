import { FiExternalLink, FiFigma, FiGithub } from "react-icons/fi";
import { IconBox } from "../IconBox";
import {
    Container,
    Description,
    IconsWrapper,
    UpTitle,
    Title,
    Tags,
    ImageContainer,
    InfosContainer,
} from "./styles";
import { IProject } from "../../types/interfaces/common";

interface Props {
    isReversed: boolean;
    project: IProject;
}

export function ProjectCard({ isReversed, project }: Props) {
    const { src, uptitle, title, description, tags, deployURL, figmaURL, githubURL } = project;

    return (
        <Container isReversed={isReversed}>
            <ImageContainer isReversed={isReversed}>
                <a target="_blank" href={deployURL || githubURL || figmaURL}>
                    <img src={src} alt="project-preview" />
                </a>
            </ImageContainer>

            <InfosContainer isReversed={isReversed}>
                <UpTitle>{uptitle}</UpTitle>
                <Title>{title}</Title>

                <Description>{description}</Description>

                <Tags>
                    {tags.map((tag) => (
                        <p key={tag} className="tag">{tag}</p>
                    ))}
                </Tags>

                <IconsWrapper>
                    {figmaURL && (
                        <IconBox href={figmaURL}>
                            <FiFigma className="icon" />
                        </IconBox>
                    )}
                    {githubURL && (
                        <IconBox href={githubURL}>
                            <FiGithub className="icon" />
                        </IconBox>
                    )}
                    {deployURL && (
                        <IconBox href={deployURL}>
                            <FiExternalLink className="icon" />
                        </IconBox>
                    )}
                </IconsWrapper>
            </InfosContainer>
        </Container>
    );
}
