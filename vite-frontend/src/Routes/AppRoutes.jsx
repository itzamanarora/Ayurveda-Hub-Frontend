import React from 'react'
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import ErrorPage from '../Pages/Error/ErrorPage';
import Products from '../Pages/Products/Products';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/Ayurveda-Hub-Frontend/'
                    element={
                        <>
                            <NavBar />
                            <Home />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path='/Ayurveda-Hub-Frontend/products'
                    element={
                        <>
                            <NavBar />
                            <Products />
                            <Footer />
                        </>
                    }
                />
                <Route 
                    path="/Ayurveda-Hub-Frontend/*" 
                    element={<ErrorPage />} 
                />  {/* Handle Unknown Routes */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes