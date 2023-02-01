import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export default createGlobalStyle<{theme: ThemeType}>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;

        @media (min-width: 1800px) {
            font-size: 32px;
        }

        @media (max-width: 1200px) {
            font-size: 16px;
        }

        @media (max-width: 1024px) {
            font-size: 14px;
        }

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }

    html, body {
        height: 100%;
        background-color:  ${({ theme }) => theme.colors.surface};
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Poppins', sans-serif;
    }
`;
