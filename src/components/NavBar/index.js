import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (

        <>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/add'>add</NavLink>
            <NavLink to='/help'>help</NavLink>

        </>
    )
}
