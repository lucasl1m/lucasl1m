import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  > img {
    position: absolute;
    top: -15%;
    right: -35%;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .btn-link {
    z-index: 0;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;

  gap: 96px;

  @media (max-width: 768px) {
    gap: 56px;
  }
`;
