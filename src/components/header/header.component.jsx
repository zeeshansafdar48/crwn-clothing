import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

export default function Header() {
  const currentUser = useSelector((state) => state.user?.currentUser);
  const hiddenDropdown = useSelector((state) => state.cart?.hidden);
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenDropdown ? null : <CartDropdown />}
    </div>
  );
}
