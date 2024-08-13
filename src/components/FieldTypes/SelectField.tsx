import React from 'react';
import { FormFieldProps } from '../../types';

const SelectField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  return (
    <div>
      <label>{field.label}</label>
      <select value={value} onChange={(e) => onChange(field.id, e.target.value)}>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
