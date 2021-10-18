import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Dental Ui Healthcare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/patientform">PATIENT FORM</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">APPOINTMENT</Nav.Link>
                        <Nav.Link as={Link} to="/contactUs">CONTACT US</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LOGOUT</Button> :
                            <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;