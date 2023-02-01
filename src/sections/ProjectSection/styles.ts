import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3.5rem;

    &.projects-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 9.6rem;

        @media (max-width: 768px) {
            gap: 7.2rem;
        }
    }
`;
