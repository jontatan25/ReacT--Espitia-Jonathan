
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar/NavBar.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/ItemListContainer/ItemListContainer.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/CartWidget/Cart";
import DetailPage from "./components/pages/DetailPage";
import CartContextProvider from "./context/cartContext";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import DetailByCategory from "./components/pages/DetailByCategory";


const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer nombre="Pedro" apellido="Sanchez" />
          </Route>
          <Route exact path="/detalle">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/item/:id">
            <DetailPage/>
          </Route>
          <Route exact path="/category/:categoryid">
            <DetailByCategory />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="*">
            <h1>Página No encontrada</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};
export default App;
