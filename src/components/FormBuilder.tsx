import React from 'react';
import { FormBuilderProps } from '../types';
import useFormBuilder from '../hooks/useFormBuilder';
import FormField from './FormField';

const FormBuilder: React.FC<FormBuilderProps> = ({ fields, onSubmit }) => {
  const { formData, handleChange } = useFormBuilder(fields);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={formData[field.id]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBuilder;
