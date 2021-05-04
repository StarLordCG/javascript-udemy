class Persona {

    //  Propiedades

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //  Constructor
    constructor ( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    //  SETS (Establecer un valor) Y GETS (Recuperar un valor)

    set setComidaFavorita ( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    //  Método
    quienSoy () {
        console.log(`Soy ${ this.nombre } y mi personaje es ${ this.codigo }`);
    }

    miFrase () {
        this.quienSoy(); // Inserción de un método
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

}

const spiderman = new Persona( 'Peter Parker', 'Spider-man', 'Your friendly neighborhood Spider-man' );
const ironman = new Persona( 'Tony Stark', 'Iron Man', 'I am Iron Man' );



spiderman.miFrase();

spiderman.setComidaFavorita = 'Hamburguesa';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);

// Persona._conteo = 2;

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje()