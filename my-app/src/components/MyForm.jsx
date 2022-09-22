import { useState } from "react";
import ReactDOM from "react-dom/client";
import './styles.css';
import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const [formTitle, setFormTitle] = useState("title")
  const onButtonClick = () => setFormTitle(`[${formTitle}]`)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))

    
    
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(inputs);

  }

  return (
    <div>
    <form className="App" onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
    
        <input type="submit"  />

        <h1>Hi  {inputs.username} Welcome To ScoreBoard! </h1>
    </form>
    
   
    </div>
  )
}