import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

class TodoList extends Component {

    render() {
        return (
            <React.Fragment>
                <h2>Add Todo</h2>
                <TodoForm receiveTodo={this.props.receiveTodo}/>
                <h2>Todo List</h2>
                <div className="todo-list">
                    {this.props.todos.map(todo =>
                        <TodoListItem 
                            todo={todo} 
                            removeTodo={this.props.removeTodo}
                            receiveTodo={this.props.receiveTodo}
                        />    
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default TodoList
