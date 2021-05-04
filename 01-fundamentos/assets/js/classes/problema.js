const rcast = {
    nombre: 'Rafael',
    edad: 20,
    imprimir(){
        console.log(`Nombre: ${ this.nombre }` );
    }
}

// rcast.imprimir();

function Persona( nombre, edad ) {

    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;
    
}

const maria = new Persona('María', 18);
console.log(maria);