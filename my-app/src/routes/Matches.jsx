
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from "react";
import '../components/styles.css';

import { useTable } from "react-table";
import DatePicker from "react-datepicker";







export default function Matches() {




  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);




  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  );

  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/2/searchfilename.php?e=English_Premier_League_2022-10-01"
    )
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
        console.log(Date);
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

              <div >
                <table className='opta'>

                  <tbody className='tbody'>
                    <tr>
                      <td>{item.strLeague}</td>
                      <td>{item.strEvent}</td>
                      <td>{item.dateEvent}</td>
                      <td>{item.intHomeScore} -- {item.intAwayScore}</td>

                    </tr>

                  </tbody>
                </table>
              </div>

            );





          })
        )
        )}

    </div>
  );
};



