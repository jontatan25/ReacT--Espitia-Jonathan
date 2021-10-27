import { createContext, useState, useContext } from "react";
import React from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const increaseItemQuantity = (id) => {
    
    console.log(cartList[id-1].cantidad)
      // setCartList([...cartList,cartList[id-1].cantidad += 1]);

  };

  const addItem = (item) => {
    setCartList([...cartList, item]);
  };

  const removeItem = (id) => {
    setCartList(
      cartList.splice([id],1)
    );
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
      sum += (cartList[i].cantidad*cartList[i].price);
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
        addItem,
        removeItem,
        clear,
        isInCart,
        sumarTotalProductos,
        sumarTotalPrecio,
        increaseItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
