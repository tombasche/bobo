import React from 'react';
import YesButton from './YesButton';
import NoButton from './NoButton';

import Modal from './Modal';
import styled from 'styled-components';

type ConfirmCallable = () => void;

interface ConfirmDeleteProps {
  open: boolean;
  onConfirm: ConfirmCallable;
  onClose: ConfirmCallable;
}

const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
`;

const YesNoContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const ConfirmDelete = ({ open, onConfirm, onClose }: ConfirmDeleteProps) => {
  return (
    <Modal title="Are you sure?" isOpen={open} close={onClose}>
      <ModalContent>
        <em>This will remove the book permanently!</em>
        <YesNoContainer>
          <YesButton
            type="submit"
            value="Yes..."
            aria-label="yes"
            onClick={onConfirm}
          />
          <NoButton
            type="submit"
            value="No!"
            aria-label="no"
            onClick={onClose}
          />
        </YesNoContainer>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDelete;
