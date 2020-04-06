import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, {
todo: {
    id: 1,
    text: "Buy groceries",
    completed: true // or false
}}) // takes in a reducer, initialState, enhancers/middleware

export default store;