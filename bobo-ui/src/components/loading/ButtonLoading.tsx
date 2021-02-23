import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { animation } from './animation';

const ButtonLoadingContainer = styled.div`
  position: absolute;
  padding: 2px;
  top: 5px;
  left: 5px;
  color: white;
  z-index: 1;
  animation: ${animation} 1s linear infinite;
`;

const ButtonLoading = () => {
  return (
    <ButtonLoadingContainer>
      <FontAwesomeIcon icon={faFan} size="1x" />
    </ButtonLoadingContainer>
  );
};

export default ButtonLoading;
