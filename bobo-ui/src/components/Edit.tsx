import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const EditIconContainer = styled.span`
  position: relative;
  left: 6%;
  z-index: 10;
  margin: auto;
  opacity: 0.8;

  transition: 0.18s;

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: translateY(4px);
  }
`;

type ClickEvent = (e: React.SyntheticEvent) => void;

const Edit = ({ onClick }: { onClick: ClickEvent }) => {
  return (
    <EditIconContainer onClick={onClick}>
      <FontAwesomeIcon
        icon={faPen}
        size="lg"
        aria-labelledby="edit"
        aria-required="true"
        aria-label="edit"
      />
    </EditIconContainer>
  );
};

export default Edit;
