import React from 'react';
import TaskDetail from '../TaskDetail';

export default function Tasks({ task, isComplete, toDelete, onClearAllTasks }) {


    //initial array of hard coded data objects
    // const [tasks, setTasks] = useState([
    //     {
    //         id: uuid(),
    //         task: "Wash the dishes",
    //         status: false,
    //     },
    //     {
    //         id: uuid(),
    //         task: "Cook dinner",
    //         status: false,
    //     },
    //     {
    //         id: uuid(),
    //         task: "Finish JS4 lab2",
    //         status: false,
    //     },
    // ])


    const handleAddTask = () => {
        // const newTasksArray = [...tasks,
        // {
        //     id: uuid(),
        //     task: " new task",
        //     status: false
        // }]
        // setTasks(newTasksArray);
    }

    return (
        <>
            <div className='title-bar'>
                <h1>These are the tasks</h1>
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {task.map((data, index) =>
            (
                <TaskDetail
                    key={index}
                    id={data.id}
                    description={data.description}
                    status={data.status ? "Done" : "Pending"}
                    isComplete={isComplete}
                    toDelete={toDelete}
                />
            ))}



        </>
    )
}
