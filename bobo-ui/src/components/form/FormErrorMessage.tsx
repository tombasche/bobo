import React from 'react';
import Message from '../Message';

const FormErrorMessage = () => {
  return (
    <Message type="warning" message={'There are a few things missing...'} />
  );
};

export default FormErrorMessage;
