import React from 'react';
import { FormFieldProps } from '../../types';

const CheckboxField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(field.id, e.target.checked)}
        />
        {field.label}
      </label>
    </div>
  );
};

export default CheckboxField;
