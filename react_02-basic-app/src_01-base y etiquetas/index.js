import React from 'react'
import ReactDOM from 'react-dom'

//Componentes Creados
import ComponenteApp from './ComponenteApp'

//Hojas de Estilos
import './index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp valor_01='Valor-->01' valor_02='Valor-->02' valor_03='Valor-->03'/>, divRoot);