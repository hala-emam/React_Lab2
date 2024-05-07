import ToDoForm from './ToDoForm';
import TodoList from './TodoList';
import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
  
    const addTask = (text) => {
      setTasks([...tasks, { text, done: false }]);
    };
  
    const markAsDone = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].done = !updatedTasks[index].done;
      setTasks(updatedTasks);
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h1 className='text-center '>Todo Form</h1>
        <ToDoForm addTask={addTask} />
        <h1 className='mt-5 text-center '>Todo List</h1>

        <TodoList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} />
      </div>
    );
  };
  
  export default TodoApp;