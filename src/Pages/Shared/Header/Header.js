import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/gym-hero-logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar className='header' sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="50" alt="" />
                    Gym Hero
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="home#inventories">Inventories</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user && <>
                                <NavDropdown className='bg-dark' title="Dashboard" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="manageinventories">Manage Inventories</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="addinventory">Add Inventories</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="myinventories">My Inventories</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }

                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {user ? <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign Out</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        {user && <button className='btn btn-link'>
                            <img className='profile-picture' src={user?.photoURL} alt="" />
                        </button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;