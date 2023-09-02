import { styled } from 'styled-components';

export const RoundedButton = styled.button`
  background: var(--color-red);
  border-radius: 30px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1em;
  padding: 1em 2em;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
