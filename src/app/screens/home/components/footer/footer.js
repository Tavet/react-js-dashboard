import React from 'react';
import './footer.sass';
import { Container, Row, Col, Image } from 'react-bootstrap';
import UbeslangLogo from '../../../../../assets/images/ubeslang-85.png'

const FooterHomeComponent = () => {
    return (
        <footer className="home-footer">
            <Container className="home-footer-container">
                <Row>
                    <Col>
                        <h4>Sobre Ubeslang</h4>
                        <p>Nace como un proyecto personal para automatizar la forma en que aprendía vocabulario para idiomas como el Inglés, Alemán e Italiano haciendo uso de métodos empleados por políglotas.</p>
                    </Col>
                    <Col>
                        <h4>Mapa del sitio</h4>
                        <ul>
                            <li>Inicio</li>
                            <li>
                                Tablero
                                <ul>
                                    <li>Mi progreso</li>
                                    <li>Perfil</li>
                                    <li>Tarjetas</li>
                                </ul>
                            </li>
                            <li>Actualizaciones</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={UbeslangLogo} width="52" height="auto" fluid />
                        <p>&copy; 2020 - Made by Breyner D. Rojas</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterHomeComponent;
