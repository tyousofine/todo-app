import React from 'react'
import { Link } from 'react-router-dom'
import TasksPage from '../TasksPage'


export default function NotFoundPage() {

    return (
        <>
            <div>Page not found</div>

            <div>click <Link to='/' element={<TasksPage />}>here </Link>to go back to home page</div>
        </>
    )
}
