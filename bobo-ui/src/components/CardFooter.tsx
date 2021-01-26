import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
`;

const CardFooter: React.FC<{}> = ({ children }) => (
    <Footer>
        {children}
    </Footer>
);

export default CardFooter;