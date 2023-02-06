import React from 'react';
import TaskDetail from '../TaskDetail';

export default function Tasks({ task, isComplete, toDelete, toClearAll }) {

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
