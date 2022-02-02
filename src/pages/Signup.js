import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function validationForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="signUpContainer">
            <Navbar collapseOnSelect expand="lg" bg ="dark">
                <Container>
                    <Navbar.Brand href="/">
                        LifeRite
                    </Navbar.Brand>
                    <nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </nav>
                </Container>
            </Navbar>
         {/* end navbar     */}
            <h1 className="createUser"> Create Your Profile! </h1>
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="Username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
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
    )
}