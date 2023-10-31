import styled from 'styled-components';

export const BlogContainer = styled.div`
  min-height: 2.5rem;
  background-color: var(--grey);

  @media (min-width: 700px) {
    padding: 0 4rem;
  }

  @media (max-width: 699px) {
    padding: 0 2rem;
  }
`;

export const BlogContent = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 700px) {
    padding: 0 4rem;
  }

  @media (max-width: 699px) {
    padding: 0 2rem;
  }
`;

export const BlogArticles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
