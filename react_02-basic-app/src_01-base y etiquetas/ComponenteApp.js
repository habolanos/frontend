import React from 'react'

const persona = {
    nombre: 'Harold Adrian', 
    apellidos: 'Bolaños Rodriguez', 
    email: 'haroldadrian@gmail.com'
}

// Retorno de Fragmentos HTML
//const ComponenteApp = ( props ) => {
const ComponenteApp = ( {valor_03} ) => {
    console.log('Componente == ComponenteApp');
    //console.log(props);
    return (
        <>
        <h1>Saludo desde React!!!</h1>
        <h5>Retorno de un componente multi linea</h5>
        <p>Es una configuracion estandar para retornar desde un componente</p>
        <p>varias lineas HTML</p>
        <p>{persona.nombre} {persona.apellidos}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        <h5>Paso de argumentos:</h5>
        {/* <p>{props.valor_01}</p>
        <p>{props.valor_02}</p> */}
        <p>{valor_03}</p>
        </>
        );
}

export default ComponenteApp;