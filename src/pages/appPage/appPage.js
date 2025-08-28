import React from 'react';
import Application from "./Application/Application";
import Apps from "../../components/Apps/Apps";
import './appPage.css'
const AppPage = () => {
    return (
        <div className="appPage">
            <Application/>
            <Apps/>
        </div>
    );
};

export default AppPage;