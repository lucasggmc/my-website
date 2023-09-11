import { styled } from 'styled-components';

export const ExperienceContainer = styled.div`
  height: auto;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  background-color: var(--grey);

  @media (min-width: 700px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 699px) {
    padding: 2rem 2rem;
  }

  p {
    line-height: 1.3rem;
  }

  ul {
    li {
      margin-bottom: 1rem;
    }
  }
`;
