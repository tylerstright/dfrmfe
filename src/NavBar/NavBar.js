import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NPTlogos from '../images/NPTlogos2.png';

// https://react-bootstrap.github.io/components/navbar/

export default function NavBar(props) {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className='sticky-top' style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
            <Navbar.Brand >
                <img src={NPTlogos} width='100%' height='50px' className="d-inline-block align-top" alt='Nez Perce Tribe Logos'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/' className={'nav-link'} >Home</Link>
                    <Link to='/status/' className={'nav-link'} >Snake Basin Fish Status</Link>
                    <Link to='/news/' className={'nav-link'} >News</Link>
                    <Link to='/docs/' className={'nav-link'} >Documents</Link>
                    <NavDropdown title="Links" id="basic-nav-dropdown">
                        <Link to='https://www.cbr.washington.edu/dart' target='_blank' className={'dropdown-item'}>DART</Link>
                        <Link to='https://npt-cdms.nezperce.org/login.html#!/login' target='_blank' className={'dropdown-item'}>CDMS</Link>
                        <Link to='https://nptfisheries.shinyapps.io/kus-data/' target='_blank' className={'dropdown-item'}>Kus Data</Link>
                        <Link to='https://nptfisheries.shinyapps.io/PITtrackR/' target='_blank' className={'dropdown-item'}>PitTrackR</Link>
                    </NavDropdown>
                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                        <Link to='/project/' className={'dropdown-item'}>Project Details</Link>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to='/login' className={'nav-link'} >Sign In</Link>
                    <NavDropdown className='ml-auto' title="UserName" id="basic-nav-dropdown">
                        <Link to='/profile' className={'dropdown-item'}>User Profile</Link>
                        <Link to='/' className={'dropdown-item'}>Sign Out</Link>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.ItemText><strong>View Content</strong></NavDropdown.ItemText>
                        <Link to='/employee/list/' className={'dropdown-item'}>Employees</Link>
                        <Link to='/project/list/' className={'dropdown-item'}>Projects</Link>
                        <Link to='/division/list/' className={'dropdown-item'}>Divisions</Link>
                        <Link to='/department/list/' className={'dropdown-item'}>Departments</Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}