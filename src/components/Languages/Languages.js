import React from 'react';
import Link from "../link/Link";
import './Languages.css'
const Languages = ({setLanguage}) => {
    return (
        <div className="languages">
            <Link to={`?lang=en`} text="English" onClick={() => setLanguage('en')}/>
            <Link to={`?lang=ru`} text="Русский" onClick={() => setLanguage('ru')}/>
            <Link to={`?lang=de`} text="Deutsch" onClick={() => setLanguage('de')}/>
            <Link to={`?lang=es`} text="Español" onClick={() => setLanguage('es')}/>
            <Link to={`?lang=es_mx`} text="Español(Mexicano)" onClick={() => setLanguage('es_mx')}/>
            <Link to={`?lang=fr`} text="Français" onClick={() => setLanguage('fr')}/>
            <Link to={`?lang=hi`} text="हिन्दी" onClick={() => setLanguage('hi')}/>
            <Link to={`?lang=it`} text="Italiano" onClick={() => setLanguage('it')}/>
            <Link to={`?lang=ja`} text="日本語" onClick={() => setLanguage('ja')}/>
            <Link to={`?lang=kr`} text="한국어" onClick={() => setLanguage('kr')}/>
            <Link to={`?lang=pt`} text="Português" onClick={() => setLanguage('pt')}/>
        </div>
    );
};

export default Languages;