import React, { useState } from 'react';
import uuid from 'react-uuid';
import TaskDetail from '../TaskDetail';

export default function Tasks(props) {

    // initial array of hard coded data objects 
    const [tasks, setTasks] = useState([
        {
            id: uuid(),
            task: "Wash the dishes",
            status: false,
        },
        {
            id: uuid(),
            task: "Cook dinner",
            status: false,
        },
        {
            id: uuid(),
            task: "Finish JS4 lab2",
            status: false,
        },
    ])

    // Change task status handler
    const handleChangeStatus = (id) => {
        const updatedStatus = [...tasks];
        updatedStatus.forEach((task) => {
            if (task.id === id) {
                task.status = !task.status
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
        // let newTasksArray = [...tasks];
        // newTasksArray = [];
        // setTasks(newTasksArray)
        setTasks([]);
    }

    // add new task handler (non dynamic)
    const handleAddTask = () => {
        const newTasksArray = [...tasks,
        {
            id: uuid(),
            task: "new task",
            status: false
        }]
        setTasks(newTasksArray);
    }

    return (
        <>
            <div className='title-bar'>
                <h1>These are the tasks</h1>
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {tasks.map((data, index) =>
            (
                <TaskDetail
                    key={index}
                    id={data.id}
                    task={data.task}
                    status={data.status ? "Done" : "Pending"}
                    isComplete={handleChangeStatus}
                    toDelete={handleDelete}
                />
            ))}

            <button onClick={handleClearTasks}>Clear Tasks</button>

        </>
    )
}
