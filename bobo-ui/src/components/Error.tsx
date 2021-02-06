import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ErrorDiv = styled.div`
    padding: 3em;
    display: flex;
    flex-flow: column;
    align-items: center
`;

const Error = () => {
  return (
    <ErrorDiv>
      <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
      Something's not quite right ... 
    </ErrorDiv>
  );
};

export default Error;
