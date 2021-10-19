
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart}) => {
    return (
        <div className="container-fluid">
      {cart.length > 0 ? (
        cart.map((f) => (
          <div className="mx-5 my-1 col col-sm-6  col-md-4 col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Nombre : {f.title.toUpperCase()}</h5>
              </div>
              <div className="card-body">
                <Link to={`/pokemon/${f.name}`} className="btn mx-2 btn-info ">+ Info</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>Aún no has agregado Items al Carro de compras</h2>
      )}
    </div>
    )
}
export default Cart;