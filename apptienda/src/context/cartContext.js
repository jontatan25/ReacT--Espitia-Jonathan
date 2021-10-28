import { createContext, useState, useContext } from "react";
import React from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [toogle, setToogle] = useState(false);

  const increaseItemQuantity = (id) => {
    const index = cartList.findIndex(
      (productoABuscar) => productoABuscar.id === id
    );
    const copyCart = [...cartList];
    copyCart[index].cantidad += 1;

    setCartList(copyCart);
    console.log(copyCart);
  };

  const decreaseItemQuantity = (id) => {
    const index = cartList.findIndex(
      (productoABuscar) => productoABuscar.id === id
    );
    const copyCart = [...cartList];
    if (copyCart[index].cantidad > 0) {
      copyCart[index].cantidad -= 1;
    }

    setCartList(copyCart);
    console.log(copyCart);
  };

  const addItem = (item) => {
      
  setCartList([...cartList, item]);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const sumarTotalProductos = () => {
    let sum = 0;

    for (let i = 0; i < cartList.length; i++) {
      sum += cartList[i].cantidad;
    }
    return sum;
  };

  const sumarTotalPrecio = () => {
    let sum = 0;

    for (let i = 0; i < cartList.length; i++) {
      sum += cartList[i].cantidad * cartList[i].price;
    }
    return sum;
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    cartList.filter(function (obj) {
      if (obj.id === id) {
        return true;
      }
      return false;
    });
  };

  console.log(cartList);

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addItem,
        removeItem,
        clear,
        isInCart,
        sumarTotalProductos,
        sumarTotalPrecio,
        increaseItemQuantity,
        decreaseItemQuantity,
        toogle,
        setToogle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
