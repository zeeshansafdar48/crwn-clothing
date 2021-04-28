import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionByRouteName } from '../../redux/reducers/collection/collection.action';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

function CollectionPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedCollections = useSelector((state) => state?.collections?.selectedCollections);

  useEffect(() => {
    if (params) {
      dispatch(getCollectionByRouteName(params?.collectionId));
    }
  }, [params, dispatch]);

  const { title, items } = selectedCollections || {};

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items?.map((item) => (
          <CollectionItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
