import React, {Component} from 'react'
import {getPlaylist} from './../requests'

class PlaylistDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            playlist : {}
        }
        console.log("abajo del constructor",this.props)
    }
    componentWillMount() {
        getPlaylist(this.props.match.params.id)
            .then(response => this.setState({playlist: response.data}))
    }

    render(){
        return(
            <div>
                <h1>Detalle de la playlist {this.state.playlist.id}</h1>
                <p>{this.state.playlist.name}</p>
            </div>
        )
    }
}

export default PlaylistDetail