import React, { Component } from 'react';
import { uniqueId } from '../../util/idGenerator';

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
                <label>Title</label>
                <input
                    className="input"
                    id="title"
                    value={this.state.title}
                    placeholder="buy milk"
                    onChange={this.handleFieldChange}
                    required
                />
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
                <button className="create-button">Add Todo</button>
            </form> 
        )
    }
    
}

export default TodoForm;

// import { uniqueId } from '../../util/id_generator'
// import React from 'react';

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       body: "",
//       done: false
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(property) {
//     return e => this.setState({[property]: e.target.value});
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const todo = Object.assign({}, this.state, { id: uniqueId() });
//     this.props.receiveTodo(todo);
//     this.setState({
//       title: "",
//       body: ""
//     }); // reset form
//   }

//   render() {
//     return (
//       <form className="todo-form" onSubmit={this.handleSubmit}>
//         <label>Title:
//           <input
//             className="input"
//             ref="title"
//             value={this.state.title}
//             placeholder="buy milk"
//             onChange={this.update('title')}
//             required/>
//         </label>
//         <label>Body:
//           <textarea
//             className="input"
//             ref="body"
//             cols='20'
//             value={this.state.body}
//             rows='5'
//             placeholder="2% or whatever is on sale!"
//             onChange={this.update('body')}
//             required></textarea>
//         </label>
//         <button className="create-button">Create Todo!</button>
//       </form>
//     );
//   }
// };

// export default TodoForm;