import styled from 'styled-components';

const SubmitInput = styled.input`
  background-color: #003c64;
  border: none;

  cursor: pointer;
  color: white;
  padding: 6px;
  border-radius: 2px;

  transition: 0.18s;

  &:hover {
    transform: scale(1.04);
  }
`;

const SubmitButton = () => {
  return <SubmitInput type="submit" value="Submit" />;
};

export default SubmitButton;
