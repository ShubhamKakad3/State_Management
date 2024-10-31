// ProductList.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function ProductList() {
    const { addItem } = useContext(CartContext);

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
    ];

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button onClick={() => addItem(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;

