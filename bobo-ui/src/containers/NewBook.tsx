import React from 'react';
import styled from 'styled-components';
import CardDiv from '../components/Card';

const NewCard = styled(CardDiv)`
  opacity: 0.4;
`;

const NewBook = () => {
  return <NewCard expanded={false}>Add</NewCard>;
};

export default NewBook;
