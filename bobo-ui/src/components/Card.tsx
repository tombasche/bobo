import styled from 'styled-components';

type CardDivProps = {
  expanded?: boolean;
};

const BaseCardDiv = styled.div`
  width: ${(props: { width: string }) => props.width};
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
const CardDiv: React.FC<CardDivProps> = ({ expanded, children }) => (
  <BaseCardDiv width={expanded ? '750px' : '600px'}>{children}</BaseCardDiv>
);

export default CardDiv;
