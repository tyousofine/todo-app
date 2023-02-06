import React, { useState } from 'react';



export default function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [errorMessages, setErrorMessages] = useState('');
    const [success, setSuccess] = useState(false);


    const createNewTask = (event) => {
        event.preventDefault();

        setSuccess(false);

        let validate = []
        if (description === "") {
            validate.push("Please enter a description")

        }
        setErrorMessages(validate)

        if (validate.length === 0) {

            onAddTask(description, status)
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false)
            }, 2000)
        }
    }

    return (
        <>
            <hr />
            {errorMessages.length > 0 && (
                <div>
                    Invalid data:
                    <ul>{errorMessages.map((e, index) => (
                        <li key={index}>{e}</li>
                    ))}
                    </ul>
                </div>
            )
            }

            {success === true &&
                <div><h3>Task Created!</h3></div>
            }



            <h2>Create New Task:</h2>
            <form onSubmit={createNewTask}>
                <label>
                    Task:
                    <input
                        type="text"
                        maxLength={150}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='create task'
                    />
                </label>
                <label>
                    Status:
                    <select value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value={false}>Pending</option>
                        <option value={true}>Done</option>
                    </select>
                </label>
                <button type="submit">Create</button>
            </form>
        </>
    )

}