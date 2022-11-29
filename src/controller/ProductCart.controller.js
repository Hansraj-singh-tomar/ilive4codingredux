import React from "react";
import {ProductCart} from "../components/ProductCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../services/Actions/action";

export default function ProductCardController({ product }) {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return <ProductCart product={product} onAddToCart={onAddToCart} />;
}