import CollectionTypes from './collection.types';
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case CollectionTypes?.GET_COLLECTIONS_BY_ROUTE_NAME:
      return {
        ...state,
        selectedCollections: state?.collections[action?.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default collectionReducer;
