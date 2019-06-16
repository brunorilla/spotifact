import React, {Component} from 'react'
import {getPlaylist} from './../requests'
import './styles/styles.css';
import {Link} from "react-router-dom";


class PlaylistDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            playlist : {}
        }
    }
    componentWillMount() {
        getPlaylist(this.props.match.params.id)
            .then(response => this.setState({playlist: response.data}))
    }

    render(){
        return(
            <div className="playlists-mainWrapper">
                <div className="playlists-menu">
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/playlists"}>Playlists</Link>
                        </li>
                    </ul>
                </div>

                <div className="playlists-container">
                    <h1>Detalle de la playlist</h1>
                    <div className="wrapper">
                        <ul>
                            <li>
                                <h2>Nombre</h2>
                            </li>
                            <li>
                                <p>{this.state.playlist.name}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default PlaylistDetail