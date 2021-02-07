interface BookInputFieldProps {
  name: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

const BookInputField = ({ name, value, change }: BookInputFieldProps) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => change(e, name)}
    />
  );
};

export default BookInputField;
