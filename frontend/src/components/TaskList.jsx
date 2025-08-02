import TaskCard from "./TaskCard";

function TaskList(){
    const tasks = [
        { id: 1, title: 'Task 1', description: 'Description for Task 1' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2' },
        { id: 3, title: 'Task 3', description: 'Description for Task 3' }
    ];
    return(
        <div>
            {tasks.map((task)=>(<TaskCard key={task.id} name={task.title} description={task.description} />))}
        </div>
    );
}

export default TaskList;