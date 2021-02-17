import styled from 'styled-components';

const SubmitInput = styled.input`
  background-color: #003c64;
  border: none;

  cursor: pointer;
  color: white;
  padding: 0.7em 1.2em 0.7em 1.2em;
  border-radius: 4px;
  font-size: 0.9em;

  transition: 0.18s;
  &:hover {
    transform: scale(1.04);
  }
`;

const SubmitButton = () => {
  return <SubmitInput type="submit" value="Submit" />;
};

export default SubmitButton;
