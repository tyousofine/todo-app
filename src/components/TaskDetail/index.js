import React from 'react'

export default function TaskDetail({ description, status, id, dueDate, priority, isComplete, toDelete }) {

    // handler for set isComplete task
    const handleCompleteStatus = () => {
        isComplete(id)
    }

    // handler for delete task
    const handleDelete = () => {
        toDelete(id)
    }

    return (
        // create individual tasks
        <div className='task-details'>
            <h3>{description}</h3>
            <div><strong>Id: </strong>{id}</div>
            <div><strong>Status: </strong>{status}</div>

            {/* conditional to omit displaying duedate if no input received  */}
            {dueDate !== '' &&
                <div><strong>Due Date: </strong>{dueDate}</div>
            }
            <div>
                {/* conditionals to display colors for priority levels */}
                <strong>Priority: </strong>
                {priority === 'High' &&
                    <span>
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: 'red', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ffffbf', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ECFFDC', border: 'none' }} />
                    </span>
                }
                {
                    priority === 'Med' &&
                    <span>
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ffcccb', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: 'yellow', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ECFFDC', border: 'none' }} />
                    </span>
                }
                {(priority === 'Low' || priority === '') &&
                    <span>
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ffcccb', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: '#ffffbf', border: 'none' }} />
                        <button style={{ borderRadius: '50%', width: 10, height: 12, backgroundColor: 'green', border: 'none' }} />
                    </span>
                }
            </div>
            <button onClick={handleCompleteStatus}>Change Status</button>
            <button onClick={handleDelete}>Delete Task</button>
        </div >
    )
}
