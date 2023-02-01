import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3.5rem;

  > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    gap: 2.5rem;

    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 768px) {
    > form {
      width: 100%;
    }

    flex-wrap: wrap;
  }
`;

export const InputFieldWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const SocialMidiaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
