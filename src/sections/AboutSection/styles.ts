import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  gap: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .infos-container {
    display: flex;
    flex-direction: column;

    gap: 2rem;

    > a {
      z-index: 0;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    .infos-container{
      align-items: center;
    }

    .avatar {
      display: none;
    }
  }
`;
