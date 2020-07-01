import React from 'react';
import './navbar.sass';
import LanguageComponent from '../../../../components/language/language';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarHomeComponent = () => {
    const [t] = useTranslation();
    return (
        <div>
            <Navbar expand="lg" className="home-navbar">
                <Navbar.Brand href="#home" className="logo">Ubeslang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>{t('navbar.menu.home')}</Nav.Link>
                        <Nav.Link href='/#tools'>{t('navbar.menu.tools')}</Nav.Link>
                        <Nav.Link href='/#who-we-are'>{t('navbar.menu.whoweare')}</Nav.Link>
                        <Nav.Link href='/changelog'>{t('navbar.menu.changelog')}</Nav.Link>
                        <Nav.Link href='/dashboard'>{t('navbar.menu.dashboard')}</Nav.Link>
                    </Nav>
                    <LanguageComponent />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarHomeComponent;