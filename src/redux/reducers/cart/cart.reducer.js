import CartTypes from './cart.types';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes?.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state?.hidden,
      };
    case CartTypes?.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action?.payload),
      };
    case CartTypes?.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action?.payload),
      };
    case CartTypes?.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action?.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
