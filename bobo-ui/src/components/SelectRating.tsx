import { emojiMap, toEmoji } from './Rating';

interface SelectRatingProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
}

const SelectRating = ({ name, value, change }: SelectRatingProps) => {
  return (
    <select
      aria-labelledby={name}
      value={value}
      onChange={(e) => change(e, name)}
    >
      {Object.keys(emojiMap).map((e) => {
        return (
          <option key={e} value={e}>
            {toEmoji(+e)}
          </option>
        );
      })}
    </select>
  );
};

export default SelectRating;
