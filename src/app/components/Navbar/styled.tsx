'use client';

import { styled } from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;

  ul {
    display: flex;
    gap: 3rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  div {
    display: flex;
    gap: 3rem;
  }
`;
