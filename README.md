## simple-todo-app

This is a simple Todo application built with **React (frontend)** and **Node.js/Express (backend)**. It allows users to create, delete, and toggle todos with a simple user interface.

# Installation

#1.Clone the repository
git clone https://github.com/OlesiaFa/simple-todo-app.git
cd simple-todo-app

#2. Install backend dependencies
cd simple-todo-app
npm install

cd ../client
npm install

#3.Start the full app (client+server) from the root app
npm run dev
it run frontend on http://localhost:3000/
backend: Server running on port: 5001

#API Endpoints

GET	/api/todos	Get all todos
POST	/api/todos	Add new todo
PUT	/api/todos/:id	Toggle todo completion
DELETE	/api/todos/:id	Delete a todo
