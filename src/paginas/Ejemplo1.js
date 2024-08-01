import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5} from "../componentes/Props";

const nombre2 = 'Laura';
const frutas = ['Manzana', 'Bananas', 'Palta', 'Naranjas'];

const equipos = ['Argentina', 'Colombia', 'Uruguay', 'Canadá'];

const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>Ejemplos de Propiedades</h1>
            {/* este es un componente de una propiedad simple y lo puedo reutilizar*/}
            <EjemploProps1 nombre='Dani'/>
            <EjemploProps1 nombre = {nombre2} />
            {/* listar elementos (array) */}
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={equipos} />
            {/* múltiples propiedades - destructuring */}
            <EjemploProps3 titulo="Hola soy el título" subtitulo='subtítulo bien grande!' cuerpo='soy el contenido de ésta noticia.'/>
            {/* Pueden ser comillas simples ('') o dobles ("") y funciona con ambas! */}
            {/* función */}
            <EjemploProps4 cambiarvalor={mostrarValor} />

            {/* este de abajo no va a funcionar porque sí o sí necesita de cambiarvalor (es el manejador)*/}
            <EjemploProps4 />

            {/* como lo requiere sí o sí podemos pasarle una función vacia */}
            <EjemploProps4 cambiarvalor= {() => {}} />


            <EjemploProps5 eventoClick={mostrarValor} />
            {/* si no le coloqué la props eventoClick no se explotó React a diferencia del Ejemplo4*/}
            <EjemploProps5 />
        </div>
    )
}

export default Ejemplo1;