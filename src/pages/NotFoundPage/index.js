import React from 'react'
import { Link } from 'react-router-dom'
import TasksPage from '../TasksPage'
import './styles.scss'


export default function NotFoundPage() {
    const book = require('./../../images/book.jpg');


    return (
        <div className='page-not-found'>
            <img src={book} alt="image of a book with missing page" />

            <div className='oops'>Page not found!</div>
            <div className='page-not-fount-redirect'>click          <Link to='/' element={<TasksPage />}>here </Link> to go back to home page
            </div>

        </div>
    )
}
