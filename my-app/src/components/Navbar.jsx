import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import DatePicker from "react-datepicker";


const Navbar = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    };
    const renderClasses = () => {

        let classes = "navlinks";
        if (navLinkOpen) {
            classes += " activ"
        }
        return classes;


    };


    return (
        <nav>
            <div className="logo">
                <h4><Link to="/">Sc<i className="fa-solid fa-futbol"></i>reB<i className="fa-solid fa-futbol"></i>ard</Link> </h4>
            </div>
            <ul className={renderClasses()}>

                <li className="link">  <Link to="/Home">Home</Link></li>




                <li className="link">  <Link to="/Players">Players</Link></li>
                <li className="link">  <Link to="/Teams">Teams</Link></li>
                <li className="link"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></li>
            </ul>
            <div onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </nav>
    );
};

export default Navbar;