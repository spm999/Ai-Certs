# To-Do List Application

This is a simple To-Do List application that allows users to manage their tasks. The application supports creating, reading, updating, and deleting (CRUD) tasks. Each task has a title, description, status (e.g., pending, in-progress, completed), and due date.

## Features

* **Task List Page** : Displays a list of all tasks with their title, status, and due date. Includes buttons for editing and deleting each task, and a button to create a new task.
* **Task Form Page** : A form for creating and editing tasks with fields for Title, Description, Status, and Due Date. The form is used for both creating a new task and updating an existing task.

## Technologies Used

* **Frontend** : React
* **Backend** : Node.js with Express
* **In-Memory Data Storage** : Tasks are stored in-memory on the server

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.

#### Backend Setup

**Clone the repository** :

```
git clone https://github.com/spm999/Ai-Certs
cd Ai-Certs
cd server

```

 **Install backend dependencies** :

```
npm install

```

 **Start the backend server** :

```
node index.js
```

##### The backend server will be running at `http://localhost:5000`.

#### Frontend Setup

1. **Navigate to the frontend directory** :
   ```
   cd app
   ```
2. **Install frontend dependencies** :
   ```
   npm install
   ```

   **3. Start the React application** :

```
    npm run dev
```

##### The frontend application will be running at `http://localhost:5173`.

## API Endpoints

1. GET /tasks: Retrieve all tasks.
2. GET /tasks/ID Retrieve a single task by ID.
3. POST /tasks: Create a new task.
4. PUT /tasks/ID Update an existing task by ID.
5. DELETE /tasks/ID Delete a task by ID.

## Project Structure

```
app/
  src/
    components/
      TaskList.js       # Component for displaying the list of tasks
      TaskForm.js       # Component for creating and editing tasks
    api.js              # API functions to interact with the backend
    App.js              # Main application component tUsage
```

```
server/
  index.js              # Backend server and API routes
```

1. **Viewing Tasks** :

* Visit `http://localhost:5173` to view the list of tasks.
* Click the "Create Task" button to navigate to the task creation form.
* Click the "Edit" button next to a task to navigate to the task editing form.

2. **Creating a Task** :

* Fill out the form with the task details and click "Save" to create a new task.

3. **Editing a Task** :

* Modify the task details in the form and click "Save" to update the task.

4. **Deleting a Task** :

* Click the "Delete" button next to a task to remove it from the list.

## License

This project is licensed under the MIT License.

## Acknowledgements

* This project was created as a simple demonstration of a full-stack application using React and Node.js.
