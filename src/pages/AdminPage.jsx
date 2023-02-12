import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteData, fetchData } from "../RTK/productSlice";
import { deteteItem } from "../RTK/cartSlice";
import { Button, Table } from "react-bootstrap";
import { checkOut } from "../RTK/authSlice";

//sweet alert
const MySwal = withReactContent(Swal);

const AdminPage = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  const [tap, setTap] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const deleteItem = async (product) => {
    MySwal.fire({
      title: <p>{product.name}</p>,
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        dispatch(deleteData(product.id));
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row justify-content-between">
              <div
                className="col-md-3 btn btn-success mb-3 mt-5"
                onClick={(e) => setTap(false)}
              >
                Dash Board
              </div>
              <div
                className="col-md-3 btn btn-success mb-3 mt-5"
                onClick={(e) => setTap(true)}
              >
                Requests
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <Link
              to="/"
              className="col-md-3 btn btn-success mb-3 mt-5 ms-auto d-block"
              onClick={() => dispatch(checkOut())}
            >
              Logout
            </Link>
            <Link
              to="/AdminPage/MessagePage"
              className="col-md-3 btn btn-success mb-3 mt-5 ms-auto d-block"
            >
              MessagePage
            </Link>
          </div>
        </div>
        {tap ? (
          <>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="my-3 text-center"
            >
              <thead>
                <tr>
                  <th>Title</th>
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
          </>
        ) : (
          <>
            <Link to={"/AddproductPage"} className="btn btn-success mb-3 mt-5">
              Add New Game
            </Link>
            <table
              className="table table-dark table-striped d-block overflow-scroll"
              style={{ height: "100vh" }}
            >
              <thead className="d-table w-100" style={{ tableLayout: "fixed" }}>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Operation</th>
                </tr>
              </thead>
              <tbody className="d-table w-100" style={{ tableLayout: "fixed" }}>
                {products.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td className="text-center">{product.category}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-danger me-2 mb-2"
                          onClick={() => deleteItem(product)}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/DetailsPage/${product.id}`}
                          className="btn btn-sm btn-info me-2 mb-2"
                        >
                          View
                        </Link>
                        <Link
                          to={`/EditproductPage/${product.id}`}
                          className="btn btn-sm btn-primary mb-2"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default AdminPage;
