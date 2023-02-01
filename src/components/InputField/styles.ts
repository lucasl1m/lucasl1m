import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 24px;
  gap: 1rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.surface};

  width: 100%;

  > input,
  textarea {
    display: flex;
    align-items: center;
    width: 100%;

    background: transparent;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.whiteText};

    &::placeholder {
      color: ${({ theme }) => theme.colors.captionText};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.surface}
        inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.whiteText};
    }
  }
`;

export const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  color: ${({ theme }) => theme.colors.captionText};
`;
