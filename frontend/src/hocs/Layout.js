import React from 'react';
import './Layout.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const layout = (props) => (
    <div className='main-layout'>
        <Navbar />
        {props.children}
        <Footer />
    </div>
);

export default layout;