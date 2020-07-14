import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import RegisterForm from './components/registerForm';
import './register.sass';
import countries from './../../../../util/countries.json';
import languages from './../../../../util/languages.json';
import NavbarAuthComponent from '../components/navbar/navbar';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const RegisterScreen = ({ history }) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const toggleShowError = (value) => { setShowError(value); setShowSuccess(false); };
    const toggleShowSuccess = (value) => { setShowSuccess(value); setShowError(false); };

    const [t] = useTranslation();

    useEffect(() => {
        Auth.currentSession()
            .then(_ => history.push('/dashboard'))
            .catch(_ => { })
    }, [history]);

    const retrieveUserData = (data) => {
        signUp(data);
    }

    const signUp = async (data) => {
        try {
            const user = await Auth.signUp({
                "username": data.email,
                "password": data.password,
                "attributes": {
                    "email": data.email,
                    "name": data.name,
                    "custom:language": data.language.value,
                    "custom:location": data.location.value
                }
            });
            console.log({ user });
            toggleShowSuccess(true);
        } catch (error) {
            if (error.code === "UsernameExistsException") {
                setErrorMessage(t(`dashboard.screens.register.errors.UsernameExistsException`))
            } else {
                setErrorMessage(t(`dashboard.screens.register.errors.default`))
            }
            toggleShowError(true);
        }
    }

    return (
        <>
            <section className="register">
                <NavbarAuthComponent />
                {showError &&
                    <Alert variant="danger" onClose={() => toggleShowError(false)} dismissible>
                        <Alert.Heading>{t(`dashboard.screens.register.errors.title`)}</Alert.Heading>
                        <p>{errorMessage}</p>
                    </Alert>
                }
                {showSuccess &&
                    <Alert variant="success" onClose={() => toggleShowSuccess(false)} dismissible>
                        <Alert.Heading>{t(`dashboard.screens.register.success.title`)}</Alert.Heading>
                        <p>{t(`dashboard.screens.register.success.message`)}</p>
                    </Alert>
                }
                <section className="content">
                    <h1>{t(`dashboard.screens.register.title`)}</h1>
                    <RegisterForm
                        countryList={countries}
                        languageList={languages}
                        onUserData={retrieveUserData} />
                </section>
            </section>
        </>
    );
}

RegisterScreen.propTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

export default RegisterScreen;
