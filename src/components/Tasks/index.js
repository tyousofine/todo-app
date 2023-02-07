import React from 'react';
import TaskDetail from '../TaskDetail';
import { StyleSheet } from 'react'

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
                    dueDate={data.dueDate}
                    priority={data.priority}
                    isComplete={isComplete}
                    toDelete={toDelete}
                />
            ))}

            {task.length > 0 &&
                <button onClick={toClearAll}>Clear Tasks</button>
            }
        </>
    )
}

