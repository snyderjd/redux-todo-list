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


// import { connect } from 'react-redux';
// import StepList from './step_list';
// // Actions
// import { stepsByTodoId } from '../../reducers/selectors';
// import { receiveStep } from '../../actions/step_actions';

// const mapStateToProps = (state, { todo_id }) => ({
//   steps: stepsByTodoId(state, todo_id),
//   todo_id
// });

// const mapDispatchToProps = dispatch => ({
//   receiveStep: step => dispatch(receiveStep(step))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(StepList);