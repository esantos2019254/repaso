/*import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Contador: {contador}</h2>

            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>

            <button onClick={() => setContador(contador - 1)}>
                Disminuir
            </button>
        </div>
    );
};*/

export const Contador = () => {
    let contador = 0

    return (
        <div>
            <h2>Contador: {contador}</h2>

            <button onClick={() => console.log(contador + 1)}>
                Incrementar
            </button>

            <button onClick={() => console.log(contador - 1)}>
                Disminuir
            </button>
        </div>
    );
}

/*export const Contador = () => {
    let contador = 0

    return (
        <div>
            <h2>Contador: {contador}</h2>

            <button onClick={() => console.log(contador + 1)}>
                Incrementar
            </button>

            <button onClick={() => console.log(contador - 1)}>
                Disminuir
            </button>
        </div>
    );
}*/

/*import { useState } from "react";

export const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Contador: {contador}</h2>

            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>

            <button onClick={() => setContador(contador - 1)}>
                Disminuir
            </button>
        </div>
    );
};*/
