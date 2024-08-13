import { useState } from 'react';
import { FormFieldConfig } from '../types';

const useFormBuilder = (fields: FormFieldConfig[]) => {
  const [formData, setFormData] = useState<Record<string, any>>(
    fields.reduce((acc, field) => {
      acc[field.id] = field.type === 'checkbox' ? false : '';
      return acc;
    }, {} as Record<string, any>)
  );

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return {
    formData,
    handleChange,
  };
};

export default useFormBuilder;
