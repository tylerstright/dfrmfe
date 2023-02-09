import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NPTlogos from '../images/NPTlogos2.png';


import Container from 'react-bootstrap/Container';

// https://react-bootstrap.github.io/components/navbar/

export default function NavBar(props) {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className='sticky-top' >
            <Container>
            <Navbar.Brand >
                <img src={NPTlogos} width='100%' height='50px' className="d-inline-block align-top" alt='Nez Perce Tribe Logos'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/'  className={'nav-link'} >Home</NavLink>
                    <NavLink to='/status/' className={'nav-link'} >Snake Basin Fish Status</NavLink>
                    <NavLink to='/news/' className={'nav-link'} >News</NavLink>
                    <NavLink to='/docs/' className={'nav-link'} >Documents</NavLink>
                    <NavDropdown title="Links" id="basic-nav-dropdown">
                        <NavLink to='https://www.cbr.washington.edu/dart' target='_blank' className={'dropdown-item'}>DART</NavLink>
                        <NavLink to='https://npt-cdms.nezperce.org/login.html#!/login' target='_blank' className={'dropdown-item'}>CDMS</NavLink>
                        <NavLink to='https://nptfisheries.shinyapps.io/kus-data/' target='_blank' className={'dropdown-item'}>Kus Data</NavLink>
                        <NavLink to='https://nptfisheries.shinyapps.io/PITtrackR/' target='_blank' className={'dropdown-item'}>PitTrackR</NavLink>
                    </NavDropdown>
                    <NavDropdown title="About Us" id="basic-nav-dropdown">
                        <NavLink to='/project/' className={'dropdown-item'}>Project Details</NavLink>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink to='/login' className={'nav-link'} >Sign In</NavLink>
                    <NavDropdown className='ml-auto' title="UserName" id="basic-nav-dropdown">
                        <NavLink to='/profile' className={'dropdown-item'}>User Profile</NavLink>
                        <NavLink to='/' className={'dropdown-item'}>Sign Out</NavLink>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <NavDropdown.ItemText><strong>View Content</strong></NavDropdown.ItemText>
                        <NavLink to='/employee/list/' className={'dropdown-item'}>Employees</NavLink>
                        <NavLink to='/project/list/' className={'dropdown-item'}>Projects</NavLink>
                        <NavLink to='/division/list/' className={'dropdown-item'}>Divisions</NavLink>
                        <NavLink to='/department/list/' className={'dropdown-item'}>Departments</NavLink>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}