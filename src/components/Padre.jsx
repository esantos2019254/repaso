import { Hijo } from "./Hijo";

export const Padre = () => {
    return (
        <div>
            <h2>Componente Padre</h2>

            <Hijo mensaje="Hola desde el padre" />
        </div>
    );
};