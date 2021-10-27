import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount";

const Cart = () => {
  const { cartList, addItem, removeItem, clear, isInCart, sumarTotalProductos, sumarTotalPrecio, increaseItemQuantity } =
    useCartContext();
  return (
    <div className="container-fluid">
      {cartList.length > 0 ? (
        <div class="contanier-fluid">
          <div class="row">
            <div class="col-8">
              {cartList.map((f) => (
                <>
                  <div class="product row mb-4">
                    <div class="col-md-5 col-lg-3 col-xl-3">
                      <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100" src={f.img} alt="Sample" />
                      </div>
                    </div>
                    <div class="col-md-7 col-lg-9 col-xl-9">
                      <div>
                        <div class="d-flex justify-content-between">
                          <div>
                            <h5>Producto</h5>
                            <p class="mb-3 text-muted text-uppercase small">
                              Nombre: {f.name}
                            </p>
                            <p class="mb-2 text-muted text-uppercase small">
                              Precio:{f.price}
                            </p>
                            <p class="mb-3 text-muted text-uppercase small">
                              Categoria: {f.category}{" "}
                            </p>
                          </div>
                          <div>
                            <div class="def-number-input number-input safari_only mb-0 w-100">
                              <button type="button" class="btn btn-info">
                                -
                              </button>
                              <span cl>Cantidad: {f.cantidad}</span>
                              <button type="button" class="btn btn-info" 
                              // onClick={increaseItemQuantity(f.id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="#!"
                              type="button"
                              // onClick={removeItem(f.id)}
                              class="remove-product card-link-secondary small text-uppercase mr-3"
                            >
                              <i class="fas fa-trash-alt mr-1">Remover Item</i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="mb-4"></hr>
                </>
              ))}
            </div>
            <div className="col-4">
              <h5 class="mb-3">Total Compra</h5>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 pl-5">
                  Total Items :<span> {sumarTotalProductos()}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Envio:
                  <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total de la compra: </strong>
                    <strong>
                      <p class="mb-0">{sumarTotalPrecio()} USD</p>
                    </strong>
                  </div>
                  <span>
                    <strong></strong>
                  </span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-block">
                Ir al checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Aún no has agregado Items al Carro de compras</h2>
          <Link className="_btn product-add" to="/">
            <button className="btn btn-primary">Ir a Productos</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
