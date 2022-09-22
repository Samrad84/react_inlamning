import ReactDOM from "react-dom/client";
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";
import '../components/styles.css';
import BackToTop from "react-back-to-top-button";


export default function PrLea() {



    const handleChange = (event) => {
        setQuery(event.target.value)

    }
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("English Premier League");
    const apiUrl = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=" + query;
    useEffect(() => {


        fetch(
            apiUrl

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

            <div>
                <ul className="countries">
                    <li className="league" ><a href="/prLea" > <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" /> English Premier League</a></li>



                </ul>
            </div>


            <Navbar />

            <form>
                <select value={query} onChange={handleChange}>
                    <option value="English Premier League">Premier League</option>
                    <option value="Spanish La Liga">La Liga</option>
                    <option value="German Bundesliga">Bundesliga</option>
                </select>
            </form>







            {loading ? (
                <div>Loading your data!</div>
            ) :
                (error ? (
                    <div>There was an error. Please try again later</div>
                ) : (
                    data.teams.map((item) => {

                        return (



                            <div className="card">
                                <img src={item.strTeamFanart1} alt="Sample photo" />
                                <div className="text">
                                    <h2>{item.strTeam}</h2>
                                    <p>{item.strStadium}</p>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = "https://" + item.strWebsite;
                                        }}
                                    >Home Page</button>
                                </div>
                            </div>





                        );
                    })
                )
                )}

            <BackToTop
                showOnScrollUp={false}
                showAt={100}
                speed={100}
                easing="easeInOutSine"

            >
                <span>^</span>

            </BackToTop>

        </div>
    );
};



