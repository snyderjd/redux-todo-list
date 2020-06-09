import React, { Component } from 'react';

class StepListItem extends Component {
    constructor(props) {
        super(props);

        this.toggleStep = this.toggleStep.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggleStep(event) {
        const toggledStep = Object.assign(
            {},
            this.props.step,
            { done: !this.props.step.done}
        );
        this.props.receiveStep(toggledStep);
    }

    handleDelete(event) {
        this.props.removeStep(this.props.step);
    }

    render() {
        return (
            <li className="step-header">
                <div className="step-info">
                    <h3>{this.props.step.title}</h3>
                    <p>{this.props.step.body}</p>
                </div>
                <div className="step-buttons">
                    <button
                        className={this.props.step.done ? "Done" : "Undone" }
                        onClick={this.toggleStep}
                    >
                        {this.props.step.done ? "Undo" : "Done"}
                    </button>
                    <button className="delete-button" onClick={this.props.removeStep}>
                        Delete
                    </button>
                </div>
            </li>
        );
    }

}

export default StepListItem;



