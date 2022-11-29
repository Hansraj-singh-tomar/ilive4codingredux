import {
  SHOW_CART,
  ADD_TO_CART,
  ADD_PRODUCTS,
  SHOW_PRODUCTS_IN_CART,
  HIDE_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCTS,
  FETCH_PRODUCTS
} from '../constant'


  export const showCart = (direction) => ({
    type: SHOW_CART,
    payload: direction,
  });
  
  export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
  });

  export const showCartProducts = () => ({
    type: SHOW_PRODUCTS_IN_CART,
  });
  
  export const hideCartProducts = () => ({
    type: HIDE_PRODUCTS_IN_CART,
  });

  export const removeProductFromCart = (productId) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  });
  
  export const addProducts = (product) => ({
    type: ADD_PRODUCTS,
    payload: product
  })

// // code for Redux-Thunk 
// // create action creators after redux-thunk

// // jab hamara home page load hoga tab mene fetchProducts vale action creator ko useEffect hook ke andar dispatch kar diya hai 
// // ab iske dispatch hone ke baad fetchProducts ne ek function return kar diya 
// // or iss function ko redux-thunk middleware ne call kar diya
// // redux-thunk middleware ne sab chal jane ke baad andar se usne setProducts action creator ko dispatch kar diya like that - dispatch(setProducts(data.products))
// // jo ab kuch return kar rha hai or ye data redux ke reducer ke pass chale jayega
//   export const fetchProducts = () => {
//     return async function (dispatch) {  // redux thunk hamare iss function ko call karega to pehle parameter me dispatch function bhejega
//       const res = await fetch(
//       "https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US",
//       {
//         method : "GET",
//         headers : {
//           "x-rapidapi-host": "asos2.p.rapidapi.com",
//           "x-rapidapi-key":
//             "1949ed3468msh573f2b5adccd778p14beffjsn12e69f0cac40",
//         },
//       }
//       );
//       const data = await res.json();
//       // console.log(data.products);
//       dispatch(setProducts(data.products)); // yha ham ek nya action dispatch kar rhe hai iske liye ham setProducts action creator ka use kar rhe hai  
//     }
//   };

//   export const setProducts = (products = null) => {
//     if (products) {
//       return {
//         type: SET_PRODUCTS,
//         payload: products,
//       };
//     }
  
//     return {
//       type: SET_PRODUCTS,
//       payload: [],
//     };
//   };

//--------------------------------------------------------------------

// Another way to write above Redux-Thunk code 

// import productsService from '../products.services';
// export const fetchProducts = () => {
//   // Done for REDUX_THUNK
//   return async function (dispatch) {
//     const products = await productsService.getAllProducts();
//     dispatch(setProducts(products));
//   }

//   // Done for REDUX_SAGA
//   // return { type : FETCH_PRODUCTS };
// }

// export const setProducts = (products = null) => {
//   if (products) {
//     return {
//       type: SET_PRODUCTS,
//       payload: products,
//     };
//   }
// };


// ------------------------------------------------
// code for Redux-Saga
// isse home.js file se call kiya gya hai 
export const fetchProducts = () => {
  return { type : FETCH_PRODUCTS };
}


// isse products.saga.js file se call kiya hai 
export const setProducts = (products = null) => {
  if (products) {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }
};