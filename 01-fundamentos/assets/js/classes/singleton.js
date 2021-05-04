class Singleton {

    static instancia;   //  undefined
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }

}

const instancia1 = new Singleton('Iron Man');
const instancia2 = new Singleton('Spider-man');
const instancia3 = new Singleton('Thor');

console.log(`Nombre de la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre de la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre de la instancia3 es: ${ instancia3.nombre }`);