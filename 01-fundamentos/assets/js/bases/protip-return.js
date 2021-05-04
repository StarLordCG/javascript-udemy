// function crearPersona(nombre, apellido) {
//     return{
//         nombre,
//         apellido,
//     }    
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Rafael', 'Castellanos');
console.log(persona);

const imprimeArgumentos = ( edad, ...args ) => {
    // console.log( args );
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos(10, true, false, 'Rafael', 'Hello');
console.log({casado, vivo, nombre, saludo});