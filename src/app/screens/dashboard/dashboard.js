import React, { useEffect } from 'react';
import './dashboard.sass';
import NavbarDashboardComponent from './components/navbar/navbar';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardScreen = ({ history }) => {

    useEffect(() => {
        Auth.currentSession()
            .then(_ => { })
            .catch(_ => history.push('/dashboard/login'));
    }, [history])

    return (
        <section className="dashboard">
            <NavbarDashboardComponent />
            <Container className="dashboard-container">
                <Row>
                    <Col>
                        <h1>Time to learn!</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

DashboardScreen.propTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

export default DashboardScreen;
