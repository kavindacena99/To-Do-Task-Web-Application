function TaskCard({ name, description }) {
    return(
        <div style={{ border:'1px solid black',borderRadius:7, marginBottom:10, marginTop:80, padding:5 }} className="row">
            <div className="col-md-8">
                <h2>{name}</h2><br />
                <p>{description}</p>
            </div>
            <div className="col-md-4">
                <button className="btn btn-outline-dark" style={{ marginTop:60 }}>Done</button>
            </div>
        </div>
        
    );
}

export default TaskCard;