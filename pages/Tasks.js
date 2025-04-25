import React, { useState, useEffect } from 'react';
import TaskItem from '../components/TaskItem';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Follow our Twitter', completed: false, type: 'follow' },
    { id: 2, title: 'Like and retweet our pinned tweet', completed: false, type: 'like-retweet' }
  ]);
  const [adminCode, setAdminCode] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Hidden admin code (Fredrick)
  const verifyAdminCode = (code) => {
    return code === 'Fredrick';
  };

  const addTask = () => {
    if (!verifyAdminCode(adminCode)) {
      alert('Invalid admin code');
      return;
    }

    if (newTaskTitle.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setAdminCode('');
    alert('Task added successfully!');
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="page">
      <h1>Tasks</h1>
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={() => toggleTask(task.id)} 
          />
        ))}
      </div>

      <div className="add-task-section">
        <h3>Add New Task (Admin Only)</h3>
        <input
          type="password"
          placeholder="Enter admin code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Tasks;
