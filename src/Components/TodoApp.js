import React, { Component } from 'react';

import AddTodo from '../Containers/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import Footer from './Footer';

import 'todomvc-app-css/index.css';

class TodoApp extends Component {
    render() {
        return (
            <section className = "todoapp">
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </section>
        );
    }
}

export default TodoApp;