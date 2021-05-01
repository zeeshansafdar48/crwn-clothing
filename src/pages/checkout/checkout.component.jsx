import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

function Checkout() {
  const totalPrice = useSelector((state) =>
    state.cart?.cartItems?.reduce(
      (accumulatedPrice, cartItem) => accumulatedPrice + cartItem?.quantity * cartItem.price,
      0
    )
  );
  const cartItems = useSelector((state) => state.cart?.cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem?.id} cartItem={cartItem} />
      ))}
      <div className="total">Total: ${totalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV:123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
}

export default Checkout;
