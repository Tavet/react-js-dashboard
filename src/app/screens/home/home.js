import React from 'react';
import './home.sass';
import FooterHomeComponent from './components/footer/footer';
import MainHomeComponent from './components/main/main';
import HeaderHomeComponent from './components/header/header';

const HomeScreen = () => {

    return (
        <section className="home">
            <HeaderHomeComponent />
            <MainHomeComponent />
            <FooterHomeComponent />
        </section>
    )
}

export default HomeScreen;