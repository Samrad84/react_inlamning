import react from "react";
import  ReactDOM  from "react-dom";
import Navbar from "./components/Navbar";
import "./App.css";


const App = ()  => {
    return (
        <div>
            <Navbar/>
            <div className="main">


            </div>
        </div>
    )
}



ReactDOM.render(<App/>, document.getElementById("root"));