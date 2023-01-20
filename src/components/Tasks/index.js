import React, { useState } from 'react';
import uuid from 'react-uuid';
import TaskDetail from '../TaskDetail';

export default function Tasks(props) {

    const [tasks, setTasks] = useState([
        {
            id: uuid(),
            task: "Wash the dishes",
            status: "Pending",
        },
        {
            id: uuid(),
            task: "Cook dinner",
            status: "Pending",
        },
        {
            id: uuid(),
            task: "Finish JS4 lab2",
            status: "Pending",
        },
    ])

    // Change task status handler
    const handleChangeStatus = (id) => {
        const updatedStatus = [...tasks];
        updatedStatus.forEach((task) => {
            if (task.id === id) {
                task.status = "Done"
            }
            setTasks(updatedStatus);
        })
    }

    // Delete task handler using 
    const handleDelete = (id) => {
        const newTasksArray = [...tasks];
        newTasksArray.forEach((task) => {
            if (task.id === id) {
                setTasks(newTasksArray.filter((matched) => {
                    return id !== matched.id
                }))
            }
        })
    }

    // function to clear all tasks
    const handleClearTasks = () => {
        let newTasksArray = [...tasks];
        newTasksArray = [];
        setTasks(newTasksArray)
    }

    return (
        <main>
            {tasks.map((data, index) => (
                <TaskDetail
                    key={index}
                    id={data.id}
                    task={data.task}
                    status={data.status}
                    isComplete={handleChangeStatus}
                    toDelete={handleDelete}
                />
            ))}
            <button onClick={handleClearTasks}>Clear Tasks</button>
        </main>
    )
}
