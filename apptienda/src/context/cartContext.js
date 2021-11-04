import { React,createContext, useState, useContext } from "react";
import { getFirestore } from "../services/getFireBase";
import firebase from "firebase";
import "firebase/firestore";



const CartContext = createContext([]);


export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [toogle, setToogle] = useState(false);
  const [userInfo, setUserInfo] = useState([{name:'nombre',phone:'telefono',mail:'correo'}])
  const [finalOrder, setFinalOrder] = useState([]);

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

  const makeOrder = () => {
    
    
    console.log(cartList)
    const newOrder = {
      name:"comprador3",
      phone:"1234567",
      email:"unmail@ejemplo.com"
    }
  
    let pedido = {}
  
    pedido.buyer = newOrder
    pedido.items = cartList.map(carItem => {

      const id = carItem.id
      const title = carItem.title
      const price = carItem.price * carItem.cantidad

      return {id,title,price};
    })

    pedido.date = firebase.firestore.Timestamp.fromDate(new Date());
    pedido.total = sumarTotalPrecio();
  
    const db = getFirestore()
    const order = db.collection("ordenes")
    order.add(pedido)
    .then(res =>(alert("añadido con exito, Se creo la orden con el id : "+res.id)))
  }

  
  

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
        userInfo, 
        setUserInfo,
        makeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
