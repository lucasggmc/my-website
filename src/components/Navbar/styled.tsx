'use client';

import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    gap: 0.5rem;
  }

  img {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }

  svg {
    cursor: pointer;
    transition: color 0.2s;

    :hover {
      color: var(--red);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 3rem;
  }
`;
