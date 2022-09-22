
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from "react";
import '../components/styles.css';
import Registration from '../components/Registration';
import Login from '../components/Login';
import BackToTop from "react-back-to-top-button";


export default function Matches() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(

            "https://www.thesportsdb.com/api/v1/json/2/searchfilename.php?e=English_Premier_League_2022-10-01"
        )
            .then((response) => response.json())
            .then((apiData) => {
                setData(apiData);
                setLoading(false);

            })
            .catch((err) => {
                setLoading(false);
                setError(true);

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
                    data.event.map((item) => {

                        return (
                            <div>


                                <div class="card">

                                    <img src={item.strThumb} alt="Sample photo" />
                                    <div class="text">
                                        <h3>{item.strEvent}</h3>
                                        <p>{item.dateEvent}</p>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href = "https://www.premierleague.com/fixtures"
                                            }}
                                        >Upcoming Matches</button>
                                    </div>

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




