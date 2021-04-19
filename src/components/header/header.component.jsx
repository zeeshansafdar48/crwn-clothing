import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

export default function Header({ currentUser }) {
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
      </div>
    </div>
  );
}
