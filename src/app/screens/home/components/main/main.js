import React from 'react';
import './main.sass';
import OffersMainHomeScreen from './screens/offers/offers';

const MainHomeComponent = () => {
    window.scroll({ top: 2500, left: 0, behavior: 'smooth' });

    return (
        <main className="home-main">
            <section className="offers" id="tools">
                <OffersMainHomeScreen />
            </section>
        </main>
    );
}

export default MainHomeComponent;
