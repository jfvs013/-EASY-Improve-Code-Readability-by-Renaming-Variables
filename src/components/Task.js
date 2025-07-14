import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : '' }}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      {task.title} (Priority: {task.priority})
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;