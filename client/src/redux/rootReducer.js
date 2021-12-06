import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './reducers/products';
import sidebarReducer from './reducers/sideBar';
import userReducer from './reducers/users'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['sidebar'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  sidebar: sidebarReducer,
  users: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
