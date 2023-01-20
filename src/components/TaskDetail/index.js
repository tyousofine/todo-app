import React from 'react'

export default function TaskDetail({ task, status, id, isComplete, toDelete }) {

    // handler for set isComplete task
    const handleCompleteStatus = () => {
        isComplete(id)
    }

    // handler for delete task
    const handleDelete = () => {
        toDelete(id)
    }

    return (
        <div>
            <div>{task}</div>
            <div>Id: {id}</div>
            <div>Status: {status}</div>
            <button onClick={handleCompleteStatus}>Change Status</button>
            <button onClick={handleDelete}>Delete Task</button>
        </div>
    )
}
