import React, { Component } from 'react';
import StepListContainer from '../steps/StepListContainer';

class TodoDetailView extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.removeTodo(this.props.todo);
    }

    render() {
        console.log("TodoDetailView", this.props)
        return (
            <div>
                <p>Body: {this.props.todo.body} </p>
                <p>Done: {this.props.todo.done ? "Yes" : "No"}</p>
                <StepListContainer />
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default TodoDetailView;
