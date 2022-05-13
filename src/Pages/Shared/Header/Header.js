import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/gym-hero-logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="35" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="home#inventories">Inventories</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user && <>
                                <Nav.Link as={Link} to="/addinventory">Add Inventories</Nav.Link>
                                <Nav.Link as={Link} to="/manageinventories">Manage Inventories</Nav.Link>
                                <Nav.Link as={Link} to="/myinventories">My Inventories</Nav.Link>
                            </>
                        }

                        {user ? <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;