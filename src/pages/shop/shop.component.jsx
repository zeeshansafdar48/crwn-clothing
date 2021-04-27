import React from 'react';
import { useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

function ShopPage() {
  const collections = useSelector((state) => state.collections?.collections);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
}

export default ShopPage;
