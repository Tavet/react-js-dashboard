import React from 'react';
import './header.sass';
import NavbarHomeComponent from './../navbar/navbar';
import { Image, Button } from 'react-bootstrap';
import StudentVector from './../../../../../assets/images/vectors/student.svg';
const HeaderHomeComponent = () => {

    return (
        <header className="home-header">
            <NavbarHomeComponent />
            <main className="home-header-main">
                <div className="info-box">
                    <div className="info-box-top">
                        <Image src={StudentVector} bsPrefix className="vector-home"></Image>
                        <div class="info-box-content">
                            <h1>La manera más eficiente de adquirir vocabulario</h1>
                            <p>Aprende con los métodos más óptimos y famosos utilizados por políglotas a nivel mundial.
                            La adquisición de conocimiento en las personas varia de acuerdo a su personalidad intelectual; preparamos todo lo necesario para que tu aprendizaje sea impecable.
                    </p>
                        </div>
                    </div>
                    <div className="info-box-bottom">
                        <Button className="home-start-now">Empezar ahora gratis</Button>
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