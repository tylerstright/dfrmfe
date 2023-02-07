import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NPTlogos from '../images/NPTlogos2.png';

export default function NavBar(props) {
    return (
        <Navbar bg='dark' variant='dark' sticky='top' >
            <Container>
                <Navbar.Brand >
                    <img src={NPTlogos} width='100%' height='50px' className="d-inline-block align-top" alt='Nez Perce Tribe Logos'></img>
                </Navbar.Brand>
                <Nav className={'me-auto'} >
                    <Link to='/' className={'nav-link'} >Home</Link>
                    <Link to='/departments' className={'nav-link'} >Departments</Link>
                    <Link to='/projects' className={'nav-link'} >Projects</Link>
                    <Link to='/facilities' className={'nav-link'} >Facilities</Link>
                    <Link to='/news' className={'nav-link'} >News</Link>
                    <Link to='/documents' className={'nav-link'} >Documents</Link>
                </Nav>

                {/* Should show "Sign In" until we do, then different menu. */}
                <Nav className={'ml-auto'}> 
                    <Link to='/login' className={'nav-link'} >Sign In</Link>
                    <NavDropdown title="UserName" >
                        <Link to='/profile' className={'dropdown-item'}>User Profile</Link>
                        <Link to='/' className={'dropdown-item'}>Sign Out</Link>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.ItemText><strong>View Content</strong></NavDropdown.ItemText>
                        <Link to='/projects/list' className={'dropdown-item'}>Projects</Link>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}