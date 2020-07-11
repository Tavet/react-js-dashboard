import React from 'react';
import './lang-card.sass'
import PropTypes from 'prop-types';
import { BsFillAwardFill, BsFillCalendarFill, BsFillGearFill } from "react-icons/bs";


const LangCardDashboardComponent = ({ flag, name, standardName, notifications }) => {

    return (
        <div className="lang-card">
            <div className="notification">{notifications}</div>
            <div className="lang-body">
                <img src={flag} alt="Country flag"></img>
                <h1>{name} <small>/ {standardName}</small></h1>
            </div>
            <div className="lang-options">
                <BsFillAwardFill />
                <BsFillCalendarFill />
                <BsFillGearFill />
            </div>
        </div>
    )
}

LangCardDashboardComponent.propTypes = {
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    standardName: PropTypes.string.isRequired,
    notifications: PropTypes.number.isRequired,
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

export default LangCardDashboardComponent;