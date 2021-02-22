import styled from 'styled-components';
import { synthesiseEvent } from '../helpers/Event';
import { emojiMap, toEmoji } from '../components/Rating';

interface SelectRatingProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<any>, field: string) => void;
}

const EmojiIcon = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  opacity: ${(props: { selected: boolean }) => (props.selected ? '1' : '0.1')};

  transition: 0.2s;

  &:focus {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`;
const EmojiContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
`;

const SelectRating = ({ name, value, change }: SelectRatingProps) => {
  return (
    <EmojiContainer
      aria-label={name}
      aria-labelledby={name}
      aria-required="true"
    >
      {Object.keys(emojiMap).map((e) => {
        return (
          <EmojiIcon
            selected={value === e}
            key={e}
            onClick={() => change(synthesiseEvent(e), name)}
          >
            {toEmoji(+e)}
          </EmojiIcon>
        );
      })}
    </EmojiContainer>
  );
};

export default SelectRating;
