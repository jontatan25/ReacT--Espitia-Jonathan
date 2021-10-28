import {React,} from "react";
import logo from "./cart.png";
import "./cartWidget.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";


const CartWidget = () => {

    const { toogle,setToogle } = useCartContext(); 
  return (
    <div className="headerContainer" style={{height:"10vh"}}>
      <Link className="btn" to="/">
        Tienda de Retoque Fotográfico
      </Link>

      {/* <button
        type="button"
        class="btn btn-info"
        onClick={() => setToogle(!toogle)}
      >
        Toogle
      </button> */}
      {toogle && <Link className="btn" to="/cart">
        <img className="cart" src={logo} alt="LOGO" width="40 vw" />
      </Link>}
    </div>
  );
};

export default CartWidget;
