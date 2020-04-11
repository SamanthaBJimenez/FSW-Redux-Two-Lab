import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import nextTodoIdReducer from "./nextTodoId";
import visibilityFilterReducer from './visibilityReducer';
import errorsReducer from './errorReducer'
import postsReducer from './postsReducer';

export default combineReducers({
  todos: todosReducer,
  nextId: nextTodoIdReducer,
  visibilityFilter: visibilityFilterReducer,
  errors: errorsReducer,
  posts: postsReducer
});