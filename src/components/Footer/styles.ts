import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 8px;
  padding: 56px 24px;

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.bodyColor};
  }

  > a {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonColor};

    &:hover {
      text-decoration: underline;
    }
  }
`
