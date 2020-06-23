import React, { Suspense } from 'react';
import HomeScreen from './app/screens/home';
import './App.sass'

function App() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <HomeScreen />
        </Suspense>
    );
}

export default App;