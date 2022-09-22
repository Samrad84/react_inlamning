import React from "react";
import { useForm } from "react-hook-form";
import './styles.css';
import Login from "./Login";
import { data } from "jquery";

function Registration() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <div >
    

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h2 >Registration</h2>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <input type="password" placeholder="Password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    
      </div>
  
   
  );
}
export default Registration;