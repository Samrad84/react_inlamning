import React, { useState } from "react";

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
                <h4>Sc<i className="fa-solid fa-futbol"></i>reB<i className="fa-solid fa-futbol"></i>ard</h4>
            </div>
            <ul className={renderClasses()}>
                <li className="link"> <a href="#">Home</a></li>
                <li className="link"> <a href="#">Players</a></li>
                <li className="link"> <a href="#">Matches</a></li>
                <li className="link"> <a href="#">Contact</a></li>
            </ul>
            <div  onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fas fa-bars fa-lg"></i>
            </div>
        </nav>
    );
};

export default Navbar;