import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import '../src/components/styles.css';
import { createRoot } from 'react-dom/client';




import { BrowserRouter, Route, Routes } from "react-router-dom";


import Teams from "./routes/Teams";
import Matches from "./routes/Matches";
import Players from "./routes/Players";
import Home from "./routes/Home";
import App from "./App.js";
import PlayerPage from "./routes/PlayerPage";
import PrLea from "./components/PrLea";
import LaLiga from "./components/Laliga";
import BundLiga from "./components/BundLiga";








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			
			<Route path="/teams" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/home" element={<Home />} />
			<Route path="/PlayerPage" element={<PlayerPage />} />
			<Route path="/prLea" element={<PrLea />} />
			<Route path="/laliga" element={<LaLiga />} />
			<Route path="/bundliga" element={<BundLiga />} />
		</Routes>
	</BrowserRouter>
);



