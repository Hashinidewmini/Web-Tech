import React from 'react'
import Header from '../Header/Header'
import './Orders.css'
import { useState } from 'react'

export default function Orders() {
    const [products] = useState([
        { id: 1, name: 'Product A', price: 10 },
        { id: 2, name: 'Product B', price: 20 },
        { id: 3, name: 'Product C', price: 30 },
    ]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    const getTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };
    return (
        <>
            <Header />
            <div className='orders'>
                <center>
                    <h1>Products Catalog</h1>
                </center>
                <div>
                    <div className="products-container">
                        <h1>Products</h1>
                        <div className="products-grid">
                            {products.map((product) => (
                                <div key={product.id} className="product-card">
                                    <h2>{product.name}</h2>
                                    <p>Price: ${product.price.toFixed(2)}</p>
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            ))}
                        </div>

                        <h2>Cart</h2>
                        <ul>
                            {cart.map((product) => (
                                <li key={product.id}>
                                    {product.name} - ${product.price.toFixed(2)}
                                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>

                        <h3>Total: ${getTotal().toFixed(2)}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
