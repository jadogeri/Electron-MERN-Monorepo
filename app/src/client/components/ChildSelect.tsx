// ChildSelect.tsx
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface ChildSelectProps {
  options: Option[];
  onSelectChange: (value: string) => void;
}

const ChildSelect: React.FC<ChildSelectProps> = ({ options, onSelectChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="fruit-select">Select a fruit:</label>
      <select id="fruit-select" onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChildSelect;