import React from 'react';
import './dashboard.sass';
import NavbarComponent from '../home/components/navbar/navbar';

const DashboardScreen = () => {

    return (
        <section className="dashboard">
            <NavbarComponent />
            Hola en dashboard
        </section>
    );
}

export default DashboardScreen;
