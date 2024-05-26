import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, createTask, updateTask } from '../api';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    const response = await getTask(id);
    setTask(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate('/');
  };

  return (
    <div className="task-form-container">
    <h1 className="task-form-title">{id ? 'Edit Task' : 'Create Task'}</h1>
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">
          Title:
          <input
            type="text"
            name="title"
            className="form-input"
            value={task.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Description:
          <textarea
            name="description"
            className="form-textarea"
            value={task.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Status:
          <select
            name="status"
            className="form-select"
            value={task.status}
            onChange={handleChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Due Date:
          <input
            type="date"
            name="dueDate"
            className="form-input"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit" className="form-button">Save</button>
    </form>
  </div>
);
};

export default TaskForm;
