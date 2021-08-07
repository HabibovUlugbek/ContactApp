import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-ld navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand mx-3">
                Contact App
            </Link>
        </nav>
    )
}

export default Navbar
