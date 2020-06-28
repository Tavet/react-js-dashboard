import React from 'react';
import LanguageComponent from '../../../../components/language/language';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavbarDashboardComponent = () => {
    const [t] = useTranslation();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className="logo">Ubeslang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>{t('navbar.menu.home')}</Nav.Link>
                        <Nav.Link href='/profile'>{t('navbar.menu.profile')}</Nav.Link>
                    </Nav>
                    <LanguageComponent />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarDashboardComponent;