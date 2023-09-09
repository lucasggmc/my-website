'use client';

import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 700px) {
    svg {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 3rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  @media (max-width: 699px) {
    ul {
      display: none;
    }
  }

  svg {
    cursor: pointer;
    transition: color 0.2s;

    :hover {
      color: var(--red);
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`;
