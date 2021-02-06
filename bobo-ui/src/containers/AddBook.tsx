import React from 'react';
import Add from '../components/Add';
import Modal from '../components/Modal';

const AddBook = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Add open={() => setModalIsOpen(true)} />
      <Modal
        title="Add Book"
        isOpen={modalIsOpen}
        close={() => setModalIsOpen(false)}
      />
    </>
  );
};

export default AddBook;
