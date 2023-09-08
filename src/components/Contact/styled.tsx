import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 2rem 10rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;

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
