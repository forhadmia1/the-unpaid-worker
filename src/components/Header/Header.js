import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assets/logos/Group 1329.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} height={50} alt="the unpaid worker logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4">
                        <Nav.Link className='fw-bold' href="#features">Home</Nav.Link>
                        <Nav.Link className='fw-bold' href="#pricing">Donation</Nav.Link>
                        <Nav.Link className='fw-bold' href="#pricing">Events</Nav.Link>
                        <Nav.Link className='fw-bold' href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#deets" className='btn btn-info px-3'>Register</Nav.Link>
                        <Nav.Link href="#memes" className='btn btn-dark text-white px-3'>Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;