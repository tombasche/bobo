import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`
  padding-top: 1em;
  display: flex;
  flex-flow: column;
  margin: auto;
  align-items: center;
`;

const Page: React.FC<{}> = ({ children }) => <PageDiv>{children}</PageDiv>;

export default Page;
