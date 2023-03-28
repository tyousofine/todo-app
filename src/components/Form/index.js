import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import { saveNewTasktoDB } from '../../database/write';

import './styles.scss'


export default function Form() {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [priority, setPriority] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [success, setSuccess] = useState(false);
    const [isSaving, setIsSaving] = useState(false);


    const navigate = useNavigate();

    const dispatch = useDispatch();

    // key/values for task priorities
    const priorities = [
        { id: 'red', text: 'High' },
        { id: 'yellow', text: 'Med' },
        { id: 'green', text: 'Low' },
    ]

    // crate New task
    const createNewTask = async (event) => {
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
            setIsSaving(true);
            // object to pass to store:
            const data = { description, status, priority }

            const saveToDB = await saveNewTasktoDB(data);
            console.log(typeof data.status, 'status from form creation')
            if (saveToDB) {
                data.id = saveToDB;
                // pass props
                dispatch(addTask(data))
                setSuccess(true);

                // clear inputs
                setDescription('');
                setStatus(false);
                setPriority('')

                // time for successful task creation
                setTimeout(() => {
                    setSuccess(false)
                }, 2500)
            } else {
                setErrorMessages(['Could not save data'])
            }
        }
        setIsSaving(false);
    }

    // function for navigate back button
    const navigateBack = () => {
        navigate('/')
    }

    if (isSaving === true) {
        return <div className='saving-message' >Saving....</div>
    }


    return (
        <div className='form-container'>
            {/* create task form */}
            <div className='title-bar'>
                <h2>Create New Task</h2>
            </div>
            <form onSubmit={createNewTask}>

                {/* task description */}
                <label>
                    <strong>Task:</strong>

                    <input
                        type="text"
                        maxLength={150}
                        style={{ maxWidth: '95%' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='create task'
                        autoFocus

                    />
                </label>

                {/* task status */}
                <label>
                    <strong>Status:</strong>

                    <select value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value={false}>Pending</option>
                        <option value={true}>Done</option>
                    </select>
                </label>


                {/* priority  */}
                <strong>Priority:</strong>

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

                    </label>

                ))}
                <br></br>

                {/* submit  */}
                <button type="submit">Add Task</button>
                <button type='button' onClick={() => navigateBack()}>Done Adding</button>

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