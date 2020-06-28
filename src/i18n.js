import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ["es", "de", "en"];

i18n
    .use(LanguageDetector) // passes i18n down to react-i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        whiteList: availableLanguages,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;