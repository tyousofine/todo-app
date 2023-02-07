import React, { useState } from 'react';
import './styles.css'



export default function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);

    const [priority, setPriority] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [success, setSuccess] = useState(false);

    // key/values for task priorities
    const priorities = [
        { id: 'High', text: 'High' },
        { id: 'Med', text: 'Med' },
        { id: 'Low', text: 'Low' },
    ]

    // crate New task
    const createNewTask = (event) => {
        event.preventDefault();

        setSuccess(false);

        // validations
        let validate = []
        if (description === "") {
            validate.push("Please enter a description")
        }
        setErrorMessages(validate)

        // validated - proceed
        if (validate.length === 0) {

            // pass props
            onAddTask(description, status, priority)
            setSuccess(true);
            // clear inputs

            setDescription('');
            setStatus(false);
            setPriority('')


            // time for successful task creation
            setTimeout(() => {
                setSuccess(false)
            }, 2500)
        }
    }

    return (
        <div className='form-container'>
            {/* create task form */}
            <form onSubmit={createNewTask}>
                <h2>Create New Task:</h2>

                {/* task description */}
                <label>
                    <strong>Task:</strong>
                    <br />
                    <input
                        type="text"
                        maxLength={150}
                        style={{ maxWidth: '95%' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='create task'
                    />
                </label>

                {/* task status */}
                <label>
                    <strong>Status:</strong>
                    <br />
                    <select value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value={false}>Pending</option>
                        <option value={true}>Done</option>
                    </select>
                </label>
                <br />

                {/* priority  */}
                <strong>Priority:</strong>
                <br />
                {priorities.map((item) => (
                    <label key={item.id}>
                        <input
                            type='radio'
                            value={item.id}
                            style={{ margin: 5 }}
                            checked={priority === item.id}
                            onChange={(e) => setPriority(e.target.value)}
                        />
                        {item.text}
                        <br />
                    </label>
                ))}
                <br />

                {/* submit  */}
                <button type="submit">Add Task</button>

                {/* invalid input error message conditional */}
                {
                    errorMessages.length > 0 && (
                        <div style={{ marginTop: 10 }}>
                            <strong
                                style={{ color: 'red' }}>
                                Invalid data:
                            </strong>
                            <ul>{errorMessages.map(
                                (e, index) => (
                                    <li key={index}>{e}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }

                {/* create task success message conditional  */}
                {success === true &&
                    <div>
                        <h3
                            style={{ color: 'green', marginTop: 10 }}>
                            Task Created!
                        </h3>
                    </div>
                }
            </form >
        </div >
    )

}