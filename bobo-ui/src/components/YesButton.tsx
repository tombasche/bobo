import styled from 'styled-components';

const YesButton = styled.input`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  border-radius: 4px;
  font-size: 0.9em;

  transition: 0.18s;
  &:hover {
    transform: scale(1.04);
  }
`;

export default YesButton;
