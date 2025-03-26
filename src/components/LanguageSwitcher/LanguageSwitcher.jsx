import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState(() => {
    const lang = localStorage.getItem("language");
    return lang ? lang : "en";
  });
  const { i18n } = useTranslation();

  useEffect(() => {
    const checkLocale = localStorage.getItem("language");

    if (checkLocale) {
      i18n.changeLanguage(checkLocale);
    } else {
      localStorage.setItem("language", lang);
    }
  }, []);

  const changeLanguage = async (lng) => {
    await localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const handleLanguageChange = () => {
    const newLang = lang === "en" ? "fr" : "en";
    changeLanguage(newLang);
  };

  return (
    <label className="language-switcher">
      <input
        type="checkbox"
        defaultChecked={lang === "en"}
        onChange={handleLanguageChange}
      />
      <span className="slider round"></span>
      <span className="select-fr">FR</span>
      <span className="select-en">EN</span>
    </label>
  );
};

export default LanguageSwitcher;
