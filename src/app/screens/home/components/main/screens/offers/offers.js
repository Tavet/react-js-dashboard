import React, { useState } from 'react';
import { Row, Container, Col, Carousel, Image } from 'react-bootstrap';
import SlideOne from './../../../../../../../assets/images/slides/slide-1.png'
import SlideTwo from './../../../../../../../assets/images/slides/slide-2.png'
import SlideThree from './../../../../../../../assets/images/slides/slide-3.png'
import './offers.sass';

const OffersMainHomeScreen = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="home-offers-container">
            <Row>
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={SlideOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>Menos trabajo manual.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={SlideTwo}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>Optimización del tiempo.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={SlideThree}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>Medición de rendimiento y aprendizaje.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <h1>What we offer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
        </Container>
    );
}


export default OffersMainHomeScreen;
