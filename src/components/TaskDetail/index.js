import React, { useState } from 'react'
import './styles.scss'

import { MdTimer } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


export default function TaskDetail({ description, status, id, priority, isComplete, toDelete }) {

    const [selected, setSelected] = useState(priority);

    const handleCompleteStatus = () => {
        isComplete(id);
    }

    // handler for delete task
    const handleDelete = () => {
        toDelete(id);
    }

    return (
        // create individual tasks
        <div className='task-details'>
            <h3>{description}</h3>
            <div className='id'><strong>Id: </strong>{id}</div>
            <div><strong>Status: </strong>{status}</div>

            <div>
                <strong>Priority: </strong>

                {/* conditionals to display colors for priority levels */}

                {/* high priority + toggle option for priority color change*/}
                <span>
                    <button
                        className={'red' + (selected !== 'red' ? ' pale-red' : '')}
                        onClick={() => setSelected('red')}
                    />
                    <button className={'yellow' + (selected !== 'yellow' ? ' pale-yellow' : '')}
                        onClick={() => setSelected('yellow')}
                    />
                    <button className={'green' + (selected !== 'green' ? ' pale-green' : '')}
                        onClick={() => setSelected('green')}
                    />
                </span>
            </div>
            {/* conditionals to display pending / complete buttons + icons  */}
            {
                status === 'Pending' &&
                <button className='status-btn'
                    onClick={handleCompleteStatus}>
                    <MdTimer />
                    Status
                </button>
            }
            {
                status === 'Done' &&
                <button className='status-btn'
                    onClick={handleCompleteStatus}>
                    <MdOutlineCheckCircleOutline />
                    Status
                </button>
            }

            {/* delete button */}
            <button className='delete-btn' onClick={handleDelete}><RiDeleteBinLine />Delete</button>
        </div >
    )
}
