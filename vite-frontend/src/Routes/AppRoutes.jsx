import React from 'react'
import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import ErrorPage from '../Pages/Error/ErrorPage';
import Products from '../Pages/Products/Products';
import BottomNavbar from '../Components/Navbar/BottomNavbar';
import ScrollToTop from '../Components/Scroll/ScrollToTop';
import Chatbot from '../Components/Chatbot/Chatbot';

function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path='/Ayurveda-Hub-Frontend/'
                    element={
                        <>
                            <NavBar />
                            <Home key={window.location.pathname}/>
                            <Chatbot />
                            <Footer />
                            <BottomNavbar />
                        </>
                    }
                />
                <Route
                    path='/Ayurveda-Hub-Frontend/products'
                    element={
                        <>
                            <NavBar />
                            <Products key={window.location.pathname}/>
                            <Footer />
                            <Chatbot />
                            <BottomNavbar />
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