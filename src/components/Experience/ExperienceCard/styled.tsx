import styled from 'styled-components';

export const ExperienceCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    margin-top: 1rem;
  }

  img {
    height: 3rem;
    width: 3rem;
  }

  a {
    text-decoration: underline;
  }
`;

export const HighLight = styled.span`
  color: var(--green);
`;
