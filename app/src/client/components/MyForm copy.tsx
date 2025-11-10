import React, { useState, ChangeEvent } from 'react';

function MyForm() {
  // Define the type for the input value explicitly
  const [inputValue, setInputValue] = useState<string>('');

  // Define the type for the event object in the handleChange function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Submitted value:', inputValue);
    // You can perform further actions with the inputValue here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myInput">Enter text:</label>
      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
      <p>Current input value: {inputValue}</p>
    </form>
  );
}

export default MyForm;