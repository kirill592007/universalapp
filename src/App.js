import React, {useState, useEffect} from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import i18n from "./i18n"
import HomePage from "./pages/HomePage/HomePage";
import AppPage from "./pages/appPage/appPage";
import PrivacyPolicyPage from "./pages/regulations/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/regulations/TermsOfUsePage/TermsOfUsePage";
import {Route, Routes, useSearchParams} from "react-router";
import NotFound from "./pages/NotFound/NotFound";
import Support from "./components/Support/Support";

const App = () => {
    const [language, setLanguage] = useState('')
    const [searchParams] = useSearchParams()

    useEffect(() => {
        i18n.changeLanguage(searchParams.get('lang') || 'en')
    }, [language, i18n, searchParams])
  return (
      <div className="layout">
        <Header/>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:appName" element={<AppPage/>}/>
            <Route path="/:appName/support" element={<Support/>}/>
            <Route path="/:appName/privacyPolicy" element={<PrivacyPolicyPage setLanguage={setLanguage}/>}/>
            <Route path="/:appName/termsOfUse" element={<TermsOfUsePage setLanguage={setLanguage}/>}/>
        </Routes>
        <Footer/>
      </div>
  );
};

export default App;
