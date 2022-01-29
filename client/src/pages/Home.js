import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./login.css"

export default function Home (props){
return(
 <>
    {/* <Button onClick={props.homeClickHandler}>
        LOGIN PAGE
    </Button> */}
    <a href="/login">
    <button>
Login Page
    </button>
        
    </a>
</>
  
)
}