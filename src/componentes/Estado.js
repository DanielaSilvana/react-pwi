import { useState } from "react";
import '../estilos/estado.css';

function EjemploEstado(props) {

    //console.log(counter)

    const [counter, setCounter] = useState(0);

    return (
        <div className="contenedor">
            <div className="counter">
                <h3>Contador: {counter} </h3>
            </div>
            <div className="botones">
                <button className="error" onClick={() => setCounter(counter - 1)}> - </button>
                <button className="success" onClick={() => setCounter(counter + 1)}> + </button>
            </div>
        </div>
    )

}

export { EjemploEstado }