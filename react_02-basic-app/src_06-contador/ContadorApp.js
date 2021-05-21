import React, {useState} from 'react'
import PropType from 'prop-types'

console.log('Uso de Contadores')

const ContadorApp = ({valor_contador}) => {
    console.log('Funcion Personalizada')

    const [contador, setContador] = useState(valor_contador);

    const myFuncion = () => {
        setContador(contador + 1)
        console.log(contador)
    }

    return (
        <>
        <h1>Contador</h1>
        <h5>Uso de contador y estados</h5>
        <p>{contador}</p>
        <button onClick={myFuncion} >Contador Clicks</button>
        </>
        );
}

export default ContadorApp;