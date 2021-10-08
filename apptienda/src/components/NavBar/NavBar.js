
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <>
  <header>
      <CartWidget/>
      <nav>
      <ul class="nav" >
          <li>Retoque</li>
          <li>Edición</li>
          <li>Montaje</li>
          <li>Mejora</li>
          <li>Restauración</li>
      </ul>
      </nav>
      
  </header>
    </>
  );
}  
  export default NavBar;
  