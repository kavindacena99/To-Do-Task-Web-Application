const express = require('express');
const mysql = require('mysql2/promise');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');

dotenv.config();

const app = express();

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