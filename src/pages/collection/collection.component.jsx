import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionByRouteName } from '../../redux/reducers/collection/collection.action';

function CollectionPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const selectedCollections = useSelector((state) => state?.collections?.selectedCollections);
  console.log('params', params);
  console.log('selectedCollections', selectedCollections);

  useEffect(() => {
    if (params) {
      dispatch(getCollectionByRouteName(params?.collectionId));
    }
  }, [params, dispatch]);
  return (
    <div className="shop-page">
      <h1>Collection Page</h1>
    </div>
  );
}

export default CollectionPage;
