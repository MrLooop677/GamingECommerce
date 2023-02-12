import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailData } from "../RTK/productSlice";
import { useParams } from "react-router-dom";
export const useDetails = () => {
  const { item } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(DetailData(id));
  }, [dispatch]);
  return { item };
};
