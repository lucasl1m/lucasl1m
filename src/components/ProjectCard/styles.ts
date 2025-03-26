import styled from "styled-components";

export const Container = styled.div<{ isReversed: boolean }>`
  display: grid;
  grid-template-columns: ${({ isReversed }) => (isReversed ? "1fr 1.25fr" : "1.25fr 1fr")};
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`;

export const ImageContainer = styled.div<{ isReversed: boolean }>`
  width: 100%;
  grid-column: ${({ isReversed }) => (isReversed ? "2 / 3" : "1 / 2")};
  grid-row: 1 / 2;
  border-radius: 0.2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }

  img {
    width: 100%;
    object-fit: contain;
    opacity: 0.25;
    transition: opacity 0.25s ease-in;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
    }
  }
`;

export const InfosContainer = styled.div<{ isReversed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isReversed }) => (isReversed ? "flex-start" : "flex-end")};
  grid-column: ${({ isReversed }) => (isReversed ? "1 / 2" : "2 / 3")};

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 2.4rem;
    grid-column: 1 / 2;
  }
`;

export const UpTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.captionText};
`;

export const Title = styled.h4`
  font-size: 2.625rem;
  color: ${({ theme }) => theme.colors.whiteText};
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  min-height: 8rem;
  margin: 1.6rem 0;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  z-index: 10;
  border-radius: 0.2rem;
  box-shadow: 0 0.4rem 0.4rem #00000010;
  color: ${({ theme }) => theme.colors.bodyColor};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  margin: 0.8rem;

  .tag {
    color: ${({ theme }) => theme.colors.captionText};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  .icon {
    width: 2rem;
    height: 2rem;
  }
`;