import React, { Component } from 'react';
import StepListItemContainer from './StepListItemContainer';
import StepForm from './StepForm';

class StepList extends Component {

    render() {
        return (
            <div className="step-list">
                <StepForm todoId={this.props.todoId} receiveStep={this.props.receiveStep} />
                <ul>
                    {this.props.steps.map(step => {
                        return <StepListItemContainer key={step.id} step={step}/>
                    })}                    
                </ul> 
            </div>
        )
    }
}

export default StepList;