import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Headerr = () => 

    (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">To-Do List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                <img alt ="Image not available" src="https://fulfillmentiq.com/wp-content/uploads/2021/04/FIQ-Fulfillment-IQ-logo-1.png"/>
                <span>Training</span>
            </Navbar.Collapse>
        </Navbar>
    );

export default Headerr