import React, { Suspense } from 'react';
import './App.sass'
import { BrowserRouter } from 'react-router-dom';
import SwitchScreen from './app/screens/switch/switch';

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <SwitchScreen />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;