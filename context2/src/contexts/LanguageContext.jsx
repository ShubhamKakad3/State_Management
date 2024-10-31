import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const switchLanguage = (lang) => setLanguage(lang);

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};