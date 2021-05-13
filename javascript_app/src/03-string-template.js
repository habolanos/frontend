console.log('+-------------------String Template------------------------+');

const apellido = 'Rodriguez';
let nombre = 'Harold Adrian';

let variableNum = 11;

console.log('Señor '+apellido+' su multiplicacion es: '+(variableNum * 7));

let stringTemplate = `STRING TEMPLATE: 
    Señor ${apellido} 
    su multiplicacion es: ${ variableNum * 7 }`;

console.log(stringTemplate);

console.log(`Llamado a una funcion desde String Template ==>> ${fx_randomico('XYZ')}`);

function fx_randomico(parmString) {
    return `Numero Random ${Math.random() * 100} Parametro >>>> ${parmString}`;    
}