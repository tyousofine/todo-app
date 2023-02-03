import React, { useState } from 'react';



export default function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const createNewTask = (event) => {
        event.preventDefault();
        console.log(description)
        console.log(status)

        onAddTask(description, status)
    }


    return (
        <>
            <h2>Create New Task:</h2>
            <form onSubmit={createNewTask}>
                <label>
                    Task:
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='create task'
                    />
                </label>
                <label>
                    Status:
                    <select value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value=""> - Select - </option>
                        <option value="pnd">Pending</option>
                        <option value="done">Done</option>
                    </select>
                </label>
                <button type="submit">Create</button>
            </form>
        </>
    )

}