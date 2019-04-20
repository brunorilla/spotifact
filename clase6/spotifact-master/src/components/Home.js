import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col} from 'reactstrap'
import Gallery from "./Gallery";
import Menu from "./Menu";
import Navigation from "./Navigation";

class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>

                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <Navigation/>
                        </Col>

                        <Col>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className="display-3">Se libre, se premium</h1>
                                    <p className="lead">
                                        This is a modified jumbotron that occupies the entire horizontal space of its
                                        parent.
                                    </p>
                                </Container>
                            </Jumbotron>

                            <Gallery/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
