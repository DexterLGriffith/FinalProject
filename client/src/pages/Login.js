import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./login.css"

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function validationForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) { 
        event.preventDefault();
         props.handleUserLogin(event)
    }

    return (
        <div className="signInContainer">
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container>
            <Navbar.Brand href="/">
                LiftRite
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/signup">Signup!</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
       {/* end navbar  */}
            <div className= "titleLoginContainer">
            <h1 className="projectTitle"> LiftRite </h1>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" action="/user" type="submit" disabled={!validationForm()}>Login!</Button>
                </Form>    
            </div>    
        </div>
        

    );

}