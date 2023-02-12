import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItemes, deteteItem } from "../RTK/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);
  return (
    <>
    <main class="cart p-5">
        <div class="container">
            <div class="cart__contents shadow-lg bg-light rounded-3 mt-5 overflow-hidden">
                <div class="row">
                    <div class="col-lg-9 bg-light">
                        
      {cart.length ? (
        <div class="cart__body p-4">
        <div class="cart__title text-dark d-flex justify-content-between">
            <h2 class="h1 fw-bold">Your Cart</h2>
            <h2 class="h1 fw-bold">Total Price : <span class="h3 fw-bold">${totalPrice.toFixed(2)}</span></h2>
          <button className="primary-btn fs-6" onClick={()=>dispatch(clearItemes())}>Clear All</button>
        </div>
        <div className="tab" style={{height: '500px', overflow:'auto'}}>
        <Table
          striped
          bordered
          responsive
          hover
          variant="dark"
          className="my-3 text-center table-responsive"
          
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quntaty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.name}</td>
                <td>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={cart.mainImg}
                  />
                </td>
                <td>{cart.price}$</td>
                <td>{cart.qty}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deteteItem(cart.id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
    </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
          <h1 className="text-center text-dark">You Don't Have Any Products</h1>

          
        </div>
      )}
                    </div>
                    <div class="col-lg-3 bg-dark p-5">
                        <div class="summary d-flex flex-column justify-content-between h-100">
                            <div className="summary__body">
                            <div className="summary__title">
                              <div><h5><b>Summary</b></h5></div>
                              <hr/>
                            </div>
                            <div class="row">
                                <div class="h4 fw-bold">Total Items: <span className="text-light">{cart.length}</span></div>
                                <p class="h4 fw-bold">Total Price : <span class="h4 fw-bold text-light">${totalPrice.toFixed(2)}</span></p>
                            </div>
                            <div class="row">
                                <div class="col">TOTAL PRICE</div>
                                <div class="col text-right">${totalPrice.toFixed(2)}</div>
                            </div>
                            </div>
                            <Link className="primary-btn fs-5 text-center" to={'/'}>CHECKOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
