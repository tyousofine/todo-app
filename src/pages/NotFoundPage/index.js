import React from 'react'
import { Link } from 'react-router-dom'
import TasksPage from '../TasksPage'
import './styles.scss'
import { IoArrowBack } from "react-icons/io5"

export default function NotFoundPage() {
    const book = require('./../../images/book.jpg');

    return (
        <div className='page-not-found'>
            <img src={book} alt="book with missing page" />

            <div className='oops'>Page not found!</div>

            <div className='page-not-found-redirect'><Link to='/' element={<TasksPage />}><IoArrowBack /><p>Back</p></Link></div>


        </div>
    )
}
