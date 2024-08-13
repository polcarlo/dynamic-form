export interface FormFieldConfig {
    id: string;
    label: string;
    type: 'input' | 'select' | 'checkbox';
    options?: string[]; 
  }
  
  export interface FormBuilderProps {
    fields: FormFieldConfig[];
    onSubmit: (data: Record<string, any>) => void;
  }
  
  export interface FormFieldProps {
    field: FormFieldConfig;
    value: any;
    onChange: (id: string, value: any) => void;
  }
  