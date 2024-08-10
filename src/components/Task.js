import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Task.css'; 

function Task() {
  // State to hold all tasks
  const [todos, setTodos] = useState([]);
  // State to manage input field data
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new task
  function addTodo() {
    if (newTodo.trim()) {
      const newTodos = [...todos, { todo: newTodo.trim() }];
      setTodos(newTodos);
      setNewTodo('');
      console.log(newTodos);
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center display-3'>Enter Your Task</h1>
      <input
        type='text'
        className='form-control'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <button className='btn btn-primary' onClick={addTodo}>Save Task</button>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th>All Tasks</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((task, index) => (
            <tr key={index}>
              <td>{task.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to="/" className='btn btn-secondary'>Back to Home</Link>
    </div>
  );
}

export default Task;
