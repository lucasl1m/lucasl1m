import { Container } from './styles';
interface SkillCardProps {
  imageSrc: string;
  title: string;
  description: string;
  borderColor: string;
}

export function SkillCard({imageSrc, title, description, borderColor}: SkillCardProps) {
  return(
    <Container borderColor={borderColor}>
      <div className="image-box">
        <img src={imageSrc} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
}