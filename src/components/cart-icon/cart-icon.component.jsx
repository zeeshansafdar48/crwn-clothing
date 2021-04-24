import { ReactComponent as ShoppingIcon } from '../../assets/img/shopping-bag.svg';
import './cart-icon.styles.scss';

export default function CartIcon() {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
