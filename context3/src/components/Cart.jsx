// Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
    const { cartItems, removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;