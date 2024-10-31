import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => setCartItems([...cartItems, item]);
    const removeItem = (itemId) => setCartItems(cartItems.filter(item => item.id !== itemId));

    return (
        <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};