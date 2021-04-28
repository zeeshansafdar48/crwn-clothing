import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

export default function CollectionPreview({ title, items }) {
  console.log('title,', title);
  console.log('items,', items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items && items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item?.id} item={item} />)}
      </div>
    </div>
  );
}
