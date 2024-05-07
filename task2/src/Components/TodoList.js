const TodoList = ({ tasks, markAsDone, deleteTask }) => {
    return (
      <ul className='mb-5'>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.text}
            <div className='col my-2'>
              <button className="btn btn-info m-2" onClick={() => markAsDone(index)}>Mark as Done</button>
              <button className="btn btn-danger m-2" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  export default TodoList;