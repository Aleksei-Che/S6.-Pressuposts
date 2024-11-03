import React, { useState, useEffect } from 'react';
import WebOptions from './WebOptions';

function Tarjeta({ title, description, price, onToggle, selected, onWebCostChange }) {
    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(1);
    const [webCost, setWebCost] = useState(price);

    useEffect(() => {
        if (title === "Web" && selected) {
            const calculatedWebCost = price + (pages + languages) * 30;
            setWebCost(calculatedWebCost);
            onWebCostChange(calculatedWebCost); 
        } else {
            setWebCost(price);
            onWebCostChange(price);
        }
    }, [pages, languages, selected, price, title, onWebCostChange]);

    return (
        <div className="card">
            <div className="card-main">
                <div className="card-header">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <p className="price">{webCost} €</p>
                <div className="checkbox-container">
                    <input type="checkbox" onChange={onToggle} checked={selected} />
                    <label>Afegir</label>
                </div>
            </div>
            {title === "Web" && selected && (
                <WebOptions 
                    pages={pages} 
                    languages={languages} 
                    onPagesChange={setPages} 
                    onLanguagesChange={setLanguages}
                />
            )}
        </div>
    );
}

export default Tarjeta;
