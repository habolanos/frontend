import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de Estilos
import './index.css'

//Comonentes Creados
import ComponenteApp from './ComponenteApp'

const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp /> , divRoot);