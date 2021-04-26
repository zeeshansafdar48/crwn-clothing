import { useDispatch } from 'react-redux';
import { clearCartItem, addCartItem, removeCartItem } from '../../redux/reducers/cart/cart.action';
import './checkout-item.styles.scss';

export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const { imageUrl, quantity, name, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeCartItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => dispatch(clearCartItem(cartItem))}>
        &#10005;
      </span>
    </div>
  );
}
