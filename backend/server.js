const express = require('express');
const mysql = require('mysql2/promise');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'todo_app'
});

app.use(cors());
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