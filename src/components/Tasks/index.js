import React from 'react';
import TaskDetail from '../TaskDetail';
import { useSelector, useDispatch } from 'react-redux';
import { clearTasks } from '../../redux/tasksSlice';
import { clearTasksFromTasksCollection } from '../../database/write';



import './styles.scss'

export default function Tasks() {
    const task = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    // clear all tasks hanlder
    const handleClearTasks = async () => {

        await clearTasksFromTasksCollection();
        dispatch(clearTasks())

    }

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

                {task.length > 0 &&
                    <div>
                        <button onClick={handleClearTasks}>Clear Tasks</button>
                    </div>
                }
                {task.length === 0 &&
                    <div><br /><h4>No Tasks to display</h4></div>
                }
            </div>

        </div>
    )
}

