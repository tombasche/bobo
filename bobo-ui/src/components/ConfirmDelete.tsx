import React from 'react';
import ConfirmButton from './ConfirmButton';
import Modal from './Modal';

type ConfirmCallable = () => void;

interface ConfirmDeleteProps {
  open: boolean;
  onConfirm: ConfirmCallable;
  onClose: ConfirmCallable;
}

const ConfirmDelete = ({ open, onConfirm, onClose }: ConfirmDeleteProps) => {
  return (
    <Modal
      title="Are you sure?"
      isOpen={open}
      close={onClose}
      modalHeightPercent={20}
    >
      This will remove this book permanently!
      <ConfirmButton
        type="submit"
        value="Yes"
        aria-label="yes"
        onClick={onConfirm}
      />
    </Modal>
  );
};

export default ConfirmDelete;
