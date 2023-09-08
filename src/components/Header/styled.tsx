import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 20rem;
  padding: 0 4rem;
  background-color: var(--grey);
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    height: 100%;

    h1,
    h2 {
      text-transform: uppercase;
    }

    h1 {
      display: inline;
    }

    span {
      color: var(--red);
      display: inline;
    }

    p {
      line-height: 1.3rem;
    }
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    border-radius: 100%;
    border: 2px solid black;
    height: 13.9rem;
    width: 13.9rem;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: black;
  }
`;
