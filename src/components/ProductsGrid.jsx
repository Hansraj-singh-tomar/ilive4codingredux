import React from 'react';

// import { GridListTile, GridList } from "@mui/material";
import { Grid } from '@mui/material';
import ProductCard  from '../controller/ProductCart.controller';


const renderGridTiles = (products = []) => {
    return products.map((product) => (
      <Grid 
      item 
      lg={6} 
      key={product.id}
      >
          <ProductCard product={product} /> 
      </Grid>
    ));
  };

export const ProductsGrid = ({ products = [] }) => {
  return products.length > 0 ? (
    <Grid 
    container
    lg={12} 
    spacing={2}
    >
        {renderGridTiles(products)}
    </Grid>
  ) : null;
}

