import ItemCount from "../ItemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, price, img, description, id }) => {
  
  const stocks = 10;
  const initial = 0;
  const [stock, setStock] = useState(stocks);
  const [count, setCount] = useState(initial);
  const [add, setAdd] = useState(false);

  const increase = () => {
    if (count < stocks) {
      setCount(count + 1);
      setStock(stock - 1);
    }
  };

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
      setStock(stock + 1);
    }
  };

  const onAdd = () => {
    if (count <= stocks) {
      setAdd(true);
    }
  };

  return (
    <>
      <div>
        {title}
        {img}
        <p>{description}</p>
        <p>{price}</p>
        <p>Detalles del producto con id:{id}</p>
        {add ? <Link to= {'/cart'}><button className="btn-finalizar">Comprar Ahora</button></Link> :
                    <ItemCount stock={stocks}
                    initial={initial}
                    count={count}
                    increase={increase}
                    decrease={decrease}
                    onAdd={onAdd}
                    />
                }
      </div>
    </>
  );
};
export default ItemDetail;
