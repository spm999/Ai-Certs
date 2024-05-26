import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../api';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
<div className="todo-list-container">
      <h1 className="todo-list-title">To-Do List</h1>
      <button className="create-task-button" onClick={() => navigate('/new')}>Create Task</button>
      <ul className="task-list">
        {tasks.map(task => (
          <li className="task-item" key={task.id}>
            <h3 className="task-title">{task.title} <span className="task-due-date">(Due: {task.dueDate})</span></h3>
            <p className="task-status"><b>Description:</b> {task.description}</p>
            <p className="task-status">Status: {task.status}</p>
            <button className="edit-task-button" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
            <button className="delete-task-button" onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
