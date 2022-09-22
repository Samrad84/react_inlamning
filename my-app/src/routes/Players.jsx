import React, { Component } from 'react';
import '../components/styles.css';
import $ from 'jquery';
import PlayerRow from '../components/PlayerRow';
import Navbar from '../components/Navbar';
import BackToTop from "react-back-to-top-button";




class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {}


        this.performsSearch()
    }
    performsSearch(searchTerm) {
        const urlString = "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=" + searchTerm

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("fetched data successfully")
                const results = searchResults.player

                console.log(results[0])
                var playerRows = []
                results.forEach((player) => {
                    player.poster_src = player.strThumb
                    const playerRow = <PlayerRow key={player.id} player={player} />







                    playerRows.push(playerRow)
                })
                this.setState({ rows: playerRows })
            },
            error: (xhr, status, err) => {
                console.log("failed to fetch data")
            }

        })

    }


    searchChangeHandler(event) {
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        this.performsSearch(searchTerm)
    }
    render() {
        return (
            <div className="main">
                <Navbar />


                <input style={{
                    fontSize: 24,
                    display: 'block',
                    width: "99%",
                    paddingTop: 8,
                    paddingLeft: 16,
                    margin:200

                }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search For a Player By Full Name" />




                {this.state.rows}

        
                <BackToTop
        showOnScrollUp={false}
        showAt={100}
        speed={100}
        easing="easeInOutSine"
       
      >
        <span>^</span>

      </BackToTop>

            </div>
        

        )
    }
}

export default Players;