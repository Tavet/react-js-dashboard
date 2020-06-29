import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import RegisterForm from './form/registerForm';
import './register.sass';
import countries from './../../../../util/countries.json';
import languages from './../../../../util/languages.json';
import NavbarAuthComponent from '../components/navbar/navbar';

const RegisterScreen = () => {

    const [userData, setUserData] = useState({});

    const retrieveUserData = (data) => {
        setUserData(data); 
        debugger;
        console.log("Retrieveng user data: ", data);
    }

    const signUp = async () => {
        try {
            const user = await Auth.signUp({
                "username": "test",
                "password": "asd",
                "attributes": {
                    "email": "test",
                    "phone_number": "123123",
                }
            });
            console.log({ user });
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <>
            <NavbarAuthComponent />
            <section className="register">
                <section className="content">
                    <RegisterForm
                        countryList={countries}
                        languageList={languages}
                        onUserData={retrieveUserData} />
                </section>
            </section>
        </>
    );
}

export default RegisterScreen;
