// import React from 'react'
// import {Cart} from '../components/Cart'
// import { useSelector,useDispatch } from "react-redux";

// import {
//     showCartProducts,
//     hideCartProducts,
//     removeProductFromCart, 
// } from "../services/Actions/action"

// export const CartController = () => {
//     const products = useSelector((state) => state.products)
//     const isCartOpen = useSelector((state) => state.Cart.show_products)
    
//     const dispatch = useDispatch();

//     const openCart = () => {
//       dispatch(showCartProducts());
//     };

//     const closeCart = () => {
//       dispatch(hideCartProducts());
//     };

//     const onRemoveProductFromCart = (productId) => {
//         dispatch(removeProductFromCart(productId))
//     }

//   return <Cart
//             onOpenCart={openCart}
//             isCartOpen={isCartOpen}
//             onCloseCart={closeCart}
//             onRemoveProductFromCart={onRemoveProductFromCart}
//             products={products}
//         />  
// }

import React, { Component } from "react";
// import Cart from "./Cart";
import {Cart} from '../components/Cart'
import { connect } from "react-redux";
import { showCartProducts, hideCartProducts, removeProductFromCart} from "../services/Actions/action"

class CartController extends Component {
    render() {
      return (
        <Cart
          onOpenCart={this.props.openCart}
          isCartOpen={this.props.isCartOpen}
          onCloseCart={this.props.closeCart}
          onRemoveProductFromCart={this.props.removeProductFromCart}
          products={this.props.products}
        />
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    isCartOpen: state.cart.show_products,
    products: state.cart.products,
  });
  const mapDispatchToProps = (dispatch) => ({
    openCart: () => dispatch(showCartProducts()),
    closeCart: () => dispatch(hideCartProducts()),
    removeProductFromCart: (productId) =>
      dispatch(removeProductFromCart(productId)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartController);

