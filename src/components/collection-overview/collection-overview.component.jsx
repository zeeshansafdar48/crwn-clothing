import { useSelector } from 'react-redux';
import './collection-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
export default function CollectionOverview() {
  const collections = useSelector((state) => state.collections?.collections);
  console.log('collections', collections);
  return (
    <div className="collection-overview">
      {Object.keys(collections).map((obj) => {
        const { id, title, items } = collections[obj];
        return <CollectionPreview key={id} title={title} items={items} />;
      })}
    </div>
  );
}
