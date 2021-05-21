import React from 'react'
import PropType from 'prop-types'

console.log('Uso de Contadores y Estados')

const ContadorApp = ({valor_contador}) => {
    console.log('Funcion Personalizada')

    const myFuncion = (e) => {
        console.log(e)
    }

    return (
        <>
        <h1>Contador</h1>
        <h5>Uso de contador y estados</h5>
        <p>{valor_contador}</p>
        <button onClick={myFuncion} >Evento Clicks</button>
        </>
        );
}

export default ContadorApp;