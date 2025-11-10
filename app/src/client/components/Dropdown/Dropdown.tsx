import React, { useState } from 'react';

function Dropdown() {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  const [selectedValue, setSelectedValue] = useState('banana'); // Set default value here

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="fruit-select">Choose a fruit:</label> */}
      <select id="fruit-select" value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <p>Selected fruit: {selectedValue}</p> */}
    </div>
  );
}

export default Dropdown;