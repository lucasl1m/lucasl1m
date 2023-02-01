import { SkillCard } from "../../components/SkillCard";
import { TitleSection } from "../../components/TitleSection";
import { SKILLS } from "../../data/skills";

import { Container, CardGrid } from "./styles";

import tecnologies from "./../../assets/tecnologies.svg";

export function Skills() {
    return (
        <Container
            id="skills"
        >
            <TitleSection
                image={tecnologies}
                title="Conhecimentos"
                caption="Algumas das linguagens e ferramentas que eu tenho conhecimento e
                venho praticando ao longo dos meus anos de experiência e
                estudos."
            />

            <CardGrid>
                {SKILLS.map(
                    ({ imageSrc, title, description, borderColor }, i) => (
                        <SkillCard
                            key={i}
                            imageSrc={imageSrc}
                            title={title}
                            description={description}
                            borderColor={borderColor}
                        />
                    )
                )}
            </CardGrid>
        </Container>
    );
};
