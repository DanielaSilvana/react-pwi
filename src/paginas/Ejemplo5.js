import '../estilos/ejemplo5.css';
import { useEffect, useState } from 'react';

const DatosApi = (props) => {

    const [cargando, setCargando] = useState(false);
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {

        const cargarDatos = async () => {
            setCargando(true);
            const res = await (await fetch('https://rickandmortyapi.com/api/character')).json();
            setPersonajes(res.results);
            setCargando(false);
        }
        //fetch para poder traer datos nativos de JS, y otros ej pueden ver que tmb se utiliza axios(peticiones)
        cargarDatos();

    }, []);

    return (
        <>
            <h1>Carga de datos a través de una API</h1>

            {cargando ? <p>Cargando...</p> : (
                <div className="personajes">

                    {personajes.map(personaje => (
                    <div className="personaje">
                        <h4>Nombre PERSONAJE</h4>
                        <div className="ficha">
                            <div className="foto">
                                <img src="https://fakeimg.pl/150x100" alt="" />
                            </div>
                            <div className="datos">
                                <h6>Especie: HUMANO o NO</h6>
                                <h6>Vivo: SI O NO</h6>
                            </div>
                        </div>
                    </div>
                    ))} {/*cierre línea 30*/}
                    



                </div>
             )} {/*cierre línea 26*/}
        </>
    )

}

export default DatosApi;