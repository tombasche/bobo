import React from 'react';
import Select, { ValueType } from 'react-select';
import styled from 'styled-components';

interface BookMultiSelectFieldProps {
  name: string;
  values: string[];
  options: string[];
  change: (e: React.SyntheticEvent<any>, field: string) => void;
}
type OptionType = {
  value: string;
  label: string;
};

type IsMulti = true;

const valueToOptionsObject = (v: string) => {
  return { value: v.toLowerCase(), label: v };
};

const Container = styled.span`
  min-width: 12em;
`;

const BookMultiSelectField = ({
  name,
  values,
  options,
  change,
}: BookMultiSelectFieldProps) => {
  const handleChange = (selectedOptions: ValueType<OptionType, IsMulti>) => {
    if (!selectedOptions) return;
    const event = ({
      target: {
        value: selectedOptions.map((o) => {
          return o.label;
        }),
      },
    } as unknown) as React.ChangeEvent;
    change(event, name);
  };

  return (
    <Container>
      <Select
        isMulti
        value={values.map(valueToOptionsObject)}
        onChange={(option) => handleChange(option)}
        options={options.map(valueToOptionsObject)}
      />
    </Container>
  );
};

export default BookMultiSelectField;
