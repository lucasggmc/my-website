import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 20rem;
  background-color: var(--grey);

  @media (min-width: 700px) {
    padding: 0 4rem;
  }

  @media (max-width: 699px) {
    padding: 0 2rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 2rem;

  @media (min-width: 700px) {
    main {
      width: 60%;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;

    main {
      width: 100%;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

    h1,
    h2 {
      text-transform: uppercase;
    }

    h1 {
      display: inline;
    }

    span {
      color: var(--green);
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
