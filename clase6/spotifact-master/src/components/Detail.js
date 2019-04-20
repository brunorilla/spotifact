import React, {Component} from 'react';
import Navigation from './Navigation';
import Content from './Content';
import '../styles/App.css';
import Menu from './Menu'
import { Button } from 'reactstrap';

class Detail extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Menu/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <Navigation/>
                    </div>
                    <div className="col-9">
                        <h1>Detalle</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
