import { useState, useEffect } from "react";

export default function Cursor() {
    // small dot cursor
    const [clientX, setClientX] = useState(-100);
    const [clientY, setClientY] = useState(-100);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setClientX(event.clientX);
            setClientY(event.clientY);
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const render = () => {
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }, []);

    return (
        <div
            className="cursor cursor-small"
            style={{ transform: `translate(${clientX}px, ${clientY}px)` }}
        ></div>
    );
}
