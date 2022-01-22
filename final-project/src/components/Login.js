import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function validationForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) { 
        event.preventDefault();
    }

    return (
        <div className="signInContainer">
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container>
            <Navbar.Brand href="#home">
                LiftRite
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#Signup">Signup!</Nav.Link>
                <Nav.Link eventKey={2} href="#Login">
                    Login
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
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
                    <Button block size="lg" type="submit" disabled={!validationForm()}>Login!</Button>
                </Form>    
            </div>    
        </div>


    );

}