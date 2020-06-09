import { connect } from 'react-redux';
import StepList from './StepList';

// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/StepActions';

const mapStateToProps = (state, { todoId }) => ({
    steps: stepsByTodoId(state, todoId),
    todoId: todoId
});

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepList);
