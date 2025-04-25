import React from 'react';

const TaskItem = ({ task, onToggle }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      {task.completed && <span className="task-completed">✓</span>}
    </div>
  );
};

export default TaskItem;
