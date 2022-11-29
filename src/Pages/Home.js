// import React from 'react'
// import { Box } from '@mui/material'
// import ProductsGrid  from '../controller/ProductsGridController'

// export const Home = () => {
//   return (
//     <Box>
//        <ProductsGrid/> 
//     </Box>
//   )
// }


// after using redux thunk

import React from 'react'
import { Box } from '@mui/material'
import ProductsGrid  from '../controller/ProductsGridController'
import { fetchProducts } from '../services/Actions/action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <Box>
       <ProductsGrid/> 
    </Box>
  )
}