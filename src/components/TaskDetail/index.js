import React, { useState } from 'react'
import './styles.css'

export default function TaskDetail({ description, status, id, priority, isComplete, toDelete }) {

    const [isRed, setIsRed] = useState(true);
    const [isYellow, setIsYellow] = useState(true);
    const [isGreen, setIsGreen] = useState(true);
    // handler for set isComplete task
    const handleCompleteStatus = () => {
        isComplete(id)
    }

    // handler for delete task
    const handleDelete = () => {
        toDelete(id)
    }

    // const handleClassYellow = (e) => {
    //     setIsYellow(current => !current)
    // }


    return (
        // create individual tasks
        <div className='task-details'>
            <h3>{description}</h3>
            <div><strong>Id: </strong>{id}</div>
            <div><strong>Status: </strong>{status}</div>

            <div>
                {/* conditionals to display colors for priority levels */}
                <strong>Priority: </strong>
                {/* high priority */}
                {priority === 'High' &&
                    <span>
                        <button className='red' />
                        <button className='pale-yellow' />
                        <button className='pale-green' />
                    </span>
                }

                {/* medium priority */}
                {priority === 'Med' &&
                    <span>
                        <button className='pale-red' />
                        <button className='yellow' />
                        <button className='pale-green' />
                    </span>
                }
                {/* low priority */}
                {priority === 'Low' &&
                    <span>
                        <button className='pale-red' />
                        <button className='pale-yellow' />
                        <button className='green' />
                    </span>
                }
                {/* no priority designation when none has been picked */}
                {priority === '' &&
                    <span>
                        <button className='pale-red' />
                        <button className='pale-yellow' />
                        <button className='pale-green' />
                    </span>
                }
            </div>
            <button onClick={handleCompleteStatus}>Change Status</button>
            <button onClick={handleDelete}>Delete Task</button>
        </div >
    )
}
