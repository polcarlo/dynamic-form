import React from 'react';
import FormBuilder from './components/FormBuilder';
import { FormFieldConfig } from './types';

const App: React.FC = () => {
  const fields: FormFieldConfig[] = [
    { id: 'name', label: 'Name', type: 'input' },
    { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
    { id: 'subscribe', label: 'Subscribe to Newsletter', type: 'checkbox' },
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <h1>React Exam</h1>
      <FormBuilder fields={fields} onSubmit={handleSubmit} />
      <p>Check the console log of the output when submitting this form.</p>
    </div>
  );
};

export default App;
