import React from 'react';
import "./Apps.css"
import AppsCard from "./AppsCard/AppsCard";
import {useParams, useLocation} from "react-router-dom"
import appData from "../../AppData";

const Apps = () => {
    const params = useParams()
    const location = useLocation()

    const filterData = appData.filter(item => item.title !== params.appName)
    return (
        <div className="apps">
            <div className="container">
                <h2 className="title text__shadow" id="apps__title">{location.pathname === '/' ? "Our apps" : "Other apps"}</h2>
                <div className="apps__content">
                    {
                        filterData.length === 0 ? <p className="subtitle">There's nothing here yet.</p> :
                            filterData.map((item, idx) => (
                                <AppsCard key={idx} img={item.img} appName={item.name} desc={item.desc} title={item.title}/>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;