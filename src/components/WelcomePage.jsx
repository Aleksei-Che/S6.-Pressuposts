import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage(){
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/calculator')
    };

    return (
        <div className="welcome-page">
            <h1>Bienvingut a la nostra calculadora de pressupost!</h1>
            <p>Aquesta web t'ajudarà a calcular el cost dels nostres serveis. Pots triar entre diversos serveis i personalitzar-los segons les teves necessitats.</p>
            <button onClick={handleStart} className="start-button">Comença</button>
        </div>
    );
}
export default WelcomePage;