import React from 'react';
import styled from 'styled-components';
import BaseCardDiv from './card/BaseCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewCard = styled(BaseCardDiv)`
  border: rgba(255, 255, 255, 0.3) dashed 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddCaption = styled.span`
  padding-left: 8px;
`;

const Add = ({ open }: { open: () => void }) => {
  return (
    <NewCard width={'600px'} onClick={open}>
      <FontAwesomeIcon icon={faPlus} size="lg" />
      <AddCaption>Add</AddCaption>
    </NewCard>
  );
};

export default Add;
