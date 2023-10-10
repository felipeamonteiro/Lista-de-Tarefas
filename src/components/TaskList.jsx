import React from 'react';
import style from '../App.css'

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          {task.text}
          <button onClick={() => onDelete(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;