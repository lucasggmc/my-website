import { styled } from 'styled-components';

export const ExperienceContainer = styled.div`
  padding: 2rem 10rem;
  height: auto;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  background-color: var(--gray);

  p {
    line-height: 1.3rem;
  }

  ul {
    li {
      margin-bottom: 1rem;
    }
  }
`;
