import React, { Component } from 'react';
import TodoDetailView from './TodoDetailView';

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        }

        this.toggleComplete = this.toggleComplete.bind(this);
        this.toggleDetailView = this.toggleDetailView.bind(this);
    }

    toggleComplete(event) {
        event.preventDefault();
        this.props.receiveTodo({
            id: this.props.todo.id,
            title: this.props.todo.title,
            body: this.props.todo.body,
            done: !this.props.todo.done
        })
    }

    toggleDetailView(event) {
        event.preventDefault();
        this.setState({ showDetail: !this.state.showDetail });
    }

    render() {
        console.log(this.state);
        return (
            <div className="todo-list-item">
                <a onClick={this.toggleDetailView}><h3>{this.props.todo.title}</h3></a>
                {this.state.showDetail ? <TodoDetailView todo={this.props.todo} /> : ""}
                <button onClick={this.toggleComplete}>Toggle Complete</button>
            </div>
        )
    }
}

export default TodoListItem