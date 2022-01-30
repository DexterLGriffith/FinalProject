import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import upperBody1 from "../art/pictures/upperBody1.jpg";
import lowerBody1 from "../art/pictures/lowerBody1.jpg";
import fullBody1 from "../art/pictures/fullBody1.jpg";
import runningAnatomy from "../art/pictures/runningAnatomy.png";
import "./user.css"


export function User(props) {

    return (
        <div className="userContainer">
        <div className="userNavContainer">
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
        </div>
        <div className="userContentContainer">
        <h1 className="welcomeUser"> Hello,{props.userEmail} <br />
        What area are you wanting to workout today?</h1>
            <div className="userChoiceContainer">
            <div className="rowContainer">
                <Row>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="upperBody1"  style={{height: "150px",}} src= {upperBody1} />
                        <Card.Body>
                        <a href="/upperbody" target="/upperbody">
                            <Button> upper Body </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="lowerBody1" style={{height: "150px",}} src= {lowerBody1} />
                        <Card.Body>
                        <a href="/user/lowerbody" target="_blank">
                            <Button> Lower Body </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="fullBody1" style={{height: "150px", width:"150px",}} src= {fullBody1} />
                        <Card.Body>
                        <a href="/user/fullbody" target="_blank">
                            <Button> Full Body</Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1} md={2}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="runningAnatomy" style={{height: "150px",}} src= {runningAnatomy} />
                        <Card.Body>
                        <a href="/user/cardio" target="_blank">
                            <Button> Cardio </Button>
                        </a>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
            </div>
            <h1 className="additionalUser"> Not sure what to focus on today? <br /> Try our recommended daily workout! </h1>
            <div className="workoutBtn">
                <a href="/daily-workout" target="_blank">
                    <Button> Daily Workout </Button>
                </a>
            </div>
            </div>
            </div>
           
        
    )
}