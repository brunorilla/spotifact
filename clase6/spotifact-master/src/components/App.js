import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../styles/App.css';
import Home from './Home'
import Detail from "./Detail";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/detail" component={Detail}/>
            </Router>
        );
    }
}

export default App;
