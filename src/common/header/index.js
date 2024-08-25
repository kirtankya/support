import React from 'react'
import './header.scss';
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logo/logo.jpg';

export default function Header() {
    return (
        <>
            {/* <div className='header_aligment'>
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Collapse className='items' id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/form'>SubmitTicket</Nav.Link>
                                <Nav.Link href='/login'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Container>
                </Navbar>
            </div> */}
            <header class="header">
                <nav>
                    <div class="logo">
                        <a href="index.html">Humayun.<span>K</span></a>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" class="menu-icon">&#9776;</label>
                    <ul class="menu">
                        <li><a href="/work">Custom Work</a></li>
                        <li><a href="#">Vectors</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Connect</a></li>
                        <li><a href="/form">Support</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
