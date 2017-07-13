import { createAction } from 'redux-actions';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants/ActionTypes';

export const actionAddTodo = createAction(ADD_TODO, (id, text) => ({
  todoId: id + 1,
  todoText: text,
}));

export const actionDeleteTodo = createAction(DELETE_TODO, id => id);

export const actionToggleTodo = createAction(TOGGLE_TODO, (id, todo) => ({
  todoId: id,
  todoItem: todo,
}));
