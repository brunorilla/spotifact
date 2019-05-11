import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'

class Navigation extends Component {
    render() {

        let totalLength = this.props.songs.reduce(function(prev,current){
            return prev + current.length
        }, 0)

        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/detail">Detail</Link>
                    </li>
                    <li>
                        <Link to="/playlists">Mis Playlists</Link>
                    </li>
                    <li>Playlists</li>
                </ul>
                <p><strong>Lista actual {this.props.songs.length}</strong></p>
                <p><strong>Lista actual {totalLength}</strong></p>
                <Card>
                    <ul className="list-group">
                        {this.props.songs.map((song, i) => <li className="list-group-item" key={i}>{song.title} - {song.length}</li>)}
                    </ul>
                </Card>
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return {
        songs : state.currentPlaylist
    }
}


export default connect(mapStateToProps)(Navigation);
