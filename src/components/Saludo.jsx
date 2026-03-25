export const Saludo = (props) => {
    return (
        <div>
            <h2>Hola, soy {props.nombre}</h2>
            <p>Tengo {props.edad} años</p>
        </div>
    );
};