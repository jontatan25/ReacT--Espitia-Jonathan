import React from "react";

const ItemCount = ({ stock, initial, count, increase, decrease, onAdd }) => {
  return (
    <div className="card-count">
      <h5>Cantidad:</h5>
      <div className="d-flex p-2">
        <button onClick={decrease} disabled={count === initial}>
          -
        </button>
        <div>{count}</div>
        <button onClick={increase} disabled={count === stock}>
          +
        </button>
      </div>
      <button className="_btn product-add" onClick={onAdd}>
        Agregar al Carrito
      </button>
      
    </div>
  );
};
export default ItemCount;
