// ParentComponent.tsx
import React, { useState } from 'react';
import ChildSelect from './ChildSelect';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

const ParentComponent: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log('Selected from child:', value);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Current selected value: {selectedValue}</p>
      <ChildSelect options={options} onSelectChange={handleSelectChange} />
    </div>
  );
};

export default ParentComponent;