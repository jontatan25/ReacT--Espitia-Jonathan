import "./components/NavBar/NavBar.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import  "./components/ItemListContainer/ItemListContainer.css"
import React from 'react'
import ItemCount from "./components/ItemCount";

const App = () => {
  return (
    <div>
       <NavBar />
       <ItemListContainer nombre= "Pedro" apellido= "Sanchez"/>
       <ItemCount/>
    </div>
  )
}
export default App;

