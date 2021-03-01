import styled from 'styled-components';

const NoButton = styled.input`
  background-color: #003c64;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  font-size: 0.9em;
  padding: 0.5em 1em 0.5em 1em;

  transition: 0.18s;
  &:hover {
    transform: scale(1.04);
  }
`;

export default NoButton;
