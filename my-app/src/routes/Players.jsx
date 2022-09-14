
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from "react";
import "../components/styles.css";


export default function Matches() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(
            "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League"
        )
            .then((response) => response.json())
            .then((apiData) => {
                setData(apiData);
                setLoading(false);
                console.log(apiData);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                console.log(err);
            });
    }, []);

    return (
        <div className='main' >
          <Navbar />
           
            {loading ? (
                <div>Loading your data!</div>
            ) :
                (error ? (
                    <div>There was an error. Please try again later</div>
                ) : (
                    data.teams.map((item) => {
                      
                        return(
                       

                            /*< div className = "card" >
                                
    <div className="card__body">
    <h2> {item.strLeague}</h2>

    <img src = {item.strTeamFanart1} />
    <h2 className="card__title"> {item.strTeam}</h2>
    <p className="card__description"> {item.strStadium}</p>
    
    </div>
    <a href= {item.strWebsite}><button className="card__btn">Home page</button></a>
  </div>
    
         */
  <div class="card">
  <img src= {item.strTeamFanart1} alt="Sample photo"/>
  <div class="text">
    <h3>{item.strTeam}</h3>
    <p>{item.strStadium}</p>
    <a href={item.strWebsite}><button >Home Page</button></a>
  </div>
</div>           



    );
})
)
)}

</div>
);
};




