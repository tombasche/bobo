import React from 'react';
import Select, { ValueType } from 'react-select';

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
    <Select
      isMulti
      value={values.map(valueToOptionsObject)}
      onChange={(option) => handleChange(option)}
      options={options.map(valueToOptionsObject)}
    />
  );
};

export default BookMultiSelectField;
