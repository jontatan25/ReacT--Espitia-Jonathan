import "./components/NavBar/NavBar.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import  "./components/ItemListContainer/ItemListContainer.css"
import React from 'react'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";


const App = () => {
  return (
    <div>
       <NavBar />
       <ItemListContainer nombre= "Pedro" apellido= "Sanchez"/>
       <ItemDetailContainer/>
    </div>
  )
}
export default App;

