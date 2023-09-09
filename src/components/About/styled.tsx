import { styled } from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 699px) {
    padding: 2rem 2rem;
  }

  @media (min-width: 700px) {
    padding: 2rem 10rem;
  }

  p {
    line-height: 1.3rem;
  }

  button {
    margin: 1rem;
  }
`;
