import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  > h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.whiteText}
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.captionText};

    text-align: center;
  }
`
