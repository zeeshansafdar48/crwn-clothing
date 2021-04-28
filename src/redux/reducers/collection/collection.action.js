import CollectionTypes from './collection.types';

export const getCollectionByRouteName = (routeName) => ({
  type: CollectionTypes?.GET_COLLECTIONS_BY_ROUTE_NAME,
  payload: routeName,
});
