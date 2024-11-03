import React from "react";

function WebOptions({ pages, languages, onPagesChange, onLanguagesChange }) {
    const incrementPages = () => onPagesChange(pages + 1);
    const decrementPages = () => onPagesChange(pages - 1);
    const incrementLanguages = () => onLanguagesChange(languages + 1);
    const decrementLanguages = () => onLanguagesChange(languages - 1);

    return (
        <div className="web-options">
            <div className="option">
                <label>Nombre de pàgines</label>
                <div className="input-group">
                    <button onClick={decrementPages} className="btn-change">-</button>
                    <input 
                    type="number"
                    min="1"
                    value={pages}
                    onChange={(e) => onPagesChange(Number(e.target.value))}
                 />
                 <button onClick={incrementPages} className="btn-change">+</button>
                </div>
            </div>
            <div className="option">
                <label>Nombre de llenguatges</label>
                <div className="input-group">
                    <button onClick={decrementLanguages} className="btn-change">-</button>
                    <input 
                    type="number"
                    min="1"
                    value={languages}
                    onChange={(e) => onLanguagesChange(Number(e.target.value))}
                />
                <button onClick={incrementLanguages} className="btn-change">+</button>
                </div>
                
            </div>
        </div>
    );
}

export default WebOptions;
