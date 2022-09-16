
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from "react";
import "../components/styles.css";
import Table from 'react-bootstrap/Table';


export default function Matches() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/2/searchfilename.php?e=English_Premier_League_2022-09-17"
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
          data.event.map((item) => {

            return (


              <table className='table'>



                <tr>
                  <th>#</th>
                  <th>Teams</th>
                  <th>Date</th>
                  <th>Result</th>
                </tr>

                <tbody>
                  <tr>
                    <td>{item.strLeague}</td>
                    <td>{item.strEvent}</td>
                    <td>{item.dateEvent}</td>
                    <td>{item.intHomeScore} -- {item.intAwayScore}</td>
                  </tr>

                </tbody>
              </table>
            );





          })
        )
        )}

    </div>
  );
};




