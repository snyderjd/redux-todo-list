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

// import React from 'react';

// // Components
// import StepListContainer from '../step_list/step_list_container';

// class TodoDetailView extends React.Component {
//   render() {
//     const { todo, removeTodo } = this.props;
//     return(
//       <div>
//         <p className="todo-body">{ todo.body }</p>
//         <StepListContainer todo_id={ todo.id } />
//         <button
//           className="delete-button"
//           onClick={ removeTodo }>Delete Todo</button>
//       </div>
//     );
//   }
// }

// export default TodoDetailView;