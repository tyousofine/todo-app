import React from 'react';

import './styles.scss';
import { FaTasks } from "react-icons/fa";


export default function Header() {
    return (
        <header className='header'>
            <div className='left-container'>
                <FaTasks />
                <h1>Todo App</h1>
            </div>

            {/* dummy button - placeholder for future link / button function */}
            <div className='btn-container'>
                <button>some future function</button>
            </div>

        </header>
    )
}
