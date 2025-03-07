import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import ErrorPage from '../Pages/Error/ErrorPage';
import Products from '../Pages/Products/Products';

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <NavBar />
                            <Home />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path='/products'
                    element={
                        <>
                            <NavBar />
                            <Products />
                            <Footer />
                        </>
                    }
                />
                <Route 
                    path="*" 
                    element={<ErrorPage />} 
                />  {/* Handle Unknown Routes */}
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes