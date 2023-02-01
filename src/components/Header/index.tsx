import {
    Container,
    Logo,
    NavbarContent,
    NavbarPages,
    NavLink,
} from "./styles";

import logo from "./../../assets/static/logo.png";

import { SECTIONS } from "../../data/sections";

export function Header() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="" />
            </Logo>

            <NavbarContent>
                <NavbarPages>
                    {SECTIONS.map(({ title, targetSection }) => (
                        <NavLink href={targetSection} key={title}>
                            {title}
                        </NavLink>
                    ))}
                </NavbarPages>
            </NavbarContent>
        </Container>
    );
}
