import React from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
import { useDispatch } from "react-redux";

const Cart = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.cart)

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

  return (
    <div className="cart section">
        <div className="cart-container container">
            <h3>Cart</h3>
            <div className="cart-wrapper">
                {
                    products.map(product => (
                        <div className='cart-card'>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={() => handleRemove(product.id)} className='pro-btn'>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Cart