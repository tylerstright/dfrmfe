import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout(props) {

    return (
        <>
            <NavBar fullName={props.fullName} isAdmin={props.isAdmin} />
            <Outlet />
            <Footer />
        </>
    );
}
