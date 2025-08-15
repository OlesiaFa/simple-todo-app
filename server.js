const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});