import React from "react";
import { useSelector } from "react-redux";
import { ProductsGrid } from "../components/ProductsGrid";

export default function ProductsGridController() {
  const products = useSelector((state) => state.products);
  return <ProductsGrid products={products} />;
}