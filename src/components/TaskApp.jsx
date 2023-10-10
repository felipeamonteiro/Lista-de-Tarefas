import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './TaskList.jsx';
import style from '../App.css'

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState('ativos');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div className='nav-links'>
        <Link to="/ativos">Tarefas Ativas</Link>
        <Link to="/concluidos">Tarefas Concluídas</Link>
      </div>
      <Routes>
        <Route
          path="/ativos"
          element={<TaskList tasks={activeTasks} onToggle={toggleTask} onDelete={deleteTask} />}
        />
        <Route
          path="/concluidos"
          element={<TaskList tasks={completedTasks} onToggle={toggleTask} onDelete={deleteTask} />}
        />
      </Routes>
      <div>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          onProgress={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => addTask(document.querySelector('input').value)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default TaskApp;
