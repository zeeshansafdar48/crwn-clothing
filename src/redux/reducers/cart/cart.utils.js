export const addItemToCart = (existingCartItems, newCartItem) => {
  const existedCartItem = existingCartItems.find((cartItem) =>
    cartItem?.id === newCartItem?.id ? cartItem : null
  );
  if (existedCartItem) {
    return existingCartItems.map((cartItem) =>
      cartItem?.id === existedCartItem?.id
        ? { ...existedCartItem, quantity: existedCartItem?.quantity + 1 }
        : cartItem
    );
  }
  return [...existingCartItems, { ...newCartItem, quantity: 1 }];
};
