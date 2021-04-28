import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

function ShopPage() {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={match?.path} component={CollectionOverview} />
      <Route path={`${match?.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
