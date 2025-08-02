import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

function Home(){
    return(
        <div class="container-fluid">
            <div class="row vh-100">
                <div class="col-md-6">
                    <AddTask />
                </div>

                <div class="col-md-5">
                    <TaskList />
                </div>
            </div>
        </div>
    );
}

export default Home;