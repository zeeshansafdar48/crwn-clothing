import { useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

export default function CartDropdown() {
  const data = useSelector();
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}
