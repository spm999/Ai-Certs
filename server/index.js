const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

let tasks = []; // In-memory data storage for tasks

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Get a single task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Create a new task
app.post('/tasks', (req, res) => {
  const newTask = { id: uuidv4(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).send('Task not found');
  }
});

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== req.params.id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
