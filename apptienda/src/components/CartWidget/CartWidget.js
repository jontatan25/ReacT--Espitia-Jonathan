
import React from 'react'
import logo from './cart.png';
import './cartWidget.css';
import {Link} from 'react-router-dom'

const CartWidget = () => {
    return (
        <div className="headerContainer">
            <Link className="btn" to ="/">Tienda de Retoque Fotográfico</Link>
            <Link className="btn" to ="/cart"><img className="cart" src={logo} alt="LOGO" width= "40 vw" /></Link>
            
        </div>
    )
}

export default CartWidget
