import React from 'react';
import TaskDetail from '../TaskDetail';
import { useSelector, useDispatch } from 'react-redux';
import { clearTasks } from '../../redux/tasksSlice';
//TODO: REMOVE THIS TEST CODE
// import { useNavigate } from 'react-router-dom';

import './styles.scss'

export default function Tasks() {

    const task = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    // clear all tasks hanlder
    const handleClearTasks = () => {
        dispatch(clearTasks())
    }

    // helper function for pnf test button
    // TODO: remote this test code
    // const navigate = useNavigate();
    // const pnfCheck = () => {
    //     navigate('/asdf')
    // }

    return (
        <div>
            <div className="tasks-container">
                <div className='title-bar'>
                    <h2>Your Tasks</h2>


                </div>
                <div className='task-list'>
                    {task.map((data, index) =>
                    (
                        <TaskDetail
                            key={index}
                            id={data.id}
                            description={data.description}
                            status={data.status ? "Done" : "Pending"}
                            priority={data.priority}
                        />
                    ))}
                </div>
                {/* celar button set to only be visible when tasks on screen */}
                {task.length > 0 &&
                    <div>
                        <button onClick={handleClearTasks}>Clear Tasks</button>
                        {/* <button onClick={pnfCheck}>test pnf</button> */}
                    </div>
                }
                {task.length === 0 &&
                    <div><br /><h2>No Tasks to display</h2></div>
                }
            </div>

        </div>
    )
}

