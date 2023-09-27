import styled from 'styled-components';

export const HamburgerMenuDesktopContainer = styled.ul`
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 700;
    margin-top: 0.313rem;
  }

  @media (max-width: 699px) {
    display: none;
  }
`;

export const HighlightItem = styled.li`
  a {
    color: var(--green);
  }
`;
