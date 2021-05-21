import React, {useState} from 'react'
import PropType from 'prop-types'

console.log('Uso de Contadores + Otras Acciones')

const ContadorApp = ({valor_contador}) => {
    console.log('Funcion Personalizada')

    const [contador, setContador] = useState(valor_contador);

    const funcionSUMA = () => {
        console.log('funcionSUMA');
        setContador(contador + 1)
        console.log(contador)
    }

    const funcionRESET = () => {
        console.log('funcionRESET');
        setContador(0)
        console.log(contador)
    }

    const funcionRESTA = () => {
        console.log('funcionRESTA');
        setContador(contador - 1);
        console.log(contador);
    }

    return (
        <>
        <h1>Contador</h1>
        <h5>Uso de contador y estados</h5>
        <p>{contador}</p>
        <button onClick={funcionSUMA} >Contador + SUMA </button>
        <button onClick={funcionRESET} >.: Reset :.</button>
        <button onClick={funcionRESTA} >Contador - RESTA </button>
        </>
        );
}

export default ContadorApp;