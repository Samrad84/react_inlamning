import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import "./App.css";



import { BrowserRouter, Route, Routes } from "react-router-dom";


import Teams from "./routes/Teams";
import Matches from "./routes/Matches";
import Players from "./routes/Players";
import Home from "./routes/Home";



const App = () => {
    return (
        <div>
            <Navbar />
            
          
          
           
        </div>
    );
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			
			<Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/home" element={<Home />} />
		</Routes>
	</BrowserRouter>
);



