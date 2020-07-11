import React, { useEffect } from 'react';
import './dashboard.sass';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarDashboardComponent from './components/navbar/navbar';
import QuoteDashboardComponent from './components/quote/quote';
import LangCardDashboardComponent from './components/lang-card/lang-card';
import Germany from './../../../assets/images/flags/germany.png'
import Spanish from './../../../assets/images/flags/spain.png'
import { FaPlusSquare } from 'react-icons/fa';

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
                    <Col xs={9}>
                        <div className="dashboard-header">
                            <h1>Time to learn!</h1>
                            <Button>New list <FaPlusSquare /></Button>
                        </div>
                        <LangCardDashboardComponent
                            flag={Germany}
                            name="Deutsche"
                            standardName="Alemán"
                            notifications={3}
                        />
                        <LangCardDashboardComponent
                            flag={Spanish}
                            name="Español"
                            standardName="Spanisch"
                            notifications={1}
                        />
                    </Col>
                    <Col xs={3} className="motivational-quote">
                        <QuoteDashboardComponent />
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
