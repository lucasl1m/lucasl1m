import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  width: 100%;
  height: 90vh;
  gap: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  > a {
    z-index: 0;
    text-decoration: none;
  }
`;

export const HelloText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const UserBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  > section {
    display: flex;
    flex-direction: column;

    > strong {
      font-size: 1rem;
      font-weight: 600;
      line-height: 130%;
      color: ${({ theme }) => theme.colors.whiteText};
    }

    > small {
      font-size: 0.875rem;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.bodyColor};
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;

  > img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
  }
`;

export const ExperienceWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  > li {
    width: 100%;
    display: flex;
    align-items: center;

    > .iconBox {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      background-color: ${({ theme }) => theme.colors.buttonColor};
      border-radius: 0.5rem;
      color: ${({ theme }) => theme.colors.whiteText};
    }

    > .textBox {
      display: flex;
      flex-direction: column;
      margin-left: 16px;

      > strong {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.whiteText};
      }

      > small {
        color: ${({ theme }) => theme.colors.captionText};
        font-size: 0.875rem;
        white-space: nowrap;
        line-height: 150%;
      }
    }
  }
`;
