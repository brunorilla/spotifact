import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../styles/App.css';
import Home from './Home'
import Detail from "./Detail";
import Playlists from "./Playlists"
import PlaylistDetail from "./PlaylistDetail"

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/playlists" exact component={Playlists}/>
                <Route path="/playlists/:id" component={PlaylistDetail}></Route>
            </Router>
        );
    }
}

export default App;
