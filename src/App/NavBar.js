import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NPTlogos from '../images/NPTlogos2.png';

// https://react-bootstrap.github.io/components/navbar/
// https://react-bootstrap.github.io/components/dropdowns/

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
                        <NavLink to='/' className={'nav-link'} >Home</NavLink>
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
                        <NavDropdown className='ml-auto' title="UserName" id="nav-dropdown" menuVariant='dark'>
                            <NavDropdown.Item href='/profile'>User Profile</NavDropdown.Item>
                            <NavDropdown.Item href='/'>Sign Out</NavDropdown.Item>
                            <NavDropdown.Divider color='#dee2e6'></NavDropdown.Divider>
                            <NavDropdown.ItemText><strong>View Content</strong></NavDropdown.ItemText>
                            <NavDropdown.Item href='/employee/list/' >Employees</NavDropdown.Item>
                            <NavDropdown.Item href='/project/list/'>Projects</NavDropdown.Item>
                            <NavDropdown.Item href='/division/list/'>Divisions</NavDropdown.Item>
                            <NavDropdown.Item href='/department/list/'>Departments</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}