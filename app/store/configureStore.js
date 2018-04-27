/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer';


const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default initStore = () => createStore(persistedReducer);