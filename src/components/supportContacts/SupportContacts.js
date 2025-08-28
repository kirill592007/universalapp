import React from 'react';
import './SupportContacts.css'
import gmail from '../../assets/gmail.png'
import facebook from '../../assets/facebook.png'

const SupportContacts = ({mail, facebookName, facebookLink}) => {
    return (
        <div className="supportContacts">
                <div className="supportContacts__content">
                    <div className="supportContacts__box">
                        <p className="subtitle">Gmail</p>
                        <a href={`mailto:${mail}`}><img src={gmail} alt=""/></a>
                        <a href={`mailto:${mail}`} className="subtitle mail">{mail}</a>
                    </div>
                    {
                        facebookName && <div className="supportContacts__box">
                                            <p className="subtitle">Facebook</p>
                                            <a href={facebookLink}><img src={facebook} alt=""/></a>
                                            <a href={facebookLink} className="subtitle mail">{facebookName}</a>
                                        </div>
                    }
                </div>
        </div>
    );
};

export default SupportContacts;