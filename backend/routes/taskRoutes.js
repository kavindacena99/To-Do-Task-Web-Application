const express = require('express');

const router = express.Router();

router.get("/",async (req,res) => {
    try {
        const [rows] = await req.db.query("SELECT * FROM tasks");
        console.log('Fetched todos:', rows);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});

router.post("/",async (req,res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    try {
        const [result] = await req.db.query("INSERT INTO tasks (name, description) VALUES (?, ?)", [title, description]);
        res.status(201).json({ id: result.insertId, title, description });
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await req.db.query("DELETE FROM tasks WHERE tid = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: `Task with ID ${id} deleted successfully` });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;