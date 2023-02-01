import { useEffect, useRef, useState } from "react";

export default function Intro() {
    return (
        <div className="intro-wrapper container">
            <div
                className="scroll-animation">
                    <img className="face-intro" src="faces/face_intro.png"></img>
                </div>
            <div className="intro-upper">
                <div className="intro-text-1">
                    <div>TAN SHENG DA</div>
                </div>
                <div className="intro-text-2">
                    <div>PORTFOLIO</div>
                </div>
            </div>
            <div className="intro-wrapper-end "></div>
        </div>
    )
}