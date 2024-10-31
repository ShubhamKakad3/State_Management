import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <nav>
            {isAuthenticated ? (
                <>
                    <p>Welcome, User!</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    );
}

export default Navbar;