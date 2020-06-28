import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import RegisterForm from './form/registerForm';
import './register.sass';

const RegisterScreen = () => {

    const [userData, setUserData] = useState({});

    const retrieveUserData = (data) => {
        setUserData(data);
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
        <section className="register">
            <section className="content">
                <RegisterForm onUserData={retrieveUserData} />
            </section>
        </section>
    );
}

export default RegisterScreen;
