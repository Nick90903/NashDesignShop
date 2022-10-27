import React from "react";
import "../Styles/Pricing.css"
function LoadPricing() {
    return (
        <div id="Pricing">
            <div id="calculator">
                <div className="weight-Container  input-container">
                    <label htmlFor="weight">Weight: </label>
                    <input type="number" id="weight"></input>
                </div>
                <div className="time-Container  input-container">
                    <label htmlFor="time">Time: </label>
                    <input type="number" id="time"></input>
                </div>
                <div className="cost-weight-Container  input-container">
                    <label htmlFor="cost-weight">Cost weight: </label>
                    <input type="number" id="cost-weight"></input>
                </div>
                <div className="cost-time-Container  input-container">
                    <label htmlFor="cost-time">Cost time: </label>
                    <input type="number" id="cost-time"></input>
                </div>
                <div className="button-Container">
                    <button id="submit">Submit</button>
                </div>
            </div>
            <div className="outputs">
                <div className="final-Cost"></div>
            </div>
        </div>
    );
}

export default LoadPricing