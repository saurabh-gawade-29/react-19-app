import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink to="/" className="nav-link text-light fw-bold">
                        COUNTRY ATLAS
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/country" className="nav-link">Country</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar