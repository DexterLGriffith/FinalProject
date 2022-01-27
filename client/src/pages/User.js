import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from 'react-bootstrap';
import upperBody1 from "../art/pictures/upperBody1.jpg";
import lowerBody1 from "../art/pictures/lowerBody1.jpg";
import fullBody1 from "../art/pictures/fullBody1.jpg";
export function User(props) {


    return (
        <div className="userContainer">
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container>
            <Navbar.Brand href="/">
                LiftRite
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/login">logout</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <h1 className="welcomeUser"> {props.userEmail} </h1>
            <div className="userUpper">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="upperBody1" src= {upperBody1} />
                <Card.Body>
                <Button variant="primary">
                <Card.Title>
                    Upper Body
                </Card.Title></Button>
                </Card.Body>
                </Card>
            </div>
            <div className="userLower">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="lowerBody1" src= {lowerBody1} />
                <Card.Body>
                <Button variant="primary">
                <Card.Title>
                    Lower Body
                </Card.Title></Button>
                </Card.Body>
                </Card>
            </div>
            <div className="userfullBody">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="fullBody1" src= {fullBody1} />
                <Card.Body>
                <Button variant="primary">
                <Card.Title>
                    Total Body
                </Card.Title></Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}