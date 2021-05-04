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

class Heroe extends Persona {

    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {

        super(nombre, codigo, frase);

        this.clan = 'Avengers';

    }

    
    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy();
    }

}

const spiderman = new Heroe( 'Peter Parker', 'Spider-man', 'Your friendly neighborhood Spider-man' );
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();