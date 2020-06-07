import { connect } from 'react-redux';
import TodoList from './TodoList';

// Actions
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
    todos: allTodos(state),
    state
});

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
