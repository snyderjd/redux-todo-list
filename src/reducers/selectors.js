// Takes in all the todos from state, maps them to an array and returns the array
export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

// Takes steps object and todo_id, and returns an array of all the steps with the given todo_id
export const stepsByTodoId = ({ steps }, todoId) => {
    const stepsByTodoId = [];

    Object.keys(steps).forEach(stepId => {
        const step = steps[stepId];
        if (steps[stepId].todoId === todoId) {
            stepsByTodoId.push(step);
        }
    });

    return stepsByTodoId;
};



