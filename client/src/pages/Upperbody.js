import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import "./upperbody.css"

import chest from "../art/pictures/chest.png";
import back from "../art/pictures/back.png";
import shoulders from "../art/pictures/shoulders.png";
import arms from "../art/pictures/arms.png";
import upperBody1 from "../art/pictures/upperBody1.jpg";

export function Upperbody() {
    return(
    <div className="upperbodyContainer">
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container>
            <Nav>
            <Navbar.Brand href="/">
                LiftRite
            </Navbar.Brand>
                <Nav.Link href="/login">logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div className="selectGroupContainer">
        <h1 className="selectGrouph1">Great Choice! <br />
        Lets choose a few areas to focus on!</h1>
        <div className="rowContainer">
                <Row>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="upperBody1"  style={{height: "150px",}} src= {chest} />
                        <Card.Body>
                        <a href="/upperbody" target="_blank" type="submit">
                            <Button> Chest </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="lowerBody1" style={{height: "150px",}} src= {back} />
                        <Card.Body>
                        <a href="/user/lowerbody" target="_blank">
                            <Button> Back </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="upperBody1"  style={{height: "150px",}} src= {upperBody1} />
                        <Card.Body>
                        <a href="/upperbody" target="_blank" >
                            <Button> upper Body </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="fullBody1" style={{height: "150px", width:"113px",}} src= {shoulders} />
                        <Card.Body>
                        <a href="/user/fullbody" target="_blank">
                            <Button> Shoulders </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="runningAnatomy" style={{height: "150px",}} src= {arms} />
                        <Card.Body>
                        <a href="/user/cardio" target="_blank">
                            <Button> Arms </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col> 
                </Row>
            </div>
        </div>

            
    </div>
        
    )
}

export default Upperbody;