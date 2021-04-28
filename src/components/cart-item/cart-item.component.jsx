import './cart-item.styles.scss';

export default function CartItem({ item: { imageUrl, quantity, name, price } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
