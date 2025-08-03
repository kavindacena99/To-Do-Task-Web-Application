import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

function Home(){
    return(
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6">
                    <AddTask />
                </div>

                <div className="col-md-5">
                    <TaskList />
                </div>
            </div>
        </div>
    );
}

export default Home;