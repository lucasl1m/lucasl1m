import { Container, ImageWrapper } from "./styles";
import background from "./../../assets/background.svg";
import astronaut from "./../../assets/astronaut.svg";
import { Button } from "../../components/Button";
import { NavLink } from "react-router-dom";

export function NotFound() {
    return (
        <Container>
            <img src={background} alt="" />
            <ImageWrapper>
                <img src={astronaut} alt="" />
            </ImageWrapper>
            <NavLink to="/">
                <Button>Voltar para Home</Button>
            </NavLink>
        </Container>
    );
};