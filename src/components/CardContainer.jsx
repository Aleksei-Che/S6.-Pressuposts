import React, { useReducer, useState } from "react";
import Tarjeta from "./Tarjeta";
import QuoteForm from "./QuoteForm";
import QuoteList from "./QuoteList";
import { servicesData } from "../data/data";

const initialState = {
    selectedServices: [],
    quotes: [], 
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_SERVICE":
            const isSelected = state.selectedServices.some(
                (service) => service.id === action.service.id
            );
            const updatedServices = isSelected
                ? state.selectedServices.filter((item) => item.id !== action.service.id)
                : [...state.selectedServices, action.service];
            return {
                ...state,
                selectedServices: updatedServices,
            };
        case "ADD_QUOTE":
            return {
                ...state,
                quotes: [...state.quotes, action.quote], 
                selectedServices: [],
            };
        default:
            return state;
    }
}


function CardContainer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [webCost, setWebCost] = useState(0);
    // const [quoteName, setQuoteName] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientTelefon, setClientTelefon] = useState("");
    const [clientEmail, setClientEmail] = useState("");

    const handleToggleService = (service) => {
        dispatch({ type: "TOGGLE_SERVICE", service });
    };

    const handleWebCostChange = (newWebCost) => {
        setWebCost(newWebCost);
    };

    const handleAddQuote = () => {
        const totalPrice = state.selectedServices.reduce((acc, service) => {
            return acc + (service.title === "Web" ? webCost : service.price);
        }, 0);

        const newQuote = {
            id: Date.now(),
            clientName,
            clientTelefon,
            clientEmail,
            services: state.selectedServices,
            totalPrice,
        };
        dispatch({ type: "ADD_QUOTE", quote: newQuote });

        // setQuoteName("");
        setClientTelefon("");
        setClientName("");
        setClientEmail("");
        setWebCost(0);
    };

    const totalPrice = state.selectedServices.reduce((acc, service) => {
        return acc + (service.title === "Web" ? webCost : service.price);
    }, 0);

    return (
        <div className="card-container">
            <div className="cards-section">
                <div className="cards-wrapper">
                    {servicesData.map((card) => (
                        <Tarjeta 
                            key={card.id}
                            {...card}
                            onToggle={() => handleToggleService(card)}
                            selected={state.selectedServices.some((item) => item.id === card.id)}
                            onWebCostChange={card.title === "Web" ? handleWebCostChange : () => {}} 
                        />
                    ))}
                    <div className="total-price">Preu pressupostat: {totalPrice} €</div>
                </div>
            </div>
    
            <div className="quote-section">
                <QuoteForm 
                    clientName={clientName}
                    clientTelefon={clientTelefon}
                    clientEmail={clientEmail}
                    setClientName={setClientName}
                    setClientTelefon={setClientTelefon}
                    setClientEmail={setClientEmail}
                    onSubmit={handleAddQuote}
                />
                <QuoteList quotes={state.quotes} />
            </div>
        </div>
    );
    
}

export default CardContainer;
