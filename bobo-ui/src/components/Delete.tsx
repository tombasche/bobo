import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const DeleteIconContainer = styled.span`
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

const Delete = ({ onClick }: { onClick: ClickEvent }) => {
  return (
    <DeleteIconContainer onClick={onClick}>
      <FontAwesomeIcon
        icon={faTrash}
        size="lg"
        aria-labelledby="delete"
        aria-required="true"
        aria-label="delete"
      />
    </DeleteIconContainer>
  );
};

export default Delete;
