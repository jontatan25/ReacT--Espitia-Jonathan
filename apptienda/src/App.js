import "./components/NavBar/NavBar.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import  "./components/ItemListContainer/ItemListContainer.css"
import React from 'react'


const App = () => {
  return (
    <div>
       <NavBar />
       <ItemListContainer nombre= "Pedro" apellido= "Sanchez"/>
    </div>
  )
}
export default App;

