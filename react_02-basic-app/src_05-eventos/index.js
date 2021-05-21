import React from 'react'
import ReactDOM from 'react-dom'

//Componentes Creados
import ContadorApp from './ContadorApp'

//Hojas de Estilos
import './index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp  valor_contador = {0}/>, divRoot);