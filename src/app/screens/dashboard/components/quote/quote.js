import React from 'react';
import './quote.sass'
import { Image } from 'react-bootstrap';
import JohnDRockefeller from './../../../../../assets/images/quotes/antoine_de_saint.png'
const QuoteDashboardComponent = () => {

    return (<div className="motivational-q">
        <p className="quote">
            Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away
        </p>
        <Image src={JohnDRockefeller}></Image>
    </div>
    )
}

export default QuoteDashboardComponent;