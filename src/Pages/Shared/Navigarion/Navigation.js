import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import useAuth from './../../../utilities/hooks/useAuth';

const Navigation = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div className=" navigation_bar">
            <Navbar collapseOnSelect expand="lg" bg="dark" className="px-5" variant="dark">
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src="https://i.ibb.co/DDfy6XH/logo-trang.png"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} className="nav_link" to="/home">Home</Nav.Link>
                        {user.email && <Nav.Link as={NavLink} className="nav_link" to="/dashboard">Dashboard</Nav.Link>}
                        {user.email === undefined && <Nav.Link as={NavLink} className="nav_link" to="/login">Login</Nav.Link>}
                    </Nav>
                    <Nav>
                        {user.email && <Nav.Link eventKey={2} href="#memes">
                            {user.displayName}
                        </Nav.Link>}
                    </Nav>
                    <Nav>
                        {user.email && <Nav.Link>
                            <button onClick={handleLogOut} className="logout_button">Log out</button>
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;