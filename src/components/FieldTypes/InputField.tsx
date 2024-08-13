import React from 'react';
import { FormFieldProps } from '../../types';

const InputField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  return (
    <div>
      <label>{field.label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    </div>
  );
};

export default InputField;
