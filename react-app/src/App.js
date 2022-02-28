import React from "react"
import { useTranslation } from 'react-i18next'
import './App.css';
import Resume from './pages/resume';

export default function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="App">
      <div>{ t("resume.description.part1") }</div>
      <Resume/>
    </div>
  );
}
