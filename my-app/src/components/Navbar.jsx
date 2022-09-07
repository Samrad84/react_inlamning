import React from "react";

const Navbar  = () =>  {

return <nav>
    <div className="logo">
        <i className="fas fa-scored "></i>
        <h4>Scored</h4>

    </div>
    ,<ul className="navlinks">
        <li className="link"> <a href="#">Home</a></li>
        <li className="link"> <a href="#">Players</a></li>
        <li className="link"> <a href="#">Matches</a></li>
        <li className="link"> <a href="#">Contact</a></li>
    </ul>
</nav>
}

export default Navbar;