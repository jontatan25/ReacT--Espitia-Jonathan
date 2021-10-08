
import React from 'react'
import logo from './cart.png';
import './cartWidget.css';

const CartWidget = () => {
    return (
        <div className="headerContainer">
            <h1>Tienda de Retoque Fotográfico</h1>
            <img className="cart" src={logo} alt="LOGO" width= "40 vw" />
        </div>
    )
}

export default CartWidget
