import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/reducers/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export default function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted className="custom-button" onClick={() => dispatch(addCartItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}
