function TaskCard({ id,name, description, onDelete }) {
    const handleDelete = async () => {
        const response = await onDelete(id);
        if (response.status === 200) {
            alert("Task deleted successfully");
            window.location.reload(); 
        } else {
            alert("Failed to delete task");
        }
    };

    return(
        <div style={{ border:'1px solid black',borderRadius:7, marginBottom:10, marginTop:80, padding:5 }} className="row">
            <div className="col-md-8">
                <h2>{name}</h2><br />
                <p>{description}</p>
            </div>
            <div className="col-md-4">
                <button className="btn btn-outline-dark" style={{ marginTop:60 }} onClick={handleDelete}>Done</button>
            </div>
        </div>
        
    );
}

export default TaskCard;