import React, { useState } from 'react';
// import { AuthContext } from './contexts/AuthContext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const login = () => setIsAuthenticated(true);
  // const logout = () => setIsAuthenticated(false);
  return (
    <AuthContextProvider>
      <Navbar />
    </AuthContextProvider>
  );
}

export default App;