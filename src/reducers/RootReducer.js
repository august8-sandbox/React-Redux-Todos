import { createStore, combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const store = createStore(combineReducers({
  todoReducer,
}));

export default store;
