import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NPTlogos from './NPTlogos2.png';

export default function NavBar() {
    return (
        <Navbar bg='dark' variant='dark' sticky='top' >
            <Container>
                <Navbar.Brand >
                    <img src={NPTlogos} width='100%' height='50px' className="d-inline-block align-top" alt='Nez Perce Tribe Logos'></img>
                </Navbar.Brand>
                <Nav className={'me-auto'} >
                    <Link to='/' className={'nav-link'} >Home</Link>
                    <Link to='/departments' className={'nav-link'} >Departments</Link>
                    <Link to='/facilities' className={'nav-link'} >Facilities</Link>
                    <Link to='/news' className={'nav-link'} >News</Link>
                    <Link to='/documents' className={'nav-link'} >Documents</Link>
                    <NavDropdown title="UserName" >
                        {/* This isn't complete. Check Django. */}
                        <Link to='/userprofile' className={'dropdown-item'}>User Profile</Link>
                        <Link to='/' className={'dropdown-item'}>Sign Out</Link>
                        <Link to='/facilities' className={'dropdown-item'}>Facilities</Link>
                    </NavDropdown>
                </Nav>
                {/* <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/departments'>Departments</Nav.Link>
                    <Nav.Link href='/facilities'>Facilities</Nav.Link>
                    <Nav.Link href='/news'>News</Nav.Link>
                    <Nav.Link href='/documents'>Documents</Nav.Link>
                    </Nav>                 */}
            </Container>
        </Navbar>
    )
}