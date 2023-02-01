import emailjs from "@emailjs/browser";

import { FaBehance, FaWhatsapp } from "react-icons/fa";

import { Button } from "../../components/Button";
import { TitleSection } from "../../components/TitleSection";
import { IconBox } from "../../components/IconBox";
import { InputField } from "../../components/InputField";

import contact from "./../../assets/contact.svg";

import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiMessageSquare,
    FiUser,
} from "react-icons/fi";

import { Container, InputFieldWrapper, SocialMidiaWrapper } from "./styles";

export function Contact() {
    function sendEmail(e: any) {
        e.preventDefault();

        emailjs
            .sendForm(
                "portfolio",
                "template_n0u079c",
                e.target,
                "user_LC00qXgbGQyLouXWSJkzu"
            )

            .then(
                (result) => {
                    alert("Mensagem enviada com sucesso!");
                },
                (error) => {
                    alert(error.message);
                }
            );
        e.target.reset();
    }

    return (
        <Container
            id="contact"
        >
            <TitleSection 
                image={contact} 
                title="Contate - me" 
                caption="Estou aberto à oportunidades de emprego. Caso queira me contatar
                esteja à vontade para me mandar um email através do formulário a
                baixo ou nas minhas redes sociais."
            />

            <form onSubmit={sendEmail}>
                <InputFieldWrapper>
                    <InputField
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        required
                    >
                        <FiUser className="icon" />
                    </InputField>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                    >
                        <FiMail className="icon" />
                    </InputField>
                    <InputField
                        name="message"
                        placeholder="Deixe sua mensagem"
                        isTextArea
                        required
                    >
                        <FiMessageSquare className="icon" />
                    </InputField>
                </InputFieldWrapper>

                <Button>Enviar Mensagem</Button>

                <SocialMidiaWrapper>
                    <IconBox alt="" href="https://github.com/lucasarlim">
                        <FiGithub className="icon" />
                    </IconBox>
                    <IconBox
                        alt=""
                        href="https://www.linkedin.com/in/lucasarl1m/"
                    >
                        <FiLinkedin className="icon" />
                    </IconBox>
                    <IconBox alt="" href="https://www.instagram.com/lucasl1m/">
                        <FiInstagram className="icon" />
                    </IconBox>
                    <IconBox alt="" href="https://www.behance.net/lucaslima170">
                        <FaBehance className="icon" />
                    </IconBox>
                    <IconBox
                        alt=""
                        href="https://api.whatsapp.com/send?phone=5583987196021"
                    >
                        <FaWhatsapp className="icon" />
                    </IconBox>
                </SocialMidiaWrapper>
            </form>
        </Container>
    );
};