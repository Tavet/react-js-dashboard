import React from 'react';
import './footer.sass';
import { Container, Row, Col } from 'react-bootstrap';

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
                        <h1 className="logo">Ubeslang.</h1>
                        <p>&copy; 2020 - Developed by Breyner D. Rojas</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterHomeComponent;
