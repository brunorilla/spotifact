import React, {Component} from 'react'
import {getPlaylists} from '../requests'
import {Link} from "react-router-dom"
import {newPlaylist} from "../requests"

class Playlists extends Component{
    constructor(props){
        super(props)

        this.state = {
            playlists:  [],
            form: {
                name: ""
            }
        }
    }

    componentWillMount(){
        getPlaylists()
            .then(response => this.setState({playlists: response.data}))

    }

    handleSubmit = (e) => {
        e.preventDefault()

        newPlaylist(this.state.form.name)
            .then(response => {
                this.setState({
                    playlists: this.state.playlists.concat(response.data)
                })
            })
    }

    handleInputChange = (e) => {
        this.setState({
            form : {
                name: e.target.value
            }

        })
        console.log(e.target.name, e.target.value)
    }

    render(){
        return (
            <div>
                <h1>Mis playlists</h1>
                <p>Lista de playlists</p>
                <ul className="playlist-list">
                    {
                        this.state.playlists.map((p, i) =>{
                        return (
                                <li key={i}>
                                    <Link key={i} to={`/playlists/${p.id}`}>{p.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <form action="">
                    <div>
                        <input type="text" placeholder="Nombre" name="name"
                               onChange={this.handleInputChange} value={this.state.form.name}/>
                    </div>
                    <button onClick={this.handleSubmit}>Crear</button>
                </form>
            </div>
        )
    }
}

export default Playlists