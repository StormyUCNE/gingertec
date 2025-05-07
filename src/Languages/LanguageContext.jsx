import React, { createContext, useState, useContext } from "react";
import Language from "/src/Languages/Language.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleToSpanish = () => setLanguage("es");
  const toggleToEnglish = () => setLanguage("en");

  const value = {
    language,
    setLanguage,
    toggleToSpanish,
    toggleToEnglish,
    texts: Language[language] || Language.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);