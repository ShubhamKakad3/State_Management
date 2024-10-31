import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function LanguageSwitcher() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('es')}>Spanish</button>
      <button onClick={() => switchLanguage('fr')}>French</button>
    </div>
  );
}

export default LanguageSwitcher;