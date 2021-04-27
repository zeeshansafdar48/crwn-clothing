import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export default persistReducer(persistConfig, rootReducer);
