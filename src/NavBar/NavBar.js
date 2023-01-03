import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NPTlogos from './NPTlogos2.png';

export default function NavBar() {
    return (
        <Navbar bg='dark' variant='dark' sticky='top' >
            <Container>
                <Navbar.Brand >
                    <img src={NPTlogos} width='auto' height='80px' className="d-inline-block align-top" alt='Nez Perce Tribe Logos'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Link to='/' style={{color:'white'}}>Home</Link>
                <Link to='/departments' style={{color:'white'}}>Departments</Link>
                <Link to='/facilities' style={{color:'white'}}>Facilities</Link>
                <Link to='/news' style={{color:'white'}}>News</Link>
                <Link to='/documents' style={{color:'white'}}>Documents</Link>
            </Container>
        </Navbar>
    )
}