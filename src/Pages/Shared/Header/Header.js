import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logoImg from '../logo.webp';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="navbg" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-info fw-bold" href="#home"> <img className="logo" src={logoImg} alt="" /> Dental Ui Healthcare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav" as={Link} to="/home">HOME</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/services">SERVICES</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/appointment">APPOINTMENT</Nav.Link>
                        <Nav.Link className="nav" as={Link} to="/contactUs">CONTACT US</Nav.Link>
                        {user?.email ?
                            <Button className="btn
                            " onClick={logOut} variant="light">LOGOUT</Button> :
                            <Nav.Link as={Link} to="/login">LOG IN</Nav.Link>}
                        <Navbar.Text className="">
                            {user.email && <span className="user">User:</span>} <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;