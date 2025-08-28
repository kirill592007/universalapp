import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import "../regulations.css"
import Languages from "../../../components/Languages/Languages";
import {useTranslation} from "react-i18next";
import appData from "../../../AppData";
import SupportContacts from "../../../components/supportContacts/SupportContacts";

const PrivacyPolicyPage = ({setLanguage}) => {
    const params = useParams()
    const {t} = useTranslation()
    const location = useLocation()

    const app = appData.find(item => item.title === params.appName)
    const policy = t(app.policies.privacyKey, {returnObjects: true})

    return (
        <div className="regulations">
            <div className="container">
                <div className="regulations__content">
                    <div className="regulations__top">
                        <h2 className="title text__shadow regulations__title">{t('privacyPolicy')}</h2>
                        {
                            location.pathname === "/InvoiceProMaker/privacyPolicy" ? "" : <Languages setLanguage={setLanguage}/>
                        }
                    </div>
                    {
                        policy.sections.map((section, idx) => {
                            if (section.type === "paragraph") {
                                return (
                                    <div key={idx}>
                                        {section.title && <h2 className="title">{section.title}</h2>}
                                        <p className="subtitle">{section.text}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={idx}>
                                        {section.title && <h2 className="title">{section.title}</h2>}
                                        <ul className="regulations__list">
                                            <p className="subtitle">{section.text}</p>
                                            {
                                                section.items.map((item, index) => (
                                                    <li key={index} className="subtitle">{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        })
                    }
                    <SupportContacts mail={app.mail} facebookName={app.facebookName} facebookLink={app.facebookLink}/>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;