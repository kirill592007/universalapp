import React from 'react';
import {useParams} from "react-router-dom"
import Button from "../../../components/button/Button";
import './Application.css'
import appData from "../../../AppData";
import Link from "../../../../src/components/link/Link";

const Application = () => {
    const params = useParams()

    const app = appData.find(item => item.title === params.appName);
    return (
        <div className="application">
            <div className="container">
                <div className="application__content">
                    <div className="application__top">
                        <img className="icon" alt="logo" src={app.img}/>
                        <h2 className="title">{app.name}</h2>
                    </div>
                    <p className="subtitle">{app.descriptions.fulldesc1}</p>
                    {
                        app.descriptions.listTitle &&   <ul className="application__list">
                                                            <p className="subtitle">{app.descriptions.listTitle}</p>
                                                            <li className="subtitle">{app.descriptions.listDesc1}</li>
                                                            <li className="subtitle">{app.descriptions.listDesc2}</li>
                                                            <li className="subtitle">{app.descriptions.listDesc3}</li>
                                                            <li className="subtitle">{app.descriptions.listDesc4}</li>
                                                            <li className="subtitle">{app.descriptions.listDesc5}</li>
                                                        </ul>
                    }
                    <a href={app.link}><Button text="Download on the App Store"/></a>
                    <div className="application__box">
                        <Link to={`/${params.appName}/privacyPolicy?lang=en`} text="Privacy Policy"/>
                        <Link to={`/${params.appName}/termsOfUse?lang=en`} text="Terms Of Use"/>
                        <Link to={`/${params.appName}/support`} text="Support"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;