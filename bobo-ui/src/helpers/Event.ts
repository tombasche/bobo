import React from 'react';

export const synthesiseEvent = (
  value: string | string[],
): React.SyntheticEvent => {
  return ({
    target: {
      value,
    },
  } as unknown) as React.SyntheticEvent;
};
