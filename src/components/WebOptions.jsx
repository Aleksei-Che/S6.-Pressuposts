import React from "react";

function WebOptions({ pages, languages, onPagesChange, onLanguagesChange }) {
    return (
        <div className="web-options">
            <div className="option">
                <label>Nombre de pàgines</label>
                <input 
                    type="number"
                    min="1"
                    value={pages}
                    onChange={(e) => onPagesChange(Number(e.target.value))}
                 />
            </div>
            <div className="option">
                <label>Nombre de llenguatges</label>
                <input 
                    type="number"
                    min="1"
                    value={languages}
                    onChange={(e) => onLanguagesChange(Number(e.target.value))}
                />
            </div>
        </div>
    );
}

export default WebOptions;
