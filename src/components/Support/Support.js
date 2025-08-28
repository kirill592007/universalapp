import React from 'react';
import './Support.css'
import SupportContacts from "../supportContacts/SupportContacts";
import appData from "../../AppData";
import {useParams} from "react-router-dom";

const Support = () => {
    const params = useParams()
    const app = appData.find(item => item.title === params.appName)

    return (
        <div className="support">
            <div className="container">
                <div className="support__content">
                    <h2 className="title text__shadow">Support</h2>
                    <p className="subtitle">If you have any questions, suggestions, or need assistance, feel free to reach out to us via email. Our team will be delighted to respond to your inquiries, help solve any issues, or consider your valuable ideas. We are committed to making your experience as seamless as possible and would love to hear your feedback to improve for you. Don’t hesitate to write to us—we will get back to you promptly.</p>
                    <SupportContacts mail={app.mail} facebookName={app.facebookName} facebookLink={app.facebookLink}/>
                </div>
            </div>
        </div>
    );
};

export default Support;