import { useEffect,useState } from "react";
import TaskCard from "./TaskCard";
import API from "../services/api";

function TaskList(){
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await API.get("/tasks");
                setTasks(response.data);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        };

        fetchTasks();
    }
    , []);

    const handleDelete = async (id) => {
        const response = await API.delete(`/tasks/${id}`);
        setTasks(tasks.filter(task => task.tid !== id));
    }

    return(
        <div>
            {tasks.map((task)=>(<TaskCard key={task.tid} id={task.tid} name={task.title} description={task.description} onDelete={handleDelete} />))}
        </div>
    );
}

export default TaskList;