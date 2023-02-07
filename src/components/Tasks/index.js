import React from 'react';
import TaskDetail from '../TaskDetail';


export default function Tasks({ task, isComplete, toDelete, toClearAll }) {

    return (
        <>
            <div className='title-bar'>
                <h1>These are the tasks</h1>
            </div>
            {task.map((data, index) =>
            (
                <TaskDetail
                    key={index}
                    id={data.id}
                    description={data.description}
                    status={data.status ? "Done" : "Pending"}
                    priority={data.priority}
                    isComplete={isComplete}
                    toDelete={toDelete}
                />
            ))}
            {/* celar button set to only be visible when tasks on screen */}
            {task.length > 0 &&
                <button onClick={toClearAll}>Clear Tasks</button>
            }
            {task.length === 0 &&
                <div><br /><h2>No Tasks to display</h2></div>
            }

        </>
    )
}

