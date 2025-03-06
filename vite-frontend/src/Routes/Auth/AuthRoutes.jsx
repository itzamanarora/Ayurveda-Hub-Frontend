import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../../Pages/Auth/Register';

function AuthRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                 path='register'
                 element={<Register />}
                 />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AuthRoutes