import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{width:'100%'}}>
            <Header/>
            <main className='main'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;