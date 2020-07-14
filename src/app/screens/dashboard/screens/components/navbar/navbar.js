import React from 'react';
import LanguageComponent from '../../../../../components/language/language';
import { useTranslation } from 'react-i18next';
import UbeslangLogo from './../../../../../../assets/images/ubeslang.png'
import { Image } from 'react-bootstrap';
import './navbar.sass';

const NavbarAuthComponent = () => {
    const [t] = useTranslation();
    return (
        <div className="navbar-dashboard-options">
            <Image src={UbeslangLogo} alt="Ubeslang" className="logo"/>
            <LanguageComponent />
        </div>
    );
}

export default NavbarAuthComponent;