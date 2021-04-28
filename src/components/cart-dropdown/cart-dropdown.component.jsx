import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { useHistory } from 'react-router-dom';
import { toggleDropdownHidden } from '../../redux/reducers/cart/cart.action';

import './cart-dropdown.styles.scss';

export default function CartDropdown() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.length ? (
          cartItems?.map((cartItem) => <CartItem key={cartItem?.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleDropdownHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}
