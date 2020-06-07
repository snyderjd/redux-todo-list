import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const configureStore = () => {
    const store = createStore(rootReducer);
    return store;
}

export default configureStore;

// import { createStore } from 'redux';
// import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => {
//   const store = createStore(rootReducer, preloadedState);
//   store.subscribe(() => {
//     localStorage.state = JSON.stringify(store.getState());
//   });
//   return store;
// }

// export default configureStore;