import React from 'react';
import './styles.css';

class PlayerRow extends React.Component {

    render() {

        return <table className='Table' key={this.props.player.strPlayer}>
            <tbody>
                <tr>
                    <td>
                        <img className="poster" width="120" src={this.props.player.strThumb} />
                    </td>
                    <td>
                        <h3>{this.props.player.strPlayer}</h3>
                        <p className="alt" >   {this.props.player.strTeam} </p>


                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = './PlayerPage';
                            }}
                        >Player Page</button>


                    </td>


                </tr>
            </tbody>

        </table>


    }
}
export default PlayerRow;