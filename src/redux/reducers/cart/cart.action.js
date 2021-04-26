import CartTypes from './cart.types';

export const toggleDropdown = () => ({
  type: CartTypes?.TOGGLE_HIDDEN,
});

export const addCartItem = (item) => ({
  type: CartTypes?.ADD_CART_ITEM,
  payload: item,
});
