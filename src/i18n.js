import i18n from "i18next"
import {initReactI18next} from "react-i18next/initReactI18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import enResources from "./locales/en/translation.json"
import deResources from "./locales/de/translation.json"
import esResources from "./locales/es/translation.json"
import hiResources from "./locales/hi/translation.json"
import itResources from "./locales/it/translation.json"
import jaResources from "./locales/ja/translation.json"
import krResources from "./locales/kr/translation.json"
import ptResources from "./locales/pt/translation.json"
import ruResources from "./locales/ru/translation.json"
import frResources from "./locales/fr/translation.json"

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: enResources
        },
        ru: {
            translation: ruResources
        },
        de: {
            translation: deResources
        },
        es: {
            translation: esResources
        },
        hi: {
            translation: hiResources
        },
        it: {
            translation: itResources
        },
        ja: {
            translation: jaResources
        },
        kr: {
            translation: krResources
        },
        fr: {
            translation: frResources
        },
        pt: {
            translation: ptResources
        }
    }
})
export default i18n;