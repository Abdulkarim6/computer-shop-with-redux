import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <section>
            <Navber></Navber>
            <Outlet></Outlet>
        </section>
    );
};

export default MainLayout;