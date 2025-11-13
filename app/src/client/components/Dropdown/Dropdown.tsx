import React, { useState } from 'react';
import mongoose from 'mongoose';

type DropdownProps={
  appUsers: any[];
  selectedValue: any;
  setSelectedValue: React.Dispatch<React.SetStateAction<mongoose.Types.ObjectId>>;
  onSelectChange: React.SetStateAction<any>;
}
const Dropdown : React.FC<DropdownProps>=({appUsers, selectedValue, onSelectChange, setSelectedValue})=> {


  return (
    <div>
      {/* <label htmlFor="fruit-select">Choose a fruit:</label> */}
      <select id="mongoose-types-objectId" value={selectedValue} onChange={(event:any) => onSelectChange(event.target.value, setSelectedValue)}>
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