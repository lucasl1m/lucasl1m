import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;

  width: 100%;

  max-width: 320px;

  overflow: hidden;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.buttonColor};

  cursor: pointer;

  flex: 1;
  transition: all 0.5s ease-out;

  > span {
    width: 100%;

    z-index: 1;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.whiteText};
  }

  &::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.buttonColor};
    height: 100%;
    width: 0;
    left: 0;
    right: 0;
    transition: all 0.5s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
}`;
