import React from 'react'
import PropType from 'prop-types'

console.log('Uso de props')

const persona = {
    nombre: 'Harold Adrian', 
    apellidos: 'Bolaños Rodriguez', 
    email: 'haroldadrian@gmail.com'
}

// Retorno de Fragmentos HTML
//const ComponenteApp = ( props ) => {
const ComponenteApp = ( { parm_01, parm_02 } ) => {

    return (
        <>
        <h1>Saludo desde React!!!</h1>
        <h5>Retorno de un componente multi linea</h5>
        <p>Es una configuracion estandar para retornar desde un componente</p>
        <p>varias lineas HTML</p>
        <p>{persona.nombre} {persona.apellidos}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        <h5>Paso de argumentos:</h5>
        <p>Parametro 01: {parm_01}</p>
        <p>Parametro 02: {parm_02}</p>
        </>
        );
}

//Definicion de comportamiento de props
ComponenteApp.propType = {
    parm_01: PropType.string, 
    parm_02: PropType.number, 
}

ComponenteApp.defaultProps = {
    parm_01: 'PARAMETRO VACIO',
    parm_02: 99999
}

export default ComponenteApp;