import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  font-size: 1rem;
  max-width: 100%;

  padding: 0.5rem 1.5rem;

  color: ${({ theme }) => theme.colors.captionText};

  > b {
    position: relative;
    color: ${({ theme }) => theme.colors.bodyColor};
    font-weight: 600;
    transition: all 0.3s ease-out;

    &::after {
      content: '';
      width: 0%;
      height: 100%;
      top: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.buttonColor};
      transition: all 0.3s ease-out;
    }
  }

  &::after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.4rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease-out;
  }

  &:hover > b {
    color: ${({ theme }) => theme.colors.whiteText};

    &::after {
      width: 100%;
    }
  }
`;
