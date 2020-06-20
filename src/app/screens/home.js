import React from 'react';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
    const [t, i18n] = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (<div>
        <button onClick={() => changeLanguage('de')}>de</button>
        <button onClick={() => changeLanguage('en')}>en</button>
        <h1>{t("home.slogan")}</h1>
    </div>)
}

export default HomeScreen;