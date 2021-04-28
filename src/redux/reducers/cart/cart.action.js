import CartTypes from './cart.types';

export const toggleDropdownHidden = () => ({
  type: CartTypes?.TOGGLE_HIDDEN,
});

export const addCartItem = (item) => ({
  type: CartTypes?.ADD_CART_ITEM,
  payload: item,
});

export const clearCartItem = (item) => ({
  type: CartTypes?.CLEAR_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartTypes?.REMOVE_CART_ITEM,
  payload: item,
});
