import styled from 'styled-components';

const ConfirmButton = styled.input`
  background-color: #003c64;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 4px;
  font-size: 0.9em;

  transition: 0.18s;
  &:hover {
    transform: scale(1.04);
  }

  position: absolute;
  top: 0px;
`;

export default ConfirmButton;
