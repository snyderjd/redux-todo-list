import React, { Component } from 'react';
import { uniqueId } from '../../util/idGenerator';
import './todos.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Update state when input fields change
    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({ title: "", body: "" });
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <div className="todo-form__title--container">
                    <label>Title</label>
                    <input
                        className="input"
                        id="title"
                        value={this.state.title}
                        placeholder="buy milk"
                        onChange={this.handleFieldChange}
                        required
                    />
                </div>
                <div className="todo-form__body--container">
                    <label>Body</label>
                    <textarea
                        className="input"
                        id="body"
                        cols='20'
                        value={this.state.body}
                        rows='5'
                        placeholder="2% or whatever is on sale!"
                        onChange={this.handleFieldChange}
                        required
                    >
                    </textarea>
                </div>
                <button className="create-button">Add Todo</button>
            </form> 
        )
    }
    
}

export default TodoForm;
