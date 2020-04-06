import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const Todo = () => {
    const [input, setInput] = useState('');
    const allTodos = useSelector((state) => state)
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
    }

    const todoList = allTodos.map(todo => {
        return(
            <li>{todo}</li>
        )
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} placeholder='Add a To Do' type='text' onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={(e) => dispatch(addTodo(e.target.value))}>Add To Do</button>
            </form>
            <ul>{todoList}</ul>
        </div>
    )
}

export default Todo;