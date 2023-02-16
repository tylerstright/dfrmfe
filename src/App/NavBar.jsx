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
                        <NavDropdown title="Links" id="nav-dropdown" menuVariant='dark'>
                            <NavDropdown.Item href='https://www.cbr.washington.edu/dart' target='_blank' >DART</NavDropdown.Item>
                            <NavDropdown.Item href='https://npt-cdms.nezperce.org/login.html#!/login' target='_blank' >CDMS</NavDropdown.Item>
                            <NavDropdown.Item href='https://nptfisheries.shinyapps.io/kus-data/' target='_blank' >Kus Data</NavDropdown.Item>
                            <NavDropdown.Item href='https://nptfisheries.shinyapps.io/PITtrackR/' target='_blank' >PitTrackR</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="About Us" id="nav-dropdown" menuVariant='dark'>
                            {/* These could be sized down similar to the UserName dropdown, but the highlight function doesn't carry. */}
                            <NavDropdown.Item>
                                <NavLink to='/division/' className={'nav-link py-0'} >Department Structure</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to='/project/' className={'nav-link py-0'} >Project Details</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to='/facility/' className={'nav-link py-0'} >Facility Locations</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink to='/accounts/login/' className={'nav-link'} >Sign In</NavLink>
                        <NavDropdown className='ml-auto' title="UserName" id="nav-dropdown" menuVariant='dark'>
                            <NavDropdown.Item href='/profile/'>User Profile</NavDropdown.Item>
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