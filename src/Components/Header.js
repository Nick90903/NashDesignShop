import React from "react";
import '../Styles/Header.css'

function RenderHeader () {
    return (
        <header>
            <div id="navbar">
                <div className="left">
                    <div id="NDS">NaSH</div>
                </div>
                <div className="right">
                    <div className="gallery nav">Gallery</div>
                    <div className="pricing nav">Pricing</div>
                    <div className="contact nav">Contact Us</div>
                </div>
            </div>
        </header>
    );
}

export default RenderHeader