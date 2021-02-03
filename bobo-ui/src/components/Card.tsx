import React from 'react';
import BaseCardDiv from './BaseCard';

interface CardDivProps {
  expanded?: boolean;
}

const CardDiv: React.FC<CardDivProps> = ({ expanded, children }) => (
  <BaseCardDiv width={expanded ? '750px' : '600px'}>{children}</BaseCardDiv>
);

export default CardDiv;
