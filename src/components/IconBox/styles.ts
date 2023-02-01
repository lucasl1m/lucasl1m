import styled from "styled-components";

export const Container = styled.a`
  width: 2rem;
  height: 2rem;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.buttonColor};
  transition: all 0.3s ease-out;

  &:hover {
    transform: translateY(-4px);
  }
`
