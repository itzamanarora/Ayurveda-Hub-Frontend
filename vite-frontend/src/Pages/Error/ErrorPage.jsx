import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import Button1 from "../../Components/Buttons/Button1";
import Logo from "../../Components/Logo/logo";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="error-container">
            <span className="container-line"></span>
            <span className="container-line2"></span>
            <span className="container-line3"></span>
                <div className="error-container1">
                    <img src='.\assets\gif-error1.gif' alt="error-image" className="error-image" />
                    <div className="error-container2">
                        <Logo />
                        <h1 className="error-code">404</h1>
                        <h2 className="error-message">Oops! Page Not Found</h2>
                        <p className="error-description">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                        <Button1 onClick={() => navigate('/Ayurveda-Hub-Frontend/')} text={'Go Back Home'} bgColor={'#3A633C'} textColor={'#FFF7E2'} height={'3rem'} width={'8rem'} bgColorhover={'#264228'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
