import React, { useState } from 'react';
import './styles.css'



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

            setDescription('');
            setStatus(false);

            setTimeout(() => {
                setSuccess(false)
            }, 2000)
        }
    }



    return (
        <div className='form-container'>




            <h2>Create New Task:</h2>
            <form onSubmit={createNewTask}>
                <label>
                    Task:
                    <br />
                    <input
                        type="text"
                        maxLength={150}
                        style={{ maxWidth: '100%' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='create task'
                    />
                </label>
                <label>
                    Status:
                    <br />
                    <select value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value={false}>Pending</option>
                        <option value={true}>Done</option>
                    </select>
                </label>
                <br />
                <button type="submit">Add Task</button>

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
                    <div><h2 style={{ color: 'red' }}>Task Created!</h2></div>
                }

            </form>
        </div>
    )

}