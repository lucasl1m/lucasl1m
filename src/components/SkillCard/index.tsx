import { ISkill } from '../../types/interfaces/common';
import { Container, Image } from './styles';

export function SkillCard({src, title, description, borderColor}: ISkill) {
  return(
    <Container borderColor={borderColor}>
        <Image src={src} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
    </Container>
  );
}