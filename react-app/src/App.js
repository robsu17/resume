import React from "react"
import { Trans, useTranslation } from 'react-i18next'
import './App.css';
import Resume from './pages/resume';
// import Testes from './pages/testes';

export default function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="App">
      <button onClick={ () => changeLanguage("en") }>EN</button>
      <button onClick={ () => changeLanguage("de") }>DE</button>
      <button onClick={ () => changeLanguage("pt_BR") }>PT</button>
      <hr />
      <div>{ t("resume.description.part1") }</div>
      <Resume/>
    </div>
  );
}
