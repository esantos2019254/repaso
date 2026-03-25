import { useRef } from "react";

export const Referencia = () => {
    const inputRef = useRef();

    const enfocarInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef ejemplo</h2>

            <input ref={inputRef} placeholder="Escribe algo..." />

            <button onClick={enfocarInput}>
                Enfocar input
            </button>
        </div>
    );
};