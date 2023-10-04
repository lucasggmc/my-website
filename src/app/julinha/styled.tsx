import styled from 'styled-components';

export const JulinhaContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: pink;

  img {
    width: 220px;
    height: 220px;
  }

  section {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;

      :last-child {
        width: 80px;
        height: 120px;
      }
    }

    h3 {
      color: var(--green);
    }
  }
`;
