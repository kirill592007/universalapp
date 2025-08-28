import React from 'react';
import './NotFound.css'
import Link from "../../components/link/Link";
const NotFound = () => {
    return (
        <div className="notFound">
            <h2 className="title text__shadow">You have followed the wrong URL</h2>
            <Link to="/" text="To home"/>
        </div>
    );
};

export default NotFound;