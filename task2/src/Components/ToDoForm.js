import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (trimmedTask === "") return; 
    addTask(trimmedTask);
    setTask(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button className="btn btn-success m-2 p-2" type="submit">
        Add New Task
      </button>
    </form>
  );
};
export default ToDoForm;

