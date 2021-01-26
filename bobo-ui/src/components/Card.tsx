import React from 'react';
import styled from 'styled-components';


interface CardProps {
    title: string
}

const CardDiv = styled.div`
    width: 450px;
    margin-bottom: 1em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 12px;
    border-radius: 5px;
    background: #003c64;

    transition: 0.2s;

    &:hover {
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.5);
    }
`;

export const Card: React.FC<CardProps> = ({ title, children }) => (
    <CardDiv>
        <h3>{title}</h3>
        {children}
    </CardDiv>
);