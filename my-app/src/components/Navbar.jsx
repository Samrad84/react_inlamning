import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [navLinkOpen, navLinkToggle] = useState(false);


    const handleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
};
const renderClasses = ()  => {

    let classes = "navlinks";
    if(navLinkOpen){
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
                <li className="link">  <Link to="/Matches">Matches</Link></li>
                <li className="link">  <Link to="/Players">Players</Link></li>
                <li className="link">  <Link to="/Teams">Teams</Link></li>
            </ul>
            <div  onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </nav>
    );
};

export default Navbar;