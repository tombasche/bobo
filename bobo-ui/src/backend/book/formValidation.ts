import React from 'react';
import { ValidFields } from './validate';

export const useValidationErrors = () => React.useState<ValidFields>({});
