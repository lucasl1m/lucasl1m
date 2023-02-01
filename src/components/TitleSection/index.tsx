import { Container } from "./styles";

type Props = {
    image: string;
    title: string;
    caption?: string;
};

export function TitleSection({ image, title, caption }: Props) {
    return (
        <Container>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{caption}</p>
        </Container>
    );
};