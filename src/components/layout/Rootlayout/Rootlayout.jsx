import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Rootlayout = () => {
    return (
        <>
            <Navbar />
            <div className="container py-4">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Rootlayout