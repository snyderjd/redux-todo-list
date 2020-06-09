import { connect } from 'react-redux';
import StepListItem from './StepListItem';
// Actions
import { receiveStep, removeStep } from '../../actions/StepActions';

const mapDispatchToProps = (dispatch, { step }) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
    null, // step prop is already passed in
    mapDispatchToProps
)(StepListItem);
