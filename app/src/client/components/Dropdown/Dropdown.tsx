import React, { useState } from 'react';

type DropdownProps={
  appUsers: any[];
  selectedValue: any;
  onSelectChange: React.SetStateAction<any>;
}
const Dropdown : React.FC<DropdownProps>=({appUsers, selectedValue, onSelectChange})=> {
  // const options = [
  //   { label: 'Apple', value: 'apple' },
  //   { label: 'Banana', value: 'banana' },
  //   { label: 'Orange', value: 'orange' },
  // ];

  //const [selectedValue, setSelectedValue] = useState('banana'); // Set default value here

  const handleChange = (event: any) => {
    onSelectChange(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="fruit-select">Choose a fruit:</label> */}
      <select id="fruit-select" value={selectedValue} onChange={handleChange}>
        {appUsers.map((appUser) => (
          <option key={appUser._id} value={appUser._id}>
            {appUser._id}
          </option>
        ))}
      </select>
      {/* <p>Selected fruit: {selectedValue}</p> */}
    </div>
  );
}

export default Dropdown;