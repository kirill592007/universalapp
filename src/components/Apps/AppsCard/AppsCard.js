import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../button/Button";
import "./AppsCard.css"

const AppsCard = ({appName, desc, img, title}) => {
    return (
        <div className="apps__card">
            <div className="apps__card_content">
                <div className="apps__card_top">
                    <img className="icon" src={img} alt="img"/>
                    <h3 className="title title__small">{appName}</h3>
                </div>
                <p className="apps__subtitle">{desc}</p>
            </div>
            <Link to={`/${title}`}><Button text="More details"/></Link>
        </div>
    );
};

export default AppsCard;
