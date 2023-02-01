import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 2.8rem;
  padding: 0 4rem;

  z-index: 1;

  .menu-btns-container {
    z-index: 10;
    display: none;
    color: #fff;
    cursor: pointer;
    z-index: 20;

    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  cursor: pointer;

  > img {
    height: 2rem;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;

  gap: 56px;
`;

export const NavbarPages = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;
  padding: 12px 16px;

  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.whiteText};

  &::after {
    position: absolute;
    display: block;

    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};

    bottom: -8px;
    left: 0%;
    content: '';

    transition: width 0.3s ease-out;
  }

  &:hover,
  &:focus,
  &.active {
    &::after {
      width: 100%;
    }
  }
`;
