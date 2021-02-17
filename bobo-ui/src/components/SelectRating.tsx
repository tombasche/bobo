export const RatingOptions = ['1', '2', '3', '4'];

interface SelectRatingProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
}

const SelectRating = ({ name, value, change }: SelectRatingProps) => {
  return (
    <select value={value} onChange={(e) => change(e, name)}>
      {RatingOptions.map((e) => {
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
