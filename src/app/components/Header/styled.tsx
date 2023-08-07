import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 20rem;
  padding: 0 4rem;
  background-color: var(--background-gray);
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1,
    h2 {
      text-transform: uppercase;
    }

    span {
      color: #de2c62;
    }
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
