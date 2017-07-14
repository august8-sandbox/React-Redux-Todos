import Immutable from 'immutable';
import { TEXT_LENGTH } from '../constants/ActionTypes';

const initialState = Immutable.Map({
  length: 0,
});

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_LENGTH:
      return state.set('length', action.payload);
    default:
      return state;
  }
};

export default Reducer;
