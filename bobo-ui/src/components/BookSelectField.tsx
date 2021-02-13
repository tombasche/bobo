interface BookSelectFieldProps {
  name: string;
  value: string;
  options: string[];
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
}

const BookSelectField = ({
  name,
  value,
  options,
  change,
}: BookSelectFieldProps) => {
  return (
    <select value={value} onChange={(e) => change(e, name)}>
      {options.map((e) => {
        return (
          <option key={e} value={e}>
            {e}
          </option>
        );
      })}
    </select>
  );
};

export default BookSelectField;
