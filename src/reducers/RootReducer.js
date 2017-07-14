import { createStore, combineReducers } from 'redux';
import Reducer from './Reducer';

const store = createStore(combineReducers({
  textLength: Reducer,
}));

export default store;
