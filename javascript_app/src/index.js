console.log('+-------------------Objetos------------------------+');

const persona = {
    nombre: 'Harold Adrian',
    apellidoPaterno: 'Bolaños', 
    apellidoMaterno: 'Rodriguez', 
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle', 
        numeroVia: '43',
        nombreVia: 'San Pedro', 
        placa: '70a-66', 
        barrio: 'Villa Magna', 
        locacion: 'Sur Oriente',
        comuna: '16'
    }
};

console.table(persona);

let otraPersona01 = {...persona}

otraPersona01.nombre = 'ADRIAN'
otraPersona01.apellidoMaterno = 'Salazar'
otraPersona01.fechaNacimiento = '2009-02-22'

console.log('+-------------------------------------------+');
console.table(persona);
console.table(otraPersona01);

console.log('+--------------------Objetos Dinamicos-----------------------+');

const personaDinamica = {
    nombre: 'Harold Adrian',
    apellidoPaterno: 'Bolaños', 
    apellidoMaterno: 'Rodriguez', 
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle', 
        numeroVia: '43',
        nombreVia: 'San Pedro', 
        placa: '70a-66', 
        barrio: 'Villa Magna', 
        locacion: 'Sur Oriente',
        comuna: '16'
    },
    fxNombreCompleto(){
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
    }, 
    fxTabularAtributos(){
        console.table(this);
    }
};

let obj = Object.create(personaDinamica);
//let obj = {...personaDinamica};

obj.nombre = 'VIVIANA';
obj.apellidoPaterno = 'LOPEZ';
obj.fxNombreCompleto();
obj.fxTabularAtributos();


console.log(obj);

console.log('+--------------- FIN PROGRAMA ---------------+');