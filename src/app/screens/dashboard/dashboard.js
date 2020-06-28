import React from 'react';
import './dashboard.sass';
import NavbarDashboardComponent from './components/navbar/navbar';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

const DashboardScreen = ({ history }) => {
    Auth.currentSession()
        .then(data => console.log(data))
        .catch(_ => history.push('/dashboard/login'));

    return (
        <section className="dashboard">
            <NavbarDashboardComponent />
            yeah dashboard
        </section>
    );
}

DashboardScreen.propTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

export default DashboardScreen;
