import React from 'react';
import { FaRocket, FaChild, FaSwatchbook, FaSnowman } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoUbeslang from '../../../../../assets/images/ubeslang.png'
import './navbar.sass';
import LanguageComponent from '../../../../components/language/language';

const NavbarDashboardComponent = () => {
    const [t] = useTranslation();

    const Menu = () => {
        return (
            <ul className="dashboard-navbar-list">
                <Link to="/"><li className="logo dashboard-start"><Image src={LogoUbeslang}></Image></li></Link>
                <div className="dashboard-navbar-center">
                    <Link to="/dashboard"><li className="dashboard-navbar-item active"><FaRocket /><p>{t('dashboard.navbar.authenticated.home')}</p></li></Link>
                    <Link to="/dashboard/progress"><li className="dashboard-navbar-item"><FaChild /><p>{t('dashboard.navbar.authenticated.progress')}</p></li></Link>
                    <Link to="#"><li className="dashboard-navbar-item"><FaSnowman /><p>{t('dashboard.navbar.authenticated.assistant')}</p></li></Link>
                    <Link to="/dashboard/settings"><li className="dashboard-navbar-item"><FaSwatchbook /><p>{t('dashboard.navbar.authenticated.settings')}</p></li></Link>
                </div>
                <li className="dashboard-end"><LanguageComponent /></li>
            </ul >
        );
    }

    return (
        <nav className="dashboard-navbar">
            <Menu />
        </nav>
    );
}

export default NavbarDashboardComponent;