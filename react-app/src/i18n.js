import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import locales from './locales'

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'pt_BR',
    debug: false,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: locales.en
        },
        de: {
            translation: locales.de
        },
        pt_BR: {
            translation: locales.pt_BR
        }
    }
})

export default i18n
