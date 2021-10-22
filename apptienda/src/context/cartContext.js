import { createContext, useState, useContext } from "react";
import React from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item) => {
    setCartList([...cartList, item]);
  };

  const removeItem = (id) => {
    setCartList(
      cartList.filter((product) => {
        return product.Id !== id;
      })
    );
  };
  
  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.filter(function(obj){
       if(obj.id===id){
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
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
