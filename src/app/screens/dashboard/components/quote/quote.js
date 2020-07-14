import React from 'react';
import './quote.sass'
import { Image } from 'react-bootstrap';
import JohnDRockefeller from './../../../../../assets/images/quotes/john_d_rockefeller.png'
const QuoteDashboardComponent = () => {

    return (<div className="motivational-q">
        <q>
            Go as far as you can see; when you get there, you'll be able to see farther.
        </q>
        <Image src={JohnDRockefeller}></Image>
    </div>
    )
}

export default QuoteDashboardComponent;