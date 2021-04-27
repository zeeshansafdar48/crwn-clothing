import { useSelector } from 'react-redux';
import './collection-overview.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
export default function CollectionOverview() {
  const collections = useSelector((state) => state.collections?.collections);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}
