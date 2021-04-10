import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
}
