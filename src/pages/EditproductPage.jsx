import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditlData, clearItem } from "../RTK/productSlice";
import { useDetails } from "../Hooks/use-product-details";

const EditproductPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const { item } = useDetails();

  useEffect(() => {
    if (item) {
      setName(item.name);
      setCategory(item.category);
      setPrice(item.price);
    }
  }, [item]);
  useEffect(() => {
    return () => {
      dispatch(clearItem());
    };
  }, [dispatch]);
  const addNewItem = (e) => {
    e.preventDefault();
    dispatch(EditlData({ name, category, price, id: item.id }));
    navigate("/AdminPage");
  };
  return (
    <>
      <div className="container">
        <h4> Add Todo </h4>

        <form>
          <div className="mb-3">
            <label>Add Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Add Title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Add Category</label>

            <input
              type="text"
              className="form-control"
              id="exampleInputCategory"
              aria-describedby="emailHelp"
              value={category}
              placeholder="Add Category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Add Price</label>

            <input
              type="number"
              className="form-control"
              id="exampleInputPrice"
              aria-describedby="emailHelp"
              placeholder="Add Category"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={addNewItem}
          >
            Edit Game
          </button>
        </form>
      </div>
    </>
  );
};

export default EditproductPage;
