import { useState, useEffect } from "react";

export default function Intro() {
    const [scale, setScale] = useState(0.65);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                //   setScale(0.7 - (window.scrollY - 500) / 1000);
                let newScale = 0.7 - (window.scrollY - 1000) / 1000;
                if (newScale < 0) newScale = 0;
                setScale(newScale);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="intro-wrapper container">
            <div className="face-intro-wrapper">
                <img
                    className="face-intro"
                    src="images/faces/face_intro.png"
                    style={{ transform: `scale(${scale})` }}
                ></img>
            </div>
            <div className="intro-upper">
                <div className="intro-text-1">
                    <div>TAN SHENG DA</div>
                </div>
                <div className="intro-text-2">
                    <div>PORTFOLIO</div>
                </div>
                <div className="intro-arrow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100%"
                        height="100%"
                        viewBox="0 20 100 60"
                    >
                        <path
                            d="M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z"
                            transform=" matrix(1 0 0 1 0 0) "
                            fill="var(--text-primary)"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
