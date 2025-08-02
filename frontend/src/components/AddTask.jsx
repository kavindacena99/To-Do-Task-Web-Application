function AddTask(){
    return(
        <div className="m-5">
            <h2>Add a Task</h2><br />
            <form className="form col-md-9">
                <input type="text" className="form-control" placeholder="Task" /> <br />
                <textarea className="form-control" placeholder="Description" /> <br />
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddTask;