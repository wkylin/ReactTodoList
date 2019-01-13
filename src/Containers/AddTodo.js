import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <header className = "header">
            <h1> Todos </h1>
            <input
                className = "new-todo"
                placeholder = "接下来做什么？"
                autoFocus
                onKeyDown = {
                    (e) => {
                        if (input.value && e.keyCode === 13) {
                            dispatch(addTodo(input.value));
                            input.value = '';
                        }
                    }
                }
                ref = {
                    node => input = node
                }
                />
        </header>
    );
}

AddTodo = connect()(AddTodo)

export default AddTodo;