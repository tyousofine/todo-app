import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './styles.scss'

export default function Help() {
    return (
        <div className='help-container'>
            <article>
                <h2>Help</h2>
                <h4>How to do our todo app?</h4>

                <Outlet />
            </article>
            <aside>
                <NavLink to='howToAdd'>How to Add task</NavLink>
                <NavLink to='howToDelete'>How to delete task/s</NavLink>
                <NavLink to='priorityGuide'>Priority color guide</NavLink>
            </aside>
        </div>

    )
}
