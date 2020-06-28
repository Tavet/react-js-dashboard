import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeScreen from "../home/home";

/* Dashboard */
import DashboardScreen from "../dashboard/dashboard";
import LoginScreen from '../dashboard/screens/login/login';
import RegisterScreen from '../dashboard/screens/register/register';

const SwitchScreen = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/dashboard' component={DashboardScreen} />
        <Route path='/dashboard/login' component={LoginScreen} />
        <Route path='/dashboard/register' component={RegisterScreen} />
    </Switch>
)

export default SwitchScreen;
