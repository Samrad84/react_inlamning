import React from "react";
import { useForm } from "react-hook-form";
import '../src/components/styles.css';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import MyForm from "./components/MyForm";



function App() {
 
  
  return (
 <div>
    <Navbar/>
 <div className="main">
  
   <MyForm />
   
    </div>
  
     </div>
  );

}
export default App;