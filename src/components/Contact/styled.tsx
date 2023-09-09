import styled from 'styled-components';

export const ContactContainer = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 700px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 699px) {
    padding: 2rem 2rem;
  }

  form {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;

    textarea {
      grid-column: 1 / 3;
    }
  }
`;
