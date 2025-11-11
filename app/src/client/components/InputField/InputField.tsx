import React, { ChangeEvent } from 'react'
import "./InputField.css"

type InPutFieldProps ={
    label:string;
    id:string;
    type: React.HTMLInputTypeAttribute;
    value:string | number;
    onChange:React.Dispatch<React.SetStateAction<any>>
}



const InputField : React.FC<InPutFieldProps>= ({
    label, id, type, value, onChange

}) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
  <div className="input-group">
    <label>{label}</label>
    <input type={type} id={id} value={value} onChange={handleChange}         placeholder="Type something..."
    //min={type==='number'?0: ""}
/>
  </div>
  )
}

export default InputField
