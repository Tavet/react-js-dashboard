import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {

    return (
        <div>
            Login screen
            <Link to='/dashboard/register'>Soy nuevo</Link>
        </div>
    );
}

export default LoginScreen;
