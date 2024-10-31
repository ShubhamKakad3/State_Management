import React from 'react';
import { LanguageContextProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageContextProvider>
      <LanguageSwitcher />
      {/* other components */}
    </LanguageContextProvider>
  );
}

export default App;