import CartTypes from './cart.types';

export const toggleDropdownHidden = () => ({
  type: CartTypes?.TOGGLE_HIDDEN,
});

export const addCartItem = (item) => ({
  type: CartTypes?.ADD_CART_ITEM,
  payload: item,
});
