import styled from 'styled-components';

export const BlogArticleItem = styled.div`
  width: 400px;
  height: 350px;
  border: 1px solid;
  gap: 1rem;

  display: flex;
  flex-direction: column;

  img {
    height: 60%;
  }
`;

export const BlogArticleItemInfo = styled.div`
  padding: 0 1rem;

  h3 {
    margin-bottom: 1rem;
  }
`;
