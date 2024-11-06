import React from "react";
import "./styles/QuoteList.css"

function QuoteList({quotes}){

    if (quotes.length === 0) return null;

    return (
        <div className="quote-list">
            <h3>Pressuposts en curs:</h3>
            {quotes.map((quote) => (
                <div key={quote.id} className="quote-card">
                    <div className="quote-client">
                        <h4>{quote.clientName}</h4>
                        <p>{quote.clientEmail}</p>
                        <p>{quote.clientTelefon}</p>
                    </div>
                    <div className="quote-services">
                        <p><strong>Serveis contractats:</strong></p>
                        <ul>
                            {quote.services.map((service) => (
                                <li key={service.id}>{service.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="quote-total">
                        <p><strong>Total:</strong> {quote.totalPrice} €</p>
                    </div>
                </div>
            ))}
        </div>
    );
    
}
export default QuoteList;