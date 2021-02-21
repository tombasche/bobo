import React from 'react';
import Select, { ValueType } from 'react-select';
import styled from 'styled-components';

interface BookMultiSelectFieldProps {
  name: string;
  values: string[];
  options: string[];
  change: (e: React.SyntheticEvent<any>, field: string) => void;
  error: boolean;
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
  error,
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
    <Container data-testid={name}>
      <Select
        styles={{
          control: (provided) =>
            error
              ? {
                  ...provided,
                  border: '1px solid red',
                  boxShadow: '0 0 5px red',
                }
              : provided,
        }}
        isMulti
        value={values.map(valueToOptionsObject)}
        onChange={(option) => handleChange(option)}
        options={options.map(valueToOptionsObject)}
        aria-label={name}
        aria-labelledby={name}
        aria-required="true"
        title={name}
      />
    </Container>
  );
};

export default BookMultiSelectField;
