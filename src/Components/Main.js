import React from "react";
import '../Styles/Main.css';

function LoadMain () {
    return (
        <div id="Main">
            <header>
                <div className="left">
                    <div id="NDS">Nash Design Shop</div>
                </div>
                <div className="gallery nav">Gallery</div>
                <div className="pricing nav">Pricing</div>
                <div className="contact nav">Contact Us</div>
            </header>
        </div>
    );
}

export default LoadMain