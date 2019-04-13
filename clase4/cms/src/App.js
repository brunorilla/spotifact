import React, { Component } from 'react';
import Navigation from './componentes/navigation/navigation'
import Content from './componentes/content/content'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
          <div className="wrapper">
              <Router>
                <ul>
                    <li>
                        <Link to="/content">Content </Link>
                    </li>
                </ul>
                  <Route path="/content" component={Content}></Route>
              </Router>
        </div>
      </div>
    );
  }
}

export default App;
