# simple-todo-app

This is a simple Todo application built with **React (frontend)** and **Node.js/Express (backend)**. It allows users to create, delete, and toggle todos with a simple user interface.

## Installation

#1.Clone the repository <br>
git clone https://github.com/OlesiaFa/simple-todo-app.git <br>
cd simple-todo-app <br>

#2. Install backend dependencies <br> <br>
cd simple-todo-app <br>
npm install <br> <br>

cd ../client <br>
npm install <br>

#3.Start the full app (client+server) from the root app <br>
npm run dev<br>
it run frontend on http://localhost:3000/ <br>
backend: Server running on port: 5001 <br>

#API Endpoints <br> <br>

GET	/api/todos	Get all todos <br>
POST	/api/todos	Add new todo <br>
PUT	/api/todos/:id	Toggle todo completion <br>
DELETE	/api/todos/:id	Delete a todo<br>
