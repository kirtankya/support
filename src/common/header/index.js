import React, { useState } from 'react'
import './header.scss';
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <>
            <div className='header_aligment'>
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <p>Logo</p>
                        </Navbar.Brand>
                        <Navbar.Collapse className='items' id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='#'>SubmitTicket</Nav.Link>
                                <Nav.Link href='#'>PublicTicket</Nav.Link>
                                <Nav.Link href='#'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
