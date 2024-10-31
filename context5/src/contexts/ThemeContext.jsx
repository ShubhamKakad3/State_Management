import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(
    // what is use of this giving or not is the same 
    // {
    //     themeMode: "light",
    //     darktheme: () => { },
    //     lighttheme: () => { },
    // }
);

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light')
    const darktheme = () => setThemeMode("dark")
    const lighttheme = () => setThemeMode("light")

    useEffect(() => {                                                              // 11
        document.querySelector('html').classList.remove('light', 'dark')
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeContext.Provider value={{ themeMode, darktheme, lighttheme }} >
            {children}
        </ThemeContext.Provider>

    )

}
