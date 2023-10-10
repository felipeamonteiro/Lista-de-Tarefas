import React from 'react';
import TaskApp from './components/TaskApp.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <TaskApp />
      </Router>
    </div>
  );
}

export default App;
