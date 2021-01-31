import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: React.ReactNode;
  onClick: () => void;
  expanded: boolean;
}

interface CardDivProps {
  width: string;
}

const CardDiv = styled.div`
  width: ${(props: CardDivProps) => props.width};
  margin-bottom: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
  border-radius: 5px;
  background: #003c64;
  cursor: pointer;

  transition: 0.18s;

  &:hover {
    transform: scale(1.04);
  }
`;

const Card: React.FC<CardProps> = ({ title, onClick, expanded, children }) => (
  <CardDiv onClick={onClick} width={expanded ? '600px' : '450px'}>
    {title}
    {children}
  </CardDiv>
);

export default Card;
