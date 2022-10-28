import React, { useState } from "react";
import "../Styles/Pricing.css"
import RenderHeader from "./Header";
function LoadPricing() {

    const [weight, setWeight] = useState(0);
    const [time, setTime] = useState(0);
    const [costWeight, setcostWeight] = useState(20);
    const [costTime, setCostTime] = useState(0.25);
    const [humanTime, setHumanTime] = useState(5);

    function calculateCost() {
        return (weight * (costWeight / 1000 * 2.2)) + (time * costTime) + (humanTime * (20 / 60));
    }

    return (
        <div id="Pricing">
            <div id="calculator">
                <div className="weight-Container  input-container">
                    <label htmlFor="weight">Weight (g): </label>
                    <input onChange={e => setWeight(e.target.value)} type="number" id="weight"></input>
                </div>
                <div className="time-Container  input-container">
                    <label htmlFor="time">Time (h): </label>
                    <input onChange={e => setTime(e.target.value)} type="number" id="time"></input>
                </div>
                <div className="cost-weight-Container  input-container">
                    <label htmlFor="cost-weight">Cost weight (K): </label>
                    <input onChange={e => setcostWeight(e.target.value)} value={costWeight} type="number" id="cost-weight"></input>
                </div>
                <div className="cost-time-Container  input-container">
                    <label htmlFor="cost-time">Cost time (h): </label>
                    <input onChange={e => setCostTime(e.target.value)} value={costTime} type="number" id="cost-time"></input>
                </div>
                <div className="button-Container">
                    <button id="submit">Calculate</button>
                </div>
            </div>
            <div className="outputs">
                <div className="final-Cost">Cost: </div>
                <div id="final">${calculateCost().toFixed(2)}</div>
            </div>
            <div className="content">
                <div className="disclaimer text">
                    There is a base cost of $1.67 to get the part sliced, cleaned 
                    up and on the printer. This cost covers the time to start the 
                    print. 
                </div>
                <div className="information text">
                    If you know the weight of your part and the time it would
                    take to print you can use the calculator above to get an 
                    idea of the cost of your part. To get this information you
                    can use a program like "Prusa Slicer" with the default
                    settings to slice your model. This will give you close enough 
                    to get an idea of price.
                </div>
                <div className="future text">
                    I am currently working on a system to upload your file and get
                    all needed information returned. This is a work in progress and 
                    will require some time before I am able to get it completed.
                </div>
                <div className="how-To-Use text">
                    "Weight" will be in grams. <br></br>
                    "Time" will be in hours. <br></br>
                    Leave "Cost Weight" alone unless you know the cost of your preferred
                    material per Kilogram. <br></br>
                    "Cost Time" will change based on which printer and quality you would want.
                </div>
            </div>
        </div>
    );
}

export default LoadPricing