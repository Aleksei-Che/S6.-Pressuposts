import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import CardContainer from "./CardContainer";

function CalculatorPage() {
    const navigate = useNavigate();

    const handleBackToWelcome = () => {
        navigate('/');
    };

    return (
        <div className="calculator-page">
            <Navbar />
            <Banner />
            <CardContainer />
            <button onClick={handleBackToWelcome} className="back-button">Torna a la benvinguda</button>
        </div>
    );
}
export default CalculatorPage;