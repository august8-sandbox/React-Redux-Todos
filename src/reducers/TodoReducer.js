import Immutable from 'immutable';
// import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants/ActionTypes';
import { ADD_TODO } from '../constants/ActionTypes';

const initialState = Immutable.Map({
  todoList: [{
    id: 1,
    text: 'Use React',
    completed: true,
  }],
  todoId: 0,
  initialValue: '',
  placeholder: 'ええかんじに',
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todoList,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
