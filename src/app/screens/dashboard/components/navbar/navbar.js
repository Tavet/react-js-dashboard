import React from 'react';
import LanguageComponent from '../../../../components/language/language';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    const [t] = useTranslation();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className="logo">Ubeslang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='/'>{t('navbar.menu.home')}</Link>
                        <Link to='/profile'>{t('navbar.menu.profile')}</Link>
                    </Nav>
                    <LanguageComponent />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;