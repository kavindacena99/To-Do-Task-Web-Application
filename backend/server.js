const express = require('express');
const mysql = require('mysql2/promise');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_app'
});

app.use(express.json());

app.use((req,res,next) => {
    req.db = db;
    next();
});

app.use("/api/tasks",taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);