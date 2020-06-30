import React, { useState, useEffect } from 'react';
import './login.sass';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from './components/loginForm';
import NavbarAuthComponent from '../components/navbar/navbar';

const LoginScreen = ({ history }) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        Auth.currentSession()
            .then(_ => history.push('/dashboard'))
            .catch(_ => { })
    }, [history]);

    const toggleShowError = (value) => setShowError(value);

    const [t] = useTranslation();

    const retrieveUserData = (data) => {
        signIn(data);
    }

    const signIn = async (data) => {
        try {
            const user = await Auth.signIn(data.email, data.password);
            console.log({ user });
            history.push('/dashboard')
            // redirect
        } catch (error) {
            if (error.code === "UserNotConfirmedException") {
                setErrorMessage(t(`dashboard.screens.login.errors.UserNotConfirmedException`))
            } else if (error.code === "NotAuthorizedException") {
                setErrorMessage(t(`dashboard.screens.login.errors.NotAuthorizedException`))
            } else if (error.code === "UserNotFoundException") {
                setErrorMessage(t(`dashboard.screens.login.errors.UserNotFoundException`))
            }
            else {
                setErrorMessage(t(`dashboard.screens.login.errors.default`))
            }
            toggleShowError(true);
        }
    }

    return (
        <>
            <NavbarAuthComponent />
            <section className="login">
                {showError &&
                    <Alert variant="danger" onClose={() => toggleShowError(false)} dismissible>
                        <Alert.Heading>{t(`dashboard.screens.login.errors.title`)}</Alert.Heading>
                        <p>{errorMessage}</p>
                    </Alert>
                }
                <section className="content">
                    <h1>{t(`dashboard.screens.login.title`)}</h1>
                    <LoginForm
                        onUserData={retrieveUserData} />
                </section>
            </section>
        </>
    );
}

LoginScreen.propTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

export default LoginScreen;
