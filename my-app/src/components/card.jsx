
import React, { useState, useEffect } from "react";
import './styles.css';


export default function Card() {

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
        <div >

            {loading ? (
                <div>Loading your data!</div>
            ) :
                (error ? (
                    <div>There was an error. Please try again later</div>
                ) : (
                    data.teams.map((item) => {

                        return (


                            <div class="card">
                                <img src={item.strTeamFanart1} alt="Sample photo" />
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




