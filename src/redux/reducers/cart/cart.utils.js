export const addItemToCart = (existingCartItems, newCartItem) => {
  const existedCartItem = existingCartItems.find((cartItem) => (cartItem?.id === newCartItem?.id ? cartItem : null));
  if (existedCartItem) {
    return existingCartItems.map((cartItem) =>
      cartItem?.id === existedCartItem?.id ? { ...existedCartItem, quantity: existedCartItem?.quantity + 1 } : cartItem
    );
  }
  return [...existingCartItems, { ...newCartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToBeRemoved) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToBeRemoved.id);
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem?.quantity - 1 } : cartItem
  );
};

export const clearItemFromCart = (cartItems, removingCartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== removingCartItem.id);
};
