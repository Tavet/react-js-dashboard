import React from 'react';
import DashboardScreen from "../dashboard/dashboard";
import HomeScreen from "../home/home";
import { Route, Switch } from 'react-router-dom';

const SwitchScreen = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/profile' component={DashboardScreen} />
    </Switch>
)

export default SwitchScreen;
