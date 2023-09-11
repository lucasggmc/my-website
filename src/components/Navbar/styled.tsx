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

  svg {
    cursor: pointer;
    transition: color 0.2s;

    :hover {
      color: var(--red);
    }
  }
`;
