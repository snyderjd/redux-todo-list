import React from 'react';
import './App.css';
import TodoListContainer from './todos/TodoListContainer';

function App() {
  return (
    <div className="App">
      <h1>Todos App</h1>
      <TodoListContainer />      
    </div>
  );
}

export default App;
