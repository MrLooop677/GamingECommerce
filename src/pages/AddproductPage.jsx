import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { postData } from "../RTK/productSlice";
import { filereaderHandler } from "../Hooks/use-convertImg";
const MySwal = withReactContent(Swal);
const AddproductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [mainImg, setImg] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const inputElement = useRef();
  useEffect(() => {
    const fileUploadPrimary = inputElement.current;
    filereaderHandler(mainImg, setImg, fileUploadPrimary);
  }, [mainImg]);

  const addNewItem = () => {
    if (name.trim().length > 0 && category.trim().length > 0) {
      dispatch(
        postData({
          name,
          category,
          mainImg,
          price,
          id: Date.now(),
        })
      );

      navigate("/AdminPage");
    } else {
      MySwal.fire({
        title: <p>Please Enter Data</p>,
      });
    }
  };

  return (
    <>
      <div className="container">
        <h4> Add Todo </h4>

        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label>Add Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Add Title"
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
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Select Image
            </label>
            <input
              className="form-control fileUploadPrimary"
              type="file"
              id="formFile"
              ref={inputElement}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addNewItem}
          >
            Add Game
          </button>
          <img src="" className="imgPreview"></img>
        </form>
      </div>
    </>
  );
};

export default AddproductPage;
