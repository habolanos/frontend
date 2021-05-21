import React from 'react'
import PropType from 'prop-types'

console.log('Uso de Contadores y Estados')

const ContadorApp = () => {
    console.log('Funcion Flecha')
    return (
        <>
        <h1>Contador</h1>
        <h5>Uso de contador y estados</h5>
        {/* <p>{contador}</p> */}
        <button onClick={(e) => {console.log(e)}} >Contador Clicks</button>
        </>
        );
}

export default ContadorApp;