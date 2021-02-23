import React from 'react';
import styled from 'styled-components';
import ButtonLoading from '../loading/ButtonLoading';

const defaultPadding = '0.7em 1.2em 0.7em 1.2em';
const moreLeftPadding = '0.7em 1.2em 0.7em 1.8em';

const SubmitInput = styled.input`
  background-color: #003c64;
  border: none;
  cursor: pointer;
  color: white;
  padding: ${(props: { isSaving: boolean }) =>
    props.isSaving ? moreLeftPadding : defaultPadding};
  border-radius: 4px;
  font-size: 0.9em;

  transition: 0.18s;
  &:hover {
    transform: scale(1.04);
  }

  position: absolute;
  top: 0px;
`;

const SubmitButtonContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
`;

const SubmitButton = ({ isSaving }: { isSaving: boolean }) => {
  return (
    <SubmitButtonContainer>
      {isSaving && <ButtonLoading />}
      <SubmitInput type="submit" value="Submit" isSaving={isSaving} />
    </SubmitButtonContainer>
  );
};

export default SubmitButton;
