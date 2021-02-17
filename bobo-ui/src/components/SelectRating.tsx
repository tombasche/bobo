import { emojiMap } from './Rating';

interface SelectRatingProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
}

const SelectRating = ({ name, value, change }: SelectRatingProps) => {
  return (
    <select value={value} onChange={(e) => change(e, name)}>
      {Object.keys(emojiMap).map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      })}
    </select>
  );
};

export default SelectRating;
