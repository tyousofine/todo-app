import React from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import { FaTasks } from "react-icons/fa";
import NavBar from '../NavBar';


export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='app-title'>
                    <FaTasks />
                    <h1>Todo App</h1>
                </div>
            </Link>
            <div className='navbar'>
                <NavBar></NavBar>
            </div>
        </header>
    )
}
