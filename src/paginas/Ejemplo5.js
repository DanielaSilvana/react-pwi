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

            {cargando ? <p>Cargando datos...</p> : (

                <div className="personajes">

                    {personajes.map(personaje => (
                        
                    <div className="personaje" key={personaje.id}>
                        <h3>{personaje.id}</h3>
                        <h4>{personaje.name}</h4>
                        <div className="ficha">
                            <div className="foto">
                                <img src={personaje.image} alt={personaje.name} />
                            </div>
                            <div className="datos">
                                <h6>Especie:{personaje.species === 'Human' ? ' Humano' : ' Extraterrestre'}</h6>
                                <h6>Estado: {personaje.status === 'Alive' ? 'Vivo' : 'Muerto'}</h6>
                                {/* op tern */}
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