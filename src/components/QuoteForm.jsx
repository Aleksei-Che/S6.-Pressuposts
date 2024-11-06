// components/QuoteForm.jsx
import React from "react";

function QuoteForm({ clientName, clientTelefon, clientEmail, setClientName, setClientTelefon, setClientEmail, onSubmit }) {
    return (
        <div className="card"> 
            <h3>Demanar pressupost</h3>
            <div className="card-main"> 
                <input 
                    type="text" 
                    placeholder="Nom" 
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)}
                    className="quote-input"
                />
                <input 
                    type="text" 
                    placeholder="Telèfon" 
                    value={clientTelefon} 
                    onChange={(e) => setClientTelefon(e.target.value)}
                    className="quote-input"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={clientEmail} 
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="quote-input"
                />
                <button onClick={onSubmit}>Sol·licitar pressupost</button>
            </div>
        </div>
    );
}

export default QuoteForm;
