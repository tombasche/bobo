import styled from 'styled-components';

interface BookInputFieldProps {
  name: string;
  value: string;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
  error: boolean;
}

const Input = styled.input`
  border: ${(props: { error: boolean }) =>
    props.error ? '1px solid red' : '1px solid black'};
  box-shadow: ${(props: { error: boolean }) =>
    props.error ? '0 0 5px red' : ''};
`;

const BookInputField = ({
  name,
  value,
  change,
  error,
}: BookInputFieldProps) => {
  return (
    <Input
      error={error}
      type="text"
      aria-label={name}
      aria-labelledby={name}
      aria-required="true"
      name={name}
      value={value}
      onChange={(e) => change(e, name)}
    />
  );
};

export default BookInputField;
