import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { animation } from './animation';

const LoadingContainer = styled.div`
  padding: 3em;
  animation: ${animation} 1s linear infinite;
`;

const Loading = ({ size }: { size: SizeProp }) => {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faFan} size={size} />
    </LoadingContainer>
  );
};

export default Loading;
