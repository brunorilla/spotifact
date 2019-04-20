import React, {Component} from 'react';
import {Input, Col, Navbar, Jumbotron} from 'reactstrap';

class Menu extends Component {
    render() {
        return (
            <Col>
                <Navbar color="dark" light expand="md">
                    <Col md={3} xs={12}>
                        <Input placeholder="Search"/>
                    </Col>
                </Navbar>
            </Col>
        );
    }
}

export default Menu;
