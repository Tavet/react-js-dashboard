import React from 'react';
import './header.sass';
import NavbarHomeComponent from './../navbar/navbar';
import { Image, Button } from 'react-bootstrap';
import StudentVector from './../../../../../assets/images/vectors/student.svg';
import { Link } from 'react-router-dom';

const HeaderHomeComponent = () => {

    return (
        <header className="home-header">
            <NavbarHomeComponent />
            <main className="home-header-main">
                <div className="info-box">
                    <div className="info-box-top">
                        <Image src={StudentVector} bsPrefix className="vector-home"></Image>
                        <div className="info-box-content">
                            <h1>La manera más eficiente de adquirir vocabulario</h1>
                            <p>Aprende con uno de los métodos más óptimos y famosos utilizados por políglotas a nivel mundial.
                    </p>
                        </div>
                    </div>
                    <div className="info-box-bottom">
                        <Button className="home-start-now"><Link to="/dashboard">Empezar ahora gratis</Link></Button>
                        <p className="highlight">
                            Le damos importancia al <span>verdadero</span> significado de la palabra <span>Gratis</span>
                        </p>
                    </div>
                </div>
            </main>
        </header>
    );
};

export default HeaderHomeComponent;