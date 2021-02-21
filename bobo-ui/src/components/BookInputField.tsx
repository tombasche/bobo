import styled from 'styled-components';

interface BookInputFieldProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
  error: boolean;
}

const Input = styled.input``;

const BookInputField = ({
  name,
  value,
  change,
  error,
}: BookInputFieldProps) => {
  return (
    <Input
      type="text"
      name={name}
      value={value}
      onChange={(e) => change(e, name)}
    />
  );
};

export default BookInputField;
