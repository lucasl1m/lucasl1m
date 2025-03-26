import styled from 'styled-components';

interface Props {
  borderColor: string;
}

export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem;
  gap: 1rem;

  border-radius: 4px;

  overflow: hidden;
  transition: all 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.background};

  &:before {
    display: inline-block;
    position: absolute;

    bottom: 0;
    right: 0;

    content: ' ';

    width: 100%;
    height: 0.5rem;

    background-color: ${({ borderColor }) => borderColor};
  }

  > h2 {
    width: 100%;

    font-size: 1.125rem;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.whiteText};
  }

  p {
    color: ${({ theme }) => theme.colors.bodyColor};
  }
`;

export const Image = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    min-width: 3.5rem;
    min-height: 3.5rem;

    object-fit: contain;
`;
