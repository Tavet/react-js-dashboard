import React from 'react';
import './home.sass';
import NavbarHomeComponent from './components/navbar/navbar';

const HomeScreen = () => {
    return (
        <section className="home">
            <NavbarHomeComponent />
        </section>
    )
}

export default HomeScreen;