import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <CartWidget />
        <nav>
          <ul class="nav">
            <Link to="/category/retoque">
              <li>Retoque</li>
            </Link>
            <Link to="/category/edicion">
              <li>Edición</li>
            </Link>
            <Link to="/category/montaje">
              <li>Montaje</li>
            </Link>
            <Link to="/category/mejora">
              <li>Mejora</li>
            </Link>
            <Link to="/category/restauracion">
              <li>Restauración</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
