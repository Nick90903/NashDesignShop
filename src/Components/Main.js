import React from "react";
import '../Styles/Main.css';
import RenderHeader from "./Header";

function LoadMain () {
    return (
        <div id="Main">
            <RenderHeader />
            <div className="body">
                <div className="p1">
                    <h2>About Us</h2>
                    <div className="paragraph">
                        <p>We are a small 3D printing and modeling company based
                        in Eastern Wisconsin. We use only the best filaments and
                        custom 3D printers setup specially to provide high quality
                        and high strength parts</p>
                        <p>Our main goal is to provide the best service for people
                        who need small batch, custom, parts. Most of what we do is
                        parts for the FPV and RC community.</p>
                        <p>For some ideas on what we make and the quality we provide
                        check out our <a href="">Gallery</a> and for pricing you can
                        use our pricing calculator <a href="">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadMain