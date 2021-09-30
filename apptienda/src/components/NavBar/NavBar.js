
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
  <header>
      <h1>Tienda de Retoque Fotográfico</h1>
      <CartWidget/>
      <naviga>
      <ul class="nav" >
          <li>Retoque</li>
          <li>Edición</li>
          <li>Montaje</li>
          <li>Mejora</li>
          <li>Restauración</li>
      </ul>
      </naviga>
  </header>
    </>
  );
}  
  export default NavBar;
  