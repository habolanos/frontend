import React from 'react'

const persona = {
    nombre: 'Harold Adrian', 
    apellidos: 'Bolaños Rodriguez', 
    email: 'haroldadrian@gmail.com'
}

// Retorno de Fragmentos HTML
const ComponenteApp = () => {
    return (
        <>
        <h1>Saludo desde React!!!</h1>
        <h5>Retorno de un componente multi linea</h5>
        <p>Es una configuracion estandar para retornar desde un componente</p>
        <p>varias lineas HTML</p>
        <p>{persona.nombre} {persona.apellidos}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
        );
}

export default ComponenteApp;