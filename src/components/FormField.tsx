import React from 'react';
import { FormFieldProps } from '../types';
import InputField from './FieldTypes/InputField';
import SelectField from './FieldTypes/SelectField';
import CheckboxField from './FieldTypes/CheckboxField';

const FormField: React.FC<FormFieldProps> = (props) => {
  const { field } = props;

  switch (field.type) {
    case 'input':
      return <InputField {...props} />;
    case 'select':
      return <SelectField {...props} />;
    case 'checkbox':
      return <CheckboxField {...props} />;
    default:
      return null;
  }
};

export default FormField;
