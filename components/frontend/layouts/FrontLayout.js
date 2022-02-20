import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function FrontLayout(props) {
    return (
        <>
            <Header />
            <Footer />
            {props.children}
        </>
    );
}
