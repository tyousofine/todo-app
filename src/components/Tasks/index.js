import React from 'react';
import TaskDetail from '../TaskDetail';
import { useSelector } from 'react-redux';

import './styles.scss'

export default function Tasks() {

    const task = useSelector((state) => state.tasks.tasks);

    // clear all tasks hanlder
    const handleClearTasks = () => {
        // setTask([])
        // console.log(task)
    }
    // TODO: replace later

    return (
        <div>
            <div className="tasks-container">
                <div className='title-bar'>
                    <h2>These are the tasks</h2>
                </div>
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
                {/* celar button set to only be visible when tasks on screen */}
                {task.length > 0 &&
                    <button onClick={handleClearTasks}>Clear Tasks</button>
                }
                {task.length === 0 &&
                    <div><br /><h2>No Tasks to display</h2></div>
                }
            </div>

        </div>
    )
}

