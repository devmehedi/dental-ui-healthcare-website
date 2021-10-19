import React from 'react';
import { Button, Carousel, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logoImg from '../logo.webp';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navbg" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <img className="logo" src={logoImg} alt="" /> Dental Ui Healthcare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav" as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/patientform">PATIENT FORM</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/appointment">APPOINTMENT</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/contactUs">CONTACT US</Nav.Link>
                        {user?.email ?
                            <Button className="logout" onClick={logOut} variant="light">LOGOUT</Button> :
                            <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>}
                        <Navbar.Text>
                            User: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;