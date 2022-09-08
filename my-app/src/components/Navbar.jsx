import React from "react";


const Navbar  = () =>  {

return <nav>
    <div className="logo">
       
        <h4>Sc<i className="fa-solid fa-futbol"></i>reB<i className="fa-solid fa-futbol"></i>ard</h4>

    </div>
    <ul className="navlinks">
        <li className="link"> <a href="#">Home</a></li>
        <li className="link"> <a href="#">Players</a></li>
        <li className="link"> <a href="#">Matches</a></li>
        <li className="link"> <a href="#">Contact</a></li>
    </ul>
    <div className="hamburger-toggle">
       <i className="fas fa-bars fa-lg"></i> 
    </div>
</nav>
}

export default Navbar;