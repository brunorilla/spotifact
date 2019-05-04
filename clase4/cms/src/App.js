import React, { Component } from 'react';
import Content from './componentes/content/content'
import logo from './logo.svg';
import './App.css';
import Browse from './componentes/content/browse'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
              <Router>
                  <div className="navigation">
                      <ul>
                          <li><Link to="/content">Home</Link></li>
                          <li><Link to="/browse">Browse</Link></li>
                          <li><Link to="/content">Radio</Link></li>
                      </ul>
                  </div>
                  <Route path="/content" component={Content}></Route>
                  <Route path="/browse" component={Browse}></Route>
                  <Route path="/radio" component={Browse}></Route>
              </Router>
        </div>
      </div>
    );
  }
}

export default App;
