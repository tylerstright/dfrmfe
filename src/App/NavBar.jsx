import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap';
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
                        {props.fullName === null ?
                            <NavLink to='/accounts/login/' className={'nav-link'} >Sign In</NavLink> :
                            <NavDropdown className='ml-auto' title={props.fullName} id="nav-dropdown" menuVariant='dark'>
                                <NavDropdown.Item>
                                    <NavLink className='nav-link py-0' to='/profile/' >User Profile</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className='nav-link py-0' to='/accounts/signout/' >Sign Out</NavLink>
                                </NavDropdown.Item>
                                {props.isAdmin ?
                                    <>
                                        <NavDropdown.Divider color='#dee2e6'></NavDropdown.Divider>
                                        <NavDropdown.ItemText><strong>View Content</strong></NavDropdown.ItemText>
                                        <NavDropdown.Item>
                                            <NavLink className='nav-link py-0' to='/employee/list/' >Employees</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink className='nav-link py-0' to='/project/list/' >Projects</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink className='nav-link py-0' to='/division/list/' >Divisions</NavLink>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <NavLink className='nav-link py-0' to='/department/list/' >Departments</NavLink>
                                        </NavDropdown.Item>
                                    </> : <></>}
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}