import React, { useReducer, useState } from "react";
import Tarjeta from "./Tarjeta";
import { servicesData } from "../data/data";

const initialState = {
    selectedServices: [],
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
        default:
            return state;
    }
}

function CardContainer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [webCost, setWebCost] = useState(0);

    const handleToggleService = (service) => {
        dispatch({ type: "TOGGLE_SERVICE", service });
    };

    const handleWebCostChange = (newWebCost) => {
        setWebCost(newWebCost);
    };

    const totalPrice = state.selectedServices.reduce((acc, service) => {
        return acc + (service.title === "Web" ? webCost : service.price);
    }, 0);

    return (
        <div className="card-container">
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
    );
}

export default CardContainer;
