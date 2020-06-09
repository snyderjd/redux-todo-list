import React, { Component } from 'react';
import { uniqueId } from '../../util/idGenerator';

class StepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    // Update state when input fields change
    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
            <form className="step-form" onSubmit={this.handleSubmit}>
                <div className="step-form__title">
                    <label>Title:</label>
                    <input 
                        className="input"
                        id="title"
                        value={this.state.title}
                        placeholder="walk to store"
                        onChange={this.handleFieldChange}
                        required
                    />
                </div>
                <div className="step-form__description">
                    <label>Description:</label>
                    <input 
                        className="input"
                        id="body"
                        value={this.state.body}
                        placeholder="google store directions"
                        onChange={this.handleFieldChange}
                        required
                    />
                </div>
                <button className="create-button">Add Step</button>
            </form>
        )
    }

}

export default StepForm;