import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toggleDropdown } from '../../redux/reducers/cart/cart.action';
import './cart-icon.styles.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleDropdown())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
