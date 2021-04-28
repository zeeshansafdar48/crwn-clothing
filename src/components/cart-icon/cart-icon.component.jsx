import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDropdownHidden } from '../../redux/reducers/cart/cart.action';
import './cart-icon.styles.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) =>
    state.cart?.cartItems?.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem?.quantity, 0)
  );
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleDropdownHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
