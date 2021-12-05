
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from "./products";
import sidebarReducer from "./sideBar";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['sidebar'],
};

const rootReducer = combineReducers({
  productsReducer,
  sidebarReducer,
});

export default persistReducer(persistConfig, rootReducer);
