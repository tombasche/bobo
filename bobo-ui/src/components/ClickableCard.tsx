import React from 'react';
import CardDiv from './Card';

interface CardProps {
  title: React.ReactNode;
  onClick: () => void;
  expanded: boolean;
}

const ClickableCard: React.FC<CardProps> = ({
  title,
  onClick,
  expanded,
  children,
}) => (
  <div onClick={onClick}>
    <CardDiv expanded={expanded}>
      {title}
      {children}
    </CardDiv>
  </div>
);

export default ClickableCard;
