import React from "react";
import { useState } from "react";
import API from "../services/api";

function AddTask(){
    const [title,setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleTask = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/tasks", { title,description });
            if (response.status === 201) {
                alert("Task added successfully");
                window.location.reload(); 
            } else {
                alert("Failed to add task");
            }
        } catch (error) {
            alert("An error occurred while adding the task");
        }
    }

    return(
        <div className="m-5">
            <h2>Add a Task</h2><br />
            <form className="form col-md-9" onSubmit={handleTask}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Task" /> <br />
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /> <br />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddTask;