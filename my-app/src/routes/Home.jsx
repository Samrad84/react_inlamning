
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from "react";
import "../components/styles.css";


export default function Matches() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(

            "https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=133602"
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
                    data.results.map((item) => {

                        return (


         
                            <div class="card">
                                <img src={item.strThumb} alt="Sample photo" />
                                <div class="text">
                                    <h3>{item.strEvent}</h3>
                                    <p>{item.dateEvent}</p>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = "https://www.uefa.com/uefachampionsleague/"
                                        }}
                                    >Upcoming Matches</button>
                                </div>
                            </div>



                        );
                    })
                )
                )}

        </div>
    );
};




